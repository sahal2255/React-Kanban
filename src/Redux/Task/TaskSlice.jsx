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
    },
    deleteTask: (state, action) => {
      return state.filter(task => task.id !== action.payload);
    },
    updateTaskStatus: (state, action) => {
      const { id, status } = action.payload;
      const task = state.find(task => task.id === id);
      if (task) {
        task.status = status;
      }
    },
    editTask: (state, action) => {
      const { id, text } = action.payload;
      const task = state.find(task => task.id === id);
      if (task) {
        task.text = text; 
      }
    },
  },
});

export const { addTask, deleteTask, updateTaskStatus ,editTask} = taskSlice.actions;
export default taskSlice.reducer;
