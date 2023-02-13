import React,{useEffect} from 'react';

  import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  

    const Toast_message = (props) => {

        // useEffect(() => {
        //     const interval = setInterval(() => 
        //     { 
        //      console. log('This will run every second!' );
        //      notify();
        //     }
        //      , 1000); 
        //     return () => clearInterval(interval); 
        //    }, []); 

    const notify = () => toast("Wow so easy!");

    return (
     
       
        <ToastContainer />
      
    );
  }
  export default Toast_message;