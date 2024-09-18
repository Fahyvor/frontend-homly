"use client"
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserData {
  // token: string | null;
  user: {
    loggedInUser: {
    id: string | null;
    email: string | null;
    firstname: string | null;
    lastname: string | null;
    phone: string | null;
    ethinicity: string | null;
    occupation: string | null;
    school: string | null;
    pet: string | null;
    socialHandle: string | null;
    biograph: string | null;
    education: string | null;
    achievements: string | null;
    dislikes: string | null;
    experiences: string | null;
  };
},
}

const isClient = typeof window !== 'undefined';

const storedUser = isClient ? localStorage.getItem('user') : null;
const userData: UserData | null = storedUser ? JSON.parse(storedUser) : null;

const initialState: UserData = userData || {
  // token: null,
  user: {
    loggedInUser: {
    id: null,
    email: null,
    firstname: null,
    lastname: null,
    phone: null,
    ethinicity: null,
    occupation: null,
    school: null,
    pet: null,
    socialHandle: null,
    biograph: null,
    education: null,
    achievements: null,
    dislikes: null,
    experiences: null,
  },
},
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserData: (state, action: PayloadAction<UserData>) => {
      
      return { ...state, ...action.payload };
    },

    clearUserData: (state) => {
      if (isClient) {
        
        localStorage.removeItem('user');
      }
    
      return {
        // token: null,
        user: {
          loggedInUser: {
            id: null,
            email: null,
            firstname: null,
            lastname: null,
            phone: null,
            ethinicity: null,
            occupation: null,
            school: null,
            pet: null,
            socialHandle: null,
            biograph: null,
            education: null,
            achievements: null,
            dislikes: null,
            experiences: null,
          },
      },
      };
    },
  },
});

export const { setUserData, clearUserData } = userSlice.actions;

export const selectUserData = (state: { user: UserData }) => state.user;

export default userSlice.reducer;
