import { createSlice } from "@reduxjs/toolkit";

interface State {
  parkingSpace: any;
  randomNumber: number;
}

const initialState: State = {
  parkingSpace: [],
  randomNumber: 0,
};

const bookRandomParkingSpace = (slotInfo: any, spaces: number) => {
  while (true) {
    let randomNum: number = Math.floor(Math.random() * spaces + 1);

    const isSlotAvailable = slotInfo.find((obj: any) => {
      return obj.parkedSlot === randomNum;
    });

    if (isSlotAvailable === undefined) {
      return randomNum;
    }
  }
};

const parkingSlice : any = createSlice({
  name: "parking",
  initialState,
  reducers: {
    parkingSpaceReducer: (state, action) => {
      const arr = [];

      for (let i = 0; i < action.payload; i++) {
        arr.push({
          id: i + 1,
          isAllocated: false,
          parkedSlot: "",
        });
      }

      state.parkingSpace = arr;
    },

    parkingAllocationReducer: (state, action) => {
      const newArr = state.parkingSpace;
      const randomSlot = bookRandomParkingSpace(newArr, newArr.length);
      state.randomNumber = randomSlot;
      newArr[randomSlot - 1].isAllocated = true;
      newArr[randomSlot - 1].parkedSlot = randomSlot;
      newArr[randomSlot - 1].arrivalDate = action.payload.date;
      newArr[randomSlot - 1].registerNumber = action.payload.registerNumber;
    },
    parkingDeallocationReducer: (state, action) => {
      state.parkingSpace[action.payload.id - 1].isAllocated = false;
      state.parkingSpace[action.payload.id - 1].parkedSlot = 0;
      state.parkingSpace[action.payload.id - 1].arrivalDate = "";
      state.parkingSpace[action.payload.id - 1].registerNumber = "";
    },
  },
});

export const {
  parkingSpaceReducer,
  parkingAllocationReducer,
  parkingDeallocationReducer,
} = parkingSlice.actions;

export default parkingSlice.reducer;
