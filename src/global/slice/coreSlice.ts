import type { CoreState } from '@/types/core';
import { createSlice } from '@reduxjs/toolkit';

const initialState: CoreState = {
  isModalOpen: false,
  modalType: '',
  onBoarding: {
    learningPreferences: '',
    learningMethods: '',
    learningGoals: [],
    learningTime: '',
  },
  isFinished: false,
  getStarted: false,
  chatPrompt: '',
};

const coreSlice = createSlice({
  name: 'core',
  initialState,
  reducers: {
    openModal: (state, action) => {
      state.isModalOpen = true;
      state.modalType = action.payload;
    },
    closeModal: (state) => {
      state.isModalOpen = false;
      state.modalType = '';
    },
    setOnBoardingPreferences: (state, action) => {
      if (state.onBoarding.learningPreferences === action.payload) {
        state.onBoarding.learningPreferences = '';
        return;
      }
      state.onBoarding.learningPreferences = action.payload;
    },
    setOnBoardingMethods: (state, action) => {
      if (state.onBoarding.learningMethods === action.payload) {
        state.onBoarding.learningMethods = '';
        return;
      }
      state.onBoarding.learningMethods = action.payload;
    },
    setOnBoardingGoals: (state, action) => {
      if (state.onBoarding.learningGoals.includes(action.payload)) {
        state.onBoarding.learningGoals = state.onBoarding.learningGoals.filter(
          (goal) => goal !== action.payload
        );
        return;
      }
      state.onBoarding.learningGoals = action.payload;
    },
    setOnBoardingTime: (state, action) => {
      if (state.onBoarding.learningTime === action.payload) {
        state.onBoarding.learningTime = '';
        return;
      }
      state.onBoarding.learningTime = action.payload;
    },
    resetOnBoarding: (state) => {
      state.onBoarding = {
        learningPreferences: '',
        learningMethods: '',
        learningGoals: [],
        learningTime: '',
      };
      state.isFinished = false;
      state.getStarted = false;
    },
    setFinish: (state) => {
      state.isFinished = true;
    },
    setGetStarted: (state) => {
      state.getStarted = true;
    },
    setChatPrompt: (state, action) => {
      state.chatPrompt = action.payload;
    },
  },
});

export const coreActions = coreSlice.actions;
export default coreSlice.reducer;
