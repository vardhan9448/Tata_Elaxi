import React, { useState, useEffect } from 'react'
import Introduction from './Introduction';
import Survey from './Survey';
import Userform from './Userform';

import questions from '../config/questions';
import AppContext from '../context/AppContext';

import { getQuestionById } from '../utils/questions';
import Header from './Header';

import './App.css';

const App = () => {
    const [ started, setStarted ] = useState( false );
    const [ ended, setEnded] = useState(false)
    const [ currentQuestion, setCurrentQuestion ] = useState( null );
    const [ score, setScore ] = useState( 0 );
    const [ choices, updateChoices] = useState([])

    // This "effect" runs during the first render and when ended changes
    useEffect(() => {
        console.log('done with assessment');
        console.log(choices)
    }, [ ended ]);

    const value = {
        started,
        start() {
            setStarted( true );
            setEnded(false)
            setCurrentQuestion( questions[0] ); // assume the first questions in the list is the entry point
        },
        stop() {
            setStarted( false );
            setEnded(true)
            setCurrentQuestion( null );
        },
        provideAnswer( option ) {
            setScore( score => score + option.score );
            setCurrentQuestion( question => {
                const nextQuestionId = question.getNextQuestionId( question, option );
                updateChoices([...choices,option.text]);        
                if( !nextQuestionId ) {
                    setEnded( true );
                    return null;
                }
                return getQuestionById( nextQuestionId );
            });
        },
        previousQuestion (question) {
            setCurrentQuestion( question => {
                console.log(choices)
                const previousQuestionId = question.getPreviousQuestionId( question );
                let x =  choices.slice(0,-1);
                updateChoices(x);
                return getQuestionById( previousQuestionId );
            });
        },
        currentQuestion,
        setCurrentQuestion,
        score,
        choices
    };

    return (
        <div >
            <Header></Header>
        <AppContext.Provider value={value}>
            {!started && !ended && <Introduction />}
            {started && !ended && <Survey />}
            {ended && <Userform/>}
        </AppContext.Provider>
        </div>
    )
}

export default App
