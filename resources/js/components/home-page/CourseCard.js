import React from 'react';

function CourseCard(props) {
    return (
        <div className="card m-3">
            <div className="card-header text-center pt-3">
                <div><i className={props.course.icon}></i></div>
                    <h3 className="card-title m-3">{props.course.title}</h3>
                <p className="card-text small">{props.course.description}</p>
            </div>
            <div className="card-body">
                <p className="bigger">Skills Taught:</p>
                <p>{props.course.skills_taught}</p>
                <a href="#" className="btn btn-primary">
                    Sign Up
                </a>
            </div>
            <div className="card-footer  d-flex pt-3">
                <i className="fa fa-clock"></i>
                <h6 className="px-3">{props.course.hours} Hours</h6>

                <i className="fa fa-calendar ml-2"></i>
                <h6 className="px-3">Minimum Age: {props.course.age_requirement}</h6>
            </div>
        </div>
    );
}

export default CourseCard;