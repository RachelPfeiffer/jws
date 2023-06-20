import React from 'react';


function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <p className="text-muted">©  { new Date().getFullYear() } Company, Inc.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}


export default Footer;