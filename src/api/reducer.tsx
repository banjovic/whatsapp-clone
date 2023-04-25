export const initialState = {
  user: null,
};

export const actionTypes = {
  SET_USER: 'SET_USER',
};

const reducer = (state: any, action: { type: any; user: any }) => {
  console.log('action', action);
  switch (action.type) {
    case actionTypes.SET_USER:
      return {
        ...state,
        user: action.user,
      };

    default:
      return state;
  }
};

export default reducer;
