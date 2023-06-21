import React, { useState, useEffect } from 'react';
import CourseCard from './CourseCard';

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
            <h2 className="text-center text-uppercase fw-bold mb-3">Which certification do you need?</h2>
            <div className="row">
                {courses.map(course => {
                    return (
                        <div className="col-sm-4" key={course.id}>
                            <CourseCard course={course} />
                        </div>
                    );
                })}
            </div>
            <div className="row">
                <p>Don't see the course you need? No worries! Contact us and we'll let you know if we offer your certification.</p>
            </div>
        </div>
    );
}

export default Courses;