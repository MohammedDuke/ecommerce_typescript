import { TCategory } from '@customTypes/category';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

type TResponse = TCategory[];

const actGetCategories = createAsyncThunk(
  'categories/actGetCategories',
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;

    try {
      const response = await axios.get<TResponse>(
        'http://localhost:3000/categories'
      );
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return rejectWithValue(error.response?.data.message || error.message);
      }
      return rejectWithValue('An unexpected error');
    }
  }
);

export default actGetCategories;