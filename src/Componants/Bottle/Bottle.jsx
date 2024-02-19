import './Bottle.css'
import PropTypes from 'prop-types'
const Bottle = ({bottle, handleCartAdd}) => {
    const {name, img, price} = bottle; 
    return (
        <div className="bottle-container">
            <h5>Name : {name} </h5>
            <img src={img} alt="" />
            <p>Price : <strong>${price}</strong></p>
            <button onClick={()=> handleCartAdd(bottle)}>Purchase</button>
        </div>
    );
};


Bottle.propTypes ={
    bottle: PropTypes.object.isRequired,
    handleCartAdd: PropTypes.func.isRequired
}
export default Bottle;