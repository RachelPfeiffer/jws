import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Courses = () => {
    const [courses, setCourses] = useState([]);
    const handleDelete = id => {
        fetch(`/api/courses/${id}`, {
            method: 'DELETE'
        })
            .then(res => {
                const updatedCourses = courses.filter(course => course.id !== id);
                setCourses(updatedCourses);
            })
    };

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
        <div className="main-content">
            <h1>Courses</h1>
            <Link to="/admin/courses/create" className="btn btn-primary">Create Course</Link>
            <table className="table table-striped">
                <thead>
                <tr>
                    <th scope="col">Title</th>
                    <th scope="col">Description</th>
                    <th scope="col">Price</th>
                </tr>
                </thead>
                <tbody>
                {courses.map(course => {
                    return (
                        <tr key={course.id}>
                            <td><Link to={`/admin/courses/${course.id}`}>{course.title}</Link></td>
                            <td>{course.description}</td>
                            <td>{course.price}</td>
                            <td><Link to={`/admin/courses/${course.id}/edit`} className="btn btn-primary">Edit</Link></td>
                            <td><button className="btn btn-danger" onClick={() => handleDelete(course.id)}>Delete</button></td>
                        </tr>
                    );
                })}
                </tbody>
            </table>
        </div>
    );
};

export default Courses;