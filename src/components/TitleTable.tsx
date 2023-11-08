import { FC } from "react";

interface TitleTableProps {
  disableSortIcon?: boolean;
  title: string;
}

const TitleTable: FC<TitleTableProps> = ({ disableSortIcon, title }) => {
  return (
    <div className="flex items-center gap-[70px] py-1 px-5">
      <span className="text-[18px] font-medium">{title}</span>
      {!disableSortIcon && (
        <div className="flex flex-col">
          <button
            title="ascending"
            type="button"
            className="leading-none text-[9.5px] text-[#fff]"
          >
            ▲
          </button>
          <button
            title="descending"
            type="button"
            className="leading-none text-[9.5px] text-[#8c8c8c]"
          >
            ▼
          </button>
        </div>
      )}
    </div>
  );
};

export default TitleTable;
