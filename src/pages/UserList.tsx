import AddressSection from "../components/AddressSection";
import CellBodyTable from "../components/CellBodyTable";
import CellTitleTable from "../components/CellTitleTable";
import TableRow from "../components/TableRow";

const UserList = () => {
  return (
    <section className="max-w-screen-xl m-auto p-[50px]">
      <h1 className="text-3xl font-bold mb-7">User List</h1>
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
          <TableRow variant="dark">
            <CellBodyTable>1</CellBodyTable>
            <CellBodyTable>Rinto Saputro</CellBodyTable>
            <CellBodyTable>saputrorinto@gmail.com</CellBodyTable>
            <CellBodyTable>
              <AddressSection
                shortAddress="Jl. Cemara Raya Blok RF1"
                fullAddress="Jl. Cemara Raya Blok RF1, RT 01 / RW 06, Rawa Buntu, Serpong, Tangerang Selatan, Banten"
              />
            </CellBodyTable>
            <CellBodyTable>081949546667</CellBodyTable>
          </TableRow>
          <TableRow variant="semi-dark">
            <CellBodyTable>1</CellBodyTable>
            <CellBodyTable>Rinto Saputro</CellBodyTable>
            <CellBodyTable>saputrorinto@gmail.com</CellBodyTable>
            <CellBodyTable>
              <AddressSection
                shortAddress="Jl. Cemara Raya Blok RF1"
                fullAddress="Jl. Cemara Raya Blok RF1, RT 01 / RW 06, Rawa Buntu, Serpong, Tangerang Selatan, Banten"
              />
            </CellBodyTable>
            <CellBodyTable>081949546667</CellBodyTable>
          </TableRow>
        </tbody>
      </table>
    </section>
  );
};

export default UserList;
