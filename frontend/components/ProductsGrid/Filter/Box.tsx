interface Props {
  title: string;
  children: JSX.Element;
}

const Box = ({ title, children }: Props) => {
  return (
    <div className="border rounded-md p-2 pt-5 my-5 relative">
      <p className="text-base bg-fff absolute top-0 translate-y-[-50%] px-2">
        {title}
      </p>
      {children}
    </div>
  );
};

export default Box;
