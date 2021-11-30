import { FC } from "react";

interface ListViewFormActionButtonGroupType {
  enableSubmitFlag: boolean;
  resetHandler: () => void;
  submitHandler: () => void;
}

export const ListViewFormActionButtonGroup: FC<ListViewFormActionButtonGroupType> =
  ({ enableSubmitFlag, resetHandler, submitHandler }) => (
    <div className="d-flex justify-content-center gap-2">
      <button
        type="button"
        className="btn btn-secondary"
        onClick={resetHandler}
      >
        Reset
      </button>
      <button
        type="button"
        className="btn btn-primary"
        disabled={!enableSubmitFlag}
        onClick={submitHandler}
      >
        Submit
      </button>
    </div>
  );
