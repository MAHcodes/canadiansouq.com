interface Props {
  text: string;
  onChange: any;
  filter: string[];
};

const CheckBox = ({text, onChange, filter}: Props) => {
  return (
    <div>
      <input className="peer" hidden type="checkbox" id={text} onChange={() => onChange(text)} defaultChecked={filter.includes(text)} />
      <label
        htmlFor={text}
        className="relative cursor-pointer pl-8 before:absolute before:left-0 before:top-1/2 before:w-4 before:h-4 before:bg-white before:border-black before:border before:border-solid before:rounded-sm before:translate-y-[-50%] before:translate-x-1/2 peer-checked:before:bg-black peer-checked:before:content-['\2713'] before:text-white before:flex before:items-center before:justify-center"
      >
        {text}
      </label>
    </div>
  );
};

export default CheckBox;
