import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import StudentForm from "./AddStudent";
import { toast, ToastContainer } from "react-toastify";

const Students = () => {
    const [students, setStudents] = useState([]);

    useEffect(() => {
        fetch("/api/students")
            .then(response => {
                return response.json();
            })
            .then(data => {
                setStudents(data);
            });
    }, []);

    const handleRemoveStudent = id => {
        fetch("/api/students/" + id, {
            method: "DELETE"
        })
            .then(response => {
                return response.json();
            })
            .then(data => {
                setStudents(
                    students.filter(student => student.id !== id)
                );
            });
    }

    const [student, setStudent] = useState({
        name: "",
        email: "",
        phone: "",
        password: ""
    });

    const handleStudentChange = event => {
        const { name, value } = event.target;
        setStudent({
            ...student,
            [name]: value
        });
    };

    const handleStudentSubmit = event => {
        event.preventDefault();
        const data = {
            name: student.name,
            email: student.email,
            phone: student.phone,
            password: student.password
        };

        fetch("/api/students", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
            .then(response => response.json())
            .then(data => {
                //if code is not 200, toast the error message
                if(data.code !== 200) {
                    toast(data.message);
                    return;
                }
                setStudent({
                    name: "",
                    email: "",
                    phone: "",
                    password: ""
                });
                console.log(data);
                console.log(student);

                setStudents(data.data);
            })
            .catch(error => {
                console.log(error);
            });
    };

    return (
        <div>
            <ToastContainer />
            <h1>Students</h1>
            {students ? (

                <table className="table table-striped">
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {students.map(student => (
                        <tr key={student.id}>
                            <td>{student.name}</td>
                            <td>{student.email}</td>
                            <td>{student.phone}</td>
                            <td>
                                <Link to={"/admin/students/" + student.id} className="btn btn-primary">
                                    Edit
                                </Link>
                                <button
                                    className="btn btn-danger"
                                    onClick={() => handleRemoveStudent(student.id)}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            ) : (
                <div>Loading...</div>
            )}
            <StudentForm handleStudentSubmit={handleStudentSubmit} handleStudentChange={handleStudentChange} />
        </div>
    );
};

export default Students;

