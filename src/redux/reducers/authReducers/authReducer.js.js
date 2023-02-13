const AuthReducer = function(state = false, action)
{
    console.log("actions:"+action.type)
    switch(action.type)
    {
        case "SHOW_LOGIN":
            console.log("IS_LOGIN_REDUCER");
            return true;
       
        case "HIDE_LOGIN":
            console.log("IS_LOGIN_REDUCER");
            return false;

        case "REGISTER":
            console.log("REGISTER_REDUCER");
            return false;
            
        case "IS_REGISTERED":
            console.log("IS_REGISTERED_REDUCER");
            return false;
        
        
            //  SIGN_UP  
        case "SHOW_SIGNUP":
            console.log("SHOW_SIGNUP_REDUCER");
            return true;
    
        case "HIDE_SIGNUP":
            console.log("HIDE_SIGNUP_REDUCER");
            return false;

        // FORGOT PASSWORD
        case "FORGOT_PASSWORD":
            console.log("HIDE_SIGNUP_REDUCER");
            return true;

        case "HIDE_FORGOT_PASSWORD":
            console.log("HIDE_SIGNUP_REDUCER");
            return false;
    
        default: return state=false
    }
}

export default AuthReducer;


