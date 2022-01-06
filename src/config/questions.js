import { getOptionIdx } from '../utils/questions';

const questions = [
    {
        id: 1,
        getNextQuestionId( question, option ) {
            return 2;
        },
        title: 'What industry do you work in?',
        illustration :'/images/Q1/illustration_Q1.png',
        options: [
            {
                imageUrl: '/images/Q1/icn_Q1_a.png',
                text: 'Food',
                score: 0
            },
            {
                imageUrl: '/images/Q1/icn_Q1_b.png',
                text: 'Beverage Production',
                score: 0
            },
            {
                imageUrl: '/images/Q1/icn_Q1_c.png',
                text: 'Third-party food testing',
                score: 0
            },
            {
                imageUrl: '/images/Q1/icn_Q1_d.png',
                text: 'Others',
                score: 0
            }
        ]
    },
    {
        id: 2,
        getNextQuestionId( question, option ) {
            return 3
        },
        title: 'Is your product considered low or high risk for microbial contamination?',
        illustration :'/images/Q2/illustration_Q2.png',
        options: [
            {
                imageUrl: '/images/Q2/icn_highrisk.png',
                text: 'High Risk',
                score: 0
            },
            {
                imageUrl: '/images/Q2/icn_lowrisk.png',
                text: 'Low Risk',
                score: 0    
            }
        ]
    },
    {
        id: 3,
        getNextQuestionId( question, option ) {
            const optionIdx = getOptionIdx( question, option );
            if(optionIdx===1) return 4;
            if(optionIdx===0 || optionIdx===2) return 5;
            return null
        },
        title: 'Does your company currently perform environmental monitoring?',
        illustration :'/images/Q3/illustration_Q3.png',
        options: [
            {
                imageUrl: '/images/Q3/icn_Q3_a.png',
                text: 'Yes',
                score: 0
            },
            {
                imageUrl: '/images/Q3/icn_Q3_b.png',
                text: 'No',
                score: 0
            },
            {
                imageUrl: '/images/Q3/icn_Q3_c.png',
                text: 'No, but we are in the process of establishing',
                score: 0
            },
            {
                imageUrl: '/images/Q3/icn_Q3_d.png',
                text: 'No, my product is commercially sterile',
                score: 0
            },
            {
                imageUrl: '/images/Q3/icn_Q3_e.png',
                text: 'I’m not sure',
                score: 0
            }
        ]
    },
    {
        id: 4,
        getNextQuestionId( question, option ) {
            return null
        },
        title: 'Why is environmental monitoring not part of your plan?',
        illustration :'/images/Q4/illustration_Q4a.png',
        options: [
            {
                imageUrl: '/images/Q4/icn_Q4a_a.png',
                text: 'It is not required by a regulatory body Risk',
                score: 0
            },
            {
                imageUrl: '/images/Q4/icn_Q4a_b.png',
                text: 'We believe end product testing is the best way to mitigate risk Risk',
                score: 0    
            },
            {
                imageUrl: '/images/Q4/icn_Q4a_c.png',
                text: 'We do not have the resources to administer this type of program',
                score: 0    
            },
            {
                imageUrl: '/images/Q4/icn_Q4a_d.png',
                text: 'Other',
                score: 0    
            }
        ]
    },
    {
        id: 5,
        getNextQuestionId( question, option ) {
            return null
        },
        title: 'What are your greatest needs or challenges related to environmental monitoring',
        options: [
            {
                imageUrl: 'https://picsum.photos/300/150',
                text: 'Budget',
                score: 0
            },
            {
                imageUrl: 'https://picsum.photos/300/150',
                text: 'Lack of personnel',
                score: 0    
            },
            {
                imageUrl: 'https://picsum.photos/300/150',
                text: 'Budget',
                score: 0
            },
            {
                imageUrl: 'https://picsum.photos/300/150',
                text: 'Time to result of current test methods',
                score: 0
            },
            {
                imageUrl: 'https://picsum.photos/300/150',
                text: 'Lack of specifications',
                score: 0
            },
            {
                imageUrl: 'https://picsum.photos/300/150',
                text: 'How to effectively use the data we generate',
                score: 0
            },
            {
                imageUrl: 'https://picsum.photos/300/150',
                text: 'No significant needs or challenges',
                score: 0
            }
        ]
    },
]

export default questions;