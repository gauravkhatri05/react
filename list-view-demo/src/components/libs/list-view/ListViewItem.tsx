import { FC } from "react";
import { getKey } from "utils/string-utils";

interface ListViewItemType {
  value: string;
  checkedState: Map<string, boolean>;
  handleOnChange: (item: string) => void;
}

export const ListViewItem: FC<ListViewItemType> = ({
  value,
  checkedState,
  handleOnChange,
}) => {
  const key = getKey(value);

  // console.log(key, " :: ", checkedState.get(key!));
  return (
    <li className="list-group-item d-flex">
      <input
        className="d-inline-flex align-self-center me-2"
        type="checkbox"
        id={`${key}`}
        name={`${key}`}
        checked={checkedState.has(key!) && checkedState.get(key!)}
        value={value}
        onChange={() => handleOnChange(value)}
      />
      <label htmlFor={`${key}`}>{value}</label>
    </li>
  );
};
