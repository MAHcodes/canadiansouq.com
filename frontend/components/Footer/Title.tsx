interface Props {
  text: string;
}

const Title = ({ text }: Props) => (
  <h4 className="text-white text-lg font-bold mb-4">{text}</h4>
);

export default Title;
