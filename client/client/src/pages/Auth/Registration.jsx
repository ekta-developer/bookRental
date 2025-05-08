import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";

const Registration = () => {
  return (
    // <Container fluid className="bg-light p-0">
    //   <Row className="g-0" style={{ minHeight: '100vh' }}>
    //     {/* Left Side - Image */}
    //     <Col md={6} className="d-none d-md-block">
    //       <img
    //         src="/path-to-your/register.jpg" // <-- Replace with actual path
    //         alt="Register Visual"
    //         style={{ width: '100%', height: '100vh', objectFit: 'cover' }}
    //       />
    //     </Col>

    //     {/* Right Side - Form Section */}
    //     <Col xs={12} md={6} className="d-flex align-items-center justify-content-center bg-white">
    //       <div className="w-100 p-4" style={{ maxWidth: '400px' }}>
    //         <h2 className="text-center mb-4">Register</h2>

    //         {/* Full Name */}
    //         <div className="mb-3">
    //           <label className="form-label">
    //             <FaUser className="me-2" /> Full Name
    //           </label>
    //           <input type="text" className="form-control" placeholder="Enter full name" />
    //         </div>

    //         {/* Email or Phone */}
    //         <div className="mb-3">
    //           <label className="form-label">
    //             <FaEnvelope className="me-2" /> Email or Phone Number
    //           </label>
    //           <input type="text" className="form-control" placeholder="Enter email or phone" />
    //         </div>

    //         {/* Password */}
    //         <div className="mb-3">
    //           <label className="form-label">
    //             <FaLock className="me-2" /> Password
    //           </label>
    //           <input type="password" className="form-control" placeholder="Enter password" />
    //         </div>

    //         {/* Confirm Password */}
    //         <div className="mb-3">
    //           <label className="form-label">
    //             <FaLock className="me-2" /> Confirm Password
    //           </label>
    //           <input type="password" className="form-control" placeholder="Confirm password" />
    //         </div>

    //         {/* Terms Checkbox */}
    //         <div className="form-check mb-3">
    //           <input type="checkbox" className="form-check-input" id="termsCheck" />
    //           <label className="form-check-label" htmlFor="termsCheck">
    //             Lorem Ipsum is simply dummy text of the printing and type.
    //           </label>
    //         </div>

    //         {/* Register Button */}
    //         <Button
    //           className="w-100 mb-3"
    //           style={{ background: 'linear-gradient(to right, #11998e, #38ef7d)', border: 'none' }}
    //         >
    //           Register
    //         </Button>

    //         {/* Social Buttons */}
    //         <p className="text-center mb-2">Register in with</p>
    //         <div className="d-flex justify-content-center gap-3 mb-3">
    //           <Button variant="outline-secondary"><i className="bi bi-google"></i> Google</Button>
    //           <Button variant="outline-primary"><i className="bi bi-facebook"></i> Facebook</Button>
    //         </div>

    //         {/* Log in Link */}
    //         <p className="text-center">
    //           Already have an account? <a href="/login">Log in</a>
    //         </p>
    //       </div>
    //     </Col>
    //   </Row>
    // </Container>
    <>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-6" style={{border:"1px solid red"}}>Left</div>
            <div className="col-6" style={{border:"1px solid blue"}}>Right</div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Registration;
