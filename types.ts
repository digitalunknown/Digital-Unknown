
export interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  imageUrl: string;
  images: string[];
  tags: string[];
  year: string;
  platforms: string[];
  type: 'Work' | 'Side Projects';
}

export enum NavLink {
  HOME = 'home',
  WORK = 'work',
  SPARE = 'spare-parts',
  ABOUT = 'about',
  FIELD_NOTES = 'field-notes',
}
