const teamHistory = [
    {
        name: "Messi",
        position: "Forward",
        nationality: "Argentina",
        seasons: {
            "2022-2023": { matches: 34, goals: 21, assists: 14, yellowCards: 3 },
            "2023-2024": { matches: 32, goals: 25, assists: 15, yellowCards: 2 },
            "2024-2025": { matches: 28, goals: 18, assists: 12, yellowCards: 1 },
        },
    },
    {
        name: "Ronaldo",
        position: "Forward",
        nationality: "Portugal",
        seasons: {
            "2022-2023": { matches: 38, goals: 28, assists: 8, yellowCards: 5 },
            "2023-2024": { matches: 35, goals: 30, assists: 10, yellowCards: 4 },
            "2024-2025": { matches: 30, goals: 22, assists: 9, yellowCards: 3 },
        },
    },
];
generatePlayerSeasonReport = (playerName, teamHistory) => {
    let historyPlayer = {};
    let searchPlayer = teamHistory.filter((element) => {
        return (element.name).toLowerCase().includes(playerName.toLowerCase().trim())
    });
    if (searchPlayer.length == 0) {
        console.log(`Không tìm thấy cầu thủ tên: ${playerName}`);
    }
    else {
        historyPlayer.careerStats = {};
        searchPlayer.forEach((element) => {
            historyPlayer.name = element.name;
            historyPlayer.position = element.position;
            historyPlayer.nationality = element.nationality;
            searchPlayer[3].forEach((element) => {
                let fullMatches = element.reduce((sumMatches, matches) => {
                    return sumMatches += matches;
                }, 0);
                let fullGoals = element.reduce((sumGoals, goals) => {
                    return sumGoals += goals;
                }, 0);
                let fullAssists = element.reduce((sumAssists, assists) => {
                    return sumAssists += assists;
                }, 0);
                let fullYellowCards = element.reduce((sumYellowCards, yellowCards) => {
                    return sumYellowCards += yellowCards;
                }, 0);
            });
            historyPlayer.careerStats.totalMatches = fullMatches; 
            historyPlayer.careerStats.totalGoals = fullGoals; 
            historyPlayer.careerStats.totalAssists = fullAssists; 
            historyPlayer.careerStats.totalYellowCards = fullYellowCards; 
        });
        console.log(historyPlayer);
        
    }
}
generatePlayerSeasonReport("Messi", teamHistory)