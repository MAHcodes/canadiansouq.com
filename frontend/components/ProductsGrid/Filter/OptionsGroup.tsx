import CheckBox from "../../CheckBox";
import Box from "./Box";

interface Props {
  title: string;
  options: string[];
  filter: string[];
  onChange: (text: string) => void;
}

const OptionsGroup = ({ title, options, filter, onChange }: Props) => (
  <Box title={title}>
    <ul>
      {options.map((option) => (
        <li key={option}>
          <CheckBox text={option} filter={filter} onChange={onChange} />
        </li>
      ))}
    </ul>
  </Box>
);

export default OptionsGroup;
