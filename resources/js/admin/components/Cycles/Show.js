import React, { useState, useEffect } from "react";
import {Link, useParams} from "react-router-dom";

const Cycle = props => {
    const { id } = useParams();
    const [cycle, setCycle] = useState([]);
    const [course, setCourse] = useState([]);
    const [courseStudents, setCourseStudents] = useState([]);
    const [allStudents, setAllStudents] = useState([]);
    const [newStudent, setNewStudent] = useState(false);
    const [addStudent, setAddStudent] = useState(false);
    const [student, setStudent] = useState({
        name: "",
        email: "",
        phone: "",
        password: ""
    });

    const handleAddStudent = event => {
        event.preventDefault();
        setAddStudent(true);
    };

    const handleNewStudent = event => {
        event.preventDefault();
        setNewStudent(true);
    };

    const handleStudentChange = event => {
        setStudent({
            ...student,
            [event.target.name]: event.target.value
        });
    };

    const handleStudentSubmit = event => {
        event.preventDefault();
        fetch("/api/students", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(student)
        })
            .then(response => {
                return response.json();
            })
            .then(data => {
                console.log(data);
                setAllStudents(data.data);
                setNewStudent(false);
            });
    };


    //we need to send the student id and the course id to the backend
    const handleAddStudentToCycle = event => {
        event.preventDefault();
        fetch("/api/cycles/" + id + "/students", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(student)
        })
            .then(response => {
                return response.json();

            })
            .then(data => {
                console.log(data);
                setCourseStudents([...courseStudents, data.data]);
                setAddStudent(false);
                setStudent({
                    name: "",
                    email: "",
                    phone: "",
                    password: ""
                });
                setNewStudent(false);

            });
            };

    const handleRemoveStudent = studentId => {
        fetch("/api/cycles/" + id + "/students/" + studentId, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(response => {
                return response.json();
            })
            .then(data => {
                console.log(data);
                setCourseStudents(courseStudents.filter(student => student.id !== studentId));
            });
    };

    useEffect(() => {
        fetch("/api/cycles/" + id)
            .then(response => {
                return response.json();
            })
            .then(data => {
                setCycle(data.data.cycle);
                setCourse(data.data.course);
                setCourseStudents(data.data.students);
            });
    }, []);

    useEffect(() => {
        fetch("/api/students")
            .then(response => {
                return response.json();
            })
            .then(data => {
                setAllStudents(data);
            });
    }, []);

    return (
        <div>
            <Link to={"/cycles/" + cycle.id + "/edit"} className="btn btn-primary float-end">Edit</Link>
            <h1>{course.title} - {cycle.start_date} ({cycle.location})</h1>
                    <p>{course.description}</p>
            <h4>Students</h4>
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
                {courseStudents.map(student => (
                    <tr key={student.id}>
                        <td>{student.name}</td>
                        <td>{student.email}</td>
                        <td>{student.phone}</td>
                        <td>
                            <button onClick={() => handleRemoveStudent(student.id)}>Remove</button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
            {!addStudent && <button onClick={handleAddStudent}>Add Student</button>}
            {addStudent &&   <form onSubmit={handleStudentSubmit}>
                <div>
                    <h6>Add Student</h6>
                    <div className="d-flex">
                        <select name="student" onChange={handleStudentChange} required>
                            <option value="">Select a student</option>
                            {allStudents.map(student => (
                                <option key={student.id} value={student.id}>
                                    {student.name}
                                </option>
                            ))}
                        </select>
                        <button type="submit" onClick={handleAddStudentToCycle}>Submit</button>
                    </div>
                </div>


            <br />
                {!newStudent && <button onClick={handleNewStudent}>New Student</button>}
            </form>}
            {newStudent && (
                <form className="card bg-white col-md-4"  onSubmit={handleStudentSubmit}>
                    <div className="card-header">
                    <h6>Add New Student</h6>
                    </div>
                    <div className="card-body">
                    <div className="form-group">
                        <label>Name</label>
                        <input className="form-control" type="text" name="name" onChange={handleStudentChange} />
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input className="form-control" type="text" name="email" onChange={handleStudentChange} />
                    </div>
                    <div className="form-group">
                        <label>Phone</label>
                        <input className="form-control" type="text" name="phone" onChange={handleStudentChange} />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input className="form-control" type="password" name="password" onChange={handleStudentChange} />
                    </div>
                    <button className="btn btn-primary mt-3 float-end" type="submit">Submit</button>
                    </div>
                </form>
            )}
                        </div>
                        );
                    };

                        export default Cycle;

