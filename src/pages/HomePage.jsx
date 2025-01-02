import React from "react";
import {useNavigate} from "react-router-dom";
import a1 from "../images/bg/a.png";
import a2 from "../images/bg/b.png";
import a3 from "../images/bg/c.png";
import a4 from "../images/bg/d.png";


export default function HomePage() {
    const [animatedClass, animatedClassSet] = React.useState("");
    const nv = useNavigate();

    const clickedOrder = () => {
        animatedClassSet("item_animatedDrop");
        setTimeout(() => {
            nv("/newOrder");
        }, 3000);
    }
    return (
        <section className="HomePage d-flex justify-content-center align-content-start text-center"
                 style={{height: '99vh', ...(animatedClass ? {background: 'black'} : {})}}>
            <div className="mt-5">
                <div className="m-auto">
                    <h1 className="text-center" style={{color: '#fff7d6', textShadow: '1px 1px 7px #1f1f1f'}}>Hit Pizza
                        Kampanya</h1>
                    <div className="w-100 bg-white mt-3" style={{padding: '1px', opacity: .5}}></div>

                    <div className="p-2 m-2 text-white">
                        <h3 className="d-inline">20%</h3><h5 className="d-inline">İndirimli hemen sipariş ver</h5>
                    </div>
                    <br/>
                    <a
                        onClick={clickedOrder}
                        href="#"
                        disabled={animatedClass}
                        className={!animatedClass ? "btn btn-lg btn-outline-light" : 'disabled w3-animate-left'}
                    >
                        {!animatedClass ? 'Sipariş Ver >>' : '...Please Wait...'}
                    </a>
                </div>
            </div>
            <div className={animatedClass ? '' : 'anmimImg'}>
                <img className={animatedClass} src={a1}/>
                <img className={animatedClass} src={a2}/>
                <img className={animatedClass} src={a3}/>
                <img className={animatedClass} src={a4}/>
            </div>
        </section>
    )
}
