export default function OrderFormsComponent({
                                                pizzaSize,
                                                pizzaThin,
                                                userName,
                                                pizza, oneMaterialPrice,
                                                getselectedMaterialList,
                                                dataList
                                            }) {
    let selectedMaterialList = [];

    const onchangeListHandle = (e) => {
        const item = e.target.value;
        const checked = e.target.checked;
        console.log(checked);
        const findExist = selectedMaterialList.find(i => i === item);
        if (findExist) {
            selectedMaterialList = [...selectedMaterialList.filter(i => i !== item)];
        } else {
            selectedMaterialList = [...selectedMaterialList, item];
        }
        console.log("item", item);
        console.log("selectedMaterialList", selectedMaterialList);
        getselectedMaterialList([...selectedMaterialList]);
    };
    return (
        <div className="m-auto">

            <div className="mb-2">
                <label className="form-label">Select an Pizza</label>
                <select onChange={pizza} id="pizza" className="form-select">
                    {
                        dataList.pizaListData.map((i, key) => (
                            <option key={key} value={key}>{i.name + ' - ' + i.price} TL</option>))
                    }
                </select></div>
            <div className="mb-2 row">
                <div className="col-6"><label className="form-label">Pizza Size:</label>
                    <select onChange={pizzaSize} id="sizeSelect" className="form-select">
                        {
                            dataList.sizeListData.map((i, key) => (<option key={key} value={i}>{i}</option>))
                        }
                    </select>
                </div>
                <div className="col-6">
                    <label className="form-label">Choose your pizza thickness</label>
                    <select onChange={pizzaThin} id="pizzaThin" className="form-select">
                        {
                            dataList.thinListData.map((i, key) => (<option key={key} value={i}>{i}</option>))
                        }
                    </select>
                </div>

            </div>
            <div className="mb-3"><label className="form-label">Ek Malzemeler</label>
                <div className="d-flex flex-wrap">
                    {
                        dataList.materialListData.map((item, key) => (
                            <div key={key} className="form-check w-25">
                                <label className="form-check-label">
                                    <input onChange={onchangeListHandle} value={item}
                                           className="form-check-input"
                                           id={item} name={item}
                                           type="checkbox"/><span>{item}</span>
                                    <div style={{fontSize: "0.5em"}}>+ {oneMaterialPrice} TL</div>
                                </label>
                            </div>)
                        )
                    }

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