const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'https://mapi.sadaivsatya.com/Api/AdminApi/';
const MEDIA_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'https://mapi.sadaivsatya.com';

export interface WebStory {
    id: number;
    storyTitle: string;
    storySlug: string;
    category: string;
    thumbnail: string;
    viewCount: number;
    publishedDate: string;
    slideCount: number;
}

export interface Slide {
    id: number;
    webStoryId: number;
    title: string;
    description: string;
    mediaUrl: string;
    thumbnailUrl: string;
    mediaType: string;
    dataType: string;
    sortOrder: number;
    createdDate: string;
}

export interface FullWebStory extends WebStory {
    slides: Slide[];
}

interface StoriesResponse {
    success: boolean;
    stories: WebStory[];
    totalItems: number;
    totalPages: number;
    currentPage: number;
}

interface SlidesResponse {
    success: boolean;
    slides: Slide[];
    message: string;
}

export async function getWebStories(page: number = 1, pageSize: number = 12): Promise<WebStory[]> {
    try {
        const url = `${API_BASE_URL}GetWebStories?pagesize=${pageSize}&page=${page}`;

        const res = await fetch(url, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            next: { revalidate: 60 }
        });

        if (!res.ok) {
            console.error('API Error:', res.status, res.statusText);
            return [];
        }

        const data: StoriesResponse = await res.json();

        if (!data.success || !data.stories) {
            return [];
        }

        return data.stories;
    } catch (error) {
        console.error('Fetch error:', error);
        return [];
    }
}

/**
 * Get slides for a specific story - DYNAMIC VERSION
 */
export async function getStorySlides(storyId: number): Promise<Slide[]> {
    try {
        const url = `${API_BASE_URL}GetStorySlides/${storyId}`;

        const res = await fetch(url, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            next: { revalidate: 60 }
        });

        if (!res.ok) {
            console.error(`Slides API Error for story ${storyId}:`, res.status);
            return [];
        }

        const data: SlidesResponse = await res.json();

        if (!data.success || !data.slides) {
            return [];
        }

        return data.slides.sort((a, b) => a.sortOrder - b.sortOrder);
    } catch (error) {
        console.error('Slides fetch error:', error);
        return [];
    }
}

export async function getWebStoryBySlug(slug: string): Promise<FullWebStory | null> {
    try {
        const url = `${API_BASE_URL}GetWebStories?pagesize=100&page=1`;

        const res = await fetch(url, {
            next: { revalidate: 60 }
        });

        if (!res.ok) return null;

        const data: StoriesResponse = await res.json();
        const allStories = data.stories || [];

        let story = allStories.find(s => s.storySlug === slug);

        if (!story) {
            const decodedSlug = decodeURIComponent(slug);
            story = allStories.find(s => s.storySlug === decodedSlug);
        }

        if (!story) {
            const formattedSlug = formatStorySlug(slug);
            story = allStories.find(s => formatStorySlug(s.storySlug) === formattedSlug);
        }

        if (!story) {
            return null;
        }

        const slides = await getStorySlides(story.id);

        const finalSlides = slides.length > 0
            ? slides
            : [{
                id: 1,
                webStoryId: story.id,
                title: story.storyTitle,
                description: story.storyTitle,
                mediaUrl: story.thumbnail,
                thumbnailUrl: story.thumbnail,
                mediaType: 'image',
                dataType: 'IMAGE',
                sortOrder: 1,
                createdDate: story.publishedDate
            }];

        return {
            ...story,
            slides: finalSlides,
        };

    } catch (error) {
        console.error('Error fetching story:', error);
        return null;
    }
}

export async function getAllStorySlugs(): Promise<Array<{ category: string; slug: string }>> {
    try {
        const stories = await getWebStories(1, 100);

        return stories.map((story) => {
            const categorySlug = formatCategorySlug(story.category);
            const storySlug = formatStorySlug(story.storySlug);

            return {
                category: categorySlug,
                slug: storySlug
            };
        });
    } catch (error) {
        console.error('Error getting story slugs:', error);
        return [];
    }
}

export function formatCategorySlug(category: string): string {
    if (!category) return 'uncategorized';

    return category
        .toLowerCase()
        .trim()
        .normalize('NFD') // Handle Unicode characters
        .replace(/[\u0300-\u036f]/g, '') // Remove diacritics
        .replace(/\s+/g, '-')
        .replace(/[^\w\-]/g, '')
        .replace(/-+/g, '-')
        .replace(/^-|-$/g, '');
}

export function formatStorySlug(slug: string): string {
    if (!slug) return '';

    return slug
        .trim()
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/\s+/g, '-')
        .replace(/[^\w\-]/g, '')
        .replace(/-+/g, '-')
        .replace(/^-|-$/g, '');
}

export function getImageUrl(path: string): string {
    if (!path) return '/images/placeholder.jpg';
    if (path.startsWith('http')) return path;
    return `${MEDIA_BASE_URL}${path}`;
}

export async function getStoriesByCategory(category: string, limit: number = 4): Promise<WebStory[]> {
    try {
        const allStories = await getWebStories(1, 100);

        const formattedCategory = formatCategorySlug(category);

        return allStories
            .filter(story =>
                formatCategorySlug(story.category) === formattedCategory
            )
            .slice(0, limit);
    } catch {
        return [];
    }
}

export async function getWebStoryById(id: number): Promise<FullWebStory | null> {
    try {
        // Try to get from all stories first
        const stories = await getWebStories(1, 100);
        const story = stories.find(s => s.id === id);

        if (!story) return null;

        const slides = await getStorySlides(id);

        return {
            ...story,
            slides: slides.length > 0 ? slides : [{
                id: 1,
                webStoryId: id,
                title: story.storyTitle,
                description: story.storyTitle,
                mediaUrl: story.thumbnail,
                thumbnailUrl: story.thumbnail,
                mediaType: 'image',
                dataType: 'IMAGE',
                sortOrder: 1,
                createdDate: story.publishedDate
            }]
        };
    } catch (error) {
        console.error('Error fetching story by ID:', error);
        return null;
    }
}

export async function searchWebStories(query: string, limit: number = 10): Promise<WebStory[]> {
    try {
        const stories = await getWebStories(1, 100);
        const searchTerm = query.toLowerCase();

        return stories
            .filter(story =>
                story.storyTitle.toLowerCase().includes(searchTerm) ||
                story.category.toLowerCase().includes(searchTerm)
            )
            .slice(0, limit);
    } catch {
        return [];
    }
}