const TogglerReducer = function(state = false, action)
{
    console.log("actions:"+action.type)
    switch(action.type)
    {
        case "OPEN_TICKET":
            console.log("OPEN_TICKET_REDUCER")
            return true;

        case "CLOSE_TICKET":
            console.log("CLOSE_TICKET_REDUCER")
            return false;
    
        default: return false
    }
}

export default TogglerReducer;
