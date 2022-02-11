import { HYDRATE } from 'next-redux-wrapper';
import { AnyAction, combineReducers } from '@reduxjs/toolkit';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getMyInfo } from '@utils/function';
import { UserState } from '@interface/StoreInterface';
import { doc, onSnapshot } from 'firebase/firestore';
import { db } from '@firebase/firebase';
import { createStore } from 'redux';
import { useSelector, useDispatch } from 'react-redux';
const initialUserState: UserState = {
  user: {
    nickname: '',
    jobSector: '',
    validRounges: [
      { title: '타임라인', url: 'timeline' },
      { title: '토픽', url: 'topic' },
    ],
    myChattings: [],
    id: '',
    hasNewNotification: false,
    post: [],
  },
  status: 'standby',
  error: '',
};

export const getUser = createAsyncThunk('getUser', async (result: any) => {
  return await result;
});
// export const getUser = createAsyncThunk('getUser', async (result: any) => {
//   return await getMyInfo(result);
// });
// console.log(getUser.name);
export const userSlice = createSlice({
  name: 'user',
  initialState: initialUserState,
  reducers: {
    setNewUserInfo: (state, action) => {
      state.user = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getUser.pending, (state, action) => {
      state.status = 'loading';
    });
    builder.addCase(getUser.fulfilled, (state, action) => {
      state.user = action.payload;
      state.status = 'success';
    });
    builder.addCase(getUser.rejected, (state, action) => {
      state.status = 'error';
      state.error = action.error.message;
    });
  },
});
// console.log(userSlice);
const rootReducer = (state: { user: UserState }, action: AnyAction) => {
  {
    switch (action.type) {
      case HYDRATE:
        return { ...state, ...action.payload };
      default:
        const combineReducer = combineReducers({
          user: userSlice.reducer,
        });
        return combineReducer(state, action);
    }
  }
};

export const setNewUserInfo = userSlice.actions.setNewUserInfo;

export default rootReducer;
export type RootReducer = ReturnType<typeof rootReducer>;
