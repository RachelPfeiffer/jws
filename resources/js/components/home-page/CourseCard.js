import React from 'react';

function CourseCard(props) {
    return (
        <div className="card">
            <img src={props.course.icon} className="card-img-top" alt="..." />
            <div className="card-body">
                <h4 className="card-title">{props.course.title}</h4>
                <h6 className="card-subtitle mb-2 text-muted">{props.course.hours}</h6>
                <p className="card-text">{props.course.description}</p>
                <a href="#" className="btn btn-primary">
                    Sign Up
                </a>
            </div>
        </div>
    );
}

export default CourseCard;