const initialState = {
    results: [],
    currentStudent: null,
    loading: false,
    error: null
  };
  
const resultReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SEARCH_STUDENT_REQUEST':
      return {
        ...state,
        loading: true,
        error: null
      };
    case 'SEARCH_STUDENT_SUCCESS':
      return {
        ...state,
        currentStudent: action.payload,
        loading: false
      };
    case 'SEARCH_STUDENT_FAILURE':
      return {
        ...state,
        error: action.payload,
        loading: false,
        currentStudent: null
      };
    default:
      return state;
  }
};
export default resultReducer;