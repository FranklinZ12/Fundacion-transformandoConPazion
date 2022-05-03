import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar";
import HomeScreen from "../pages/HomeScreen";
import AboutScreen from "../pages/AboutScreen";
import ContactScreen from "../pages/ContactScreen";
import ProcessScreen from "../pages/ProcessScreen";
import Footer from "components/Footer";
const DashBoardRoutes = () => {
  return (
      <Fragment>
          <Navbar />
          <div>
              <Routes>
                  <Route path="/" element={<HomeScreen />} />
                  <Route path="nosotros" element={<AboutScreen />} />
                  {/* <Route path="resume" element={<ResumeScreen />} /> */}
                  <Route path="procesos" element={<ProcessScreen />} />
                  <Route path="contacto" element={<ContactScreen />} />
              </Routes>
          </div>
          <Footer />
          {/* <ByMy /> */}
      </Fragment>
  )
}

export default DashBoardRoutes