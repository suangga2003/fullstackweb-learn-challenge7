import { BrowserRouter, Routes, Route} from "react-router-dom"
import LandingPage from "../pages/LandingPage";
import SearchPage from "../pages/SearchPage";

const RouteApp = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={
                    <LandingPage/>
                } />
                <Route path="/cars" element={
                    <SearchPage/>
                }/>
            </Routes>
        </BrowserRouter>
    )
}

export default RouteApp;