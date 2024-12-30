export default function OrderFormsComponent({pizzaSize, pizzaThin, userName, pizza, material, dataList}) {
    console.log(dataList)
    return (
        <div className="m-auto">
            <div className="mb-3">
                <label className="form-label">Pizza Type</label>
                <select onChange={pizzaThin} id="doughSelect" className="form-select">
                    {
                        dataList.pizaListData.map((i, key) => (
                            <option key={key} value={i.name}>{i.name + ' - ' + i.price} TL</option>))
                    }
                </select></div>
            <div className="mb-3"><label htmlFor="sizeSelect" className="form-label">Boyut Seç</label>
                <select onChange={pizzaSize} id="sizeSelect" className="form-select">
                    {
                        dataList.sizeListData.map((i, key) => (<option key={key} value={i}>{i}</option>))
                    }
                </select></div>
            <div className="mb-3">
                <label className="form-label">Hamur Kalınlığı Seç</label>
                <select onChange={pizza} id="doughSelect" className="form-select">
                    {
                        dataList.thinListData.map((i, key) => (<option key={key} value={i}>{i}</option>))
                    }
                </select></div>
            <div className="mb-3"><label className="form-label">Ek Malzemeler</label>
                <div className="row">
                    <div className="col-6">
                        <div className="form-check">
                            <input className="form-check-input" id="pepperoni" type="checkbox"/><label
                            className="form-check-label" htmlFor="pepperoni">Pepperoni</label></div>
                        <div className="form-check">
                            <input className="form-check-input" id="sausage"
                                   type="checkbox"/>
                            <label className="form-check-label" htmlFor="sausage">Sucuk</label></div>
                        <div className="form-check">
                            <input className="form-check-input" id="tomato" type="checkbox"/>
                            <label className="form-check-label" htmlFor="tomato">Domates</label>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="form-check">
                            <input className="form-check-input" id="cheese" type="checkbox"/>
                            <label className="form-check-label" htmlFor="cheese">Peynir</label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" id="jalapeno" type="checkbox"/>
                            <label className="form-check-label" htmlFor="jalapeno">Jalapeno</label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" id="pineapple" type="checkbox"/>
                            <label className="form-check-label" htmlFor="pineapple">Ananas</label>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mb-3">
                <input onChange={userName} placeholder="UserName" className="form-control"/>
                <label htmlFor="notes" className="form-label">Order Note / Address</label>
                <textarea id="notes" className="form-control"
                          placeholder="Siparişinizle alakalı eklemek istediğiniz bir not var mı?"></textarea>
            </div>
        </div>
    )
}