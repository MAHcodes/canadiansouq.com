interface Props {
  text: string | JSX.Element;
  title?: string;
  main?: boolean;
  sec?: boolean;
  icon?: boolean;
  pad?: string;
  font?: string;
  className?: string;
  onClick?: () => void;
}

const Button = ({ text, main, pad, sec, font, icon, className, onClick, title }: Props) => {
  return (
    <button
      className={`rounded-md font-bold text-base flex items-center justify-center cursor-pointer
        ${main && "text-white bg-black"} 
        ${pad || "px-8 py-4"} 
        ${sec && "text-black bg-transparent border-black border-2 border-solid"}
        ${font && font}
        ${icon && "w-8 h-8 hover:bg-gray hover:bg-opacity-20 active:bg-gray active:bg-opacity-20 transition-colors"}
        ${className}
      `}
      onClick={onClick}
      title={title}
    >
      {text}
    </button>
  );
};

export default Button;
