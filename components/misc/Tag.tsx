import classNames from 'classnames';
import React, { HTMLProps } from 'react';

type TagProps = {
  title?: string;
  isSelected?: boolean;
};

const Tag: React.FC<HTMLProps<HTMLDivElement> & TagProps> = (props) => {
  const [isSelected, setIsSelected] = React.useState<boolean>(false);
  return (
    <div
      onClick={() => setIsSelected(!isSelected)}
      className={classNames(
        'px-3 py-1 border text-center hover:bg-gray-500 hover:text-white cursor-pointer',
        {
          'text-white bg-gray-500': isSelected,
        }
      )}
    >
      {props.title || props.children}
    </div>
  );
};

export default Tag;
