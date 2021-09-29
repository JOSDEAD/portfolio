import styled from "styled-components";
import { motion, AnimatePresence, useElementScroll } from "framer-motion";
import LanguageSelector from "../header/languageSelector";
import Logo from "../header/logo";
import SideNav from "./SideNav";
import routes from "../../routes";
import TopNav from "./topNav";


const Navbar = ({ selected }) => {
  return (
    <>
      <SideNav selected={selected} routes={routes} />
      <TopNav selected={selected} routes={routes}/>
    </>
  );
};

export default Navbar;
