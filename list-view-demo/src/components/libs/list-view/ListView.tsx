import { FC, useEffect } from "react";
import { getKey } from "utils/string-utils";
import { ListViewItem } from "./ListViewItem";

interface ListViewType {
  name: string;
  items: string[];
  checkedState: Map<string, boolean>;
  setCheckedState: (checkedState: Map<string, boolean>) => void;
  toggleActionBtnFlagHandler: (actionBtnFlag: boolean) => void;
}

export const ListView: FC<ListViewType> = ({
  name,
  items,
  checkedState,
  setCheckedState,
  toggleActionBtnFlagHandler,
}) => {
  useEffect(() => {
    const newItems = items.filter(
      (item) => !Array.from(checkedState.keys()).includes(getKey(item)!)
    );

    const newCheckedState = new Map(
      Array.from(checkedState)
        .filter(([k, v]) => items.some((item) => getKey(item) === k))
        .concat(newItems.map((item) => [getKey(item)!, false]))
    );

    setCheckedState(newCheckedState);
    toggleActionBtnFlagHandler(calculateActionBtnFlag(newCheckedState));
  }, [items.length]);

  const handleOnChange = (item: string) => {
    const newCheckedState = new Map(
      Array.from(checkedState).map(([k, v]) => [k, getKey(item) === k ? !v : v])
    );
    setCheckedState(newCheckedState);
    toggleActionBtnFlagHandler(calculateActionBtnFlag(newCheckedState));
  };

  function calculateActionBtnFlag(checkedState: Map<string, boolean>): boolean {
    return Array.from(checkedState.values()).some((v) => v);
  }

  return (
    <div className="list-view__container" style={{ height: "350px" }}>
      <fieldset className="border p-3 h-100">
        <legend className="w-auto px-2">{name} View:</legend>
        {items && items.length > 0 ? (
          <ul
            className="list-items list-group-flush ps-0"
            style={{
              overflowY: "auto",
              marginRight: "-1rem",
              maxHeight: "290px",
            }}
          >
            {items.map((item, index) => (
              <ListViewItem
                key={`${getKey(item)}`}
                checkedState={checkedState}
                value={item}
                handleOnChange={handleOnChange}
              />
            ))}
          </ul>
        ) : (
          <p className="text-danger">No Items!!!</p>
        )}
      </fieldset>
    </div>
  );
};
