import { FC, ReactNode } from "react";

interface CellBodyTableProps {
  children: string | number | ReactNode;
}

const CellBodyTable: FC<CellBodyTableProps> = ({ children }) => {
  return (
    <td>
      <div className="text-[16px] py-5 px-5">{children}</div>
    </td>
  );
};

export default CellBodyTable;
