// rafce (extension by dsznajder)
import React, { useContext } from 'react'
import AppContext from '../context/AppContext';
import questions from '../config/questions';

import './ProgressBar.css';

const ProgressBar = () => {
    const {
        started,
        currentQuestion,
    } = useContext( AppContext );

    return (
        <div>
            <div className="progress-bar">
            {
                questions.map( ( question, idx ) => (
                    <span key={question.id} className={"progress-item " + ( started && question === currentQuestion ? "progress-item-current" : "")}>
                        {idx + 1}
                    </span>
                ))
            }
            </div>
        </div>
    )
}

export default ProgressBar
