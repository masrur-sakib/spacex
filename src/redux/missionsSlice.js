import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getMissionsData = createAsyncThunk(
  "missions/getMissionsData",
  async () => {
    return fetch("https://api.spacexdata.com/v3/launches").then((response) =>
      response.json()
    );
  }
);

export const missionsSlice = createSlice({
  name: "missions",
  initialState: {
    missions: [],
    status: null,
  },
  extraReducers: {
    [getMissionsData.pending]: (state, action) => {
      state.status = "loading";
    },
    [getMissionsData.fulfilled]: (state, { payload }) => {
      state.missions = payload;
      state.status = "success";
    },
    [getMissionsData.rejected]: (state, action) => {
      state.status = "failed";
    },
  },
});

export default missionsSlice.reducer;
