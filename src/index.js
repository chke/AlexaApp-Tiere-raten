var Alexa = require("alexa-sdk");

var states = {
    ASKMODE: "_ASKMODE"
};

var questions = [
    {
        message: "Ist das gesuchte Tier ein Haustier?",
        yes: "Haustier",
        question: "Welches Tier ein Haustier?"
    },
    {
        message: "Lebt das Tier auf einem Bauernhof?",
        yes: "Bauernhof",
        question: "Welches der Tiere lebt auf dem Bauernhof?"
    },
    {
        message: "Lebt das gesuchte Tier im Wald?",
        yes: "Wald",
        question: "Welches Tier lebt im Wald?"
    },
    {
        message: "Ist das gesuchte Tier ein Säugetier?",
        yes: "Säugetier",
        question: "Welches der Tiere ist ein Säugetier?"
    },
    {
        message: "Ist das gesuchte Tier ein Vogel?",
        yes: "Vogel",
        question: "Welches der Tiere ist ein Vogel?"
    },

    {
        message: "Ist das gesuchte Tier ein Fleischfresser?",
        yes: "Fleischfresser",
        question: "Welches der Tiere ist ein Fleischfresser?"
    },
    {
        message: "Ist das gesuchte Tier ein Allesfresser?",
        yes: "Allesfresser",
        question: "Welches Tier ist ein Allesfresser?"
    },
    {
        message: "Ist das gesuchte Tier ein Pflanzenfresser?",
        yes: "Pflanzenfresser",
        question: "Welches Tier ist ein Pflanzenfresser?"
    },
    {
        message: "Ist das gesuchte Tier ein Insektenfresser?",
        yes: "Insektenfresser",
        question: "Welches Tier ist ein Insektenfresser?"
    },

    {
        message: "Ist das gesuchte Tier ein Aasfresser?",
        yes: "Aasfresser",
        question: "Welches Tier ist ein Aasfresser?"
    },
    {
        message: "Gehört das gesuchte Tier zur Gattung der Katzen?",
        yes: "Katze",
        question: "Welches Tier gehört zur Gattung der Katzen?"
    },
    {
        message: "Gehört das gesuchte Tier zur Gattung der Pferde?",
        yes: "Pferde",
        question: "Welches Tier gehört zur Gattung der Pferde?"
    },
    {
        message: "Hat das gesuchte Tier einen Rüssel?",
        yes: "Rüssel",
        question: "Welches Tier hat einen Rüssel?"
    },
    {
        message: "Kann das gesuchte Tier fliegen?",
        yes: "Fliegt",
        question: "Welches der Tiere kann fliegen?"
    },
    {
        message: "Hat das gesuchte Tier ein Fell?",
        yes: "Fell",
        question: "Welches Tier hat ein Fell?"
    },
    {
        message: "Hat das gesuchte Tier Federn?",
        yes: "Gefieder",
        question: "Welches der Tiere hat Federn?"
    },
    {
        message: "Hat das gesuchte Tier Schuppen?",
        yes: "Schuppen",
        question: "Welches der Tiere hat Schuppen?"
    },
    {
        message: "Hat das gesuchte Tier Hufe?",
        yes: "Hufe",
        question: "Welches der Tiere hat Hufe?"
    },
    {
        message: "Gibt das gesuchte Tier Milch?",
        yes: "Milch",
        question: "Welches Tier gibt Milch?"
    },
    {
        message: "Hat das gesuchte Tier große Ohren?",
        yes: "Große Ohren",
        question: "Welches Tier hat große Ohren?"
    },
    {
        message: "Hat das gesuchte Tier Hörner?",
        yes: "Hörner",
        question: "Welches Tier hat Hörner?"
    },
    {
        message: "Kann man Wolle aus dem Fell herstellen?",
        yes: "Wolle",
        question: "Bei welchen Tier kann man Wolle aus dem Fell herstellen?"
    },
    {
        message: "Ist das gesuchte Tier nachtaktiv?",
        yes: "Nachtaktiv",
        question: "Welches der Tiere ist nachtaktiv?"
    },
    {
        message: "Ist das gesuchte Tier kleiner als ein Hund?",
        yes: "Klein",
        question: "Welches Tier ist kleiner als ein Hund?"
    },
    {
        message: "Ist das gesuchte Tier größer als ein Hund?",
        yes: "Groß",
        question: "Welches Tier ist ein größer als ein Hund?"
    },

    {
        message: "Lebt das gesuchte Tier im Meer?",
        yes: "Meer",
        question: "Welches der Tiere lebt im Meer?"
    },
    {
        message: "Ist das gesuchte Tier ein Fisch?",
        yes: "Fisch",
        question: "Welches der Tiere ist ein Fisch?"
    },
    {
        message: "Lebt das gesuchte Tier im Rudel?",
        yes: "Rudel",
        question: "Welches der Tiere lebt im Rudel?"
    },
    {
        message: "Lebt das gesuchte Tier in Europa?",
        yes: "Europa",
        question: "Welches der Tiere lebt in Europa?"
    },
    {
        message: "Lebt das gesuchte Tier in Asien?",
        yes: "Asien",
        question: "Welches der Tiere lebt in Asien?"
    },
    {
        message: "Lebt das gesuchte Tier in Afrika?",
        yes: "Afrika",
        question: "Welches der Tiere lebt in Afrika?"
    },
    {
        message: "Lebt das gesuchte Tier in Amerika?",
        yes: "Amerika",
        question: "Welches der Tiere lebt in Amerika?"
    },
    {
        message: "Lebt das gesuchte Tier in der Arktis?",
        yes: "Arktis",
        question: "Welches der Tiere lebt in der Arktis?"
    },
    {
        message: "Lebt das gesuchte Tier in der Antarktis?",
        yes: "Antarktis",
        question: "Welches der Tiere lebt in der Antarktis?"
    },
    {
        message: "Lebt das gesuchte Tier in Australien?",
        yes: "Australien",
        question: "Welches der Tiere lebt in Australien?"
    }
];

