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
import EjemploHooks from "./components/ejemplos/EjemploHooks";
import ComponenteClase from "./components/ejemplos/ComponenteClase";
import ComponenteFuncion from "./components/ejemplos/ComponenteFuncion";
import IndexUsuarios from "./components/usuarios";
import IndexCategorias from "./components/categorias";
import CreateCategory from "./components/categorias/createCategory";
import ActualizarCategoria from "./components/categorias/actualizarCategoria";
import EliminarCategoria from "./components/categorias/eliminarCategoria";
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
                <Route path="/categoria">
                    <Route
                        path="/categoria"
                        element={<IndexCategorias></IndexCategorias>}
                    ></Route>
                    <Route
                        path="/categoria/create"
                        element={<CreateCategory></CreateCategory>}
                    ></Route>
                    <Route path="/categoria/delete">
                        <Route
                            path=":idCategory"
                            element={<EliminarCategoria></EliminarCategoria>}
                        ></Route>
                    </Route>
                    <Route path="/categoria/update">
                        <Route
                            path=":idCategory"
                            element={
                                <ActualizarCategoria></ActualizarCategoria>
                            }
                        ></Route>
                    </Route>
                </Route>
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
                    <Route
                        path="/ejemplos/hooks"
                        element={<EjemploHooks />}
                    ></Route>
                </Route>
            </Routes>
            <Footer></Footer>
        </div>
    );
}

export default App;
