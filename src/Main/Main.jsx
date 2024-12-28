import Header from '../Components/Header/Header'
import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer/Footer"


const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>

        </div>
    )
}
export default Main;