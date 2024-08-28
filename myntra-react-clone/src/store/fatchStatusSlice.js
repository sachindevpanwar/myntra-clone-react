import {createSlice} from "@reduxjs/toolkit";

const fetchStatusSlice = createSlice({
    name: 'fatchStatus',
    initialState: {
        fetchDone: false,   // alse: PENDING amd true: DONE
        currentlyFetching: false
    },
    reducers: {
        markFetchDone: (state) =>{
            return state.fetchDone=true;
        },
        toggleFetchingStarted: (state) =>{
            return state.currentlyFetching=true;
        },
        toggleFetchingFinished: (store) =>{
            return statecurrentlyFetching=false;
        }
    }
});


export default fetchStatusSlice;

