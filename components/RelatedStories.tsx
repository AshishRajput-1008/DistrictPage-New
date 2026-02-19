import Link from 'next/link';
import Image from 'next/image';
import { getStoriesByCategory, formatCategorySlug, getImageUrl } from '@/lib/api';

interface RelatedStoriesProps {
    currentStoryId: number;
    category: string;
}

export default async function RelatedStories({ currentStoryId, category }: RelatedStoriesProps) {
    const relatedStories = await getStoriesByCategory(category, 4);
    
    // Filter out current story
    const filteredStories = relatedStories.filter(story => story.id !== currentStoryId);
    
    if (filteredStories.length === 0) {
        return null;
    }

    return (
        <div className="py-8">
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-500 text-gray-900">More {category} Stories</h2>
                <Link 
                    href="/web-stories" 
                    className="text-blue-600 hover:text-blue-800 font-medium text-sm"
                >
                    View All →
                </Link>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {filteredStories.map((story) => {
                    const categorySlug = formatCategorySlug(story.category);
                    const storyUrl = `/web-stories/${categorySlug}/${story.storySlug}`;
                    
                    return (
                        <Link 
                            key={story.id} 
                            href={storyUrl}
                            className="block group"
                        >
                            <div className="relative overflow-hidden rounded-lg aspect-[4/5] bg-gray-100">
                                <Image
                                    src={getImageUrl(story.thumbnail)}
                                    alt={story.storyTitle}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                                    sizes="(max-width: 768px) 50vw, 25vw"
                                    unoptimized
                                />
                                
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                                
                                <div className="absolute top-3 left-3">
                                    <span className="bg-black/80 text-white text-xs px-2 py-1 rounded font-500">
                                        Web Story
                                    </span>
                                </div>
                                
                                <div className="absolute bottom-0 left-0 right-0 p-4">
                                    <h3 className="font-500 text-white text-sm line-clamp-2 mb-2">
                                        {story.storyTitle}
                                    </h3>
                                    
                                    <div className="flex justify-between items-center">
                                        <span className="text-white/80 text-xs bg-white/20 px-2 py-1 rounded">
                                            {story.category}
                                        </span>
                                        <span className="text-white/80 text-xs">
                                            {story.slideCount} slides
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
}