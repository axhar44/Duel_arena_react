import React, { useState,useEffect } from "react";
import "./tickets.css";
import NetworkService from "../../services/network.service";
import Spinner from "../spinner/Spinner";
import "../spinner/style.css";
const networkService = new NetworkService()

const Tickets = ({tickets}) => {

  const [all_ticket_data, setTicketData] = useState([]);
  const [Loading, setLoading] = useState(false);
  const [state, setState] = React.useState({ num: 0 });
  const counter = React.useRef(0);



  useEffect(() => {
    setLoading(true);
    if (counter.current < 100) {
      counter.current += 1;
      const timer = setTimeout(() => setState({ num: state.num + 1 }), 10000);
      console.warn("load data");
      get_support_ticket_data();
      return () => clearTimeout(timer);
    }
  }, [state]);
  


  const user_id_fk =localStorage.getItem("id");
  let credentials1 = { user_id_fk}

  const get_support_ticket_data = async function () {
    let response3 = await networkService.get_support_ticket_data(credentials1);    
    if (response3.query_status === true) {
      console.log("Get support ticket api fetch");
      console.log(response3.user);
      setLoading(false);
      setTicketData(response3.user);
    }else
    {
      console.log("Get support ticket api fetch error");
    }

    console.log(all_ticket_data);
    console.log("data here ");
  }
  const [ticket, setticket] = useState(tickets);

  return (

    <>
    
   
    <div className="container">
          <div className="col-sm-12">
          <table className="table table-auto w-full mt-[50px] border-spacing-x-[51px] border-spacing-y-[41px] border-slate-500 text-left">
        <thead>
          <tr className="tr w-full text-[#BEBEDC] font-normal text-[14px] opacity-[0.5]">
            <th className="th text-left">Ticket No</th>
            <th className="th">Title</th>
            <th className="th">Topic</th>
            <th className="th">Descripton</th>
            <th className="th">Created</th>
            <th className="th float-right">Status</th>
          </tr>
        </thead>

        <tbody>

          {all_ticket_data.map((t) => {
            return (
              <tr className="tr border-bottom text-[#BEBEDC] font-normal text-[14px] border border-b-2" key={t.ticket_support_id}>
                <td className="td">#{t.ticket_no}</td>
                <td className="td">{t.ussue_name}</td>
                <td className="td">{t.ticket_name}</td>
                <td className="td">{t.status}</td>
                <td className="td">{t.created_at}</td>
                {t.status === 'true' ? <td className="td float-right text-[#4BD078]">SOLVE</td> : <td className="td float-right text-[#CDD04B]">CLOSE</td>}

              </tr>);
          })}
        </tbody>
      </table>
          </div>
      <div className="col-sm-4"></div>
      <div className="col-sm-4" style={{Position:'absolute'}}>
        <center>
          {Loading === true ? <Spinner /> : null}
        </center>
      </div>
      <div className="col-sm-4"></div>
    </div>

    
    
      </>

  );
};

export default Tickets;
