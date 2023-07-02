import React from 'react';

function CourseCard(props) {
    return (
        <a href={`/courses/${props.course.id}`} className="course text-decoration-none text-dark">
        <div className="card mb-3" style={{height: "100%"}}>
            <div className="card-body pt-3 mt-3">
                <div className="d-flex justify-content-between" style={{alignItems: "center"}}>
                    <h3 className="card-title ">{props.course.title}</h3>
                    <i className={props.course.icon}></i></div>

                <p className="mt-3 mb-0"><strong>Skills You'll Learn:</strong><br />
                {props.course.skills_taught}</p>
            </div>
            <div className="card-footer  d-flex pt-3">
                <i className="fa fa-clock"></i>
                <h6 className="px-3">{props.course.hours} Hours</h6>

                <i className="fa fa-calendar ml-2"></i>
                <h6 className="px-3">Minimum Age: {props.course.age_requirement}</h6>
            </div>
        </div>
        </a>
    );
}

export default CourseCard;