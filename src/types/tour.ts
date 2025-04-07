export interface Tour {
  _id: string;
  type: string;
  city: string;
  include: string;
  duration: string;
  price: number;
  title_en: string;
  content_en: string;
  description_en: string;
  title_pl:string;
  content_pl:string;
  description_pl:string;
  image_url?: string;
  imageUrls: string[];
}
export interface Filter {
  type?: string;
  city?: string;
  include?: string;
  duration?: string;
  price?: string;
}

export interface CardProps {
  title: string;
  city: string;
  content: string;
  price: number;
  imageUrl: string;
  description_en?: string;
  _id: string;
}

export interface Excursion {
    _id: string;
    type: string;
    city: string;
    include: string;
    duration: string;
    price: number;
    timing: string;
    title_en: string;
    content_en: string;
    title_pl:string;
    content_pl:string;
    imageUrls: string[];
    description_en: string;
  }

export interface SimilarExcursions{
  _id: string;
  imageUrls: string[];
  duration: string;
  price: number;
  title_en: string;
  title_pl: string;
}
  
export interface ExcursionResponse {
    message: string;
    data: Excursion[];
    excursionsWithSimilar: SimilarExcursions[];
  }
  
export interface UseGetToursParams {
    type?: string;
    city?: string;
    include?: string;
    duration?: string;
    price?: string;
    _id?: string;
    [key: string]: string | undefined;
  }

