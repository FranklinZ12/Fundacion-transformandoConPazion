import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar";
import HomeScreen from "../pages/HomeScreen";
import AboutScreen from "../pages/about/AboutScreen";
import ContactScreen from "../pages/ContactScreen";
import ProcessScreen from "../pages/process/ProcessScreen";
import Footer from "components/Footer";
import AboutTeam from "pages/about/AboutTeam";
import AboutUsAndDonations from "pages/about/AboutUsAndDonations";
import ProcessMedellinBarrista from "pages/process/ProcessMedellinBarrista";
import ProcessJovemp from "pages/process/ProcessJovemp";
import ProcessClubDeportivoTcp from "pages/process/ProcessClubDeportivoTcp";
import ProcessEsySu from "pages/process/ProcessEsySu";
import ProcessLigaGuayabal from "pages/process/ProcessLigaGuayabal";
import ProcessTorneoBarrial from "pages/process/ProcessTorneoBarrial";
import ProcessAga from "pages/process/ProcessAga";
import ProcessNaturalWoman from "pages/process/ProcessNaturalWoman";
import ProcessCronicas from "pages/process/ProcessCronicas";
import LoginScreen from "pages/auth/LoginScreen";
const DashBoardRoutes = () => {
    return (
        <Fragment>
            <Navbar />
            <div>
                <Routes>
                    <Route path="/" element={<HomeScreen />} />
                    <Route path="nosotros">
                        <Route path="organizacion/" element={<AboutScreen />}/>
                        <Route path="equipo/" element={<AboutTeam />} />
                        <Route path="voluntario-y-donaciones/" element={<AboutUsAndDonations />} />
                    </Route>
                    <Route path="procesos">
                        <Route path="todos/" element={<ProcessScreen />} />
                        <Route path="medellin-barrista/" element={<ProcessMedellinBarrista />} />
                        <Route path="jovemp/" element={<ProcessJovemp />} />
                        <Route path="club-deportivo-tcp/" element={<ProcessClubDeportivoTcp />} />
                        <Route path="es&su/" element={<ProcessEsySu />} />
                        <Route path="liga-guayabal/" element={<ProcessLigaGuayabal />} />
                        <Route path="torneo-barrial/" element={<ProcessTorneoBarrial />} />
                        <Route path="a-g-a/" element={<ProcessAga />} />
                        <Route path="nataural-woman/" element={<ProcessNaturalWoman />} />
                        <Route path="cronicas-y-pasion-deportiva/" element={<ProcessCronicas />} />
                    </Route>
                    <Route path="contacto" element={<ContactScreen />} />
                    <Route path="auth/">
                        <Route path="login" element={<LoginScreen />}/>
                    </Route>
                </Routes>
            </div>
            <Footer />
            {/* <ByMy /> */}
        </Fragment>
    )
}

export default DashBoardRoutes