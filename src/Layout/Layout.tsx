import { ReactNode } from "react";
import Navbar from "../components/Navbar";

interface children {
  children: ReactNode;
}

const Layout = ({ children }: children) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

export default Layout;
