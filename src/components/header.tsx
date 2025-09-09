import logo from "../assets/images/logo.svg";
import { Select, Option } from "@material-tailwind/react";

const Header = () => {
  return (
    <div className="flex justify-between">
      <img src={logo} />
      <div className="w-172">
        <Select label="Units">
          <Option>Material Tailwind HTML</Option>
          <Option>Material Tailwind React</Option>
          <Option>Material Tailwind Vue</Option>
          <Option>Material Tailwind Angular</Option>
          <Option>Material Tailwind Svelte</Option>
        </Select>
      </div>
    </div>
  );
};

export default Header;
