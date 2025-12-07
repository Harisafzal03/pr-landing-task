import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';

export interface User {
  id: number;
  name: string;
  email: string;
  phone?: string;
  website?: string;
}

interface UsersState {
  users: User[];
  filteredUsers: User[];
  loading: boolean;
  error: string | null;
  searchTerm: string;
  sortOrder: 'asc' | 'desc';
  currentPage: number;
  usersPerPage: number;
}

const initialState: UsersState = {
  users: [],
  filteredUsers: [],
  loading: false,
  error: null,
  searchTerm: '',
  sortOrder: 'asc',
  currentPage: 1,
  usersPerPage: 5,
};

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  if (!response.ok) {
    throw new Error('Failed to fetch users');
  }
  return (await response.json()) as User[];
});

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setSearchTerm: (state, action: PayloadAction<string>) => {
      state.searchTerm = action.payload;
      state. currentPage = 1;
      applyFilters(state);
    },
    setSortOrder: (state, action: PayloadAction<'asc' | 'desc'>) => {
      state.sortOrder = action.payload;
      applyFilters(state);
    },
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers. pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state. loading = false;
        state. users = action.payload;
        applyFilters(state);
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch users';
      });
  },
});

function applyFilters(state: UsersState) {
  let filtered = [... state.users];

  // Search filter
  if (state.searchTerm) {
    const search = state.searchTerm.toLowerCase();
    filtered = filtered.filter(
      (user) =>
        user.name.toLowerCase().includes(search) ||
        user.email. toLowerCase().includes(search)
    );
  }

  // Sort
  filtered. sort((a, b) => {
    const comparison = a.name.localeCompare(b.name);
    return state.sortOrder === 'asc' ? comparison : -comparison;
  });

  state.filteredUsers = filtered;
}

export const { setSearchTerm, setSortOrder, setCurrentPage } = usersSlice. actions;
export default usersSlice.reducer;