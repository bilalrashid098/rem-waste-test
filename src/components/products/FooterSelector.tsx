import { IoIosArrowRoundForward } from "react-icons/io";
import { Button } from "../buttons";
import type { FooterSelectorProps } from "./type";

/**
 * FooterSelector Component
 *
 * Displays a sticky footer with selected product details and navigation buttons.
 * This component appears only when a product is selected.
 */
const FooterSelector = ({ product }: FooterSelectorProps) => {
  return (
    <div
      className={`bg-[#3b5af9] backdrop-blur-md shadow-md transition-all ease-in-out fixed left-0 w-full p-4 ${
        product ? "bottom-0" : "bottom-[-12.5rem]"
      }`}
    >
      <div className="flex items-center justify-between max-w-6xl mx-auto">
        {/* Show selected product summary if available */}
        {product && (
          <div className="flex items-center">
            <span>{product.size} Yard Skip</span>
            <span className="mx-5 text-4xl font-bold">
              £{product.price_before_vat}
            </span>
            <span>{product.hire_period_days} day hire</span>
          </div>
        )}

        {/* Navigation Buttons */}
        <div className="flex items-center">
          <Button className="me-3 px-7" variant="outline">
            Back
          </Button>
          <Button color="dark" className="px-4">
            Continue
            <IoIosArrowRoundForward className="w-6 h-6 ms-2" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FooterSelector;
