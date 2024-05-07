import { Button } from "../button/Button";
import { Input } from "../input/Input";
import { Text } from "../text/Text";
import { TextProps } from "../text/Text";

interface LoginProps {
  /**
   * Content
   */
  label?: string;

  box1?: string;

  box2?: string;

  box3?: string;

  stack?: string;

  TextProps?: TextProps;
}

export const Login = ({ label, box1, box2, box3, stack }: LoginProps) => {
  return (
    <>
      <div
        className={["flex flex-col items-start gap-6 items-center", box1].join(
          " "
        )}
      >
        <Text
          label={"Login"}
          textColor={"text-black"}
          textSize={"3xl"}
          fontWeight={"font-medium"}
        />
        <Text
          label={"Please enter your credentials to login"}
          textColor={"text-neutral-500"}
          textSize={"large"}
          fontWeight={"font-light"}
        />
        <Input
          inputSize="small"
          label={"Username"}
          type={"text"}
          align={"mr-6"}
          fontWeight={"font-light"}
        />

        <Input
          inputSize="small"
          label={"Password"}
          type={"password"}
          align={"mr-6"}
          fontWeight={"font-light"}
        />

        <Button label={"Login"} size="medium" shadow={true} />
      </div>
    </>
  );
};
