interface Props {
  text: string | JSX.Element;
  main?: boolean;
  sec?: boolean;
  pad?: string;
  font?: string;
}

const Button = ({ text, main, pad, sec, font }: Props) => {
  return (
    <button
      className={`rounded-lg font-bold text-base flex items-center justify-center cursor-pointer
        ${main && "text-white bg-black"} 
        ${pad || "px-8 py-4"} 
        ${sec && "text-black bg-transparent border-black border-2 border-solid"}
        ${font && font}
    `}>
      {text}
    </button>
  );
};

export default Button;
