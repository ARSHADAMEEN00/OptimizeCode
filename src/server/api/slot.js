import { createAsyncThunk, createSelector } from "@reduxjs/toolkit";
import { get } from "./http";

const selectAppointment = (state) => state.slot;

const selectAppointmentSlots = createSelector(
  selectAppointment,
  (appointment) => appointment.slotList
);

export const getAllSlot = createAsyncThunk(
  "/appointment/slotList",
  async (_, thunkAPI) => {
    try {
      const URL = `/appointment/slots`;

      const response = await get(URL);
      const appointmentSlots = selectAppointmentSlots(thunkAPI.getState());

      return {
        response,
        appointmentSlots,
      };
    } catch (error) {
      console.log("data :", error);
      throw error?.response?.data?.message;
    }
  }
);

export const getSlotDetail = createAsyncThunk(
  `/appointment/user/`,
  async ({ id }) => {
    try {
      const URL = `/appointment/user/${id}`;

      const response = await get(URL);
      if (response) {
        return {
          response,
        };
      }
    } catch (error) {
      throw error?.response?.data?.message;
    }
  }
);
