import questions from '../config/questions';

const getQuestionById = ( questionId ) => questions.find( question => question.id === questionId );
const getOptionIdx = ( question, selectedOption ) => question.options.findIndex( option => option === selectedOption );

export {
    getQuestionById,
    getOptionIdx
};