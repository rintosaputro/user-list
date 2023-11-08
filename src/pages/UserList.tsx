import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchPosts } from "../store/usersSlice";
import { AppDispatch } from "../store";
import TableUsers from "../components/TableUsers";

const UserList = () => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <section className="max-w-screen-xl m-auto p-[50px]">
      <h1 className="text-3xl font-bold mb-7">User List</h1>
      <TableUsers />
    </section>
  );
};

export default UserList;
