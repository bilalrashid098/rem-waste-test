import type { MouseEvent, ReactNode } from "react";

/**
 * ButtonProps defines the properties for the reusable Button component.
 */
export interface ButtonProps {
  /**
   * Optional text to display inside the button if `children` is not provided.
   * - Used when you only want to show text, without any nested content.
   */
  title?: string;

  /**
   * React children to render within the button (takes precedence over `title`).
   * - Used for more flexible content rendering, such as icons, text, or other components inside the button.
   */
  children?: ReactNode;

  /**
   * Visual style variant of the button - solid (default) or outline.
   * - `solid`: Solid background color with text color.
   * - `outline`: Transparent background with border color.
   */
  variant?: "solid" | "outline";

  /**
   * Color scheme of the button - primary (default), secondary or dark.
   * - `primary`: Typically the main action color.
   * - `secondary`: Alternative color for less important actions.
   * - `dark`: Alternative color for less important actions.
   */
  color?: "primary" | "secondary" | "dark";

  /**
   * Additional class name(s) to apply to the button element.
   * - Useful for custom styling or when integrating with other CSS frameworks.
   */
  className?: string;

  /**
   * Additional class name(s) to apply to the inner span wrapping the content.
   * - Useful for custom styling on the inner content of the button.
   */
  spanClassName?: string;

  /**
   * Additional class name(s) for the wrapper container of the button.
   * - Wraps the entire button component (can be used to add external styles).
   */
  wrapperClassName?: string;

  /**
   * Size of the spinner if loading state is active (default: 2).
   * - Controls the size of the loading spinner when `isLoading` is true.
   */
  spinnerSize?: number;

  /**
   * Color of the spinner when loading state is active (default: "text-white").
   * - Controls the color of the spinner when `isLoading` is true.
   */
  spinnerColor?: string;

  /**
   * Additional class name(s) for the spinner element.
   * - Allows you to apply custom styles to the spinner when loading.
   */
  spinnerClassName?: string;

  /**
   * Button type attribute (only applies when rendering as <button>).
   * - `button`: Default type for normal buttons.
   * - `submit`: Used for form submissions.
   * - `reset`: Used to reset form values.
   */
  type?: "button" | "submit" | "reset" | undefined;

  /**
   * Click event handler for both <button> and <Link> usage.
   * - Used to handle click actions when the button is clicked.
   */
  onClick?: (event: MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void;

  /**
   * Disables the button when true (applies to <button> only).
   * - Prevents user interaction with the button when disabled.
   */
  disabled?: boolean;

  /**
   * If true, shows a loading spinner and disables pointer events.
   * - Activates the loading state, typically used for async actions.
   */
  isLoading?: boolean;

  /**
   * Optional URL that triggers rendering the component as a <Link>.
   * - If a URL is provided, the button renders as a <Link> component.
   */
  url?: string;

  /**
   * Optional target attribute for the <Link> (e.g., "_blank").
   * - Defines where the linked document will open (only applicable if `url` is provided).
   */
  target?: string;

  /**
   * Optional id attribute for identification/testing purposes.
   * - Useful for DOM manipulation or automated testing.
   */
  id?: string;

  /**
   * Inline CSS styles to apply to the button or link element.
   * - Allows for quick, inline customization of styles.
   */
  style?: React.CSSProperties;
}
