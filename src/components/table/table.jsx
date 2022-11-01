import Header from "./header";
import Body from "./body";

function Table(props) {
    // props.data={data}
    // props.name={"Lista de Categorias"}
    // props.columns={["id", "name", "description"]}
    // props.columnsAlias={["ID", "Nombre", "Descripcion"]}
    // props.tools={["update", "delete"]}
    // props.path={"/categoria"}
    return (
        <table class="table table-striped">
            <caption>{props.name}</caption>
            <Header columns={props.columnsAlias} tools={props.tools} />
            <Body
                data={props.data}
                columns={props.columns}
                tools={props.tools}
                path={props.path}
            />
        </table>
    );
}

export default Table;
