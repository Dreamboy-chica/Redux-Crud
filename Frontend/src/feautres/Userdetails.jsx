import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'  

// Create action
export const createUser = createAsyncThunk(
  'createUser',
  async (data, { rejectWithValue }) => {
    const response = await fetch('https://671e31691dfc4299198188b8.mockapi.io/crud', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })  

    try {
      if (!response.ok) {
        throw new Error('Network response was not ok')  
      }
      const result = await response.json()  
      return result  
    } catch (error) {
      return rejectWithValue(error.message)  
    }
  }
)

//read-action
export const showUser=createAsyncThunk("showUser",async(_,{rejectWithValue})=>{
  const response=await fetch(`https://671e31691dfc4299198188b8.mockapi.io/crud`)
  try
  {
     const result=await response.json()
     return result
  }
  catch(error){
        return rejectWithValue(error)
  }
})

const UserDetails = createSlice({
  name: 'userDetail',
  initialState: {
    users: [],
    loading: false,
    error: null,
  },
  reducers: {
    // Add any synchronous reducers if needed
  },
  extraReducers: (builder) => {
    builder

      .addCase(createUser.pending, (state) => {
        state.loading = true
        state.error = null // Reset error on new request
      })
      .addCase(createUser.fulfilled, (state, action) => {
        state.loading = false
        state.users.push(action.payload)
      })
      .addCase(createUser.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload   // Store the error message
      })


      .addCase(showUser.pending, (state) => {
        state.loading = true
        state.error = null // Reset error on new request
      })
      .addCase(showUser.fulfilled, (state, action) => {
        state.loading = false
        state.users=action.payload
      })
      .addCase(showUser.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload   // Store the error message
      })

  },
})

export const { increment, decrement, reset } = UserDetails.actions  
export default UserDetails.reducer  
