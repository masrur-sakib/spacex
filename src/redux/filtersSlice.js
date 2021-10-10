import { createSlice } from "@reduxjs/toolkit";

export const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    filterYear: "",
    filterStatus: "",
    filterUpcoming: false,
  },
  reducers: {
    setFilterYear: (state, action) => {
      state.filterYear = action.payload;
    },
    setFilterStatus: (state, action) => {
      state.filterStatus = action.payload;
    },
    setFilterUpcoming: (state, action) => {
      state.filterUpcoming = action.payload;
    },
  },
});

export const { setFilterYear, setFilterStatus, setFilterUpcoming } =
  filtersSlice.actions;

export default filtersSlice.reducer;
