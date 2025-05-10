/**
 * Props for the Spinner component.
 */
export interface SpinnerProps {
  /**
   * Size of the spinner, controls both the width and height (default is 2).
   * 
   * Example: 2, 4, 6
   */
  size?: number;

  /**
   * Tailwind CSS class for the color of the spinner (default is "text-white").
   * 
   * Example: "text-white", "text-primary", "text-gray-500"
   */
  color?: string;

  /**
   * Optional custom class names to apply additional styling to the spinner.
   */
  className?: string;
}