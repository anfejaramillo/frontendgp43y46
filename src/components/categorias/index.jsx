import Table from "../table/table";
import { getData } from "../../js/getData";
import MainPage from "../table/mainPage";

function IndexCategorias(props) {
    let data = getData("url", {}, "get", {});

    return (
        <div className="mx-5">
            <div>
                <h3>Categorias</h3>
                <p>Bienvenido a la pagina de categorias</p>
            </div>
            <MainPage
                data={data}
                name={"Lista de Categorias"}
                columns={["id", "name", "description"]}
                columnsAlias={["ID", "Nombre", "Descripcion"]}
                tools={["update", "delete"]}
                path={"/categoria"}
            />
        </div>
    );
}

export default IndexCategorias;
