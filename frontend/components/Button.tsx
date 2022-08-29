interface Props {
  text: string | JSX.Element;
  main?: boolean;
  sec?: boolean;
  pad?: string;
  font?: string;
  className?: string;
  onClick?: () => void;
}

const Button = ({ text, main, pad, sec, font, className, onClick }: Props) => {
  return (
    <button
      className={`rounded-md font-bold text-base flex items-center justify-center cursor-pointer
        ${main && "text-white bg-black"} 
        ${pad || "px-8 py-4"} 
        ${sec && "text-black bg-transparent border-black border-2 border-solid"}
        ${font && font}
        ${className}
    `}
    onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
