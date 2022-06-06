import React from "react";
import Headerbottom from "./Headerbottom";
import { Link } from "react-router-dom";
import Carousel from "../component/Carousel";

const Navbar = () => {
    return (
<>

        <div className="agile-main-top">
            <div className="container-fluid">
                <div className="row main-top-w3l py-2">
                    <div className="col-lg-4 header-most-top">
                        <p className="text-white text-lg-left text-center">Offer Zone Top Deals & Discounts
                        <i className="fas fa-shopping-cart ml-1"></i>
                        </p>
				    </div>
                <div className="col-lg-8 header-right mt-lg-0 mt-2">
					<ul>
						<li className="text-center border-right text-white">
							<a className="play-icon popup-with-zoom-anim text-white" href="#small-dialog1">
								<i className="fas fa-map-marker mr-2"></i>Select Location</a>
						</li>
						<li className="text-center border-right text-white">
							
								<i className="fas fa-truck mr-2"></i>Track Order
						</li>
						<li className="text-center border-right text-white">
							<i className="fas fa-phone mr-2"></i> 001 234 5678
						</li>
						<li className="text-center border-right text-white">
							
								<i className="fas fa-sign-in-alt mr-2"></i> Log In 
						</li>
						<li className="text-center text-white">
						
								<i className="fas fa-sign-out-alt mr-2"></i>Register 
						</li>
					</ul>
					
				</div>
			</div>
		</div>
	</div>


	
	
	<div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-hidden="true">
		<div className="modal-dialog" role="document">
			<div className="modal-content">
				<div className="modal-header">
					<h5 className="modal-title text-center">Log In</h5>
					<button type="button" className="close" data-dismiss="modal" aria-label="Close">
						<span aria-hidden="true">&times;</span>
					</button>
				</div>
				<div className="modal-body">
					<form action="#" method="post">
						<div className="form-group">
							<label className="col-form-label">Username</label>
							<input type="text" className="form-control" placeholder=" " name="Name" required="" />
						</div>
						<div className="form-group">
							<label className="col-form-label">Password</label>
							<input type="password" className="form-control" placeholder=" " name="Password" required="" />
						</div>
						<div className="right-w3l">
							<input type="submit" className="form-control" value="Log in" />
						</div>
						<div className="sub-w3l">
							<div className="custom-control custom-checkbox mr-sm-2">
								<input type="checkbox" className="custom-control-input" id="customControlAutosizing" />
								<label className="custom-control-label" for="customControlAutosizing">Remember me?</label>
							</div>
						</div>
						<p className="text-center dont-do mt-3">Don't have an account?
							<a href="#" data-toggle="modal" data-target="#exampleModal2">
								Register Now</a>
						</p>
					</form>
				</div>
			</div>
		</div>
	</div>
	
	<div className="modal fade" id="exampleModal2" tabindex="-1" role="dialog" aria-hidden="true">
		<div className="modal-dialog" role="document">
			<div className="modal-content">
				<div className="modal-header">
					<h5 className="modal-title">Register</h5>
					<button type="button" className="close" data-dismiss="modal" aria-label="Close">
						<span aria-hidden="true">&times;</span>
					</button>
				</div>
				<div className="modal-body">
					<form action="#" method="post">
						<div className="form-group">
							<label className="col-form-label">Your Name</label>
							<input type="text" className="form-control" placeholder=" " name="Name" required="" />
						</div>
						<div className="form-group">
							<label className="col-form-label">Email</label>
							<input type="email" className="form-control" placeholder=" " name="Email" required="" />
						</div>
						<div className="form-group">
							<label className="col-form-label">Password</label>
							<input type="password" className="form-control" placeholder=" " name="Password" id="password1" required="" />
						</div>
						<div className="form-group">
							<label className="col-form-label">Confirm Password</label>
							<input type="password" className="form-control" placeholder=" " name="Confirm Password" id="password2" required="" />
						</div>
						<div className="right-w3l">
							<input type="submit" className="form-control" value="Register" />
						</div>
						<div className="sub-w3l">
							<div className="custom-control custom-checkbox mr-sm-2">
								<input type="checkbox" className="custom-control-input" id="customControlAutosizing2" />
								<label className="custom-control-label" for="customControlAutosizing2">I Accept to the Terms & Conditions</label>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	</div>

    <Headerbottom />

        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto text-center mr-xl-5">
                    <li className="nav-item active mr-lg-2 mb-lg-0 mb-2">
                        <Link className="nav-link" to="/Home">Home</Link>
                            <span className="sr-only">(current)</span>
                    </li>
                        <Link className="nav-link" to="/Electronics">Electronics</Link>
                        {/* <div className="dropdown-menu">
                            <div className="agile_inner_drop_nav_info p-4">
                                <h5 className="mb-3">Mobiles, Computers</h5>
                                <div className="row">
                                    <div className="col-sm-6 multi-gd-img">
                                        <ul className="multi-column-dropdown">
                                            <li>
                                                <a href="#">All Mobile Phones</a>
                                            </li>
                                            <li>
                                                <a href="#">All Mobile Accessories</a>
                                            </li>
                                            <li>
                                                <a href="#">Cases & Covers</a>
                                            </li>
                                            <li>
                                                <a href="#">Screen Protectors</a>
                                            </li>
                                            <li>
                                                <a href="#">Power Banks</a>
                                            </li>
                                            <li>
                                                <a href="#">All Certified Refurbished</a>
                                            </li>
                                            <li>
                                                <a href="#">Tablets</a>
                                            </li>
                                            <li>
                                                <a href="#">Wearable Devices</a>
                                            </li>
                                            <li>
                                                <a href="#">Smart Home</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="col-sm-6 multi-gd-img">
                                        <ul className="multi-column-dropdown">
                                            <li>
                                                <a href="#">Laptops</a>
                                            </li>
                                            <li>
                                                <a href="#">Drives & Storage</a>
                                            </li>
                                            <li>
                                                <a href="#">Printers & Ink</a>
                                            </li>
                                            <li>
                                                <a href="#">Networking Devices</a>
                                            </li>
                                            <li>
                                                <a href="#">Computer Accessories</a>
                                            </li>
                                            <li>
                                                <a href="#">Game Zone</a>
                                            </li>
                                            <li>
                                                <a href="#">Software</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div> */}

                    {/* <li className="nav-item dropdown mr-lg-2 mb-lg-0 mb-2">
                        <a className="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Appliances
                        </a>
                        <div className="dropdown-menu">
                            <div className="agile_inner_drop_nav_info p-4">
                                <h5 className="mb-3">TV, Appliances, Electronics</h5>
                                <div className="row">
                                    <div className="col-sm-6 multi-gd-img">
                                        <ul className="multi-column-dropdown">
                                            <li>
                                                <a href="#">Televisions</a>
                                            </li>
                                            <li>
                                                <a href="#">Home Entertainment Systems</a>
                                            </li>
                                            <li>
                                                <a href="#">Headphones</a>
                                            </li>
                                            <li>
                                                <a href="#">Speakers</a>
                                            </li>
                                            <li>
                                                <a href="#">MP3, Media Players & Accessories</a>
                                            </li>
                                            <li>
                                                <a href="#">Audio & Video Accessories</a>
                                            </li>
                                            <li>
                                                <a href="#">Cameras</a>
                                            </li>
                                            <li>
                                                <a href="#">DSLR Cameras</a>
                                            </li>
                                            <li>
                                                <a href="#">Camera Accessories</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="col-sm-6 multi-gd-img">
                                        <ul className="multi-column-dropdown">
                                            <li>
                                                <a href="#">Musical Instruments</a>
                                            </li>
                                            <li>
                                                <a href="#">Gaming Consoles</a>
                                            </li>
                                            <li>
                                                <a href="#">All Electronics</a>
                                            </li>
                                            <li>
                                                <a href="#">Air Conditioners</a>
                                            </li>
                                            <li>
                                                <a href="#">Refrigerators</a>
                                            </li>
                                            <li>
                                                <a href="#">Washing Machines</a>
                                            </li>
                                            <li>
                                                <a href="#">Kitchen & Home Appliances</a>
                                            </li>
                                            <li>
                                                <a href="#">Heating & Cooling Appliances</a>
                                            </li>
                                            <li>
                                                <a href="#">All Appliances</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li> */}
                    <li className="nav-item mr-lg-2 mb-lg-0 mb-2">
                        <Link className="nav-link" to="/About">About Us</Link>
                    </li>
                    {/* <li className="nav-item mr-lg-2 mb-lg-0 mb-2">
                        <a className="nav-link" href="#">New Arrivals</a>
                    </li> */}
                    {/* <li className="nav-item dropdown mr-lg-2 mb-lg-0 mb-2">
                        <a className="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Pages
                        </a>
                        <div className="dropdown-menu">
                            <a className="dropdown-item" href="#">Product 1</a>
                            <a className="dropdown-item" href="#">Product 2</a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="#">Single Product 1</a>
                            <a className="dropdown-item" href="#">Single Product 2</a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="#">Checkout Page</a>
                            <a className="dropdown-item" href="#">Payment Page</a>
                        </div>
                    </li> */}
                    <li className="nav-item">
                    <Link className="nav-link" to="/Contact">Contact Us</Link>
                        {/* <a className="nav-link" href="/Contact">Contact Us</a> */}
                    </li>
                </ul>
            </div>
        </nav>

        <div>
          <Carousel/>
        </div>

        </>
    )
}

export default Navbar;
