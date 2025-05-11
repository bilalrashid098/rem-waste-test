/**
 * Card Skeleton Component (Shimmer Placeholder)
 *
 * This component serves as a visual loading placeholder for the product card.
 * It uses animated shimmering blocks to simulate the layout of the actual card
 * while data is being fetched. This enhances perceived performance and improves UX
 * by showing users a consistent interface structure during loading states.
 *
 * Styling Notes:
 * - Uses Tailwind's `animate-pulse` for shimmer effect.
 * - Applies semi-transparent background and blur for visual hierarchy.
 * - Mimics the shape and layout of the real product card: image, title, info rows, and button.
 *
 * @component
 * @returns {JSX.Element} A skeleton card component for use during data loading.
 */

const Card = () => {
  return (
    <div
      // Container for the loading skeleton with shimmer animation
      className={`bg-white/10 backdrop-blur-md shadow-md rounded-lg p-4 border relative hover:bg-white/15 transition-all ease-in-out flex flex-col border-white/20 hover:border-white/30 animate-pulse`}
    >
      {/* Simulated product image block */}
      <div className="relative">
        <div className="w-full h-48 rounded-md bg-gray-500/50"></div>
      </div>

      <div className="grow">
        {/* Simulated title */}
        <div className="w-full h-7 rounded-md bg-gray-500/50 my-3" />

        {/* Simulated price row */}
        <p className="text-gray-300 flex items-center justify-between text-sm">
          <div className="w-40 h-6 rounded-md bg-gray-500/50 mb-2" />
          <div className="w-20 h-6 rounded-md bg-gray-500/50 mb-2" />
        </p>

        {/* Simulated VAT row */}
        <p className="text-gray-300 flex items-center justify-between text-sm">
          <div className="w-40 h-6 rounded-md bg-gray-500/50 mb-2" />
          <div className="w-20 h-6 rounded-md bg-gray-500/50 mb-2" />
        </p>

        {/* Simulated hire period row */}
        <p className="text-gray-300 flex items-center justify-between text-sm">
          <div className="w-40 h-6 rounded-md bg-gray-500/50 mb-2" />
          <div className="w-20 h-6 rounded-md bg-gray-500/50 mb-2" />
        </p>

        {/* Simulated action button */}
        <div className="w-full h-[2.875rem] rounded-md bg-gray-500/50 mt-3" />
      </div>
    </div>
  );
};

export default Card;
