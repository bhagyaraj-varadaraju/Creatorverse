import { Link } from 'react-router-dom'

function NavHeader() {

    return (
        <header>
            <h1>Creatorverse</h1>
            <nav>
                <ul>
                    <li><Link to={"/"}>
                        <button role="button">View all Creators</button>
                    </Link></li>

                    <li><Link to={"/new"}>
                        <button role="button">Add a Creator</button>
                    </Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default NavHeader
