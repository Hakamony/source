import teamStorage from '../storage/teamStorage';
import matchStorage from '../storage/matchStorage';
import eventStorage from '../storage/eventStorage';

function generateMatches() {
    const teams = teamStorage.getTeams();
    const event = eventStorage.getEvent();
    const fields = event['fields-number'];
    let matches = [];
    let matchId = 1;
    let matchList = [];  

    // Create match objects, each team plays once against every other team
    for (let i = 0; i < teams.length; i++) {
        for (let j = i + 1; j < teams.length; j++) {
            matches.push({
                id: matchId++,  
                teams: {
                    first: teams[i].id,
                    second: teams[j].id,
                },
                scores: {
                    first: 0,
                    second: 0,
                },
                'start-time': 'TBD',
                'end-time': 'TBD',
                status: 0,
                added: false,
                field: null  // Field assignment will be done later
            });
        }
    }

    // This array tracks the last time each team played a match
    let teamMatchOrder = Array(teams.length).fill(0);

    // Function to find the next available teams that haven't played recently
    function findNextAvailableTeams(matches, currentTimeSlot) {
        for (let i = 0; i < teams.length; i++) {
            for (let j = i + 1; j < teams.length; j++) {
                // Check if these two teams are available to play in this time slot
                if (teamMatchOrder[i] <= currentTimeSlot && teamMatchOrder[j] <= currentTimeSlot) {
                    teamMatchOrder[i] = currentTimeSlot + 1; // Mark the team as having played
                    teamMatchOrder[j] = currentTimeSlot + 1;
                    return [teams[i].id, teams[j].id];  // Return the pair of teams
                }
            }
        }
        return null;  // Return null if no teams are available
    }

    // Assign matches to time slots and fields
    let currentTimeSlot = 0;
    while (matches.length > 0) {
        for (let field = 1; field <= fields; field++) {
            const nextTeams = findNextAvailableTeams(matches, currentTimeSlot);

            if (nextTeams) {
                // Assign match to field and time slot
                const match = matches.find(m => m.teams.first === nextTeams[0] && m.teams.second === nextTeams[1]);
                match['field'] = field;
                
                matchList.push(match.id);  // Add the match ID to the matchList in the correct order
                matches = matches.filter(m => m !== match);  // Remove the match from the list after it's scheduled
            }
        }
        currentTimeSlot++;  // Move to the next time slot after filling all fields
    }

    // Save the final list of matches
    matchStorage.saveMatches(matches);

    // Return the list of match IDs in the order they will be played
    return matchList;
}


export default generateMatches;
