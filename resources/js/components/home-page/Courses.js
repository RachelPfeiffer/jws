import React, { useState, useEffect } from 'react';
import CourseCard from './CourseCard';
import { Link } from 'react-router-dom';

function Courses() {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('/api/courses')
            .then(response => {
                return response.json();
            })
            .then(courses => {
                setCourses(courses);
            });
    }, []);

    return (
        <div className="container">
            <div className="row g-3">
                {courses.slice(0,6).map(course => {
                    return (
                        <div className="col-sm-4" key={course.id} style={{}}>
                            <CourseCard course={course} />
                        </div>
                    );
                })}
            </div>
            <div className="row">
                <a className="btn btn-primary" style={{display: "block", width: "350px", margin: "30px auto", textTransform: "uppercase", fontSize: "17px"}} href="/courses">All Courses</a>
            </div>
        </div>
    );
}

export default Courses;

