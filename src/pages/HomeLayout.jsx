import NavHeader from "../components/NavHeader"
import { Outlet } from "react-router-dom"

function HomeLayout() {

    return (
        <div>
            <NavHeader />

            <Outlet />
        </div>
    )
}

export default HomeLayout
