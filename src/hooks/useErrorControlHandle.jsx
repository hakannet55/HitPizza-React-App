import {useEffect, useState} from 'react';
import useFetchDatas from "./useFetchDatas";

const useErrorControl = (pizza, pizzaSize, pizzaThin, materials, userName) => {
    const [errorList, setErrorList] = useState([]);
    const [orders, setOrders] = useState([]);
    const [responseApi] = useFetchDatas("path/to/url/api");


    useEffect(() => {
        if (!responseApi) {
            return;
        }

        const errList = [];

        if (!pizza) {
            errList.push("Required pizza type");
        }
        if (!pizzaSize) {
            errList.push("Required pizzaSize");
        }
        if (!pizzaThin) {
            errList.push("Required pizzaThin");
        }
        if (pizza || materials.length) {
            console.log("materials", materials);
            setOrders([{price: pizza.price, name: pizza.name, size: pizzaSize || 0, mats: [...materials]}]);
        }

        const total = getTotalPrice(orders);
        if (total < responseApi.minimumOrderPrice) {
            errList.push("Required Minimum Price: " + responseApi.minimumOrderPrice);
        }
        if (!userName || userName.length < 3) {
            errList.push("Empty UserName Minimum 3 Char:");
        }

        setErrorList(errList);
        console.log("orders", orders);
    }, [pizza, pizzaSize, pizzaThin, materials, userName, orders]);

    return {
        errorList, api: {
            ...responseApi
        }
    };
};

const getTotalPrice = (orders) => {
    return orders.reduce((total, order) => total + order.price, 0);
};

export default useErrorControl;
