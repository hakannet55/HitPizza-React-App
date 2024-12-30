import React from "react";
import {Link} from "react-router-dom";

export default function HomePage() {
    return (
        <section className="HomePage d-flex justify-content-center align-content-start text-center"
                 style={{height: '99vh'}}>
            <div className="mt-5">
                <div className="m-auto">
                    <h1 className="text-center">Hit Pizza Kampanya</h1>
                    <div className="p-2 m-2">
                        <h3 className="d-inline">20%</h3><h5 className="d-inline">İndirimli hemen sipariş ver</h5>
                    </div>
                    <Link
                        className="btn btn-lg btn-outline-light"
                        to="/newOrder"
                    >
                        Sipariş Ver >>
                    </Link>
                </div>
            </div>

        </section>
    )
}
