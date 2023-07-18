import NavHeader from "../components/NavHeader"
import { Outlet } from "react-router-dom"

function HomeLayout() {

    return (
        <div>
            <NavHeader />

            <main className="Container">
                <Outlet />
            </main>
        </div>
    )
}

export default HomeLayout
