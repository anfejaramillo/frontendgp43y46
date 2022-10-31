import { Link } from "react-router-dom";

function Navlinks(props) {
    let navlinksNavbar = (
        <>
            <div class="col-2 pt-1">
                <Link to={"/"} className="link-secondary">
                    Home
                </Link>
            </div>
            <div class="col-2 text-center">
                <Link to={"/producto"} className="link-secondary">
                    Productos
                </Link>
            </div>
            <div class="col-2 text-center">
                <Link to={"/categoria"} className="link-secondary">
                    Categorias
                </Link>
            </div>
            <div class="col-2 text-center">
                <Link to={"/usuario"} className="link-secondary">
                    Usuarios
                </Link>
            </div>
            <div class="col-2 text-center">
                <Link to={"/nosotros"} className="link-secondary">
                    Nosotros
                </Link>
            </div>
        </>
    );

    let navlinksFooter = (
        <ul className="nav justify-content-center border-bottom pb-3 mb-3">
            <li className="nav-item mx-3">
                <Link to={"/"} className="link-secondary">
                    Home
                </Link>
            </li>
            <li className="nav-item  mx-3">
                <Link to={"/producto"} className="link-secondary">
                    Productos
                </Link>
            </li>
            <li className="nav-item  mx-3">
                <Link to={"/categoria"} className="link-secondary">
                    Categorias
                </Link>
            </li>
            <li className="nav-item  mx-3">
                <Link to={"/usuario"} className="link-secondary">
                    Usuarios
                </Link>
            </li>
            <li className="nav-item  mx-3">
                <Link to={"/nosotros"} className="link-secondary">
                    Nosotros
                </Link>
            </li>
        </ul>
    );

    return props.footer ? navlinksFooter : navlinksNavbar;
}

export default Navlinks;