var answers = [
    {
        message: "Hund",
        yes: [
            "Haustier",
            "Säugetier",
            "Fleischfresser",
            "Europa",
            "Asien",
            "Afrika",
            "Amerika",
            "Australien",
            "Fell"
        ]
    },
    {
        message: "Katze",
        yes: [
            "Haustier",
            "Säugetier",
            "Fleischfresser",
            "Europa",
            "Asien",
            "Afrika",
            "Amerika",
            "Australien",
            "Fell",
            "Katze",
            "Klein",
            "Nachtaktiv"
        ]
    },
    {
        message: "Meerschweinchen",
        yes: [
            "Haustier",
            "Säugetier",
            "Pflanzenfresser",
            "Europa",
            "Asien",
            "Afrika",
            "Amerika",
            "Australien",
            "Fell",
            "Klein"
        ]
    },
    {
        message: "Hamster",
        yes: [
            "Haustier",
            "Säugetier",
            "Pflanzenfresser",
            "Europa",
            "Asien",
            "Afrika",
            "Amerika",
            "Australien",
            "Nachtaktiv",
            "Fell",
            "Klein"
        ]
    },
    {
        message: "Zwergkaninchen",
        yes: [
            "Haustier",
            "Säugetier",
            "Pflanzenfresser",
            "Europa",
            "Asien",
            "Afrika",
            "Amerika",
            "Australien",
            "Fell",
            "Große Ohren",
            "Klein"
        ]
    },
    {
        message: "Goldfisch",
        yes: [
            "Haustier",
            "Fisch",
            "Allesfresser",
            "Europa",
            "Asien",
            "Afrika",
            "Amerika",
            "Australien",
            "Rudel",
            "Schuppen",
            "Klein"
        ]
    },

    {
        message: "Schaf",
        yes: [
            "Bauernhof",
            "Säugetier",
            "Hufe",
            "Pflanzenfresser",
            "Europa",
            "Asien",
            "Afrika",
            "Amerika",
            "Australien",
            "Rudel",
            "Fell",
            "Wolle",
            "Groß"
        ]
    },
    {
        message: "Ziege",
        yes: [
            "Bauernhof",
            "Säugetier",
            "Milch",
            "Hufe",
            "Europa",
            "Asien",
            "Afrika",
            "Amerika",
            "Australien",
            "Pflanzenfresser",
            "Rudel",
            "Fell",
            "Hörner",
            "Groß"
        ]
    },
    {
        message: "Kuh",
        yes: [
            "Bauernhof",
            "Säugetier",
            "Milch",
            "Hufe",
            "Europa",
            "Asien",
            "Afrika",
            "Amerika",
            "Australien",
            "Pflanzenfresser",
            "Rudel",
            "Fell",
            "Groß"
        ]
    },
    {
        message: "Pferd",
        yes: [
            "Bauernhof",
            "Säugetier",
            "Pferde",
            "Europa",
            "Asien",
            "Afrika",
            "Amerika",
            "Australien",
            "Hufe",
            "Pflanzenfresser",
            "Rudel",
            "Fell",
            "Groß"
        ]
    },
    {
        message: "Esel",
        yes: [
            "Bauernhof",
            "Säugetier",
            "Pferde",
            "Europa",
            "Asien",
            "Afrika",
            "Amerika",
            "Australien",
            "Hufe",
            "Pflanzenfresser",
            "Fell",
            "Groß"
        ]
    },
    {
        message: "Schwein",
        yes: [
            "Bauernhof",
            "Säugetier",
            "Allesfresser",
            "Europa",
            "Asien",
            "Afrika",
            "Amerika",
            "Australien",
            "Rudel",
            "Hufe",
            "Groß"
        ]
    },
    {
        message: "Rind",
        yes: [
            "Bauernhof",
            "Säugetier",
            "Pflanzenfresser",
            "Europa",
            "Asien",
            "Afrika",
            "Amerika",
            "Australien",
            "Rudel",
            "Hufe",
            "Fell",
            "Groß"
        ]
    },
    {
        message: "Huhn",
        yes: [
            "Bauernhof",
            "Vogel",
            "Europa",
            "Asien",
            "Afrika",
            "Amerika",
            "Australien",
            "Allesfresser",
            "Gefieder",
            "Klein"
        ]
    },

    {
        message: "Kaninchen",
        yes: [
            "Wald",
            "Große Ohren",
            "Säugetier",
            "Pflanzenfresser",
            "Europa",
            "Asien",
            "Afrika",
            "Amerika",
            "Australien",
            "Fell",
            "Klein"
        ]
    },
    {
        message: "Hase",
        yes: [
            "Wald",
            "Große Ohren",
            "Säugetier",
            "Pflanzenfresser",
            "Europa",
            "Asien",
            "Afrika",
            "Amerika",
            "Australien",
            "Fell",
            "Klein"
        ]
    },
    {
        message: "Fuchs",
        yes: [
            "Wald",
            "Fleischfresser",
            "Säugetier",
            "Nachtaktiv",
            "Europa",
            "Asien",
            "Australien",
            "Amerika",
            "Fell",
            "Klein"
        ]
    },
    {
        message: "Dachs",
        yes: [
            "Wald",
            "Allesfresser",
            "Säugetier",
            "Nachtaktiv",
            "Europa",
            "Asien",
            "Afrika",
            "Amerika",
            "Fell",
            "Klein"
        ]
    },
    {
        message: "Igel",
        yes: [
            "Wald",
            "Allesfresser",
            "Säugetier",
            "Nachtaktiv",
            "Europa",
            "Asien",
            "Afrika",
            "Klein"
        ]
    },
    {
        message: "Maus",
        yes: [
            "Wald",
            "Allesfresser",
            "Nachtaktiv",
            "Säugetier",
            "Europa",
            "Asien",
            "Afrika",
            "Amerika",
            "Australien",
            "Fell",
            "Klein"
        ]
    },
    {
        message: "Wolf",
        yes: [
            "Wald",
            "Säugetier",
            "Fleischfresser",
            "Europa",
            "Asien",
            "Amerika",
            "Rudel",
            "Nachtaktiv",
            "Fell"
        ]
    },
    {
        message: "Reh",
        yes: [
            "Wald",
            "Rudel",
            "Hufe",
            "Europa",
            "Asien",
            "Amerika",
            "Säugetier",
            "Pflanzenfresser",
            "Fell",
            "Groß"
        ]
    },
    //{ "message": "Ratte", "yes": ["Haustier", "Wald"]},
    {
        message: "Adler",
        yes: [
            "Vogel",
            "Fliegt",
            "Amerika",
            "Fleischfresser",
            "Gefieder",
            "Klein"
        ]
    },
    {
        message: "Möwe",
        yes: [
            "Vogel",
            "Allesfresser",
            "Europa",
            "Asien",
            "Afrika",
            "Amerika",
            "Australien",
            "Fliegt",
            "Gefieder",
            "Klein"
        ]
    },
    {
        message: "Taube",
        yes: [
            "Vogel",
            "Pflanzenfresser",
            "Europa",
            "Asien",
            "Afrika",
            "Amerika",
            "Australien",
            "Rudel",
            "Fliegt",
            "Gefieder",
            "Klein"
        ]
    },
    {
        message: "Geier",
        yes: [
            "Vogel",
            "Aasfresser",
            "Fliegt",
            "Europa",
            "Asien",
            "Afrika",
            "Gefieder",
            "Klein"
        ]
    },
    {
        message: "Eule",
        yes: [
            "Vogel",
            "Fleischfresser",
            "Europa",
            "Asien",
            "Fliegt",
            "Gefieder",
            "Nachtaktiv",
            "Europa",
            "Asien",
            "Klein"
        ]
    },

    {
        message: "Löwe",
        yes: [
            "Afrika",
            "Säugetier",
            "Fleischfresser",
            "Katze",
            "Rudel",
            "Fell",
            "Groß"
        ]
    },
    {
        message: "Erdmännchen",
        yes: ["Afrika", "Säugetier", "Fleischfresser", "Rudel", "Fell", "Klein"]
    },
    {
        message: "Affe",
        yes: [
            "Afrika",
            "Amerika",
            "Säugetier",
            "Allesfresser",
            "Rudel",
            "Fell",
            "Klein"
        ]
    },
    {
        message: "Elefant",
        yes: [
            "Afrika",
            "Asien",
            "Rüssel",
            "Rudel",
            "Große Ohren",
            "Säugetier",
            "Pflanzenfresser",
            "Groß"
        ]
    },
    {
        message: "Giraffe",
        yes: [
            "Afrika",
            "Hufe",
            "Rudel",
            "Säugetier",
            "Pflanzenfresser",
            "Fell",
            "Groß"
        ]
    },
    {
        message: "Gnu",
        yes: [
            "Afrika",
            "Hufe",
            "Rudel",
            "Hörner",
            "Säugetier",
            "Pflanzenfresser",
            "Fell",
            "Groß"
        ]
    },
    {
        message: "Zebra",
        yes: [
            "Afrika",
            "Pferde",
            "Hufe",
            "Rudel",
            "Säugetier",
            "Pflanzenfresser",
            "Fell",
            "Groß"
        ]
    },
    {
        message: "Tiger",
        yes: [
            "Asien",
            "Säugetier",
            "Fleischfresser",
            "Katze",
            "Fell",
            "Nachtaktiv",
            "Groß"
        ]
    },
    {
        message: "Ameisenbär",
        yes: [
            "Amerika",
            "Säugetier",
            "Insektenfresser",
            "Fell",
            "Wald",
            "Klein"
        ]
    },
    {
        message: "Bär",
        yes: [
            "Säugetier",
            "Allesfresser",
            "Amerika",
            "Asien",
            "Europa",
            "Nachtaktiv",
            "Fell",
            "Wald",
            "Groß"
        ]
    },

    {
        message: "Nilpferd",
        yes: [
            "Säugetier",
            "Pflanzenfresser",
            "Afrika",
            "Nachtaktiv",
            "Rudel",
            "Groß"
        ]
    },

    {
        message: "Pinguin",
        yes: [
            "Vogel",
            "Antarktis",
            "Fleischfresser",
            "Rudel",
            "Gefieder",
            "Klein"
        ]
    },
    {
        message: "Eisbär",
        yes: ["Säugetier", "Arktis", "Fleischfresser", "Fell", "Groß"]
    },
    {
        message: "Delfin",
        yes: [
            "Meer",
            "Europa",
            "Asien",
            "Afrika",
            "Amerika",
            "Australien",
            "Säugetier",
            "Rudel",
            "Fleischfresser",
            "Groß"
        ]
    },
    {
        message: "Wal",
        yes: [
            "Meer",
            "Europa",
            "Asien",
            "Afrika",
            "Amerika",
            "Australien",
            "Säugetier",
            "Pflanzenfresser",
            "Groß"
        ]
    },
    {
        message: "Hai",
        yes: [
            "Meer",
            "Europa",
            "Asien",
            "Afrika",
            "Amerika",
            "Australien",
            "Fisch",
            "Fleischfresser",
            "Groß"
        ]
    },
    {
        message: "Clownfisch",
        yes: [
            "Meer",
            "Europa",
            "Asien",
            "Afrika",
            "Amerika",
            "Australien",
            "Fisch",
            "Allesfresser",
            "Klein",
            "Schuppen"
        ]
    }
];

