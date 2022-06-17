//created the function with parameters.
const reducer = (state = true, action) => {
    // reads the action and returns a state.
    switch (action.type) {
      case "VISIBLE":
        return state = true;
      case "NOT_VISIBLE":
        return state =false;
      default:
        return state;
    }
  };


  
  
  //exporting the function.
  export default reducer;