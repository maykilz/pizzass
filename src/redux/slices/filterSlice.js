import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    categoryValueSort: 0,   
    activeCategorySort: 0, 
}
 

const filterSlice = createSlice({
    name: 'filterTypeSlice', 
    initialState, 
    reducers: {
        setCategoryValue(state, action) {  
            state.categoryValueSort = action.payload;  

        }, 
        setCategoryValueSort(state, action) {  
            state.activeCategorySort = action.payload;  
        } 
    }
})

export const {setCategoryValue,setCategoryValueSort, activeCategorySort,   categoryValueSort} = filterSlice.actions;

export default filterSlice.reducer;
