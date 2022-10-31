import React from "react";

class ComponenteClase extends React.Component {
    render() {
        return (
            <div>
                <h3>Este es un componente tipo clase.</h3>
                <p>Viene con el mensaje {this.props.msn}</p>
            </div>
        );
    }
}

export default ComponenteClase;
