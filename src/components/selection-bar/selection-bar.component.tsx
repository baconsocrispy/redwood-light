// external imports
import { FC } from "react";

import { SelectionBarContainer, SelectionBarOption } from "./selection-bar.styles";

// types
type SelectionBarProps = {
  options: string[];
}

const SelectionBar: FC<SelectionBarProps> = ({options}) => {
  return (
    <SelectionBarContainer>
      {options.map((option, index) => (
        <SelectionBarOption key={index}>
          {option}
        </SelectionBarOption>
      ))}
    </SelectionBarContainer>
  );
}

export default SelectionBar