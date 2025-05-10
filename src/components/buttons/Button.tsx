import { Link } from "react-router-dom";
import styles from "./style.module.css";
import type { ButtonProps } from "./type";
import { Spinner } from "../spinner";

/**
 * Reusable Button component
 *
 * This component conditionally renders either a `<button>` or a `<Link>` element
 * depending on whether the `url` prop is provided. It supports visual variants,
 * loading state, disabled state, custom classes, and click handling.
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
  // Construct class based on variant and color
  const btnClass = variant === "solid" ? color : `${variant}-${color}`;

  return (
    <div className={wrapperClassName}>
      {/* Render a <Link> when a URL is provided */}
      {url !== "" ? (
        <Link
          id={id}
          to={url}
          target={target}
          className={`btn btn-${btnClass} d-flex align-items-center justify-content-center gap-2 ${
            styles.button
          } ${className} ${isLoading ? "pointer-events-none" : ""}`}
          onClick={(event) => onClick?.(event)}
          style={style}
        >
          {/* Show loading spinner if isLoading is true */}
          {isLoading ? (
            <div className={`spinner-border ${styles.spinner}`} role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          ) : (
            <span className={spanClassName}>{children ?? title}</span>
          )}
        </Link>
      ) : (
        // Otherwise render a native HTML <button>
        <button
          id={id}
          className={`btn btn-${btnClass} d-flex align-items-center justify-content-center gap-2 ${
            styles.button
          } ${className} ${isLoading ? "pointer-events-none" : ""}`}
          type={type}
          disabled={disabled}
          onClick={(event) => onClick?.(event)}
          style={style}
        >
          {isLoading ? (
            <Spinner
              size={spinnerSize}
              color={spinnerColor}
              className={`${spinnerClassName}`}
            />
          ) : (
            <span className={spanClassName}>{children ?? title}</span>
          )}
        </button>
      )}
    </div>
  );
};

export default Button;
