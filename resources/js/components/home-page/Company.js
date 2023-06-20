import React from 'react';

function Company() {
    return (
        <div className="container-fluid text-center">
            <div className="row">
                <div className="col-sm-4">
                    <img src="img/medal.png" alt="" />
                    <h3>Experienced Instructor</h3>
                    <p>Thousands of happy customers so far!</p>
                </div>
                <div className="col-sm-4">
                    <img src="img/home.png" alt="" />
                    <h3>Close to home</h3>
                    <p>
                        You bring 4 interested participants and we will work to
                        arrange a course in your area (NYC, upstate NY, or the
                        tristate area).
                    </p>
                </div>
                <div className="col-sm-4">
                    <img src="img/verified.png" alt="" />
                    <h3>Latest Techniques</h3>
                    <p>
                        Course material includes Red Cross standards for 2019.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Company;