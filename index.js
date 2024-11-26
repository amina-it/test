const scenes = {
    start: {
        text: "Вы стоите у дороги. Куда пойдёте?",
        options: [
            { text: "Направо", nextScene: "rightPath" },
            { text: "Налево", nextScene: "leftPath" }
        ]
    },
    rightPath: {
        text: "Вы идёте направо и находите дом. Что делать?",
        options: [
            { text: "Зайти в дом", nextScene: "enterHouse" },
            { text: "Уйти обратно", nextScene: "start" }
        ]
    },
    leftPath: {
        text: "Вы идёте налево и видите мост.",
        options: [
            { text: "Перейти мост", nextScene: "crossBridge" },
            { text: "Вернуться", nextScene: "start" }
        ]
    },
    enterHouse: {
        text: "Вы вошли в дом и встретили старого мудреца. История продолжается..."
    },
    crossBridge: {
        text: "Вы пересекли мост и нашли клад. История заканчивается!"
    }
};

