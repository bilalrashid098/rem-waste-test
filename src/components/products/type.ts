import type { Product } from "../../services/product.service";

/**
 * Props for the Card component
 */
export interface CardProps {
  /**
   * The product object containing all relevant product information.
   */
  product: Product;
}
