import { FC, useEffect, useState } from "react";
import { getToppingItems } from "utils/items";
import { getKey } from "utils/string-utils";
import { ListView } from "./ListView";
import { ListViewActionButtonGroup } from "./ListViewActionButtonGroup";
import { ListViewFormActionButtonGroup } from "./ListViewFormActionButtonGroup";

export const ListViewContainer: FC = () => {
  const [sourceItems, setSourceItems] = useState(getToppingItems());
  const [targetItems, setTargetItems] = useState<string[]>([]);
  const [lrActionBtnFlag, setLRActionBtnFlag] = useState(false);
  const [rlActionBtnFlag, setRLActionBtnFlag] = useState(false);
  const [submitFlag, setSubmitFlag] = useState(targetItems.length > 0);

  const [sourceCheckedState, setSourceCheckedState] = useState(
    new Map<string, boolean>(sourceItems.map((item) => [getKey(item)!, false]))
  );
  const [targetCheckedState, setTargetCheckedState] = useState(
    new Map<string, boolean>(targetItems.map((item) => [getKey(item)!, false]))
  );

  useEffect(() => {
    setSubmitFlag(
      targetItems.filter(
        (item) =>
          Array.from(targetCheckedState).find(
            ([k, v]) => k === getKey(item)
          )?.[1]
      ).length > 0
    );
  }, [targetItems.length, targetCheckedState]);

  const lrActionBtnFlagHandler = (lrFlag: boolean) =>
    setLRActionBtnFlag(lrFlag);
  const rlActionBtnFlagHandler = (rlFlag: boolean) =>
    setRLActionBtnFlag(rlFlag);

  const lrActionHandler = () => {
    const newSourceItems = sourceItems.filter(
      (item) =>
        !Array.from(sourceCheckedState).find(
          ([k, v]) => k === getKey(item)
        )?.[1]
    );

    const newTargetItems = sourceItems.filter(
      (item) =>
        Array.from(sourceCheckedState).find(([k, v]) => k === getKey(item))?.[1]
    );

    setSourceItems(newSourceItems);
    setTargetItems(Array.from(targetItems).concat(newTargetItems));
  };

  const rlActionHandler = () => {
    const newTargetItems = targetItems.filter(
      (item) =>
        !Array.from(targetCheckedState).find(
          ([k, v]) => k === getKey(item)
        )?.[1]
    );

    const newSourceItems = targetItems.filter(
      (item) =>
        Array.from(targetCheckedState).find(([k, v]) => k === getKey(item))?.[1]
    );

    setTargetItems(newTargetItems);
    setSourceItems(Array.from(sourceItems).concat(newSourceItems));
  };

  const resetHandler = () => {
    setSourceItems(getToppingItems());
    setTargetItems([]);
    setLRActionBtnFlag(false);
    setRLActionBtnFlag(false);
    setSourceCheckedState(
      new Map<string, boolean>(
        sourceItems.map((item) => [getKey(item)!, false])
      )
    );
    setTargetCheckedState(
      new Map<string, boolean>(
        targetItems.map((item) => [getKey(item)!, false])
      )
    );
  };

  const submitHandler = () => {
    alert(
      targetItems
        .filter(
          (item) =>
            Array.from(targetCheckedState).find(
              ([k, v]) => k === getKey(item)
            )?.[1]
        )
        .join(", ")
    );
  };

  return (
    <form>
      <div className="d-flex flex-column gap-3">
        <div className="d-flex gap-2">
          <ListView
            name="Source"
            items={sourceItems}
            checkedState={sourceCheckedState}
            setCheckedState={setSourceCheckedState}
            toggleActionBtnFlagHandler={lrActionBtnFlagHandler}
          />
          <ListViewActionButtonGroup
            enableLRActionBtnFlag={lrActionBtnFlag}
            enableRLActionBtnFlag={rlActionBtnFlag}
            lrActionHandler={lrActionHandler}
            rlActionHandler={rlActionHandler}
          />
          <ListView
            name="Target"
            items={targetItems}
            checkedState={targetCheckedState}
            setCheckedState={setTargetCheckedState}
            toggleActionBtnFlagHandler={rlActionBtnFlagHandler}
          />
        </div>
        <ListViewFormActionButtonGroup
          enableSubmitFlag={submitFlag}
          resetHandler={resetHandler}
          submitHandler={submitHandler}
        />
      </div>
    </form>
  );
};
