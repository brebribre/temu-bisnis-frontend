export interface Business {
  _id?: string;
  name: string;
  description?: string;
  location: string;
  sector: string;
  image_url?: string;
  min?: number;
  max?: number;
  revenue_range?: number[];
  selling_price: number;
}
