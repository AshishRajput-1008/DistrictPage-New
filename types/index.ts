// types.ts

export interface NewsArticle {
  newsId: number;
  newsHeading: string;
  newsTag: string;
  newsCategory: string;
  newsSubCategory?: string;
  subCatNameInHindi: string
  thumbnail: string;
  updatedDate: string;
  newsSlug: string;
  catNameInHindi: string;
  viewCount: number;
  dataType: string
}

export interface NewsArticle2 {
  ID: number;
  NewsHeading: string;
  NewsTag: string;
  ThumbNail: string;
  UpdatedDate: string;
  Slug: string;
  DataType: string;
  DistrictName: string;
  DistrictNameInHindi: string;
  StateName: string;
  ViewCount: number;
}


export interface Category {
  id: string;
  name: string;
  slug: string;
  created_at: string;
}

export interface Author {
  id: string;
  name: string;
  created_at: string;
}
