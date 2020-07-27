const study = {
    id: 'study',
    title: `Check Monsieur Bovarian's Study`,
    map: {
        top: '89%',
        left: '44%'
    },
    image: '../assets/study.jpg',
    description: `
        You and Poirot enter Monsieur Bovarian's study. Maybe there's a clue. Where do you look?
    `,
    choices: [{
        id: 'desk',
        description: 'The desk, strewn with books and papers.',
        result: `
            Ugh, it's just his unpublished poems. LAME. Or is he the voice of his generation? Either way, not helpful. 
        `,
        hp: 10,
        clues: 1
    }, {
        id: 'wall',
        description: 'Uh, those papers attached to the wall with ominous red markings?',
        result: `
           These papers are a radical antifeminist manifesto! And we see Madame Bovarian's photo, with "I want to kill this woman" written in red letters! Seems promising? And super problematic.
        `,
        hp: 50,
        clues: 150
    }, {
        id: 'pockets',
        description: 'Check your pockets.',
        result: `
            For real? Why? Why would there be a clue here. You're not very good at this.
        `,
        hp: -50,
        clues: 1
    }]
};

const mistress = {
    id: 'mistress',
    title: `Investigate Monsieur Bovarian's former mistress`,
    map: {
        top: '57%',
        left: '67%'
    },
    image: '../assets/moffat.jpg',
    description: `
        Okay, so Ms. Muffet has been awful quiet since this murder went down. Poirot asks, "qu'est-ce-que c'est le deal with her?" How do you want to handle this?
    `,
    choices: [{
        id: 'cafe',
        description: 'Meet her at a cafe for questioning',
        result: `
            You order a coffee and sit and wait as Poirot criticizes your choice to put oat milk in your coffee. She never shows! And this coffee was five dollars! 
        `,
        hp: -35,
        clues: 35
    }, {
        id: 'snoop',
        description: `Snoop around her house while she's at Goat Yoga`,
        result: `
            One of the goats was rabid, and class ended early! You and Poirot duck into Ms. Moffat's shower to hide out until nightfall, and overhear her talking on the phone about someone getting what they deserved? Seems promising. When she goes upstairs, you both sneak out through a doggy door in the back.
        `,
        hp: 45,
        clues: 100
    }, {
        id: 'accuse',
        description: 'Accuse her of murdering Madame Bovarian',
        result: `
            Oh, okay, we see how it is! Just because she's a working woman without a husband you think she has nothing better to do than to murder her lover's wife? Have you ever even heard of feminism? Really not cool, man. In fact, you'll probably never get hired in this town again because you are ridiculously antiquated. Poirot pretends not to know you.
        `,
        hp: -30,
        clues: 1
    }]
};

const question = {
    id: 'question',
    title: 'Question the Townspeople',
    map: {
        top: '31%',
        left: '5%'
    },
    image: '../assets/people.jpg',
    description: `
        Don't let the picturesque, pastoral landscapes, farmer's markets, and family-owned, gluten-free bakeries fool you; this little town has some secrets! Poirot surveys the scene and asks, "Quelle personne should we question first?"
    `,
    choices: [{
        id: 'professor',
        description: 'Professor Smallbottom',
        result: `The professor says she overheard the late Madame Bovarian's husband talking on the phone in hushed tones, which is honestly one of the most suspicious things to do. Poirot checks out Monsieur Bovarian's phone records, and it seems he's booked a one-way ticket to Aruba! Hmmmmm!`,
        hp: 20,
        clues: 40
    }, {
        id: 'landscaper',
        description: `The Bovarians' landscaper`,
        result: `Okay, this is just a college kid looking for some extra cash, and has no idea what's going on. All he does is sit on the lawn mower and take shirtless selfies to post to Snapchat. Poirot asks, "qu'est-ce que c'est le Snapchat?"`,
        hp: -50,
        clues: 1
    }, {
        id: 'neighbor',
        description: 'The neighbors',
        result: `Poirot starts walking to the front door, when you both notice a Beware of Dog sign. The dog in question is a really yappy terrier, and Poirot gets so annoyed by its barking that you both have to leave before questioning anybody.`,
        hp: -20,
        clues: 1
    }]
};

const quests = [
    study, 
    mistress,
    question
];

export default quests;