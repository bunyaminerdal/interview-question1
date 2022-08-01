import { createSlice } from "@reduxjs/toolkit";
import { example_response } from "../data";
import { data } from "../utils/datatypes";
const initialState = {
    datas: [] as data[],
    selectedData: {} as data,
}
const eventSlice = createSlice({
    name: "eventdata",
    initialState,
    reducers: {
        getEventDatas: (state, action) => {
            state.datas = example_response.data;
            state.selectedData = example_response.data[0] ? example_response.data[0] : {} as data;
        },
        setSelectedEvent: (state, action) => {
            state.selectedData = example_response.data.find(event => event.id === action.payload) || {} as data;
        }
    }
})
export default eventSlice.reducer;
export const { getEventDatas, setSelectedEvent } = eventSlice.actions;