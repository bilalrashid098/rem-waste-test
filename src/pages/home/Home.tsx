import { useEffect, useState } from "react";
import type { Product } from "../../services/product.service";
import productService from "../../services/product.service";
import { Stepper } from "../../components/stepper";
import { ProductCard } from "../../components/products";
import { Spinner } from "../../components/spinner";
import { LuCreditCard, LuMapPin, LuShield } from "react-icons/lu";
import { FaRegTrashAlt } from "react-icons/fa";
import { FiTruck } from "react-icons/fi";
import { IoCalendarClearOutline } from "react-icons/io5";

/**
 * Home component serves as the landing page for the shop.
 * It handles the navigation through different steps and fetches product data based on location.
 */
const Home = () => {
  // Define the steps for the stepper component
  const steps = [
    { title: "Postcode", icon: <LuMapPin /> },
    { title: "Waste Type", icon: <FaRegTrashAlt /> },
    { title: "Select Skip", icon: <FiTruck /> },
    { title: "Permit Check", icon: <LuShield /> },
    { title: "Choose Date", icon: <IoCalendarClearOutline /> },
    { title: "Payment", icon: <LuCreditCard /> },
  ];

  // State variables to manage the current step, products, loading state, and error messages
  const [current] = useState<number>(2);
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  /**
   * Fetches product data based on the user's location.
   * The location is hardcoded for the demo, but this could be dynamically set.
   */
  const fetchProductsByLocation = () => {
    setLoading(true);
    const payload = {
      postcode: "NR32",
      area: "Lowestoft",
    };

    // API call to fetch products based on location
    productService
      .getProductsByLocation(payload)
      .then((data) => setProducts(data)) // On success, store products in the state
      .catch((error) => setError(error)) // On failure, set error message
      .finally(() => setLoading(false)); // Set loading to false after the API call completes
  };

  useEffect(() => {
    fetchProductsByLocation(); // Trigger the product fetch
  }, []);

  return (
    <div className="min-h-screen">
      {/* Stepper Component */}
      <Stepper current={current} steps={steps} />
      {/* Header Section */}
      <header className="text-center py-10 px-4">
        <h1 className="text-4xl font-bold mb-2">Welcome to Our Shop</h1>
        <p className="text-lg">
          Follow the steps below to find and order your favorite items
        </p>
      </header>
      {/* Display Spinner While Loading */}
      {loading && (
        <div className="flex items-center justify-center h-[20rem]">
          <Spinner size={7} />{" "}
        </div>
      )}
      {/* Products Section */}
      <section className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {/* Error Message Display */}
        {error && (
          <div className="bg-red-100 text-red-700 px-4 py-2 rounded-md">
            <p>
              <strong>Error:</strong> {error}{" "}
            </p>
          </div>
        )}

        {/* Conditional Rendering of Product Cards */}
        {!loading &&
          products.length > 0 &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </section>
    </div>
  );
};

export default Home;
