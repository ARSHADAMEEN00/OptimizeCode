import { configureStore } from "@reduxjs/toolkit";
import SlotReducer from "./slot";

export default configureStore({
  reducer: {
    slot: SlotReducer,
  },
});
