export interface TextProps {
  /**
   * What is the color of text
   */
  textColor: string;
  /**
   * How large should the text be?
   */
  textSize: "small" | "medium" | "large" | "xl" | "2xl" | "3xl";
  /**
   * Button contents
   */
  label: string;

  fontWeight?: string;

  align?: string;
}

export const Text = ({
  textColor,
  textSize,
  label,
  fontWeight,
  align,
  ...props
}: TextProps) => {
  const smallTextStyle = "text-sm";
  const mediumTextStyle = "text-base";
  const largeTextStyle = "text-lg";
  const xlTextStyle = "text-2xl";
  const xl2TextStyle = "text-4xl";
  const xl3TextStyle = "text-5xl";

  let textStyle;

  if (textSize === "small") {
    textStyle = smallTextStyle;
  }
  if (textSize === "medium") {
    textStyle = mediumTextStyle;
  }
  if (textSize === "large") {
    textStyle = largeTextStyle;
  }
  if (textSize === "xl") {
    textStyle = xlTextStyle;
  }
  if (textSize === "2xl") {
    textStyle = xl2TextStyle;
  }
  if (textSize === "3xl") {
    textStyle = xl3TextStyle;
  }

  return (
    <h1
      className={[
        "font-nunito-sans font-semibold border-0 rounded-full cursor-pointer ",
        textStyle,
        textColor,
        fontWeight,
        align,
      ].join(" ")}
      {...props}
    >
      <style jsx>{`
        h1 {
          color: ${textColor};
        }
      `}</style>
      {label}
    </h1>
  );
};
