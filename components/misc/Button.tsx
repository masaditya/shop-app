import React, { HTMLProps } from 'react';
import classnames from 'classnames'

type ButtonProps = {
    primary? : boolean | string
    danger? : boolean
    type? : "submit" | "reset" | "button"
}

const Button : React.FC<HTMLProps<HTMLButtonElement> & ButtonProps> = (props) => {
  return <button {...props} className={classnames("p-2 border-2 items-center flex justify-around border-gray-300 rounded-md", props.className, {
      "bg-blue-500 text-white border-0" : props.primary,
      "bg-red-500 text-white border-0" : props.danger
  })}> {props.children} </button>;
};

export default Button;
