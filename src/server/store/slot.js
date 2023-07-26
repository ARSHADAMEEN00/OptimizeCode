import { createSlice } from "@reduxjs/toolkit";
import { getAllSlot, getSlotDetail } from "../api/slot";

export const slotSlice = createSlice({
  name: "appointment",
  initialState: {
    loading: false,
    error: {},
    // slot
    slotList: {},
    slotDropList: [],
    slotDetails: {},
  },
  reducers: {
    clearSlotError: (state) => {
      state.error = true;
    },
  },
  extraReducers: {
    // get all slot
    [getAllSlot.pending]: (state) => {
      state.loading = true;
    },
    [getAllSlot.fulfilled]: (state, action) => {
      state.loading = false;
      state.slotList = action.payload;
      state.error = {};
    },
    [getAllSlot.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error;
    },
    // slotedetails
    [getSlotDetail.pending]: (state) => {
      state.loading = true;
    },
    [getSlotDetail.fulfilled]: (state, action) => {
      state.loading = false;
      state.slotDetails = action.payload;
      state.error = {};
    },
    [getSlotDetail.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error;
    },
  },
});
export const { clearSlotError } = slotSlice.actions;

export default slotSlice.reducer;
