import type { Product } from "../../services/product.service";

/**
 * Props for the Product Card component.
 */
export interface CardProps {
  /**
   * Product data to display in the card.
   */
  product: Product;

  /**
   * Currently selected product (if any).
   * Used to visually indicate selection state.
   */
  selected: Product | null;

  /**
   * Click handler to select the product.
   */
  onClick: () => void;
}

/**
 * Props for the FooterSelector component.
 */
export interface FooterSelectorProps {
  /**
   * The product currently selected by the user.
   */
  product: Product | null;
}
