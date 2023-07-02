import React from "react";

const Camps = () => {
    let camps = ["morasha.JPG", "sternberg.png", "CDG.JPG", "aicamps.png", "chaviva.JPG", "oorah.png" ];

    return (
        <div className="container-fluid">
                <h3 className="text-center text-uppercase p-5">Our Graduates Work In Jewish Camps Everywhere!</h3>
            <div className="row p-5">
                {camps.map((camp) => (
                    <div key={camp} className="col-sm-2 text-center">
                        <img src={"img/logos/" + camp} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Camps;