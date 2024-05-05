import { useDispatch, useSelector } from "react-redux";
import { removefromCart } from "../../utils/CartSlice";
function CartPage() {
    const { cartItems, totalAmount } = useSelector((store) => store.CartSlice);

    const dispatch = useDispatch();

    return (
        <div className="page-content">
            {/* inner page banner */}
            <div className="dz-bnr-inr overlay-secondary-dark dz-bnr-inr-sm" style={{ backgroundImage: "url(images/background/bg3.jpg)" }}>
                <div className="container">
                    <div className="dz-bnr-inr-entry">
                        <h1>Cart</h1>
                        <nav aria-label="breadcrumb" className="breadcrumb-row">
                            <ul className="breadcrumb">
                                <li className="breadcrumb-item">
                                    <a href="index.html"> Home</a>
                                </li>
                                <li className="breadcrumb-item">Cart</li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
            {/* inner page banner End*/}
            {/* contact area */}
            <section className="content-inner shop-account">
                {/* Product */}
                <div className="container">
                    <div className="row mb-5">
                        <div className="col-lg-12">
                            <div className="table-responsive">
                                <table className="table check-tbl">
                                    <thead>
                                        <tr>
                                            <th>Product</th>
                                            <th>Product name</th>
                                            <th>Unit Price</th>
                                            <th>Quantity</th>
                                            <th>Total</th>
                                            <th className="text-end">Close</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {cartItems.length > 0 &&
                                            cartItems.map((item, index) => {
                                                return (
                                                    <tr key={index}>
                                                        <td className="product-item-img">
                                                            <img src={item.img_src} alt="" />
                                                        </td>
                                                        <td className="product-item-name">{item.title}</td>
                                                        <td className="product-item-price">{item.price}</td>
                                                        <td className="product-item-quantity">
                                                            <div className="quantity btn-quantity style-1 me-3">
                                                                <input id="demo_vertical7" type="text" defaultValue={item.quantity} name="demo_vertical2" />
                                                            </div>
                                                        </td>
                                                        <td className="product-item-totle">{item.price}</td>
                                                        <td className="product-item-close">
                                                            <a role="button" onClick={() => dispatch(removefromCart(item))} className="ti-close">
                                                                ×
                                                            </a>
                                                        </td>
                                                    </tr>
                                                );
                                            })}
                                        {cartItems.length == 0 && (
                                            <tr>
                                                <td></td>
                                                <td></td>
                                                <td className="text-center text-danger">Your cart is empty</td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                            </tr>
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="widget">
                                <form className="shop-form">
                                    <h4 className="widget-title">Calculate Shipping</h4>
                                    <div className="form-group">
                                        <select className="default-select">
                                            <option selected="">Credit Card Type</option>
                                            <option value={1}>Another option</option>
                                            <option value={2}>A option</option>
                                            <option value={3}>Potato</option>
                                        </select>
                                    </div>
                                    <div className="row">
                                        <div className="form-group col-lg-6">
                                            <input type="text" className="form-control" placeholder="Credit Card Number" />
                                        </div>
                                        <div className="form-group col-lg-6">
                                            <input type="text" className="form-control" placeholder="Card Verification Number" />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder="Coupon Code" />
                                    </div>
                                    <div className="form-group">
                                        <button className="btn btn-primary btnhover" type="button">
                                            Apply Coupon
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="widget">
                                <h4 className="widget-title">Cart Subtotal</h4>
                                <table className="table-bordered check-tbl m-b25">
                                    <tbody>
                                        <tr>
                                            <td>Order Subtotal</td>
                                            <td>$125.96</td>
                                        </tr>
                                        <tr>
                                            <td>Shipping</td>
                                            <td>Free Shipping</td>
                                        </tr>
                                        <tr>
                                            <td>Coupon</td>
                                            <td>$28.00</td>
                                        </tr>
                                        <tr>
                                            <td>Total</td>
                                            <td>$506.00</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <div className="form-group m-b25">
                                    <a href="shop-checkout.html" className="btn btn-primary btnhover" type="button">
                                        Proceed to Checkout
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Product END */}
            </section>
            {/* contact area End*/}
        </div>
    );
}

export default CartPage;
