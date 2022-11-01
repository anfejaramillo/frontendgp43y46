import editar from "./editar.png";
function UpdateTool(props) {
    if (props.tools.indexOf("update") >= 0) {
        return <img src={editar} alt="Edit" width={20} />;
    }
    return null;
}

export default UpdateTool;
