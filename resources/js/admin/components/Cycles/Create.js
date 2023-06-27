import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {toast, ToastContainer} from "react-toastify";

const CreateCycle = () => {
    const initialCycleState = {
        id: null,
        name: "",
        start_date: new Date().toISOString().slice(0, 10),
        location: "",
        course_id: ""
    };

    const [cycle, setCycle] = useState(initialCycleState);
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

    const saveCycle = e => {
        e.preventDefault();
        let data = {
            start_date: cycle.start_date,
            location: cycle.location,
            course_id: cycle.course_id
        };

        fetch("/api/cycles", {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(response => {
                console.log(response.status);
                if(response.status === 500) {
                    toast('Error creating cycle!', {type: 'error'});
                } else {
                    //redirect to courses index
                    window.location.href = '/admin/cycles';
                }            })
            .catch(e => {
                console.log(e);
            });
    };

    return (
        <div>
            <ToastContainer />
            <h1>Add Cycle</h1>
            <form>
                <div className="form-group">
                    <label htmlFor="start_date">Start Date</label>
                    <input type="date" className="form-control" id="start_date" name="start_date" value={cycle.start_date} onChange={handleInputChange} />
                </div>
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
                <button onClick={saveCycle} className="btn btn-success"> Submit </button>
            </form>
        </div>
    )};

export default CreateCycle;