// Sort by random
answers = answers.sort(function() {
    return 0.5 - Math.random();
});

// This is the intial welcome message
var welcomeMessage =
    "Willkommen beim Ratespiel. Denk an ein Tier und ich versuche es zu erraten. Hier meine erste Frage: ";

// This is the message that is repeated if the response to the initial welcome message is not heard
var repeatWelcomeMessage =
    "Sag ja wenn du starten möchtest oder nein um zu beenden.";

// this is the message that is repeated if Alexa does not hear/understand the reponse to the welcome message
var promptToStartMessage =
    "Sag ja wenn du starten möchtest oder nein um zu beenden.";

// This is the prompt during the game when Alexa doesnt hear or understand a yes / no reply
var promptToSayYesNo = "Sag bitte ja oder nein um die Frage zu beantworten";

// This is the prompt to ask the user if they would like to hear a short description of thier chosen profession or to play again
var playAgainMessage = "Danke für's spielen, möchtest du erneut starten?";

// this is the help message during the setup at the beginning of the game
var helpMessage =
    "Ich stelle Fragen über ein Tier und du musst sie mit ja oder nein antworten.";

// This is the goodbye message when the user has asked to quit the game
var goodbyeMessage = "Tschüss";

var currentAnswerForQuestion;

// --------------- Handlers -----------------------

