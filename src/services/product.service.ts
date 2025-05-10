import axios from "../lib/axios";

export interface Product {
  id: number;
  size: number;
  hire_period_days: number;
  transport_cost: number | null;
  per_tonne_cost: number | null;
  price_before_vat: number;
  vat: number;
  postcode: string;
  area: string;
  forbidden: boolean;
  created_at: string;
  updated_at: string;
  allowed_on_road: boolean;
  allows_heavy_waste: boolean;
}

export interface ProductLocationParams {
  postcode: string;
  area: string;
}

class ProductService {
  // Fetch all products
  async getAllProducts(): Promise<Product[] | null> {
    const response = await axios.get<Product[]>(`/skips`);
    if (!response.data) return null;

    return response.data;
  }

  // Fetch all products by location
  async getProductsByLocation(
    params: ProductLocationParams
  ): Promise<Product[]> {
    const { postcode, area } = params;
    const response = await axios.get<Product[]>(
      `/skips/by-location?postcode=${postcode}&area=${area}`
    );

    if (!response) return [];
    return response.data;
  }
}

export default new ProductService();
