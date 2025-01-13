import { Outlet } from "react-router-dom";
import Navbar from "./NavbarComponent";
import BarraDiNavigazione from "./BarraDINavigazione";
function DefaultLayoutComponent() {
    return (
        <>
            <Navbar />
            <BarraDiNavigazione />
            <main>
                <Outlet />

            </main>


            <footer>
                <p>Copy lorem ipsum</p>
            </footer>
        </>
    )

}

export default DefaultLayoutComponent;