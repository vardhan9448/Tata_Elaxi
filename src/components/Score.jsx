// rafce (extension by dsznajder)
import React, { useContext } from 'react'
import AppContext from '../context/AppContext';

import './Score.css';

const Score = () => {
    const { score } = useContext( AppContext );

    return (
        <div className="score">
            Score: {score}
        </div>
    );
}

export default Score
