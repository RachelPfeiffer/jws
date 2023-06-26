import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from "./Layout";
import Dashboard from "./Dashboard";
import Students from "./Students";
import Courses from "./Courses/Index";
import CreateCourse from "./Courses/Create";
import EditCourse from "./Courses/Edit";
import Cycles from "./Cycles";
import PageNotFound from "./PageNotFound";

const App = () => {
    return (
        <div className="admin-dashboard">
            <Router>
                <Layout />
                <div className="right">
                    <Routes>
                        <Route path="/admin/" element={<Dashboard />} />
                        <Route path="/admin/students" element={<Students />} />
                        <Route path="/admin/courses" element={<Courses />} />
                        <Route path="/admin/course/create" element={<CreateCourse />} />
                        <Route path="/admin/cycles" element={<Cycles />} />
                        <Route path="/admin/course/:id" element={<EditCourse />} />
                        <Route path="/admin/course/:id/edit" element={<EditCourse />} />
                        <Route path="/admin/*" element={<PageNotFound />} />
                    </Routes>
                </div>
            </Router>
        </div>
    );
};

export default App;

//                    <Route path="/admin/student/:id" element={<EditStudent />} />
//                     <Route path="/admin/student/:id/edit" element={<EditStudent />} />
//                     <Route path="/admin/student/:id/delete" element={<DeleteStudent />} />
//                     <Route path="/admin/cycle/:id" element={<EditCycle />} />
//                     <Route path="/admin/cycle/:id/edit" element={<EditCycle />} />
//                     <Route path="/admin/cycle/:id/delete" element={<DeleteCycle />} />