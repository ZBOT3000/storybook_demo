interface StackProps {
  /**
   * Content
   */
  label?: string;

  box1?: string;

  box2?: string;

  box3?: string;

  stack?: string;
}

export const Stack = ({ label, box1, box2, box3, stack }: StackProps) => {
  return (
    <>
      <h1> {label}</h1>
      <div className={["flex flex-col items-start gap-4", stack].join(" ")}>
        <div className={[box1].join(" ")} />
        <div className={[box2].join(" ")} />
        <div className={[box3].join(" ")} />
      </div>
    </>
  );
};
