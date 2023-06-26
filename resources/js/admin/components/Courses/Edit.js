import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

const EditCourse = props => {
    const { id } = useParams();

    const initialCourseState = {
        id: null,
        title: '',
        description: '',
        price: '',
        skills_taught: '',
        hours: '',
        icon: '',
        age_requirement: ''
    };

    const [course, setCourse] = useState(initialCourseState);

    const getCourse = id => {
        fetch(`/api/courses/${id}`)
            .then((response) => {
                return response.json().then((response) => {
                    setCourse(response.data);
                    console.log(response.data);
                })

                    .catch(e => {
                            console.log(e);
                        }
                    );
            });
    };

    const handleInputChange = event => {
        const { name, value } = event.target;
        setCourse({ ...course, [name]: value });
    };

    const updateCourse = (event) => {
        event.preventDefault();
        const data = {
            title: course.title,
            description: course.description,
            price: course.price,
            skills_taught: course.skills_taught,
            hours: course.hours,
            icon: course.icon,
            age_requirement: course.age_requirement
        };

        fetch(`/api/courses/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(response => {
                setCourse({ ...course, data });
                toast('Course updated successfully!');

            })
            .catch(e => {
                console.log(e);
            });

    };

    useEffect(() => {
        getCourse(id);
    }, [id]);

    return (
        <div className="main-content">
            <ToastContainer />
            <h1>Edit Course</h1>
            <form>
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input
                        type="text"
                        className="form-control"
                        id="title"
                        required
                        defaultValue={course.title}
                        onChange={handleInputChange}
                        name="title"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <input type="text" className="form-control" id="description" required defaultValue={course.description} onChange={handleInputChange} name="description" />
                </div>

                <div className="form-group">
                    <label htmlFor="price">Price</label>
                    <input type="text" className="form-control" id="price" required defaultValue={course.price} onChange={handleInputChange} name="price" />
                </div>
                <div className="form-group">
                    <label htmlFor="age_requirement">Minimum Age</label>
                    <input type="text" className="form-control" id="price" required defaultValue={course.age_requirement} onChange={handleInputChange} name="age_requirement" />
                </div>
                <div className="form-group">
                    <label htmlFor="skills_taught">Skills Taught</label>
                    <textarea type="text" className="form-control" id="skills_taught" required defaultValue={course.skills_taught} onChange={handleInputChange} name="skills_taught" ></textarea>
                </div>

                <div className="form-group">
                    <label htmlFor="hours">Hours</label>
                    <input type="text" className="form-control" id="hours" required defaultValue={course.hours} onChange={handleInputChange} name="hours" />
                </div>

                <div className="form-group">
                    <label htmlFor="icon">Icon</label>
                    <input type="text" className="form-control" id="icon" required defaultValue={course.icon} onChange={handleInputChange} name="icon" />
                </div>

                <button onClick={updateCourse} className="btn btn-primary">
                    Update
                </button>
            </form>
        </div>
    );
};

export default EditCourse;