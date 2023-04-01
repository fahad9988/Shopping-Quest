import React from "react";
import "./sidebar.css";
import logo from "../SidebarSection/WebsiteLogo.png";
import { RxDashboard } from "react-icons/rx";
import { FaUsers, FaCartArrowDown } from "react-icons/fa";
import { GiMoneyStack } from "react-icons/gi";
import { BsCreditCard2Front, BsQuestionCircle, BsTrophy,BsFillCartFill } from "react-icons/bs";
import { MdOutlineExplore, MdOutlinePermContactCalendar } from "react-icons/md";
import { AiOutlinePieChart } from "react-icons/ai";
import { BiTrendingUp,BiLogOut } from "react-icons/bi";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sideBar grid">
      <div className="logoDiv flex">
        <img src={logo} alt="" />
      </div>

      <div className="menuDiv">
        <h3 className="divTitle">Quick Menu</h3>
        <ul className="menuLists grid">
          <li className="listItem">
            <Link to="/adminpage" className="menuLink flex">
              <RxDashboard className="icon" />
              <span className="smallText">
                <Link to="/admin">Dashboard</Link>
              </span>
            </Link>
          </li>
          <li className="listItem">
            <Link to="/adminteam" className="menuLink flex">
              <FaUsers className="icon" />
              <span className="smallText">
                <Link to="/adminusers">Users</Link>
              </span>
            </Link>
          </li>
          <li className="listItem">
            <Link to="/adminproducts" className="menuLink flex">
              <FaCartArrowDown className="icon" />
              <span className="smallText">
                <Link to="/adminproducts">Products</Link>
              </span>
            </Link>
          </li>
          <li className="listItem">
            <Link to="/adminproducts" className="menuLink flex">
              <BsFillCartFill className="icon" />
              <span className="smallText">
                <Link to="/productsorder">Orders</Link>
              </span>
            </Link>
          </li>
          <li className="listItem">
            <Link to="" className="menuLink flex">
              <GiMoneyStack className="icon" />
              <span className="smallText">Earnings</span>
            </Link>
          </li>
        </ul>
      </div>

      <div className="settingsDiv">
        <h3 className="divTitle">Settings</h3>
        <ul className="menuLists grid">
          <li className="listItem">
            <a href="#" className="menuLink flex">
              <AiOutlinePieChart className="icon" />
              <span className="smallText">Charts</span>
            </a>
          </li>
          <li className="listItem">
            <a href="#" className="menuLink flex">
              <BiTrendingUp className="icon" />
              <span className="smallText">Trends</span>
            </a>
          </li>
          <li className="listItem">
            <a href="#" className="menuLink flex">
              <MdOutlinePermContactCalendar className="icon" />
              <span className="smallText">Contacts</span>
            </a>
          </li>
          <li className="listItem">
            <a href="#" className="menuLink flex">
              <BsCreditCard2Front className="icon" />
              <span className="smallText">Billing</span>
            </a>
          </li>

          <li className="listItem">
            <a href="#" className="menuLink flex">
              <BiLogOut className="icon" />
              <span style={{color:"red"}} className="smallText"><Link to="/loginadmin">Logout</Link></span>
            </a>
          </li>
        </ul>
      </div>

      <div className="sideBarCard">
        <BsQuestionCircle className="icon" />
        <div className="cardContent">
          <div className="circle1"></div>
          <div className="circle2"></div>

          <h3>Help Center</h3>
          <p>
            Having trouble in Trendify, please contact us from for more
            questions.
          </p>
          <button className="bttn">Go to help center</button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
