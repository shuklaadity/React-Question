import React, { useState } from "react";
import Data from "./AcordianApi";
import Qus from "./Qus";
import "./Acordian.css";

const Acordian = () => {


    const [items, setitems] = useState(Data);
    return (
         <>

        <section>
            <h1>Interview Qustions </h1>
            {
                items.map((currentelem) => {
                    return <Qus
                        key={currentelem.id}
                        qus={currentelem.quas}
                        ans={currentelem.ans}

                    />;
                })
            }
        </section>
    </>
    );

}

export default Acordian;