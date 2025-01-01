import OrderFormsComponent from "../components/orderFormsComponent";
import {useNavigate} from "react-router-dom";
import {
    basePrice,
    materialListData,
    minimumOrderPrice,
    oneMaterialPrice,
    pizaListData,
    sizeListData,
    thinListData
} from "../data/datas";
import React, {useEffect} from 'react'

export default function OrderPage() {
    const [orders, ordersSet] = React.useState([]);
    const [errorList, errorListSet] = React.useState([]);
    const [userName, userNameSet] = React.useState("");
    const [pizzaThin, pizzaThinSet] = React.useState("");
    const [pizzaSize, pizzaSizeSet] = React.useState("");
    const [pizza, pizzaSet] = React.useState("");
    const [materials, materialsSet] = React.useState("");

    const navigate = useNavigate();

    useEffect(() => {
        isErrorControl();
    }, [pizzaSize, materials, pizza, pizzaThin, userName]);

    const onSubmitControl = () => {
        navigate('/orderSummary');
    }

    const getTotalPrice = () => {
        return orders.reduce((acc, i) => acc + i.total, 0).toFixed(2) || 0;
    }

    const isErrorControl = () => {
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
            ordersSet([{price: pizza.price, name: pizza.name, mats: [...materials]}]);
        }
        const total = +getTotalPrice();
        if (total < minimumOrderPrice) {
            errList.push("Required Minimum Price:" + minimumOrderPrice);
        }
        if (!userName || userName.length < 3) {
            errList.push("Empty UserName Minimum 3 Char:");
        }
        errorListSet((prev) => [...errList]);
        console.log(orders);
    };

    const calculateMatPrice = (materials) => {
        return (materials.length * oneMaterialPrice).toFixed(2);
    };
    const materialsHandle = (mat) => {
        console.log(mat);
        materialsSet(mat)
    };
    return (<div className="OrderPage">
        <div className="container">
            <h2 className="w3-animate-left">Position Absolute Acı Pizza</h2>
            <p className="text-muted">{basePrice.toFixed(2)}₺</p>
            <p>Frontend: Tüm acıları position-absolute kullanıyoruz... İsteğinize göre çeşitlendirilebilir.</p>
            <div className="w3-animate-left">
                <OrderFormsComponent
                    dataList={{
                        materialListData,
                        sizeListData,
                        thinListData,
                        pizaListData
                    }}
                    oneMaterialPrice={oneMaterialPrice}
                    getselectedMaterialList={materialsHandle}
                    pizzaThin={(e) => pizzaThinSet(e.target.value)}
                    pizzaSize={(e) => pizzaSizeSet(e.target.value)}
                    pizza={(e) => pizzaSet(pizaListData[e.target.value])}
                    userName={(e) => userNameSet(e.target.value)}></OrderFormsComponent>
            </div>
            {!!orders.length && (<table className="table table-bordered">
                <tbody>
                {
                    orders.map((i, key) =>
                        (<React.Fragment key={key}>
                            <tr>
                                <td>{i.name}</td>
                                <td>x1</td>
                                <td>{i.price}</td>
                            </tr>
                            <tr>
                                <td colSpan="2">{i.mats.join(',')}</td>
                                <td>{calculateMatPrice(i.mats)}</td>
                            </tr>
                        </React.Fragment>))
                }
                <tr>
                    <td></td>
                </tr>
                </tbody>
            </table>)}
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