import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

const EditCycle = props => {
    const { id } = useParams();

    const initialCycleState = {
        id: null,
        start_date: "",
        location: "",
        course_id: ""
    };

    const [cycle, setCycle] = useState(initialCycleState);

    const getCycle = id => {
        fetch(`/api/cycles/${id}`)
            .then((response) => {
                return response.json().then((response) => {
                    setCycle(response.data);
                })

                    .catch(e => {
                            console.log(e);
                        }
                    );
            });
    };

    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch("/api/courses")
            .then(response => {
                return response.json();
            })
            .then(data => {
                setCourses(data);
            });
    }, []);

    const handleInputChange = event => {
        const { name, value } = event.target;
        setCycle({ ...cycle, [name]: value });
    };

    const updateCycle = (event) => {
        event.preventDefault();
        const data = {
            start_date: cycle.start_date,
            location: cycle.location,
            course_id: cycle.course_id
        };

        fetch(`/api/cycles/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(response => {
                setCycle({ ...cycle, data });
                toast('Cycle updated successfully!');

            })
            .catch(e => {
                console.log(e);
            });

    };

    useEffect(() => {
        getCycle(id);
    }, [id]);

    return (
        <div className="main-content">
            <ToastContainer />
            <h1>Edit Cycle</h1>
            <form>
                <div className="form-group">
                    <label htmlFor="location">Location</label>
                    <select className="form-control" id="location" name="location" value={cycle.location} onChange={handleInputChange}>
                        <option></option>
                        <option>Brooklyn</option>
                        <option>Teaneck</option>
                        <option>Far Rockaway</option>
                        <option>Lakewood</option>
                        <option>Monsey</option>
                        <option >Queens</option>
                        <option>Jerusalem</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="course_id">Course</label>
                    <select className="form-control" id="course_id" name="course_id" value={cycle.course_id} onChange={handleInputChange}>
                        <option></option>
                        {courses.map(course => {
                            return <option key={course.id} value={course.id}>{course.title}</option>;
                        })}
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="start_date">Start Date</label>
                    <input type="date" className="form-control" id="start_date" name="start_date" value={cycle.start_date} onChange={handleInputChange} />
                </div>
                <button onClick={updateCycle} className="btn btn-primary"> Update Cycle</button>

                <Link to="/admin/cycles" className="btn btn-primary"> Back to Cycles</Link>
            </form>
        </div>
    );
};

export default EditCycle;