import React from 'react';



function About() {
    return (
            <div className="container text-white text-center">
                <h1 className="display-4 text-uppercase">Let's get you certified!</h1>
                <hr className="my-4" />
                <p className="lead">We offer all the courses you need to become a lifeguard, lifeguard instructor, certified First Aid professional, and more! Check out our current course offerings below or contact us to ask about a custom course for your group!</p>
                <h2 className="text-uppercase">We Teach:</h2>
                <ul className="text-left">
                    <li>Lifeguarding</li>
                    <li>Lifeguard Refresher</li>
                    <li>WSI (Swimming Instructor)</li>
                    <li>Lifeguard Management</li>
                    <li>Junior Lifeguarding</li>
                    <li>Shallow Water Lifeguarding</li>
                    <li>CPR/AED for the Professional Rescuer and Health Care Provider</li>
                    <li>BLS - Basic Life Support</li>
                    <li>Adult and Pediatric First Aid/CPR/AED</li>
                    <li>RTE - Responding to Emergencies</li>
                    <li>Basic Water Rescue</li>
                </ul>
                <a className="btn btn-primary btn-lg" href="#" role="button">Get started!</a>
            </div>
    );
}


export default About;