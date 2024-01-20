export default interface ICarouselData {
  _id?: string;
  title?: string;
  description?: string;
  media: string;
  action?: string;
  type?: "image" | "youtube";
  location?: "main" | "company" | "highlights";
  companyId?: string;
  published?: boolean;
  order?: number;
}
