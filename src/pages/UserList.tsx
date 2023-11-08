import TitleTable from "../components/TitleTable";

const UserList = () => {
  return (
    <section className="max-w-screen-xl m-auto p-[50px]">
      <h1 className="text-3xl font-bold">Users</h1>
      <table className="w-full">
        <thead className="bg-base">
          <tr>
            <th>
              <TitleTable disableSortIcon title="No" />
            </th>
            <th>
              <TitleTable title="Name" />
            </th>
            <th>
              <TitleTable title="Email" />
            </th>
            <th>
              <TitleTable title="Address" />
            </th>
            <th>
              <TitleTable title="Phone" />
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Rinto Saputro</td>
            <td>saputrorinto@gmail.com</td>
            <td>Rawa Buntu Jl. Cemara Raya</td>
            <td>081949546667</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};

export default UserList;
