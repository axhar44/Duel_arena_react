import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Chat from "./components/Chat";
// side bar
import Component from "./pages/Component";
import Home from "./pages/Home";
import Duel from "./pages/Duel";
import Loot from "./pages/Loot";
import Wheel from "./pages/Wheel";
import Poker from "./pages/Poker";
import Error from "./pages/Error";
import Race from "./pages/Race";
import Profile from "./pages/Profile";
import Exchange from "./pages/Exchange";
import Support from "./pages/Support";

import Chat2 from "./components/Chat2";

// import 'antd/dist/antd.css'
import {
  Routes,
  Route,
  Link,
  useRouteMatch,
  useParams,
  Router,
} from "react-router-dom";
import AdminGame from "./components/admin_game/admin_game";
import AdminReport from "./components/admin_report/admin_report";
import AdminCharges from "./components/admin_charges/admin_charges";
import AdminUser from "./components/admin_userpage/admin_userpage";
import AdminPlayer from "./components/admin_player/admin_player";
import AdminDash from "./components/admin_dashboard/admin_dashboard";
import AdminSideBar from "./components/admin_sidebar/admin_sidebar";
import AdminHeader from "./components/admin_header/admin_header";
import AdminPanel from "./admin_panel/admin_panel";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

function App() {
  const notify = () => toast("Wow so easy!");
  return ( 
    <>
      <Routes>
        {/* <Route path="/" element={<AdminGame/>} exact> */}
        {/* <Route path="/" element={<AdminReport/>} exact> */}
        {/* <Route path="/" element={<AdminCharges/>} exact> */}
        {/* <Route path="/" element={<AdminUser/>} exact> */}
        {/* <Route path="/" element={<AdminPlayer/>} exact> */}
        {/* <Route path="/" element={<AdminDash/>} exact> */}
        {/* <Route path="/" element={<AdminSideBar/>} exact> */}
        {/* <Route path="/" element={<AdminHeader/>} exact> */}
        {/* <Route path="/" element={<AdminPanel/>} exact> */}
        <Route path="/" element={<Home style={{overflow: 'hidden'}}/> } exact>
       
          <Route path="/" element={<Component />} />
          <Route path="/duel" element={<Duel />} />
          <Route path="/loot" element={<Loot />} />
          <Route path="/Wheel" element={<Wheel />} />
          <Route path="/Poker" element={<Poker />} />
          <Route path="/Race" element={<Race />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/exchange" element={<Exchange />} />
          <Route path="/support" element={<Support />} />
          <Route path="/Error" element={<Error />} />
          
        </Route>
      </Routes>
      {/* <Route path="/pages" element={<Component />}></Route> */}
    </>
  );
}

export default App;
