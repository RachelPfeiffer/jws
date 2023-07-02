import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from "./Layout";
import Dashboard from "./Dashboard";
import Students from "./Students/Index.js";
import EditStudent from "./Students/Edit";
import Courses from "./Courses/Index";
import CreateCourse from "./Courses/Create";
import EditCourse from "./Courses/Edit";
import Cycles from "./Cycles/Index";
import Cycle from "./Cycles/Show";
import CreateCycle from "./Cycles/Create";
import EditCycle from "./Cycles/Edit";
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
                        <Route path="/admin/students/:id" element={<EditStudent />} />
                        <Route path="/admin/students/:id/edit" element={<EditStudent />} />
                        <Route path="/admin/courses" element={<Courses />} />
                        <Route path="/admin/courses/create" element={<CreateCourse />} />
                        <Route path="/admin/courses/:id" element={<EditCourse />} />
                        <Route path="/admin/courses/:id/edit" element={<EditCourse />} />
                        <Route path="/admin/cycles" element={<Cycles />} />
                        <Route path="/admin/cycles/create" element={<CreateCycle />} />
                        <Route path="/admin/cycles/:id" element={<Cycle />} />
                        <Route path="/admin/cycles/:id/edit" element={<EditCycle />} />
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