// Called when the session starts.
exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);
    alexa.APP_ID = process.env.APP_ID;
    alexa.appId = alexa.APP_ID;
    alexa.registerHandlers(newSessionHandler, askQuestionHandlers);
    alexa.execute();
};

// set state to start up and  welcome the user
var newSessionHandler = {
    NewSession: function() {
        this.handler.state = states.ASKMODE;

        helper.logUser(this);

        if (Object.keys(this.attributes).length === 0) {
            this.attributes["answered"] = {};
        }
        var question = helper.getNextQuestion(this);
        this.attributes["question"] = question;

        this.emit(":ask", welcomeMessage + question, question);
    },
    "AMAZON.HelpIntent": function() {
        this.handler.state = states.ASKMODE;
        this.emit(":ask", helpMessage, helpMessage);
    },
    Unhandled: function() {
        this.handler.state = states.ASKMODE;
        this.emit(
            ":ask",
            this.attributes["question"],
            this.attributes["question"]
        );
    }
};

// user will have been asked a question when this intent is called. We want to look at their yes/no
// response and then ask another question. If we have asked more than the requested number of questions Alexa will
// make a choice, inform the user and then play again
var askQuestionHandlers = Alexa.CreateStateHandler(states.ASKMODE, {
    NewSession: function() {
        this.handler.state = "";
        this.emitWithState("NewSession");
    },
    // For Echosim debugging
    YesIntent: function() {
        // Handle Yes intent.
        helper.yesOrNo(this, "yes");
    },
    // For Echosim debugging
    NoIntent: function() {
        // Handle No intent.
        helper.yesOrNo(this, "no");
    },
    "AMAZON.YesIntent": function() {
        // Handle Yes intent.
        helper.yesOrNo(this, "yes");
    },
    "AMAZON.NoIntent": function() {
        // Handle No intent.
        helper.yesOrNo(this, "no");
    },
    "AMAZON.HelpIntent": function() {
        this.emit(":ask", promptToSayYesNo, promptToSayYesNo);
    },
    "AMAZON.StopIntent": function() {
        this.emit(":tell", goodbyeMessage);
    },
    "AMAZON.CancelIntent": function() {
        this.emit(":tell", goodbyeMessage);
    },
    Unhandled: function() {
        this.emit(":ask", promptToSayYesNo, promptToSayYesNo);
    }
});

