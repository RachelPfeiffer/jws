import React, { useState } from 'react';
import {toast, ToastContainer} from "react-toastify";

const Create = () => {
    const [course, setCourse] = useState({
        title: '',
        description: '',
        price: '',
        ageRequirement: '',
        skillsTaught: '',
        hours: '',
        icon: ''
    });

    const handleSubmit = e => {
        e.preventDefault();
        fetch('/api/courses', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(course)
        })
            .then((response) => {
                console.log(response.status);
                if(response.status === 500) {
                    toast('Error creating course!', {type: 'error'});
                } else {
                    //redirect to courses index
                    window.location.href = '/admin/courses';
                }
            });
    }

    return (
        <div>
            <ToastContainer />
            <h1>Create Course</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input type="text" className="form-control" id="title" value={course.title} onChange={e => setCourse({...course, title: e.target.value})} />
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <input type="text" className="form-control" id="description" value={course.description} onChange={e => setCourse({...course, description: e.target.value})} />
                </div>
                <div className="form-group">
                    <label htmlFor="price">Price</label>
                    <input type="text" className="form-control" id="price" value={course.price} onChange={e => setCourse({...course, price: e.target.value})} />
                </div>
                <div className="form-group">
                    <label htmlFor="ageRequirement">Age Requirement</label>
                    <input type="text" className="form-control" id="ageRequirement" value={course.age_requirement} onChange={e => setCourse({...course, age_requirement: e.target.value})} />
                </div>
                <div className="form-group">
                    <label htmlFor="skillsTaught">Skills Taught</label>
                    <textarea type="text" className="form-control" id="skillsTaught" value={course.skills_taught} onChange={e => setCourse({...course, skills_taught: e.target.value})} ></textarea>
                </div>
                <div className="form-group">
                    <label htmlFor="hours">Hours</label>
                    <input type="text" className="form-control" id="hours" value={course.hours} onChange={e => setCourse({...course, hours: e.target.value})} />
                </div>
                <div className="form-group">
                    <label htmlFor="icon">Icon</label>
                    <input type="text" className="form-control" id="icon" value={course.icon} onChange={e => setCourse({...course, icon: e.target.value})} />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
}

export default Create;

