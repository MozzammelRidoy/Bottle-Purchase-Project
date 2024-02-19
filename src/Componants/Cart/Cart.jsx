import PropTypes from 'prop-types'
const Cart = ({cart, removeFromCart}) => {
    return (
        <div>
            <h4>Cart : {cart.length} </h4>
            {
                cart.map(bottle=> <div className="cart-container" key={bottle.id}>
                    <div><img src={bottle.img} alt="" /></div><div> <button onClick={()=> removeFromCart(bottle.id)}>Remove</button></div>
                </div> )
            }
        </div>
    );
};

Cart.propTypes = {
    cart : PropTypes.array.isRequired,
    removeFromCart: PropTypes.func.isRequired
}
export default Cart;