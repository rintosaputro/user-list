import { useState, FormEvent, useEffect } from "react";
import TextField from "./TextField";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store";
import { searchUser } from "../store/usersSlice";

const SearchBar = () => {
  const [keyword, setKeyword] = useState<string>("");
  const { data } = useSelector((state: RootState) => state.users);

  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (keyword) {
      navigate({ search: `?search=${keyword}` });
    } else {
      navigate({ search: "" });
    }
  };

  useEffect(() => {
    if (data.length > 0) {
      dispatch(searchUser(searchParams.get("search")));
    }
  }, [searchParams, dispatch, data]);

  return (
    <form className="flex gap-2" onSubmit={handleSubmit}>
      <TextField
        placeholder="Search user..."
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
      />
      <button type="submit" className="px-3 bg-gray-500 rounded-sm font-bold">
        Search
      </button>
    </form>
  );
};

export default SearchBar;
