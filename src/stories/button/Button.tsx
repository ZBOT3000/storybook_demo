import React from "react";
import "./button.css";
import "../../../src/app/globals.css";

interface ButtonProps {
  /**
   * If shadow should be applied?
   */
  shadow?: boolean;
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
  shadow,
  size,
  backgroundColor,
  label,
  ...props
}: ButtonProps) => {
  const mode = shadow
    ? "text-white bg-sky-800 drop-shadow-2xl"
    : " text-white bg-sky-900";

  const dangerButtonStyle =
    "text-white bg-red-500 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-opacity-50 text-sm md:text-base py-2 px-4 md:py-3 md:px-6";

  const smallButtonStyle =
    "hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-600 focus:ring-opacity-50 text-sm md:text-base py-2 px-5 md:py-2 md:px-5";
  const mediumButtonStyle =
    "hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-600 focus:ring-opacity-50 text-sm md:text-base py-2 px-8 md:py-2 md:px-8";
  const largeButtonStyle =
    "hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-600 focus:ring-opacity-50 text-sm md:text-base py-2 px-12 md:py-2 md:px-12";

  let buttonStyle;

  if (size === "small") {
    buttonStyle = smallButtonStyle;
  }
  if (size === "medium") {
    buttonStyle = mediumButtonStyle;
  }
  if (size === "large") {
    buttonStyle = largeButtonStyle;
  }
  if (label === "Danger" && size === "large") {
    buttonStyle = dangerButtonStyle;
  }

  return (
    <button
      type="button"
      className={[
        "font-nunito-sans font-semibold border-2 rounded-lg cursor-pointer inline-block leading-none text-white",
        buttonStyle,
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
