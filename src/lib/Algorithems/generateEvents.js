function generateEvent(eventName, sport, scoreType, fieldsNumber, playersNumber, maxTeamPlayer, totalCost, eventType, matchIds, matchDetails) {
    // Randomly generate event ID
    const eventId = Math.floor(Math.random() * 100);
    
    // Set a start and end time for the event
    const eventStartTime = new Date('2024-07-13T18:45:00'); // Event start time (can be customized)
    const matchDuration = 90; // Duration of each match in minutes (can be customized)
    
    // Schedule matches based on matchIds
    matchIds.forEach((matchId, index) => {
        const match = matchDetails.find(m => m.id === matchId);
        
        if (match) {
            // Calculate start and end time for each match
            const matchStartTime = new Date(eventStartTime.getTime() + index * matchDuration * 600);
            const matchEndTime = new Date(matchStartTime.getTime() + matchDuration * 600);

            match['start-time'] = matchStartTime.toISOString().slice(11, 16); // Format as HH:MM
            match['end-time'] = matchEndTime.toISOString().slice(11, 16); // Format as HH:MM
            match.status = 0; // Not started
        }
    });

    // Get the number of unique teams from the matches
    const teams = Array.from(new Set(
        matchIds.flatMap(matchId => {
            const match = matchDetails.find(m => m.id === matchId);
            return [match?.teams.first, match?.teams.second];
        }).filter(Boolean) // Remove any undefined values
    ));

    // Create event object
    const event = {
        id: eventId,
        name: eventName,
        "start-time": eventStartTime.toISOString().slice(0, 16).replace('T', ' '),
        "end-time": new Date(eventStartTime.getTime() + matchIds.length * matchDuration * 600).toISOString().slice(0, 16).replace('T', ' '),
        sport: sport,
        "score-type": scoreType,
        "fields-number": fieldsNumber,
        "players-number": playersNumber,
        "max-team-player": maxTeamPlayer,
        "total-coast": totalCost,
        "teams-number": teams.length,
        "matches-number": matchIds.length,
        teams: teams, // Unique team IDs from matches
        "event-type": eventType,
        status: 0 // Not started
    };

    return event; // Return the event object
}

// Example usage
const matchDetails = [
    { id: 13, teams: { first: 1, second: 2 } },
    { id: 19, teams: { first: 2, second: 3 } },
    { id: 24, teams: { first: 1, second: 3 } }
];

const matchIds = [13, 19, 24];

const event = generateEvent(
    "Summer League", 
    "Soccer", 
    "points", 
    2, 
    30, 
    5, 
    800, 
    "league", 
    matchIds, 
    matchDetails
);

console.log(event);

