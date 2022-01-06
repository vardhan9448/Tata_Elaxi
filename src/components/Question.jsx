import React from 'react'

import './Question.css';

const Question = ( { question, provideAnswer,previousQuestion } ) => {
    const { title, illustration, options,img,id } = question;

    return (
        <>
        {
            

        <section className="container">
        
            <div className="previous-question">
            {id != 1 &&
                <button onClick={() => previousQuestion(question)} className="previous-btn">Previous Question </button>
            }
            </div>
            <div className="progress-div"> 
                <img src={img} alt="illustration" className="progress-bar"/>
            </div>
            <section className="question">
           
                         <div className="title"> 
                            <article className="title-article">
                                {title}    
                            </article>
                        </div>

                        <div className="image">
                            <article className="question-article">
                              <img src={illustration} alt="illustration" className="img-illustration"/>
                            </article>
                        </div> 
             </section>
            
{/* ------------------------------------------------------------------------------------------------------------- */}
                   
            <section className="section-options">
                {/* <div className="select-text"> */}
                <p className="select-text">Select the appropriate option</p>
                {/* </div> */}
            <div className="question-options">
                    {
                        options.map( ( option, idx ) => (
                            <div className="question-option" onClick={() => provideAnswer( option )} key={idx}>
                                <div> 
                                    <img src={option.imageUrl} alt={option.text} className="img-fluid" />
                                </div>
                                <div className="question-option-text">{option.text}</div>
                        </div>
                        ))
                    }
            </div>
            </section>  

        </section>
           
           
        }
        </>
    )
}

export default Question
