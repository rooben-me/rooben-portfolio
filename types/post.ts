export interface IPost {
  slug: string;
  date: string;
  thumbnail: string;
  thumbnailBanner: string;
  title: string;
  description: string;
  roles: string[];
  draft: boolean;
  section: "projects" | "adventure" | "research";
}
