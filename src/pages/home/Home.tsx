import { useEffect, useState } from "react";
import type { Product } from "../../services/product.service";
import productService from "../../services/product.service";
import { Stepper } from "../../components/stepper";
import { ProductCard } from "../../components/products";
import { Spinner } from "../../components/spinner";

/**
 * Home component serves as the landing page for the shop.
 * It handles the navigation through different steps and fetches product data based on location.
 */
const Home = () => {
  // Define the steps for the stepper component
  const steps = [
    { title: "Postcode", icon: "" },
    { title: "Waste Type", icon: "" },
    { title: "Select Skip", icon: "" },
    { title: "Permit Check", icon: "" },
    { title: "Choose Date", icon: "" },
    { title: "Payment", icon: "" },
  ];

  // State variables to manage the current step, products, loading state, and error messages
  const [current] = useState<number>(2); // Current step in the process
  const [products, setProducts] = useState<Product[]>([]); // Stores fetched products
  const [loading, setLoading] = useState<boolean>(true); // Loading state for product data
  const [error, setError] = useState<string | null>(null); // Stores error message if the request fails

  /**
   * Fetches product data based on the user's location.
   * The location is hardcoded for the demo, but this could be dynamically set.
   */
  const fetchProductsByLocation = () => {
    setLoading(true); // Set loading to true while the data is being fetched
    const payload = {
      postcode: "NR32", // Static postcode for the demonstration
      area: "Lowestoft", // Static area for the demonstration
    };

    // API call to fetch products based on location
    productService
      .getProductsByLocation(payload)
      .then((data) => setProducts(data)) // On success, store products in the state
      .catch((error) => setError(error)) // On failure, set error message
      .finally(() => setLoading(false)); // Set loading to false after the API call completes
  };

  // useEffect hook to fetch products when the component is first mounted
  useEffect(() => {
    fetchProductsByLocation(); // Trigger the product fetch
  }, []); // Empty dependency array ensures this runs only once on component mount

  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <header className="text-center py-10 px-4">
        <h1 className="text-4xl font-bold mb-2">Welcome to Our Shop</h1>
        <p className="text-lg">
          Follow the steps below to find and order your favorite items
        </p>
      </header>
      {/* Stepper Component */}
      <Stepper current={current} steps={steps} />{" "}
      {/* Display stepper to guide the user */}
      {/* Display Spinner While Loading */}
      {loading && (
        <div className="flex items-center justify-center h-[20rem]">
          <Spinner size={7} />{" "}
          {/* Show a spinner while the products are loading */}
        </div>
      )}
      {/* Products Section */}
      <section className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {/* Error Message Display */}
        {error && (
          <div className="bg-red-100 text-red-700 px-4 py-2 rounded-md">
            <p>
              <strong>Error:</strong> {error}{" "}
              {/* Show error message if API call fails */}
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
