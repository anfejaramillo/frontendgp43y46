import eliminar from "./eliminar.png";

function DeleteTool(props) {
    if (props.tools.indexOf("delete") >= 0) {
        return <img src={eliminar} alt="Edit" width={20} />;
    }
    return null;
}

export default DeleteTool;
