interface InputProps {
  /**
   * How large should the input box be?
   */
  inputSize?: "small" | "medium" | "large";
  /**
   * Input box label
   */
  label: string;
  /**
   * Input box label
   */
  type: "text" | "password" | "date" | "number";

  align?: string;

  fontWeight?: string;
}

export const Input = ({
  inputSize,
  label,
  type,
  align,
  fontWeight,
  ...props
}: InputProps) => {
  const smallInputStyle = "p-2 px-6 text-base";
  const mediumInputStyle = "p-2 px-8 text-lg";
  const largeInputStyle = "p-2 px-12 text-xl";

  let inputStyle;

  if (inputSize === "small") {
    inputStyle = smallInputStyle;
  }
  if (inputSize === "medium") {
    inputStyle = mediumInputStyle;
  }
  if (inputSize === "large") {
    inputStyle = largeInputStyle;
  }

  return (
    <>
      {type == "text" && (
        <div className={[align].join(" ")}>
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            {label}
          </label>
          <input
            type="text"
            autoComplete="off"
            className={[
              "block w-full text-gray-900 border  rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
              inputStyle,
              fontWeight,
              align,
            ].join(" ")}
            {...props}
          />
        </div>
      )}

      {type == "password" && (
        <div className={[align].join(" ")}>
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            {label}
          </label>
          <input
            type="password"
            autoComplete="off"
            className={[
              "block w-full text-gray-900 border  rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
              inputStyle,
              fontWeight,
              align,
            ].join(" ")}
            {...props}
          />
        </div>
      )}

      {type == "number" && (
        <div className={[align].join(" ")}>
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            {label}
          </label>
          <input
            type="number"
            autoComplete="off"
            className={[
              "block w-full text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
              inputStyle,
              fontWeight,
              align,
            ].join(" ")}
            {...props}
          />
        </div>
      )}

      {type == "date" && (
        <div className={[align].join(" ")}>
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            {label}
          </label>
          <input
            type="date"
            autoComplete="off"
            className={[
              "block w-full text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
              inputStyle,
              fontWeight,
              align,
            ].join(" ")}
            {...props}
          />
        </div>
      )}
    </>
  );
};
