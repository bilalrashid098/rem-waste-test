import { ProductCardShimmer } from "../../../components/shimmer";
import type { ProductLoaderProps } from "./type";

/**
 * ProductLoader Component
 *
 * Renders a dynamic number of shimmer placeholder cards to visually indicate a loading state.
 * Useful while awaiting product data from asynchronous API calls.
 *
 * @param {ProductLoaderProps} props - Props containing the number of shimmer cards to render.
 * @param {number} props.length - Number of shimmer cards to render (defaults to 10).
 *
 * @returns {JSX.Element} A list of shimmer placeholder components representing product cards.
 */
const ProductLoader = ({ length = 10 }: ProductLoaderProps) => {
  return (
    <>
      {/* Render shimmer placeholders for product cards during loading.
          The 'length' prop controls how many placeholders to generate. */}
      {Array.from({ length }).map((_, index) => (
        <ProductCardShimmer key={index} />
      ))}
    </>
  );
};

export default ProductLoader;
