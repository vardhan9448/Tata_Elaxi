import React, { useContext } from 'react'
import ProgressBar from './ProgressBar';
import Score from './Score';
import Question from './Question';
import AppContext from '../context/AppContext';
import questions from '../config/questions';

import './Survey.css';

const Survey = () => {
    const { provideAnswer, currentQuestion ,previousQuestion} = useContext( AppContext );

    return (
        <>
            {/* <ProgressBar /> */}
            {/* <Score /> */}
            {
                questions.map( question => (
                    <div className={currentQuestion === question ? 'show' : 'hide'}>
                        <Question
                            key={question.id}
                            question={question}
                            provideAnswer={provideAnswer}
                            previousQuestion={previousQuestion}
                        />
                    </div>
                ))
            }
        </>
    )
}

export default Survey
