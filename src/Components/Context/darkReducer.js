
  const darkReducer = (state="",action) =>{
    switch (action.type){
      case "DARK":
        return state = "dark";
    
      case "LIGHT":

        return state ="";
    }}


    export default darkReducer;