import { Link } from "react-router-dom";
import type { ButtonProps } from "./type";
import { Spinner } from "../spinner";

/**
 * Reusable Button component
 *
 * Conditionally renders either a <button> or <Link> depending on the `url` prop.
 * Supports visual variants (solid, outline), loading state, disabled state,
 * custom classes, click handling, and more.
 *
 * @param {ButtonProps} props - Button configuration props
 * @returns {JSX.Element} The rendered button or link element
 */
const Button = ({
  id = "",
  title,
  children,
  variant = "solid",
  color = "primary",
  className = "",
  spanClassName = "",
  wrapperClassName = "",
  spinnerSize = 2,
  spinnerColor = "text-white",
  spinnerClassName = "",
  type = "button",
  onClick,
  disabled = false,
  isLoading = false,
  url = "",
  target = "",
  style = {},
}: ButtonProps) => {
  // Define style variants based on color and variant props
  const colorVariants = {
    primary: {
      solid:
        "bg-primary border border-primary text-white hover:!bg-transparent hover:!border-white",
      outline:
        "bg-transparent text-white border border-white hover:!bg-primary hover:!border-primary hover:!text-white",
    },
    secondary: {
      solid:
        "bg-secondary border border-secondary text-white hover:bg-secondary/90 hover:border-secondary/90",
      outline:
        "bg-transparent text-secondary border border-secondary hover:bg-secondary hover:text-white",
    },
    dark: {
      solid:
        "bg-dark border border-dark text-white hover:!bg-transparent hover!:border-white hover:!border-white",
      outline:
        "bg-transparent text-dark border border-white hover:!bg-dark hover:!border-dark hover:!text-white",
    },
  };

  const finalClassName = `
    d-flex align-items-center justify-content-center gap-2 px-3 py-2 rounded-md cursor-pointer transition-all duration-300
    ${colorVariants[color][variant]}
    ${className}
    ${isLoading ? "pointer-events-none opacity-70" : ""}
  `;

  const content = isLoading ? (
    <Spinner
      size={spinnerSize}
      color={spinnerColor}
      className={spinnerClassName}
    />
  ) : (
    <span className={spanClassName}>{children ?? title}</span>
  );

  return (
    <div className={wrapperClassName}>
      {url ? (
        <Link
          id={id}
          to={url}
          target={target}
          className={finalClassName}
          onClick={(event) => onClick?.(event)}
          style={style}
        >
          {content}
        </Link>
      ) : (
        <button
          id={id}
          className={finalClassName}
          type={type}
          disabled={disabled}
          onClick={(event) => onClick?.(event)}
          style={style}
        >
          {content}
        </button>
      )}
    </div>
  );
};

export default Button;
