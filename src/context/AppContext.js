import { createContext } from "react";

const AppContext = createContext({
    started: false,
    start() {
        this.started = true;
        this.ended = false;
    },
    stop() {
        this.started = false;
        this.ended = true

    },
    provideAnswer( option ) {
        return;
    },
    updateChoices(option) {
        return;
    },
    currentQuestion: null,
    setCurrentQuestion( question ) {
        this.currentQuestion = question;
    },
    score: 0,
    choices:[]
});

export default AppContext;