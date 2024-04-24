import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchPosts } from "../store/usersSlice";
import { AppDispatch } from "../store";
import TableUsers from "../components/TableUsers";
import SearchBar from "../components/SearchBar";

const UserList = () => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <section className="max-w-screen-xl m-auto p-[50px]">
      <h1 className="text-3xl font-bold mb-7">User List</h1>
      <div className="my-4">
        <SearchBar />
      </div>
      <TableUsers />
    </section>
  );
};

export default UserList;
