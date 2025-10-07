import { createSlice } from '@reduxjs/toolkit';

const portfolioSlice = createSlice({
  name: 'portfolio',
  initialState: {
    activeSection: 'home',
    theme: 'dark',
    isLoading: false,
    contactForm: {
      name: '',
      email: '',
      message: ''
    }
  },
  reducers: {
    setActiveSection: (state, action) => {
      state.activeSection = action.payload;
    },
    setTheme: (state, action) => {
      state.theme = action.payload;
    },
    updateContactForm: (state, action) => {
      state.contactForm = { ...state.contactForm, ...action.payload };
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    }
  }
});

export const { setActiveSection, setTheme, updateContactForm, setLoading } = portfolioSlice.actions;
export default portfolioSlice.reducer;