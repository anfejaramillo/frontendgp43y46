//LIBRARIES
import { Route, Routes } from "react-router-dom";
//CSS
import "./css/App.css";
//COMPONENTS
import Index from "./components/index";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer";
import Nosotros from "./components/nosotros";
import LoginForm from "./components/usuarios/loginForm";
import IndexEjemplos from "./components/ejemplos";
import ComponenteClase from "./components/ejemplos/ComponenteClase";
import ComponenteFuncion from "./components/ejemplos/ComponenteFuncion";
import IndexUsuarios from "./components/usuarios";
import IndexCategorias from "./components/categorias";
import IndexProductos from "./components/productos";

function App() {
    return (
        <div className="App">
            <Navbar logged={false}></Navbar>

            <Routes>
                <Route path="/" element={<Index></Index>} />
                <Route path="/login" element={<LoginForm />} />
                <Route path="/nosotros" element={<Nosotros></Nosotros>} />
                <Route
                    path="/usuario"
                    element={<IndexUsuarios></IndexUsuarios>}
                ></Route>
                <Route
                    path="/producto"
                    element={<IndexProductos></IndexProductos>}
                ></Route>
                <Route
                    path="/categoria"
                    element={<IndexCategorias></IndexCategorias>}
                ></Route>
                <Route path="/ejemplos">
                    <Route
                        path="/ejemplos"
                        element={<IndexEjemplos></IndexEjemplos>}
                    ></Route>
                    <Route
                        path="/ejemplos/clase"
                        element={
                            <ComponenteClase
                                msn={"Mensaje a traves de props CLASE"}
                            ></ComponenteClase>
                        }
                    ></Route>
                    <Route
                        path="/ejemplos/funcion"
                        element={
                            <ComponenteFuncion
                                msn={"Mensaje a traves de props"}
                            ></ComponenteFuncion>
                        }
                    ></Route>
                </Route>
            </Routes>
            <Footer></Footer>
        </div>
    );
}

export default App;
