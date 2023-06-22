import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from "./Layout";
import Dashboard from "./Dashboard";
import Students from "./Students";
import Courses from "./Courses";
import Cycles from "./Cycles";
import PageNotFound from "./PageNotFound";

const App = () => {
    return (
        <div>
        <Router>
            <Layout />
            <Routes>
                <Route path="/admin/" element={<Dashboard />} />
                <Route path="/admin/students" element={<Students />} />
                <Route path="/admin/courses" element={<Courses />} />
                <Route path="/admin/cycles" element={<Cycles />} />
                <Route path="/admin/*" element={<PageNotFound />} />
            </Routes>
        </Router>
        </div>
    );
};

export default App;