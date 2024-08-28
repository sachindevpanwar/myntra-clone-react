import {configureStore} from "@reduxjs/toolkit"
import itemsSlice from "./itemsSlice";
import fetchStatusSlice from "./fatchStatusSlice";

const myntraStore = configureStore({
    reducer:{
        items: itemsSlice.reducer,
        fetchStatusSlice: fetchStatusSlice.reducer
    }
});

export default myntraStore;