import { FC } from "react";

interface ListViewActionButtonGroupType {
  enableLRActionBtnFlag: boolean;
  enableRLActionBtnFlag: boolean;
  lrActionHandler: () => void;
  rlActionHandler: () => void;
}

export const ListViewActionButtonGroup: FC<ListViewActionButtonGroupType> = ({
  enableLRActionBtnFlag,
  enableRLActionBtnFlag,
  lrActionHandler,
  rlActionHandler,
}) => (
  <div className="d-flex flex-column justify-content-center">
    <button
      type="button"
      className="btn btn-outline-primary mb-2"
      disabled={!enableLRActionBtnFlag}
      onClick={lrActionHandler}
    >
      <img
        src="/assets/svg/angle-double-right.svg"
        alt=">"
        style={{ width: "40px", height: "40px" }}
      />
    </button>
    <button
      type="button"
      className="btn btn-outline-secondary"
      disabled={!enableRLActionBtnFlag}
      onClick={rlActionHandler}
    >
      <img
        src="/assets/svg/angle-double-right.svg"
        alt="<"
        style={{ width: "40px", height: "40px", transform: "rotate(180deg)" }}
      />
    </button>
  </div>
);
