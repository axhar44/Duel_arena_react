import React, { createContext, useState } from 'react'
import LoginModal from '../components/login_modal/login_modal.jsx';

export const TaskContext = createContext();
const TaskContextProvider = ({children}) => {
   
    const [apiResponse, setApiResponse] = useState({});

    const [order_modal, setOrderModal ] = useState(false);
    const [support_ticket_live, setSupport_Ticket_Live] = useState(false);
    
       
    return (
        <TaskContext.Provider 
        value={{ 
            apiResponse,
            setApiResponse,
            order_modal,
            setOrderModal,
            support_ticket_live,
            setSupport_Ticket_Live

         }}>
           {children}
        </TaskContext.Provider>
    )
}

// export  const AuthDataCollection = ({children}) => {
  
//     const [AuthData, setAuthData] = useState([]);

    
   
//     return (
//         <AuthDataCollection.Provider value={{ Auth_detail:AuthData }}>
//            {children}
//         </AuthDataCollection.Provider>
//     )
// }
export default TaskContextProvider




