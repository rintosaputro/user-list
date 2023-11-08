import { FC, ReactNode } from "react";

interface TableRowProps {
  children: ReactNode;
  variant: "header" | "dark" | "semi-dark";
}

const TableRow: FC<TableRowProps> = ({ children, variant }) => {
  let background = "bg-base";
  switch (variant) {
    case "dark":
      background = "bg-dark";
      break;
    case "semi-dark":
      background = "bg-semi-dark";
      break;
    default:
      background = "bg-base";
      break;
  }

  return <tr className={background}>{children}</tr>;
};

export default TableRow;
