import { useEffect, useState } from "react";
import type { Product } from "../../services/product.service";
import productService from "../../services/product.service";
import { Stepper } from "../../components/stepper";
import { FooterSelector, ProductCard } from "../../components/products";
import { Spinner } from "../../components/spinner";
import { LuCreditCard, LuMapPin, LuShield } from "react-icons/lu";
import { FaRegTrashAlt } from "react-icons/fa";
import { FiTruck } from "react-icons/fi";
import { IoCalendarClearOutline } from "react-icons/io5";

/**
 * Home component – displays step-based UI for selecting and purchasing skip bins.
 * Fetches product data based on location and allows users to select a product.
 */
const Home = () => {
  // Define steps for the booking process with associated icons
  const steps = [
    { title: "Postcode", icon: <LuMapPin /> },
    { title: "Waste Type", icon: <FaRegTrashAlt /> },
    { title: "Select Skip", icon: <FiTruck /> },
    { title: "Permit Check", icon: <LuShield /> },
    { title: "Choose Date", icon: <IoCalendarClearOutline /> },
    { title: "Payment", icon: <LuCreditCard /> },
  ];

  // State management
  const [current] = useState<number>(2); // Hardcoded current step (e.g., "Select Skip")
  const [selected, setSelected] = useState<Product | null>(null); // Currently selected product
  const [products, setProducts] = useState<Product[]>([]); // List of products fetched
  const [loading, setLoading] = useState<boolean>(true); // Loading state
  const [error, setError] = useState<string | null>(null); // Error message

  /**
   * Fetch product data based on static location.
   * This could be dynamic depending on the application context.
   */
  const fetchProductsByLocation = () => {
    setLoading(true);
    const payload = {
      postcode: "NR32",
      area: "Lowestoft",
    };

    productService
      .getProductsByLocation(payload)
      .then((data) => setProducts(data))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  };

  // Fetch products on initial render
  useEffect(() => {
    fetchProductsByLocation();
  }, []);

  return (
    <div className="min-h-screen relative pb-20">
      {/* Stepper Navigation */}
      <Stepper current={current} steps={steps} />

      {/* Page Heading */}
      <header className="text-center py-10 px-4">
        <h1 className="text-4xl font-bold mb-2">Choose Your Skip Size</h1>
        <p className="text-lg text-gray-500">
          Select the skip size that best suits your needs
        </p>
      </header>

      {/* Loading Indicator */}
      {loading && (
        <div className="flex items-center justify-center h-[20rem]">
          <Spinner size={7} />
        </div>
      )}

      {/* Visual Glow Effects */}
      <div className="glow-blur left-[-12.5rem] top-[12.5rem]"></div>
      <div className="glow-blur right-[-12.5rem] top-[100dvh]"></div>

      {/* Products Section */}
      <section className="max-w-5xl mx-auto px-4 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {/* Error Handling */}
        {error && (
          <div className="bg-red-100 text-red-700 px-4 py-2 rounded-md">
            <p>
              <strong>Error:</strong> {error}
            </p>
          </div>
        )}

        {/* Render Product Cards */}
        {!loading &&
          products.length > 0 &&
          products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              selected={selected}
              onClick={() => setSelected(product)} // Handle selection
            />
          ))}

        {/* Footer selector that depends on selected product */}
        <FooterSelector product={selected} />
      </section>
    </div>
  );
};

export default Home;
