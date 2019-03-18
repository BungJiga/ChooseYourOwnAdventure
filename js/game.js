// NOTE - You must have a level with the name "start".  This is used as the first level in the game.

var game = {
    music: "hedwigs-theme.mp3",
    background_image: "house.jpg",
    levels: {

        start: {
            message: "You're Harry Potter and you have been invited to Hogwarts to learn magic. Do you accept?",
            choices: [
                {
                    text: "Stay Home",
                    nextLevel: "dissapointment",
                },

                {
                    text: "Go to Hogwarts",
                    nextLevel: "train",
                },
            ]
        },

        train: {
            background_image: "train.jpg",
            music: "train.mp3",
            message: "You are on the train to Hogwarts. There is a Dementor coming at you what do you do? ",
            choices: [
                {
                    text: "Use magic",
                    nextLevel: "magic",
                },
                 {
                    text: "Hide somewhere",
                    nextLevel: "safe",
                },
            ]
        },

        dissapointment: {
            background_image: "stairs.png",
            music: "evil.mp3",
            message: "You live your life as a dissapointment to yourself.",
            choices: [
                {
                    text: "Start over",
                    nextLevel: "start",
                },
            ]
        },
        
        dissapointment_two: {
            background_image: "stairs.png",
            music: "evil.mp3",
            message: "You gave up the opportunity of a lifetime and Voldermort kills you by flicking you.",
            choices: [
                {
                    text: "Start over",
                    nextLevel: "start",
                },
            ]
        },
        
        magic: {
            background_image: "dad.jpg",
            music: "evil.mp3",
            message: "It sucked your soul and you are now expelled for trying to magic outside of school :( .",
            choices: [
                {
                    text: "Start over",
                    nextLevel: "start",
                },
            ]
        },
        
        safe: {
            background_image: "train.jpg",
            music: "train.mp3",
            message: "Your safe and you continue your ride to Hogwarts",
            choices: [
                {
                    text: "Continue to Hogwarts",
                    nextLevel: "hogwarts",
                },
                 {
                    text: "Run away",
                    nextLevel: "dissapointment_two",
                },
            ]
        },
        
        hogwarts: {
            background_image: "hogwarts.jpg",
            music: "hedwigs-theme.mp3",
            message: "You make it to Hogwarts and you continue to study magic and eventually defeat Voldermort and gain all the glory ;)",
            choices: [
                {
                    text: "Start Over",
                    nextLevel: "start",
                },
            ]
        },

    }
    
    
};
