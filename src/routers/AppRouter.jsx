import { Routes, Route, BrowserRouter } from "react-router-dom";
import { PublicRoute } from "./PublicRoute";
import Navbar from "components/navbar/Navbar";
import LoginScreen from "pages/auth/LoginScreen";
import { PrivateRoute } from "./PrivateRoute";

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    exact
                    path="/*"
                    element=
                    {
                        <PublicRoute>
                            <Navbar />
                        </PublicRoute>
                    }
                />
                <Route
                    exact
                    path="/auth/login"
                    element=
                    {
                        <PublicRoute>
                            <LoginScreen />
                        </PublicRoute>
                    }
                />
                {/* <Route path="/*" element=
                    {
                        <PrivateRoute uid={uid}>
                            <Navigate replace to="/*" />
                        </PrivateRoute>
                    }
                /> */}
            </Routes>
        </BrowserRouter >
    )
}

export default AppRouter