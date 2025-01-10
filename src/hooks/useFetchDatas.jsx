import {useEffect, useState} from "react";
import {
    basePrice,
    materialListData,
    minimumOrderPrice,
    oneMaterialPrice,
    pizaListData,
    sizeListData,
    thinListData
} from "../data/datas";

export default function useFetchDatas(url) {
    const [data, setData] = useState(null);

    useEffect(() => {
        setTimeout(() => {
            setData({
                basePrice,
                materialListData,
                minimumOrderPrice,
                oneMaterialPrice,
                pizaListData,
                sizeListData,
                thinListData
            })
        }, Math.random() * 1500);
    }, [url]);

    return [data];
}