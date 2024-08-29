function generateMatches(event) {
    const matches = [];
    let matchId = 1;

    // Generate matches based on teams
    for (let i = 0; i < event.teams.length; i++) {
        for (let j = i + 1; j < event.teams.length; j++) {
            const match = {
                id: matchId++,
                number: matchId,
                teams: {
                    first: event.teams[i],
                    second: event.teams[j]
                },
                scores: {
                    first: 0, // Scores can be updated later
                    second: 0
                },
                "start-time": "TBD", // Set start time based on event
                "end-time": "TBD", // Set end time based on event
                status: 0 // Not started
            };
            matches.push(match);
        }
    }

    return matches;
}

const matches = generateMatches(event);
console.log(matches);