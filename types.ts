
export interface EventItem {
  id: string;
  title: string;
  date: string;
  description: string;
  category: 'Puja' | 'Cultural' | 'Community';
  image: string;
  imagePosition?: string;
}

export interface GalleryImage {
  id: string;
  url: string;
  caption: string;
  category: string;
}

export interface Sponsor {
  id: string;
  name: string;
  logo: string;
}