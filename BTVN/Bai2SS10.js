const player = {
    name: "Messi",
    posititon: "Forward",
    goals: 25,
    assists: 15,
    matchesPlayed: 35,
}
addPerformanceScore = (player) => {
    let performance = (player.goals+player.assists)/player.matchesPlayed;
    player.performancePerMatch = performance.toFixed(2);
    if (player.performancePerMatch>=1) {
        player.isKeyPlayer = "true";
    }
    else {
        player.isKeyPlayer = "false";
    }
    console.log(player);
}
addPerformanceScore(player);