import React from 'react'

import { useSelector } from 'react-redux';

const Cart = () => {
    const CartItems = useSelector((state) => state.cart);
    console.log(CartItems)
    const generateqty = (productid) => {
        const item = CartItems.find((i) =>
            i.id == productid);
        return item ? item.quantity : 0;
    }

    return (
        <>
            <section className="h-100 h-custom" style={{ backgroundColor: '#eee' }}>
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col">
                            <div className="card">
                                <div className="card-body p-4">
                                    <div className="row">
                                        <div className="col-lg-7">
                                            <h5 className="mb-3"><a href="#!" className="text-body"><i className="fas fa-long-arrow-alt-left me-2" />Continue shopping</a></h5>
                                            <hr />
                                            <div className="d-flex justify-content-between align-items-center mb-4">
                                                <div>
                                                    <p className="mb-1">Shopping cart</p>
                                                </div>
                                                <div>
                                                    <p className="mb-0"><span className="text-muted">Sort by:</span> <a href="#!" className="text-body">price <i className="fas fa-angle-down mt-1" /></a></p>
                                                </div>
                                            </div>



                                            {
                                                CartItems.map((i) =>
                                                    <div className="card mb-3">
                                                        <div className="card-body">
                                                            <div className="d-flex justify-content-between">
                                                                <div className="d-flex flex-row align-items-center">
                                                                    <div>
                                                                        <img src={i.image} className="img-fluid rounded-3" alt="Shopping item" style={{ width: 65 }} />
                                                                    </div>
                                                                    <div className="ms-3">
                                                                        <h5>{i.title}</h5>
                                                                        <p className="small mb-0">
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <div className="d-flex flex-row align-items-center">
                                                                    <div style={{ width: 50 }}>
                                                                        <h5 className="fw-normal mb-0">{generateqty(i.id)}</h5>
                                                                    </div>
                                                                    <div style={{ width: 80 }}>
                                                                        <h5 className="mb-0">${i.price}</h5>
                                                                    </div>
                                                                    <a href="#!" style={{ color: '#cecece' }}><i className="fas fa-trash-alt" /></a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )
                                            }










                                        </div>
                                        <div className="col-lg-5">
                                            <div className="card bg-primary text-white rounded-3">
                                                <div className="card-body">
                                                    <div className="d-flex justify-content-between align-items-center mb-4">
                                                        <h5 className="mb-0">Card details</h5>
                                                        <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-6.webp" className="img-fluid rounded-3" style={{ width: 45 }} alt="Avatar" />
                                                    </div>
                                                    <p className="small mb-2">Card type</p>
                                                    <a href="#!" type="submit" className="text-white"><i className="fab fa-cc-mastercard fa-2x me-2" /></a>
                                                    <a href="#!" type="submit" className="text-white"><i className="fab fa-cc-visa fa-2x me-2" /></a>
                                                    <a href="#!" type="submit" className="text-white"><i className="fab fa-cc-amex fa-2x me-2" /></a>
                                                    <a href="#!" type="submit" className="text-white"><i className="fab fa-cc-paypal fa-2x" /></a>
                                                    <form className="mt-4">
                                                        <div className="form-outline form-white mb-4">
                                                            <input type="text" id="typeName" className="form-control form-control-lg" siez={17} placeholder="Cardholder's Name" />
                                                            <label className="form-label" htmlFor="typeName">Cardholder's Name</label>
                                                        </div>
                                                        <div className="form-outline form-white mb-4">
                                                            <input type="text" id="typeText" className="form-control form-control-lg" siez={17} placeholder="1234 5678 9012 3457" minLength={19} maxLength={19} />
                                                            <label className="form-label" htmlFor="typeText">Card Number</label>
                                                        </div>
                                                        <div className="row mb-4">
                                                            <div className="col-md-6">
                                                                <div className="form-outline form-white">
                                                                    <input type="text" id="typeExp" className="form-control form-control-lg" placeholder="MM/YYYY" size={7} minLength={7} maxLength={7} />
                                                                    <label className="form-label" htmlFor="typeExp">Expiration</label>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <div className="form-outline form-white">
                                                                    <input type="password" id="typeText" className="form-control form-control-lg" placeholder="●●●" size={1} minLength={3} maxLength={3} />
                                                                    <label className="form-label" htmlFor="typeText">Cvv</label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </form>
                                                    <hr className="my-4" />
                                                    <div className="d-flex justify-content-between">
                                                        <p className="mb-2">Subtotal</p>
                                                        <p className="mb-2">$4798.00</p>
                                                    </div>
                                                    <div className="d-flex justify-content-between">
                                                        <p className="mb-2">Shipping</p>
                                                        <p className="mb-2">$20.00</p>
                                                    </div>
                                                    <div className="d-flex justify-content-between mb-4">
                                                        <p className="mb-2">Total(Incl. taxes)</p>
                                                        <p className="mb-2">$4818.00</p>
                                                    </div>
                                                    <button type="button" className="btn btn-info btn-block btn-lg">
                                                        <div className="d-flex justify-content-between">
                                                            <span>$4818.00</span>
                                                            <span>Checkout <i className="fas fa-long-arrow-alt-right ms-2" /></span>
                                                        </div>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Cart