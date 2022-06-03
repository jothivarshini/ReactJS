import React from "react";

const Sidebar = () => 
{
    return (
        <>
        
       
                <div className="side-bar p-sm-4 p-3">
                    <div className="search-hotel border-bottom py-2">
                        <h3 className="agileits-sear-head mb-3">Search Here..</h3>
                        <form>
                            <input type="search" placeholder="Product name..." name="search" required="" />
                            <input type="submit" value=" "/>
                        </form>
                    </div>
                    <div class="range border-bottom py-2">
							<h3 className="agileits-sear-head mb-3">Price</h3>
							<div className="w3l-range">
								<ul>
									<li>
										<a href="#">Under $1,000</a>
									</li>
									<li class="my-1">
										<a href="#">$1,000 - $5,000</a>
									</li>
									<li>
										<a href="#">$5,000 - $10,000</a>
									</li>
									<li class="my-1">
										<a href="#">$10,000 - $20,000</a>
									</li>
									<li>
										<a href="#">$20,000 $30,000</a>
									</li>
									<li class="mt-1">
										<a href="#">Over $30,000</a>
									</li>
								</ul>
							</div>
                    </div>    
                </div>
       

        <div className="left-side border-bottom py-2">
							<h3 className="agileits-sear-head mb-3">Discount</h3>
							<ul>
								<li>
									<input type="checkbox" class="checked" />
									<span className="span">5% or More</span>
								</li>
								<li>
									<input type="checkbox" class="checked" />
									<span className="span">10% or More</span>
								</li>
								<li>
									<input type="checkbox" class="checked" />
									<span className="span">20% or More</span>
								</li>
								<li>
									<input type="checkbox" class="checked" />
									<span className="span">30% or More</span>
								</li>
								<li>
									<input type="checkbox" class="checked" />
									<span className="span">50% or More</span>
								</li>
								<li>
									<input type="checkbox" class="checked" />
									<span className="span">60% or More</span>
								</li>
							</ul>
        </div>

        <div className="customer-rev border-bottom left-side py-2">
							<h3 className="agileits-sear-head mb-3">Customer Review</h3>
							<ul>
								<li>
									<a href="#">
										<i className="fas fa-star"></i>
										<i className="fas fa-star"></i>
										<i className="fas fa-star"></i>
										<i className="fas fa-star"></i>
										<i className="fas fa-star"></i>
										<span className>5.0</span>
									</a>
								</li>
								<li>
									<a href="#">
										<i className="fas fa-star"></i>
										<i className="fas fa-star"></i>
										<i className="fas fa-star"></i>
										<i className="fas fa-star"></i>
										<span className>4.0</span>
									</a>
								</li>
								<li>
									<a href="#">
										<i className="fas fa-star"></i>
										<i className="fas fa-star"></i>
										<i className="fas fa-star"></i>
										<i className="fas fa-star-half"></i>
										<span className>3.5</span>
									</a>
								</li>
								<li>
									<a href="#">
										<i className="fas fa-star"></i>
										<i className="fas fa-star"></i>
										<i className="fas fa-star"></i>
										<span className>3.0</span>
									</a>
								</li>
								<li>
									<a href="#">
										<i className="fas fa-star"></i>
										<i className="fas fa-star"></i>
										<i className="fas fa-star-half"></i>
										<span className>2.5</span>
									</a>
								</li>
							</ul>
        </div>

		<div className="left-side border-bottom py-2">
							<h3 className="agileits-sear-head mb-3">Electronics</h3>
							<ul>
								<li>
									<input type="checkbox" class="checked" />
									<span class="span">Accessories</span>
								</li>
								<li>
									<input type="checkbox" class="checked" />
									<span class="span">Cameras & Photography</span>
								</li>
								<li>
									<input type="checkbox" class="checked" />
									<span class="span">Car & Vehicle Electronics</span>
								</li>
								<li>
									<input type="checkbox" class="checked" />
									<span class="span">Computers & Accessories</span>
								</li>
								<li>
									<input type="checkbox" class="checked" />
									<span class="span">GPS & Accessories</span>
								</li>
								<li>
									<input type="checkbox" class="checked" />
									<span class="span">Headphones</span>
								</li>
								<li>
									<input type="checkbox" class="checked" />
									<span class="span">Home Audio</span>
								</li>
								<li>
									<input type="checkbox" class="checked" />
									<span class="span">Home Theater, TV & Video</span>
								</li>
								<li>
									<input type="checkbox" class="checked" />
									<span class="span">Mobiles & Accessories</span>
								</li>
								<li>
									<input type="checkbox" class="checked" />
									<span class="span">Portable Media Players</span>
								</li>
								<li>
									<input type="checkbox" class="checked" />
									<span class="span">Tablets</span>
								</li>
								<li>
									<input type="checkbox" class="checked" />
									<span class="span">Telephones & Accessories</span>
								</li>
								<li>
									<input type="checkbox" class="checked" />
									<span class="span">Wearable Technology</span>
								</li>
							</ul>
						</div>

						<div className="left-side border-bottom py-2">
							<h3 className="agileits-sear-head mb-3">Cash On Delivery</h3>
							<ul>
								<li>
									<input type="checkbox" class="checked" />
									<span class="span">Eligible for Cash On Delivery</span>
								</li>
							</ul>
						</div>

						<div className="left-side border-bottom py-2">
							<h3 className="agileits-sear-head mb-3">New Arrivals</h3>
							<ul>
								<li>
									<input type="checkbox" class="checked" />
									<span class="span">Last 30 days</span>
								</li>
								<li>
									<input type="checkbox" class="checked" />
									<span class="span">Last 90 days</span>
								</li>
							</ul>
						</div>

						<div className="f-grid py-2">
							<h3 className="agileits-sear-head mb-3">Best Seller</h3>
							<div className="box-scroll">
								<div className="scroll">
									<div className="row">
										<div className="col-lg-3 col-sm-2 col-3 left-mar">
											<img src="images/k1.jpg" alt="" class="img-fluid" />
										</div>
										<div className="col-lg-9 col-sm-10 col-9 w3_mvd">
											<a href="">Samsung Galaxy On7 Prime (Gold, 4GB RAM + 64GB Memory)</a>
											<a href="" class="price-mar mt-2">$12,990.00</a>
										</div>
									</div>
									<div className="row my-4">
										<div className="col-lg-3 col-sm-2 col-3 left-mar">
											<img src="images/k2.jpg" alt="" class="img-fluid" />
										</div>
										<div className="col-lg-9 col-sm-10 col-9 w3_mvd">
											<a href="">Haier 195 L 4 Star Direct-Cool Single Door Refrigerator</a>
											<a href="" class="price-mar mt-2">$12,499.00</a>
										</div>
									</div>
									<div className="row">
										<div className="col-lg-3 col-sm-2 col-3 left-mar">
											<img src="images/k3.jpg" alt="" class="img-fluid" />
										</div>
										<div className="col-lg-9 col-sm-10 col-9 w3_mvd">
											<a href="">Ambrane 13000 mAh Power Bank (P-1310 Premium)</a>
											<a href="" class="price-mar mt-2">$1,199.00 </a>
										</div>
									</div>
								</div>
							</div>
						</div>
						

        </>
 );
}

export default Sidebar;
