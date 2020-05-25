import React from 'react';

function PageNotFound() {

    return (
        <div className="container" style={{ justifyContent: "center" }}>
            <div className="jumbotron" style={{ backgroundColor: "#0f1323", color: "white", marginTop: "10px", textAlign: "center" }}>
                <div className="container">
                    <h1 className="display-7" style={{ color: "white" }}>404. Esta página no existe :(</h1>
                    <h5 className="display-7" style={{ color: "white" }}>No hemos podido localizar la página que buscas.</h5>
                    <br />
                    <strong><a className="display-7" style={{ color: "white" }} href="http://localhost:3000/PQRS">¡Haz click aquí para reportar este problema!</a></strong>
                </div>
            </div>
        </div>
    );
}

export default PageNotFound;