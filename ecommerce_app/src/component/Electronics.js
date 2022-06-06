import axios from 'axios';
import React, { Component } from 'react';

class Electronics extends Component {

     constructor(props) {
        super(props);
        this.state = {
          data: [],
        };
        };
    
    componentDidMount()
    {
        axios.get("https://fakestoreapi.com/products",{}).then((Response) =>{
            console.log("Res",Response)
            this.setState({data:Response.data})
            console.log("State",this.state)
        })
       
    }
    render() {
        const {data} = this.state;
        return (
            <>
            <div>
                <div className="ads-grid py-sm-5 py-4">
                    <div className="container py-xl-4 py-lg-2">
                        <h3 className="tittle-w3l text-center mb-lg-5 mb-sm-4 mb-3">
                            <span>M</span>obiles
                            <span>&</span>
                            <span>C</span>omputers</h3>
			
			<div className="row">
			
				<div className="agileinfo-ads-display col-lg-9">
					<div className="wrapper">
					
						<div className="product-sec1 px-sm-4 px-3 py-sm-5  py-3 mb-4">
							<div className="row">
                                {data}
								<div className="col-md-4 product-men">
									<div className="men-pro-item simpleCart_shelfItem">
										<div className="men-thumb-item text-center">
											<img src="images/m1.jpg" alt="" />
											<div className="men-cart-pro">
												<div className="inner-men-cart-pro">
													<a href="single.html" className="link-product-add-cart">Quick View</a>
												</div>
											</div>
										</div>
										<div className="item-info-product text-center border-top mt-4">
											<h4 className="pt-1">
												<a href="single.html">Samsung Galaxy J7</a>
											</h4>
											<div className="info-product-price my-2">
												<span className="item_price">$200.00</span>
												<del>$280.00</del>
											</div>
											<div className="snipcart-details top_brand_home_details item_add single-item hvr-outline-out">
												<form action="#" method="post">
													<fieldset>
														<input type="hidden" name="cmd" value="_cart" />
														<input type="hidden" name="add" value="1" />
														<input type="hidden" name="business" value=" " />
														<input type="hidden" name="item_name" value="Samsung Galaxy J7" />
														<input type="hidden" name="amount" value="200.00" />
														<input type="hidden" name="discount_amount" value="1.00" />
														<input type="hidden" name="currency_code" value="USD" />
														<input type="hidden" name="return" value=" " />
														<input type="hidden" name="cancel_return" value=" " />
														<input type="submit" name="submit" value="Add to cart" className="button btn" />
													</fieldset>
												</form>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>						
					</div>
				</div>
            </div>
        </div>
    </div>
</div>

</>
        );
    }
}

export default Electronics;