// --------------- Helper Functions  -----------------------

var helper = {
    logUser: function(context) {
        if (
            context &&
            context.event &&
            context.event.session &&
            context.event.session.user
        ) {
            console.log(
                "User: ",
                context.event.session.sessionId,
                context.event.session.user.attributes,
                context.attributes
            );
        } else {
            console.log("Failed to get user");
        }
    },

    getNextQuestion: function(context) {
        // set state to asking questions
        context.handler.state = states.ASKMODE;

        // ask first question, the response will be handled in the askQuestionHandler
        var answer = helper.getBestAnswer(context);
        currentAnswerForQuestion = answer;
        var message;
        var availableAnswers = helper.getAvailableAnswers(context);

        helper.logUser(context);

        var foundAnswers = "";
        availableAnswers.map(function(foundAnswer, index) {
            foundAnswers =
                (index > 0 ? foundAnswers + " oder " : "") +
                foundAnswer.message;
        });

        if (answer && availableAnswers.length > 1) {
            var messageObj = questions.find(function(currQuestion) {
                return currQuestion.yes === answer;
            });
            if (messageObj) {
                message = messageObj.message;
            }
        }
        if (!message) {
            context.handler.state = states.ASKMODE;
            var foundAnswers = "";
            availableAnswers.map(function(foundAnswer, index) {
                foundAnswers =
                    (index > 0 ? foundAnswers + " oder " : "") +
                    foundAnswer.message;
            });
            if (availableAnswers.length > 1) {
                message =
                    "Ich habe " +
                    availableAnswers.length +
                    " mögliche Tiere gefunden: " +
                    foundAnswers +
                    ". ";
            } else if (availableAnswers.length < 1) {
                message = "Ich habe leider kein passendes Tier gefunden. ";
            } else {
                message =
                    "Ich glaube du hast an dieses Tier gedacht: " +
                    foundAnswers +
                    ". ";
            }

            // Reset
            context.attributes["answered"] = {};

            // New game:
            var newQuestion = helper.getNextQuestion(context);
            context.attributes["question"] = newQuestion;

            message =
                message +
                "Lass uns noch ein Spiel spielen, hier die erste Frage: " +
                newQuestion;
        }

        return message;
    },

    // gives the user more information on their final choice
    giveDescription: function(context) {
        // get the speech for the child node
        var description = helper.getDescriptionForNode();
        var message = description + ", " + repeatWelcomeMessage;

        context.emit(":ask", message, message);
    },

    // logic to provide the responses to the yes or no responses to the main questions
    yesOrNo: function(context, reply) {
        var question = helper.answerQuestionAndGetNext(context, reply);

        context.emit(":ask", question, question);
    },

    answerQuestionAndGetNext: function(context, reply) {
        if (!context.attributes["answered"]) {
            context.attributes["answered"] = {};
        }
        context.attributes["answered"][currentAnswerForQuestion] = reply;
        var question = helper.getNextQuestion(context);
        context.attributes["question"] = question;

        return question;
    },

    getAvailableAnswers: function(context) {
        var availableAnswers = [];
        answers.map(function(possAnswer) {
            var addAnswer = true;
            Object.keys(context.attributes["answered"]).map(function(
                answerKey
            ) {
                var answerYesNo = context.attributes["answered"][answerKey];
                addAnswer =
                    addAnswer &&
                    ((answerYesNo == "yes" &&
                        possAnswer.yes.indexOf(answerKey) >= 0) ||
                        (answerYesNo == "no" &&
                            possAnswer.yes.indexOf(answerKey) < 0));
            });

            // Add all remining answers
            if (addAnswer) {
                availableAnswers.push(possAnswer);
            }
        });
        return availableAnswers;
    },

    // returns the speech for the provided node id
    getBestAnswer: function(context) {
        if (Object.keys(context.attributes["answered"]).length < 1) {
            var question =
                questions[Math.floor(Math.random() * questions.length)];
            return question.yes;
        }

        var availableAnswers = this.getAvailableAnswers(context);

        var answerYesNo = [];
        availableAnswers.map(function(answer) {
            answer.yes.map(function(yesAnswer) {
                if (!context.attributes["answered"][yesAnswer]) {
                    if (!answerYesNo[yesAnswer]) {
                        answerYesNo[yesAnswer] = 0;
                    }
                    answerYesNo[yesAnswer]++;
                }
            });
        });

        var bestMatch;
        var bestAnswer;

        Object.keys(answerYesNo).map(function(key) {
            var answersDiff = Math.abs(
                availableAnswers.length / 2 - answerYesNo[key] || 0
            );
            if (!bestMatch || answersDiff < bestMatch) {
                bestMatch = answersDiff;
                bestAnswer = key;
            }
        });

        return availableAnswers.length == answerYesNo[bestAnswer]
            ? null
            : bestAnswer;
    }
};

//Local question debug
/*
this.attributes = {};
this.attributes["answered"] = {};
console.log(helper.getNextQuestion(this));

console.log(helper.answerQuestionAndGetNext(this, "no"));
console.log(this.attributes["answered"]);

console.log(helper.answerQuestionAndGetNext(this, "yes"));
console.log(this.attributes["answered"]);
console.log(helper.answerQuestionAndGetNext(this, "no"));
console.log(this.attributes["answered"]);
console.log(helper.answerQuestionAndGetNext(this, "no"));
console.log(this.attributes["answered"]);
console.log(helper.answerQuestionAndGetNext(this, "yes"));
console.log(this.attributes["answered"]);
console.log(helper.answerQuestionAndGetNext(this, "yes"));
console.log(this.attributes["answered"]);
console.log(helper.answerQuestionAndGetNext(this, "yes"));
console.log(this.attributes["answered"]);
*/
