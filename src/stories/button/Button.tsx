import React from "react";
import "./button.css";
import "../../../src/app/globals.css";

interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: "small" | "medium" | "large";
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  primary = true,
  size = "medium",
  backgroundColor,
  label,
  ...props
}: ButtonProps) => {
  const mode = primary
    ? "text-white bg-sky-800"
    : " text-white bg-sky-900 shadow-lg shadow-black";
  return (
    <button
      type="button"
      className={[
        "font-nunito-sans font-semibold border-0 rounded-full cursor-pointer inline-block leading-none text-white",
        `storybook-button--${size}`,
        mode,
      ].join(" ")}
      {...props}
    >
      {label}
      <style jsx>{`
        button {
          background-color: ${backgroundColor};
        }
      `}</style>
    </button>
  );
};
