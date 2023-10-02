import React from 'react'

const OrderDetails = () => {
  return (
    <section className='orderDetails'>
    <main>
        <h1>Order Details</h1>

        <div>
            <h1>Shipping</h1>
            <p>
                <b>Address</b>
                {"banaras"}
            </p>
        </div>

        <div>
            <h1>Contact</h1>
            <p>
                <b>Name</b>
                {"Sankalp"}
            </p>

            <p>
                <b>Phone</b>
                {"7232989905"}
            </p>
        </div>

        <div>
            <h1>Status</h1>
            <p>
                <b>Order Status</b>
                {"Processing"}
            </p>

            <p>
                <b>Placed At</b>
                {"01-05-2002"}
            </p>
            <p>
                <b>Delivered At</b>
                {"01-05-2003"}
            </p>
        </div>

        <div>
            <h1>Payment</h1>
            <p>
                <b>Payemnt Method</b>
                {"Online"}
            </p>

            <p>
                <b>Payment Reference</b>
                {"ghfcsahsac"}
            </p>
            <p>
                <b>Paid At</b>
                {"01-05-2003"}
            </p>
        </div>

        <div>
            <h1>Amount</h1>
            <p>
                <b>Item Total</b>
                ₹{2132}
            </p>

            <p>
                <b>Shipping Charges</b>
                {200}
            </p>
            <p>
                <b>Tax</b>
                {100}
            </p>
            <p>
                <b>Total Amount</b>
                {100 + 200 + 2132}
            </p>
        </div>

        <article>
            <h1>Ordered Items</h1>

            <div>
                <h4>Aaloo</h4>
                <div>
                <span>{12}</span> x <span>{232}</span>
                </div>
            </div>

            <div>
                <h4>Lauki</h4>
                <div>
                <span>{10}</span> x <span>{400}</span>
                </div>
            </div>

            <div>
                <h4>Shimla Mirch</h4>
                <div>
                <span>{15}</span> x <span>{500}</span>
                </div>
            </div>

            <div>
                <h4 style={{
                    fontWeight: 800
                }}>Sub Total</h4>
                <div style={{
                    fontWeight: 800
                }}> ₹{2132}</div>
            </div>
        </article>
    </main>
    </section>
  )
}

export default OrderDetails