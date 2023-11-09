import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store";
import { sortUsers } from "../store/usersSlice";

interface CellTitleTableProps {
  disableSortIcon?: boolean;
  title: string;
}

const CellTitleTable: FC<CellTitleTableProps> = ({
  disableSortIcon,
  title,
}) => {
  const dispatch = useDispatch<AppDispatch>();
  const { typeSort } = useSelector((state: RootState) => state.users);

  const handleSort = (type: "ascending" | "descending") => {
    const payload: any = { type, field: title.toLocaleLowerCase() };
    dispatch(sortUsers(payload));
  };

  return (
    <th>
      <div className="flex items-center gap-[70px] py-1 px-5">
        <span className="text-[18px] font-medium">{title}</span>
        {!disableSortIcon && (
          <div className="flex flex-col">
            <button
              onClick={() => handleSort("ascending")}
              title="ascending"
              type="button"
              className={`leading-none text-[9.5px] ${
                typeSort === "ascending" || !typeSort
                  ? "text-white"
                  : "text-gray-500"
              }`}
            >
              ▲
            </button>
            <button
              onClick={() => handleSort("descending")}
              title="descending"
              type="button"
              className={`leading-none text-[9.5px] ${
                typeSort === "descending" || !typeSort
                  ? "text-white"
                  : "text-gray-500"
              }`}
            >
              ▼
            </button>
          </div>
        )}
      </div>
    </th>
  );
};

export default CellTitleTable;
