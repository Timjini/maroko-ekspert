export interface Tour {
  _id: string;
  type: string;
  city: string;
  include: string;
  duration: string;
  price: number;
  title_en: string;
  content_en: string;
  image_url?: string;
  description_en: string;
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
    title_pl: string;
    content_en: string;
    imageUrls: string[];
    description_en: string;
  }
  
export interface ExcursionResponse {
    message: string;
    data: Excursion[];
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

