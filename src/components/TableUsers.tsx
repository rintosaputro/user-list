import { RootState } from "../store";
import AddressSection from "./AddressSection";
import CellBodyTable from "./CellBodyTable";
import CellTitleTable from "./CellTitleTable";
import TableRow from "./TableRow";
import { useSelector } from "react-redux";
import TableSkeleton from "./TableSkeleton";
import { useState, useEffect } from "react";
import { User } from "../utils/types";

const TableUsers = () => {
  const [users, setUsers] = useState<User[]>([]);

  const { loading, data, searchData, isKeyword, error } = useSelector(
    (state: RootState) => state.users
  );

  useEffect(() => {
    if (isKeyword) {
      setUsers(searchData);
    } else {
      setUsers(data);
    }
  }, [data, isKeyword, searchData]);

  if (loading) {
    return <TableSkeleton />;
  }
  if (error) {
    return <h1>{error || "Error while fetch data user!"}</h1>;
  }
  return (
    <>
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
          {users.map((user, index) => (
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
      {isKeyword && users.length === 0 ? (
        <span className="font-bold mt-5 text-[20px]">User is not defined!</span>
      ) : null}
    </>
  );
};

export default TableUsers;
