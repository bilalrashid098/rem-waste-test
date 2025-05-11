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
      <div className="flex sm:flex-row flex-col items-center justify-between max-w-6xl mx-auto">
        {/* Show selected product summary if available */}
        {product && (
          <div className="flex items-center mb-3 sm:mb-0">
            <span className="order-1">{product.size} Yard Skip</span>
            <span className="sm:mx-5 text-3xl sm:text-4xl font-bold order-last sm:order-2">
              £{product.price_before_vat}
            </span>
            <span className="order-3 sm:m-0 me-4 ms-3">{product.hire_period_days} day hire</span>
          </div>
        )}

        {/* Navigation Buttons */}
        <div className="flex items-center sm:w-fit w-full">
          <Button
            className="px-7 sm:w-fit w-full"
            wrapperClassName="sm:w-fit w-full me-3"
            variant="outline"
          >
            Back
          </Button>
          <Button
            color="dark"
            className="px-4 sm:w-fit w-full"
            wrapperClassName="sm:w-fit w-full"
          >
            Continue
            <IoIosArrowRoundForward className="w-6 h-6 ms-2" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FooterSelector;
