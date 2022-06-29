import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  getAll,
  createItem,
  updateItem,
  deleteById,
  getGroupParam,
} from "./parameterAPI";

const initialState = {
  data: [],
  loading: false,
  error: null,
  pageNo: 1,
  pageSize: 10,
  totalRecord: 0,
  selected: null,
  result: null,
  groupParam: [],
};

export const fetchParameter = createAsyncThunk(
  "bisnisParameter/fetchParameter",
  async (payload) => {
    const response = await getAll(payload);
    return response;
  }
);

export const addItem = createAsyncThunk(
  "bisnisParameter/addItem",
  async (payload) => {
    const response = await createItem(payload);
    return response;
  }
);

export const editItem = createAsyncThunk(
  "bisnisParameter/editItem",
  async (payload) => {
    const response = await updateItem(payload);
    return response;
  }
);

export const removeById = createAsyncThunk(
  "bisnisParameter/removeById",
  async (payload) => {
    const response = await deleteById(payload);
    return response;
  }
);

export const fetchGroupParam = createAsyncThunk(
  "bisnisParameter/fetchGroupParam",
  async (payload) => {
    const response = await getGroupParam(payload);
    return response.data;
  }
);

export const bisnisParameterSlice = createSlice({
  name: "bisnisParameter",
  initialState,
  reducers: {
    resetData: () => initialState,
    setSelected: (state, action) => {
      state.selected = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchParameter.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchParameter.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload.data.data;
        state.pageNo = action.payload.data.pageNo;
        state.pageSize = action.payload.data.pageSize;
        state.totalRecord = action.payload.data.totalRecord;
      })

      .addCase(addItem.pending, (state) => {
        state.loading = true;
      })
      .addCase(addItem.fulfilled, (state, action) => {
        state.loading = false;
        state.result = action.payload;
      })
      .addCase(editItem.pending, (state) => {
        state.loading = true;
      })
      .addCase(editItem.fulfilled, (state, action) => {
        state.loading = false;
        state.result = action.payload;
      })
      .addCase(removeById.pending, (state) => {
        state.loading = true;
      })
      .addCase(removeById.fulfilled, (state, action) => {
        state.loading = false;
        state.result = action.payload;
      })
      .addCase(fetchGroupParam.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchGroupParam.fulfilled, (state, action) => {
        state.loading = false;
        state.groupParam = action.payload.data;
      });
  },
});

export const { resetData, setSelected } = bisnisParameterSlice.actions;

export const selectParamater = (state) => state.bisnisParameter.data;
export const selectLoading = (state) => state.bisnisParameter.loading;
export const selectError = (state) => state.bisnisParameter.error;
export const selectPageNo = (state) => state.bisnisParameter.pageNo;
export const selectPageSize = (state) => state.bisnisParameter.pageSize;
export const selectTotalRecord = (state) => state.bisnisParameter.totalRecord;
export const selectSelected = (state) => state.bisnisParameter.selected;
export const selectResult = (state) => state.bisnisParameter.result;
export const selectGroupParam = (state) => state.bisnisParameter.groupParam;

export default bisnisParameterSlice.reducer;
