import { useEffect } from "react";
import { useState } from "react";
import Bottle from "../Bottle/Bottle";
import Cart from "../Cart/Cart";
import { addToLS, getStoredCartFromLS, removeCartFromLS } from "../Common/localstorage";

const Bottles = () => {
    const [bottle, setBottle] = useState([]);
    const [cart, setCart] = useState([]); 

    useEffect(()=>{
        fetch('public/utilities/bottles.json')
        .then(res => res.json())
        .then(data => setBottle(data));
    },[])

    useEffect(()=>{
        if(bottle.length){
            const storedCart = getStoredCartFromLS();
            const saveCart = [];
            for(const id of storedCart){
                const bottles = bottle.find(bottle => bottle.id === id);
                if(bottles){
                    saveCart.push(bottles);
                }
            }
            setCart(saveCart);

        }

    }, [bottle])

    const handleCartAdd = bottles => {
        const newCart = [...cart, bottles];
        setCart(newCart);
        addToLS(bottles.id);
    }

    const removeFromCart = id => {

        // remove form visual 
        
        const remainingCart = cart.filter(bottle=> bottle.id !== id); 
        setCart(remainingCart);


        //remove from LS
        removeCartFromLS(id);
    }

    return (
        <div>
            <h3>Available Bottles : {bottle.length}</h3>
            <Cart cart={cart} removeFromCart={removeFromCart}></Cart>
            <div className="bottles-container">
                {
                    bottle.map(bottle => <Bottle bottle={bottle} key={bottle.id} handleCartAdd={handleCartAdd}></Bottle>)
                }
            </div>
        </div>
    );
};

export default Bottles;