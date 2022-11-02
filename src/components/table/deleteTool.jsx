import eliminar from "./eliminar.png";
import { Link } from "react-router-dom";

function DeleteTool(props) {
    if (props.tools.indexOf("delete") >= 0) {
        let url = props.path + "/delete/" + props.id;
        return (
            <Link to={url}>
                <img src={eliminar} alt="Edit" width={20} />
            </Link>
        );
    }
    return null;
}

export default DeleteTool;
