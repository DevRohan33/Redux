export const searchStudent = (registrationNo) => {
  return (dispatch, getState) => {
    dispatch({ type: 'SEARCH_STUDENT_REQUEST' });
    
    try {
      const { results } = getState();
      const studentResult = results.find(
        result => result["Registration ID"] === registrationNo
      );
      
      if (studentResult) {
        dispatch({
          type: 'SEARCH_STUDENT_SUCCESS',
          payload: studentResult
        });
      } else {
        dispatch({
          type: 'SEARCH_STUDENT_FAILURE',
          payload: 'No student found with this registration number'
        });
      }
    } catch (error) {
      dispatch({
        type: 'SEARCH_STUDENT_FAILURE',
          payload: error.message
        });
      }
    }
  };