import { createSlice } from '@reduxjs/toolkit'
import { UsersData } from './UsersData'

const initialState = {
  value: UsersData,
}

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.value.push(action.payload)
    },

    updateUsername: (state, action) => {
        state.value.map(user => {
            if(user.id === action.payload.id){
                user.username = action.payload.username
            }
            
        })
    },

    deleteUser: (state, action) => {
        state.value = state.value.filter(user => user.id != action.payload.id) 
    },
  },
})

export const { addUser, updateUsername, deleteUser } = usersSlice.actions

export default usersSlice.reducer