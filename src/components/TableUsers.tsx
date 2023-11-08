import { RootState } from "../store";
import AddressSection from "./AddressSection";
import CellBodyTable from "./CellBodyTable";
import CellTitleTable from "./CellTitleTable";
import TableRow from "./TableRow";
import { useSelector } from "react-redux";
import TableSkeleton from "./TableSkeleton";

const TableUsers = () => {
  const { loading, data, error } = useSelector(
    (state: RootState) => state.users
  );

  if (loading) {
    return <TableSkeleton />;
  }
  if (error) {
    return <h1>{error || "Error while fetch data user!"}</h1>;
  }
  return (
    <table className="w-full">
      <thead className="bg-base">
        <TableRow variant="header">
          <CellTitleTable disableSortIcon title="No" />
          <CellTitleTable title="Name" />
          <CellTitleTable title="Email" />
          <CellTitleTable title="Address" />
          <CellTitleTable title="Phone" />
        </TableRow>
      </thead>
      <tbody>
        {data.map((user, index) => (
          <TableRow
            variant={`${index % 2 === 0 ? "semi-dark" : "dark"}`}
            key={user.id}
          >
            <CellBodyTable>{index + 1}</CellBodyTable>
            <CellBodyTable>{user.name}</CellBodyTable>
            <CellBodyTable>{user.email}</CellBodyTable>
            <CellBodyTable>
              <AddressSection
                shortAddress={user.address.street}
                fullAddress={`${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}`}
              />
            </CellBodyTable>
            <CellBodyTable>{user.phone}</CellBodyTable>
          </TableRow>
        ))}
      </tbody>
    </table>
  );
};

export default TableUsers;
