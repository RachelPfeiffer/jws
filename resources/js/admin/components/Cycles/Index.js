import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const CyclesList = () => {
    const [cycles, setCycles] = useState([]);
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch("/api/cycles")
            .then(response => {
                return response.json();
            })
            .then(data => {
                setCycles(data);
            });
    }, []);

    useEffect(() => {
        fetch("/api/courses")
            .then(response => {
                return response.json();
            })
            .then(data => {
                console.log(data);
                setCourses(data);
            });
    }, []);

    return (
        <div>
            <h1>Cycles</h1>
            <Link to="/admin/cycles/create" className="btn btn-primary">Create Cycle</Link>
            {courses.length > 0 ? (
                <table className="table">
                    <thead>
                    <tr>
                        <th scope="col">Course</th>
                        <th scope="col">Location</th>
                        <th scope="col">Start Date</th>
                        <th scope="col"></th>
                    </tr>
                    </thead>
                    <tbody>
                    {cycles.map(cycle => {
                        return (
                            <tr key={cycle.id}>
                                <td>
                                    <Link to={`/admin/cycles/${cycle.id}`} className="btn btn-primary">{courses.find(course => course.id === cycle.course_id).title}</Link>
                                </td>
                                <td>{cycle.location}</td>
                                <td>{cycle.start_date}</td>
                                <td>
                                    <Link to={`/admin/cycles/${cycle.id}/edit`} className="btn btn-primary">Edit Cycle Info</Link>
                                </td>
                            </tr>
                        );
                    })}
                    </tbody>
                </table>
            ) : (
                <div>Loading...</div>
            )}
        </div>
    )};

export default CyclesList;