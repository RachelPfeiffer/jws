import React from "react";

const StudentForm = ({ handleStudentSubmit, handleStudentChange }) => {
    return (

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
    );
};

export default StudentForm;