import React from "react";
import {Link} from "react-router-dom";

export default function HomePage(){
    return (
        <div className="d-flex align-content-center">
        <section>
            <div className="junbotron">
                <h1>Hit Pizza Kampanya</h1>
                <div>
                    <h3 className="d-inline">20%</h3><h5 className="d-inline">İndirimli hemen sipariş ver</h5>
                </div>
            </div>
            <Link
                 to="/newOrder"
            >
                Sipariş Ver
            </Link>
        </section>
    </div>
    )
}
