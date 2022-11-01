function Header(props) {
    //props.columns
    let toolsColumn = <></>;
    if (props.tools && props.tools.length > 0) {
        toolsColumn = <th scope="col">Tools</th>;
    }
    return (
        <thead>
            <tr>
                {props.columns.map(function (value, index) {
                    return <th scope="col">{value}</th>;
                })}
                {toolsColumn}
            </tr>
        </thead>
    );
}

export default Header;
