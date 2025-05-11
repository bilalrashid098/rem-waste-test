import { ProductCardShimmer } from "../../../components/shimmer";

const ProductLoader = () => {
  return (
    <>
      {Array.from({ length: 10 }).map((_, index) => {
        return <ProductCardShimmer key={index} />;
      })}
    </>
  );
};

export default ProductLoader;
