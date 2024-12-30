import OrderFormsComponent from "../components/orderFormsComponent";
import {useNavigate} from "react-router-dom";
import {
    basePrice,
    materialListData,
    minimumOrderPrice,
    pizaListData,
    priceMaterial,
    sizeListData,
    thinListData
} from "../datas";
import React, {useEffect} from 'react'

export default function OrderPage() {
    const [orders, ordersSet] = React.useState([]);
    const [errorList, errorListSet] = React.useState([]);
    const [userName, userNameSet] = React.useState("");
    const [pizzaThin, pizzaThinSet] = React.useState("");
    const [pizzaSize, pizzaSizeSet] = React.useState("");
    const [pizza, pizzaSet] = React.useState("");
    const [materials, materialsSet] = React.useState("");

    const dataList = {
        materialListData,
        sizeListData,
        thinListData,
        pizaListData
    };
    const navigate = useNavigate();

    useEffect(() => {
        errorListSet([]);
        isErrorControl();
        console.log("list")
    }, [pizzaSize, materials, pizza, pizzaThin, userName, orders]);

    const onSubmitControl = () => {
        navigate('/orderSummary');
    }

    const getTotalPrice = () => {
        return orders.reduce((acc, i) => acc + i.total, 0).toFixed(2);
    }

    const isErrorControl = () => {


        const total = +getTotalPrice();
        if (total < minimumOrderPrice) {
            errorList.push("Required Minimum Price:" + minimumOrderPrice);
        }
        if (!userName || userName.length < 3) {
            errorList.push("Empty UserName Minimum 3 Char:");
        }
        if (!pizza) {
            errorList.push("Required type an pizza");
        }
        if (!pizzaSize) {
            errorList.push("Required pizzaSize");
        }
        if (!pizzaThin) {
            errorList.push("Required pizzaThin");
        }
        errorListSet(errorList);
    };

    const calculateMatPrice = (materials) => {
        return (materials.length * priceMaterial).toFixed(2);
    };
    const materialsHandle = (mat) => {
        materialsSet(mat)
    };
    const pizzaSizeHandle = (size) => {
        pizzaSizeSet(size)
    };
    const pizzaHandle = (type) => {
        pizzaSet(pizza);
    };
    const userNameHandle = (e) => {
        userNameSet(e.target.value)
    };
    let pizzaThinHandle = (e) => {
        pizzaThinSet(e.target.value)
    }
    return (<div className="OrderPage">
        <div className="container">
            <h2>Position Absolute Acı Pizza</h2>
            <p className="text-muted">{basePrice.toFixed(2)}₺</p>
            <p>Frontend: Tüm acıları position-absolute kullanıyoruz... İsteğinize göre çeşitlendirilebilir.</p>
            <OrderFormsComponent dataList={dataList}
                                 materials={materialsHandle}
                                 pizzaThin={pizzaThinHandle}
                                 pizzaSize={pizzaSizeHandle}
                                 pizza={pizzaHandle}
                                 userName={userNameHandle}></OrderFormsComponent>
            <table>
                <tbody>
                {
                    orders.map(i =>
                        <>
                            <tr>
                                <td>{i.name}</td>
                                <td>x1</td>
                                <td>{i.price}</td>
                            </tr>
                            <tr>
                                <td colSpan="2">{i.mats.join(',')}</td>
                                <td>{calculateMatPrice(i.mats)}</td>
                            </tr>
                        </>
                    )
                }
                <tr>
                    <td></td>
                </tr>
                </tbody>
            </table>
            {errorList.length && <div className="alert alert-danger">
                {errorList.map((i, key) => (<div key={key}>{i}</div>))}
            </div>
            }
            <div className="d-flex justify-content-between align-items-center"><span
                className="fs-4 fw-bold">Toplam: {getTotalPrice()}₺</span>
                <p>Required Minimum Price:{minimumOrderPrice}</p>
                <button disabled={!!errorList.length} type="button" onClick={onSubmitControl}
                        className="btn btn-warning">Sipariş Ver
                </button>
            </div>
        </div>
    </div>);
}