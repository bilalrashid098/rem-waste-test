import type { SpinnerProps } from "./type";

/**
 * Spinner component to show a loading indicator.
 *
 * @param {number} size - The size of the spinner (default: 2).
 * @param {string} color - The color of the spinner using Tailwind text color class (default: "text-white").
 * @param {string} className - Optional custom classes to apply to the spinner (default: "").
 */
const Spinner = ({
  size = 2 | 3 | 4 | 5 | 6 | 7,
  color = "text-white",
  className = "",
}: SpinnerProps) => {
  const sizeMap: Record<number, string> = {
    2: "w-2 h-2 border-1",
    3: "w-3 h-3 border-1",
    4: "w-4 h-4 border-2",
    5: "w-5 h-5 border-3",
    6: "w-6 h-6 border-4",
    7: "w-7 h-7 border-5",
  };

  return (
    <div
      className={`inline-block animate-spin rounded-full border-current border-t-transparent ${sizeMap[size]} ${color} ${className}`}
      role="status"
      aria-label="Loading"
    />
  );
};

export default Spinner;
