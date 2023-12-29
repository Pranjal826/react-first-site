import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const UserContext = createContext();
export const ProductContext = createContext();

const Context = (props) => {
    const [users, setusers] = useState(
        JSON.parse(localStorage.getItem("users")) || []
    );

    const [products, setproducts] = useState(null);

    const getproducts = async () => {
        try {
            const { data } = await axios.get(
                "https://fakestoreapi.com/products"
            );
            setproducts(data);
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        console.log("Products Fetched!");
        if (!products) getproducts();
    }, []);

    return (
        <ProductContext.Provider value={[products, setproducts]}>
            <UserContext.Provider value={[users, setusers]}>
                {props.children}
            </UserContext.Provider>
        </ProductContext.Provider>
    );
};

export default Context;
