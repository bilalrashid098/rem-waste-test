import { GoAlertFill } from "react-icons/go";
import ProductImage from "../../assets/images/demo.jpg";
import { Button } from "../buttons";
import type { CardProps } from "./type";
import { IoIosArrowRoundForward } from "react-icons/io";

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
 * @param {Selected} props.selected - Product object containing select product details
 * @param {onClick} props.onClick - Callback function on product selection
 *
 */
const Card = ({ product, selected, onClick }: CardProps) => {
  const isSelected = product.id === selected?.id;
  return (
    <div
      className={`bg-white/10 backdrop-blur-md shadow-md rounded-lg p-4 border relative hover:bg-white/15 transition-all ease-in-out flex flex-col ${
        isSelected
          ? "border-secondary"
          : "border-white/20 hover:border-white/30"
      }`}
    >
      {product.allowed_on_road && (
        <div
          className={`text-sm p-3 bg-[#DCA725]/10 text-[#DCA725] flex items-center justify-center rounded-md mb-3`}
        >
          <GoAlertFill className="w-5 h-5 me-3" />
          Not allowed on road
        </div>
      )}
      <div className="relative">
        <img
          src={ProductImage}
          alt={`Product ${product.id}`}
          className="w-full h-48 object-cover rounded-md"
        />
        <span
          className={`${
            isSelected ? "bg-secondary" : "bg-primary"
          } font-semibold px-4 py-1 rounded-full text-sm absolute right-2 top-3`}
        >
          {product.size} Yards
        </span>
      </div>

      <div className="grow">
        <h2 className="text-xl font-semibold my-3">{`${product.size} Yard Skip`}</h2>
        <p className="text-gray-300 flex items-center justify-between text-sm mb-2">
          <span>Price before VAT:</span>
          <span className="text-xl text-white font-bold">
            £{product.price_before_vat}
          </span>
        </p>
        <p className="text-gray-300 flex items-center justify-between text-sm mb-2">
          <span>VAT:</span>
          <span>{product.vat}%</span>
        </p>
        <p className="text-gray-300 flex items-center justify-between text-sm mb-2">
          <span>Hire Period:</span>
          <span>{product.hire_period_days} days</span>
        </p>
      </div>

      <Button
        className="mt-4 w-full"
        color={isSelected ? "secondary" : "primary"}
        onClick={onClick}
      >
        {isSelected ? "Selected" : "Select this skip"}
        {!isSelected && <IoIosArrowRoundForward className="w-6 h-6 ms-2" />}
      </Button>
    </div>
  );
};

export default Card;
