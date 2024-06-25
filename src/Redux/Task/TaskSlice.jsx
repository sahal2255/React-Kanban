import { createSlice } from '@reduxjs/toolkit';

let taskId = 1; // Initial task id counter

const taskSlice = createSlice({
  name: 'tasks',
  initialState: [],
  reducers: {
    addTask: (state, action) => {
      state.push({
        id: taskId++,
        text: action.payload.text,
        status: 'Pending',
      });

      // Log id and text to console
      console.log('Added Task:', {
        id: taskId - 1, // Since taskId is incremented after pushing
        text: action.payload.text,
      });
    },
    deleteTask: (state, action) => {
      return state.filter(task => task.id !== action.payload);
    },
  },
});

export const { addTask, deleteTask } = taskSlice.actions;
export default taskSlice.reducer;
