import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ActionSort, User } from "../utils/types";

interface UserState {
  data: User[];
  loading: boolean;
  error: string | null;
  typeSort: "ascending" | "descending" | null;
}

const initialState: UserState = {
  data: [],
  loading: false,
  error: null,
  typeSort: null,
};

export const fetchPosts = createAsyncThunk("users/fetchUsers", async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const responseJson = await response.json();
  return responseJson;
});

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    sortUsers: (state, action: ActionSort) => {
      const { type, field } = action.payload;

      state.typeSort = type;
      state.data = state.data.sort((a, b) => {
        const fa =
          field === "address"
            ? a.address.street.toLocaleLowerCase()
            : String(a[field]).toLocaleLowerCase();

        const fb =
          field === "address"
            ? b.address.street.toLocaleLowerCase()
            : String(b[field]).toLocaleLowerCase();

        if (fa < fb) {
          return type === "ascending" ? -1 : 1;
        }
        if (fa > fb) {
          return type === "ascending" ? 1 : -1;
        }
        return 0;
      });
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.error = action.error.message || null;
        state.loading = false;
      });
  },
});

export const { sortUsers } = usersSlice.actions;
export default usersSlice.reducer;
