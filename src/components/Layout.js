import { Outlet } from "react-router";
import RestaurantListPage from "./RestaurantListPage";
import WelcomePage from "./WelcomePage";
import Header from "./Header/header";
import Footer from "./Header/Footer"


const Layout = () => {
    return (
        <main className="App">
            <Header />
            <Outlet />
            <Footer />
            

        </main>
    )
}

export default Layout