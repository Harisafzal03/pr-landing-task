import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Task {
  id: string;
  title: string;
  description: string;
  timestamp: number;
  userId: string;
}

interface TasksState {
  tasks: Task[];
  filteredTasks: Task[];
  searchTerm: string;
  sortOrder: 'asc' | 'desc' | 'newest' | 'oldest';
}

const initialState: TasksState = {
  tasks: [],
  filteredTasks: [],
  searchTerm: '',
  sortOrder: 'newest',
};

const STORAGE_KEY = 'tasks';

// Load tasks from localStorage
const loadTasksFromStorage = (): Task[] => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ?  JSON.parse(stored) : [];
  } catch {
    return [];
  }
};

// Save tasks to localStorage
const saveTasksToStorage = (tasks: Task[]) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    loadTasks: (state, action: PayloadAction<string>) => {
      const allTasks = loadTasksFromStorage();
      state.tasks = allTasks. filter((task) => task.userId === action.payload);
      applyTaskFilters(state);
    },
    addTask: (state, action: PayloadAction<Omit<Task, 'id' | 'timestamp'>>) => {
      const newTask: Task = {
        ... action.payload,
        id: Date.now().toString(),
        timestamp: Date.now(),
      };
      state.tasks.push(newTask);
      
      const allTasks = loadTasksFromStorage();
      allTasks.push(newTask);
      saveTasksToStorage(allTasks);
      applyTaskFilters(state);
    },
    updateTask: (state, action: PayloadAction<Task>) => {
      const index = state.tasks.findIndex((t) => t.id === action.payload.id);
      if (index !== -1) {
        state.tasks[index] = action.payload;
        
        const allTasks = loadTasksFromStorage();
        const allIndex = allTasks.findIndex((t) => t.id === action.payload.id);
        if (allIndex !== -1) {
          allTasks[allIndex] = action.payload;
          saveTasksToStorage(allTasks);
        }
        applyTaskFilters(state);
      }
    },
    deleteTask: (state, action: PayloadAction<string>) => {
      state.tasks = state.tasks.filter((t) => t.id !== action. payload);
      
      const allTasks = loadTasksFromStorage();
      const filtered = allTasks.filter((t) => t.id !== action. payload);
      saveTasksToStorage(filtered);
      applyTaskFilters(state);
    },
    setTaskSearchTerm: (state, action: PayloadAction<string>) => {
      state.searchTerm = action.payload;
      applyTaskFilters(state);
    },
    setTaskSortOrder: (state, action: PayloadAction<'asc' | 'desc' | 'newest' | 'oldest'>) => {
      state.sortOrder = action.payload;
      applyTaskFilters(state);
    },
  },
});

function applyTaskFilters(state: TasksState) {
  let filtered = [...state.tasks];

  // Search
  if (state.searchTerm) {
    const search = state.searchTerm.toLowerCase();
    filtered = filtered.filter((task) =>
      task.title.toLowerCase().includes(search)
    );
  }

  // Sort
  filtered.sort((a, b) => {
    switch (state.sortOrder) {
      case 'asc':
        return a.title.localeCompare(b.title);
      case 'desc':
        return b.title.localeCompare(a.title);
      case 'newest':
        return b.timestamp - a.timestamp;
      case 'oldest':
        return a.timestamp - b.timestamp;
      default:
        return 0;
    }
  });

  state.filteredTasks = filtered;
}

export const {
  loadTasks,
  addTask,
  updateTask,
  deleteTask,
  setTaskSearchTerm,
  setTaskSortOrder,
} = tasksSlice.actions;

export default tasksSlice.reducer;