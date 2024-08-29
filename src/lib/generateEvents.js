function generateEvent(eventName, sport, scoreType, fieldsNumber, playersNumber, maxTeamPlayer, totalCost, eventType) {
    // Randomly generate event details
    const eventId = Math.floor(Math.random() * 100000);
    const teamsNumber = Math.floor(playersNumber / maxTeamPlayer); // Calculate number of teams based on total players
    const matchesNumber = teamsNumber * (teamsNumber - 1) / 2; // Simple league round-robin format
    
    // Generate random team IDs
    const teams = Array.from({ length: teamsNumber }, () => Math.floor(Math.random() * 10000));

    return {
        id: eventId,
        name: eventName,
        "start-time": "13-7-2024 18:45", // Could be randomized or set
        "end-time": "13-7-2024 21:45", // Could be randomized or set
        sport: sport,
        "score-type": scoreType,
        "fields-number": fieldsNumber,
        "players-number": playersNumber,
        "max-team-player": maxTeamPlayer,
        "total-coast": totalCost,
        "teams-number": teamsNumber,
        "matches-number": matchesNumber,
        teams: teams,
        "event-type": eventType,
        status: 0 // Not started
    };
}

// Example usage
const event = generateEvent("Summer League", "Soccer", "points", 2, 30, 5, 800, "league");
console.log(event);