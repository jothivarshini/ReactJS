import React from "react";
import Sidebar from "./Sidebar";
import "./product.css";
import MiddleSection from "./MiddleSection";

const Home = () => 
{
    return (
    <>
        <div className="separator">
            <div className="product-left">
            <div className="ads-grid py-sm-5 py-4">
            <div className="container py-xl-4 py-lg-2">

                <h3 className="tittle-w3l text-center mb-lg-5 mb-sm-4 mb-3">
                    <span>O</span>ur
                    <span>N</span>ew
                    <span>P</span>roducts</h3>

                <div className="row">
                    <div className="agileinfo-ads-display col-lg-9 product-div">
                        <div className="wrapper">
                            <div className="product-sec1 px-sm-4 px-3 py-sm-5  py-3 mb-4 product-left-align">
                                <h3 className="heading-tittle text-center font-italic">New Brand Mobiles</h3>

                                <div className="row">

                                    <div className="col-md-4 product-men mt-5">
                                        
                                        <div className="men-pro-item simpleCart_shelfItem">
                                            <div className="men-thumb-item text-center">
                                                <img src="/images/m1.jpg" alt="" />
                                                <div className="men-cart-pro">
                                                    <div className="inner-men-cart-pro">
                                                        <a href="#" className="link-product-add-cart">Quick
                                                            View</a>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="item-info-product text-center border-top mt-4">
                                                <h4 className="pt-1">
                                                    <a href="#">Samsung Galaxy J7</a>
                                                </h4>
                                                <div className="info-product-price my-2">
                                                    <span className="item_price">$200.00</span>
                                                    <del>$280.00</del>
                                                </div>
                                                <div className="snipcart-details top_brand_home_details item_add single-item hvr-outline-out">
                                                    <form>
                                                        <fieldset>
                                                            <input type="hidden" name="cmd" value="_cart" />
                                                            <input type="hidden" name="add" value="1" />
                                                            <input type="hidden" name="business" value=" " />
                                                            <input type="hidden" name="item_name"
                                                                value="Samsung Galaxy J7" />
                                                            <input type="hidden" name="amount" value="200.00" />
                                                            <input type="hidden" name="discount_amount" value="1.00" />
                                                            <input type="hidden" name="currency_code" value="USD" />
                                                            <input type="hidden" name="return" value=" " />
                                                            <input type="hidden" name="cancel_return" value=" " />
                                                            <input type="submit" name="submit" value="Add to cart"
                                                                className="button btn" />
                                                        </fieldset>
                                                    </form>
                                                </div>
                                            </div>

                                        </div>

                                    </div>

                                    <div className="col-md-4 product-men mt-5">
                                        <div className="men-pro-item simpleCart_shelfItem">
                                            <div className="men-thumb-item text-center">
                                                <img src="/images/m2.jpg" alt="" />
                                                <div className="men-cart-pro">
                                                    <div className="inner-men-cart-pro">
                                                        <a href="#" className="link-product-add-cart">Quick
                                                            View</a>
                                                    </div>
                                                </div>
                                                <span className="product-new-top">New</span>
                                            </div>

                                            <div className="item-info-product text-center border-top mt-4">
                                                <h4 className="pt-1">
                                                    <a href="#">OPPO A37f</a>
                                                </h4>

                                                <div className="info-product-price my-2">
                                                    <span className="item_price">$230.00</span>
                                                    <del>$250.00</del>
                                                </div>

                                                <div className="snipcart-details top_brand_home_details item_add single-item hvr-outline-out">
                                                    <form action="#" method="post">
                                                        <fieldset>
                                                            <input type="hidden" name="cmd" value="_cart" />
                                                            <input type="hidden" name="add" value="1" />
                                                            <input type="hidden" name="business" value=" " />
                                                            <input type="hidden" name="item_name" value="OPPO A37f" />
                                                            <input type="hidden" name="amount" value="230.00" />
                                                            <input type="hidden" name="discount_amount" value="1.00" />
                                                            <input type="hidden" name="currency_code" value="USD" />
                                                            <input type="hidden" name="return" value=" " />
                                                            <input type="hidden" name="cancel_return" value=" " />
                                                            <input type="submit" name="submit" value="Add to cart"
                                                                className="button btn" />
                                                        </fieldset>
                                                    </form>
                                                </div>

                                            </div>

                                        </div>

                                    </div>

                                    <div className="col-md-4 product-men mt-5">
                                        <div className="men-pro-item simpleCart_shelfItem">
                                            <div className="men-thumb-item text-center">
                                                <img src="/images/m3.jpg" alt="" />
                                                <div className="men-cart-pro">
                                                    <div className="inner-men-cart-pro">
                                                        <a href="#" className="link-product-add-cart">Quick
                                                            View</a>
                                                    </div>
                                                </div>
                                                <span className="product-new-top">New</span>
                                            </div>

                                            <div className="item-info-product text-center border-top mt-4">
                                                <h4 className="pt-1">
                                                    <a href="#">Apple iPhone X</a>
                                                </h4>

                                                <div className="info-product-price my-2">
                                                    <span className="item_price">$280.00</span>
                                                    <del>$300.00</del>
                                                </div>
                                                <div className="snipcart-details top_brand_home_details item_add single-item hvr-outline-out">
                                                    <form>
                                                        <fieldset>
                                                            <input type="hidden" name="cmd" value="_cart" />
                                                            <input type="hidden" name="add" value="1" />
                                                            <input type="hidden" name="business" value=" " />
                                                            <input type="hidden" name="item_name"
                                                                value="Apple iPhone X" />
                                                            <input type="hidden" name="amount" value="280.00" />
                                                            <input type="hidden" name="discount_amount" value="1.00" />
                                                            <input type="hidden" name="currency_code" value="USD" />
                                                            <input type="hidden" name="return" value=" " />
                                                            <input type="hidden" name="cancel_return" value=" " />
                                                            <input type="submit" name="submit" value="Add to cart"
                                                                className="button btn" />
                                                        </fieldset>
                                                    </form>
                                                </div>

                                            </div>

                                        </div>

                                    </div>

                                </div>

                            </div>

                            <div className="product-sec1 px-sm-4 px-3 py-sm-5  py-3 mb-4">
                                <h3 className="heading-tittle text-center font-italic">Tv & Audio</h3>
                                <div className="row">
                                    <div className="col-md-4 product-men mt-5">
                                        <div className="men-pro-item simpleCart_shelfItem">
                                            <div className="men-thumb-item text-center">
                                                <img src="/images/m4.jpg" alt="" />
                                                <div className="men-cart-pro">
                                                    <div className="inner-men-cart-pro">
                                                        <a href="#" className="link-product-add-cart">Quick
                                                            View</a>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="item-info-product text-center border-top mt-4">
                                                <h4 className="pt-1">
                                                    <a href="#">Sony 80 cm (32 inches)</a>
                                                </h4>

                                                <div className="info-product-price my-2">
                                                    <span className="item_price">$320.00</span>
                                                    <del>$340.00</del>
                                                </div>

                                                <div className="snipcart-details top_brand_home_details item_add single-item hvr-outline-out">
                                                    <form>
                                                        <fieldset>
                                                            <input type="hidden" name="cmd" value="_cart" />
                                                            <input type="hidden" name="add" value="1" />
                                                            <input type="hidden" name="business" value=" " />
                                                            <input type="hidden" name="item_name"
                                                                value="Sony 80 cm (32 inches)" />
                                                            <input type="hidden" name="amount" value="320.00" />
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


                                    <div className="col-md-4 product-men mt-5">
                                        <div className="men-pro-item simpleCart_shelfItem">
                                            <div className="men-thumb-item text-center">
                                                <img src="/images/m5.jpg" alt="" />
                                                <div className="men-cart-pro">

                                                    <div className="inner-men-cart-pro">
                                                        <a href="#" className="link-product-add-cart">Quick
                                                            View</a>
                                                    </div>
                                                </div>
                                                <span className="product-new-top">New</span>
                                            </div>

                                            <div className="item-info-product text-center border-top mt-4">
                                                <h4 className="pt-1">
                                                    <a href="#">Artis Speaker</a>
                                                </h4>

                                                <div className="info-product-price my-2">
                                                    <span className="item_price">$349.00</span>
                                                    <del>$399.00</del>
                                                </div>

                                                <div className="snipcart-details top_brand_home_details item_add single-item hvr-outline-out">
                                                    <form>
                                                        <fieldset>
                                                            <input type="hidden" name="cmd" value="_cart" />
                                                            <input type="hidden" name="add" value="1" />
                                                            <input type="hidden" name="business" value=" " />
                                                            <input type="hidden" name="item_name"
                                                                value="Artis Speaker" />
                                                            <input type="hidden" name="amount" value="349.00" />
                                                            <input type="hidden" name="discount_amount" value="1.00" />
                                                            <input type="hidden" name="currency_code" value="USD" />
                                                            <input type="hidden" name="return" value=" " />
                                                            <input type="hidden" name="cancel_return" value=" " />
                                                            <input type="submit" name="submit" value="Add to cart"
                                                                className="button btn" />
                                                        </fieldset>
                                                    </form>
                                                </div>
                                            </div>

                                        </div>

                                    </div>

                                    <div className="col-md-4 product-men mt-5">

                                        <div className="men-pro-item simpleCart_shelfItem">
                                            <div className="men-thumb-item text-center">
                                                <img src="/images/m6.jpg" alt="" />
                                                <div className="men-cart-pro">
                                                    <div className="inner-men-cart-pro">
                                                        <a href="#" className="link-product-add-cart">Quick
                                                            View</a>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="item-info-product text-center border-top mt-4">
                                                <h4 className="pt-1">
                                                    <a href="#">Philips Speakers</a>
                                                </h4>

                                                <div className="info-product-price my-2">
                                                    <span className="item_price">$249.00</span>
                                                    <del>$300.00</del>
                                                </div>

                                                <div className="snipcart-details top_brand_home_details item_add single-item hvr-outline-out">
                                                    <form>
                                                        <fieldset>
                                                            <input type="hidden" name="cmd" value="_cart" />
                                                            <input type="hidden" name="add" value="1" />
                                                            <input type="hidden" name="business" value=" " />
                                                            <input type="hidden" name="item_name"
                                                                value="Philips Speakers" />
                                                            <input type="hidden" name="amount" value="249.00" />
                                                            <input type="hidden" name="discount_amount" value="1.00" />
                                                            <input type="hidden" name="currency_code" value="USD" />
                                                            <input type="hidden" name="return" value=" " />
                                                            <input type="hidden" name="cancel_return" value=" " />
                                                            <input type="submit" name="submit" value="Add to cart"
                                                                className="button btn" />
                                                        </fieldset>
                                                    </form>
                                                </div>

                                            </div>

                                        </div>

                                    </div>

                                </div>

                            </div>

                            <div className="product-sec1 product-sec2 px-sm-5 px-3">
                                <div className="row">
                                    <h3 className="col-md-4 effect-bg">Summer Carnival</h3>
                                    <p className="w3l-nut-middle">Get Extra 10% Off</p>
                                    <div className="col-md-8 bg-right-nut">
                                        <img src="/images/image1.png" alt="" />
                                    </div>
                                </div>
                            </div>

                            <div className="product-sec1 px-sm-4 px-3 py-sm-5  py-3 mt-4">
                                <h3 className="heading-tittle text-center font-italic">Large Appliances</h3>
                                <div className="row">
                                    <div className="col-md-4 product-men mt-5">
                                        <div className="men-pro-item simpleCart_shelfItem">
                                            <div className="men-thumb-item text-center">
                                                <img src="/images/m7.jpg" alt="" />
                                                <div className="men-cart-pro">
                                                    <div className="inner-men-cart-pro">
                                                        <a href="#" className="link-product-add-cart">Quick View</a>
                                                    </div>
                                                </div>
                                            </div>

                                            <span className="product-new-top">New</span>
                                            <div className="item-info-product text-center border-top mt-4">
                                                <h4 className="pt-1">
                                                    <a href="#">Whirlpool 245</a>
                                                </h4>

                                                <div className="info-product-price my-2">
                                                    <span className="item_price">$230.00</span>
                                                    <del>$280.00</del>
                                                </div>

                                                <div className="snipcart-details top_brand_home_details item_add single-item hvr-outline-out">
                                                    <form>
                                                        <fieldset>
                                                            <input type="hidden" name="cmd" value="_cart" />
                                                            <input type="hidden" name="add" value="1" />
                                                            <input type="hidden" name="business" value=" " />
                                                            <input type="hidden" name="item_name" value="Whirlpool 245" />
                                                            <input type="hidden" name="amount" value="230.00" />
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

                                    <div className="col-md-4 product-men mt-5">
                                        <div className="men-pro-item simpleCart_shelfItem">
                                            <div className="men-thumb-item text-center">
                                                <img src="/images/m8.jpg" alt="" />
                                                <div className="men-cart-pro">
                                                    <div className="inner-men-cart-pro">
                                                        <a href="#" className="link-product-add-cart">Quick View</a>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="item-info-product text-center border-top mt-4">
                                                <h4 className="pt-1">
                                                    <a href="#">BPL Washing Machine</a>
                                                </h4>
                                                <div className="info-product-price my-2">
                                                    <span className="item_price">$180.00</span>
                                                    <del>$200.00</del>
                                                </div>

                                                <div className="snipcart-details top_brand_home_details item_add single-item hvr-outline-out">
                                                    <form>
                                                        <fieldset>
                                                            <input type="hidden" name="cmd" value="_cart" />
                                                            <input type="hidden" name="add" value="1" />
                                                            <input type="hidden" name="business" value=" " />
                                                            <input type="hidden" name="item_name" value="BPL Washing Machine" />
                                                            <input type="hidden" name="amount" value="180.00" />
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

                                    <div className="col-md-4 product-men mt-5">
                                        <div className="men-pro-item simpleCart_shelfItem">
                                            <div className="men-thumb-item text-center">
                                                <img src="/images/m9.jpg" alt="" />
                                                <div className="men-cart-pro">
                                                    <div className="inner-men-cart-pro">
                                                        <a href="#" className="link-product-add-cart">Quick View</a>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="item-info-product text-center border-top mt-4">
                                                <h4 className="pt-1">
                                                    <a href="#">Microwave Oven</a>
                                                </h4>
                                                <div className="info-product-price my-2">
                                                    <span className="item_price">$199.00</span>
                                                    <del>$299.00</del>
                                                </div>

                                                <div className="snipcart-details top_brand_home_details item_add single-item hvr-outline-out">
                                                    <form>
                                                        <fieldset>
                                                            <input type="hidden" name="cmd" value="_cart" />
                                                            <input type="hidden" name="add" value="1" />
                                                            <input type="hidden" name="business" value=" " />
                                                            <input type="hidden" name="item_name" value="Microwave Oven" />
                                                            <input type="hidden" name="amount" value="199.00" />
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

</div>       

<div className="product-right">
                <Sidebar />
            </div>


            
    </>

    );
}

export default Home;


    
