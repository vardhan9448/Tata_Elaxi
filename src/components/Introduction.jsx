import React, { useContext } from 'react'
import AppContext from '../context/AppContext';

import './Introduction.css';

const Introduction = () => {
    const { start } = useContext(AppContext);

    return (
        <section className="introduction">


            <div className="introduction-message" >
                <article className = "landing-article">
                    <h1 className = "landing-h1">Environmental Monitoring Assessment</h1>
                    <p className = "landing-p">
                        Is your cleaning and sanitation program under control? 
                        As part of a robust environmental monitoring program, effective hygiene monitoring can help ensure your cleaning and sanitation programs are working as hard as your staff implementing them.
                    </p>
                    <p className = "landing-p"> Take this 5-min assessment to understand key focus areas to help mitigate risk and gain valuable insights
                        into how to improve your hygiene monitoring program today.
                    </p>
                    <button onClick={start} className="btn-primary">GET STARTED</button>
                </article>

            </div>
            {/* ----------------------------------------------------------------------------------------- */}
            <div className="introduction-img-div">
                <article>
                    <img src="/images/Landing/illustration_landing_pg.png"  alt="" className="landing-image"/>
                </article>
            </div>

        </section>
    )
}

export default Introduction