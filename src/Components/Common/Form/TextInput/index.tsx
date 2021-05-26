import React, { FC } from "react";
import style from "../Form.module.scss";

type TProps = {
  placeholder: string;
  handler: React.Dispatch<React.SetStateAction<string>>;
};

const TextInput: FC<TProps> = (props: TProps) => {
  const { placeholder, handler } = props;

  
  const textInputHandler = (e: any) => {
    handler(e.currentTarget.value);
  };
  
  return (
    <input
      type="text"
      className={style.auth_form_input}
      placeholder={placeholder}
      onChange={textInputHandler}
    />
  );
};

export default TextInput;
