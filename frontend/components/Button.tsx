interface Props {
  text: String;
  main?: Boolean;
  sec?: Boolean;
  pad?: String;
}

const Button = ({ text, main, pad, sec }: Props) => {
  return (
    <button
      className={`rounded-lg font-bold flex items-center justify-center cursor-pointer
        ${main && "text-white bg-black"} 
        ${pad || "px-8 py-4"} 
        ${sec && "text-black bg-transparent border-black border-2 border-solid"}
    `}>
      {text}
    </button>
  );
};

export default Button;
