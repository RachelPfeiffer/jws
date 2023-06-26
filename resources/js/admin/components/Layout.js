import React from 'react';
import { Link } from 'react-router-dom';

const Layout = () => {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to="/admin">Dashboard</Link>
                    </li>
                    <li>
                        <Link to="/admin/students">Students</Link>
                    </li>
                    <li>
                        <Link to="/admin/courses">Courses</Link>
                    </li>
                    <li>
                        <Link to="/admin/cycles">Cycles</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Layout;