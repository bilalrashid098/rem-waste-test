import ProductImage from "../../assets/images/demo.jpg";
import { Button } from "../buttons";
import type { CardProps } from "./type";

/**
 * Card Component
 *
 * Renders a product card displaying basic product details like size, price, VAT, and hire period.
 * Includes a demo image (as the API does not provide product images), a call-to-action button,
 * and a visual indicator for whether the product is allowed on the road.
 *
 * @component
 * @param {CardProps} props - Component props
 * @param {Product} props.product - Product object containing details to be rendered
 *
 */
const Card = ({ product }: CardProps) => {
  return (
    <div key={product.id} className="bg-gray-900 shadow-md rounded-lg p-4">
      <img
        src={ProductImage} // Using placeholder image as API response does not include image URL
        alt={`Product ${product.id}`}
        className="w-full h-48 object-cover rounded-md"
      />

      <h2 className="text-xl font-semibold mt-4">{`Size: ${product.size}m³`}</h2>
      <p className="text-gray-600">
        Price before VAT: £{product.price_before_vat}
      </p>
      <p className="text-gray-600">VAT: {product.vat}%</p>
      <p className="text-gray-600">
        Hire Period: {product.hire_period_days} days
      </p>

      <div className="mt-4 flex justify-between items-center">
        <Button
          className="bg-blue-500 text-white rounded-md"
          onClick={() => alert(`Product ${product.id} added to cart`)} // Replace with your CTA logic
        >
          Add to Cart
        </Button>

        <span
          className={`text-sm ${
            product.allowed_on_road ? "text-green-500" : "text-red-500"
          }`}
        >
          {product.allowed_on_road ? "Allowed on road" : "Not allowed on road"}
        </span>
      </div>
    </div>
  );
};

export default Card;
