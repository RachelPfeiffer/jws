import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {toast, ToastContainer} from "react-toastify";
import {useParams} from "react-router-dom";


const Student = props => {
    const initialStudentState = {
        id: null,
        name: "",
        email: "",
        phone: "",
        password: ""
    };

    const [currentStudent, setCurrentStudent] = useState(initialStudentState);
    const { id } = useParams();

    const getStudent = id => {
        fetch(`/api/students/${id}`)
            .then(response => {
                return response.json();
            })
            .then(data => {
                setCurrentStudent(data.data);
                console.log(data);
            })
            .catch(e => {
                console.log(e);
            });
    };

    useEffect(() => {
        getStudent(id);
    }, [id]);

    const handleInputChange = event => {
        const { name, value } = event.target;
        setCurrentStudent({ ...currentStudent, [name]: value });
    };

    const updateStudent = () => {
        fetch(`/api/students/${currentStudent.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(currentStudent)
        })
            .then(response => {
                return response.json();
            })
            .then(data => {
                console.log(data);
                if(data.code === 200) {
                    props.history.push("/students");
                } else {
                    toast(data.message);
                }
            })

            .catch(e => {
                console.log(e);
            });
    };

    const deleteStudent = () => {
        fetch(`/api/students/${currentStudent.id}`, {
            method: "DELETE"
        })
            .then(response => {
                console.log(response);
                props.history.push("/students");
                toast("The student was deleted successfully!");
            })
            .catch(e => {
                console.log(e);
            });
    };

    return (
        <div>
            {currentStudent ? (
                <div className="edit-form">
                    <ToastContainer />
                    <h4>Student</h4>
                    <form>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" className="form-control" id="name" name="name" value={currentStudent.name} onChange={handleInputChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Name</label>
                            <input type="text" className="form-control" id="email" name="email" value={currentStudent.email} onChange={handleInputChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="phone">Phone</label>
                            <input type="text" className="form-control" id="phone" name="phone" value={currentStudent.phone} onChange={handleInputChange} />
                        </div>
                    </form>

                    <button className="btn btn-danger mr-2" onClick={deleteStudent}>
                        Delete
                    </button>

                    <button type="submit" className="btn btn-primary" onClick={updateStudent}>
                        Update
                    </button>

                </div>
            ) : (
                <div>
                    <br />
                    <p>Please click on a Student...</p>
                </div>
            )}
        </div>
    );
};

export default Student;