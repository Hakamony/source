
function calculateAverageRating(players) {

    const totalRating = players.reduce((sum, player) => sum + player.Rating, 0);

    return totalRating / players.length;
}

function balanceAgeGroups(players, numTeams) {

    const ageGroups = {};

    players.forEach(player => {
        if (!ageGroups[player['Age-Group']]) {
            ageGroups[player['Age-Group']] = [];
        }
        ageGroups[player['Age-Group']].push(player);
    });

    const balancedTeams = [];
    for (let i = 0; i < numTeams; i++) {
        balancedTeams.push([]);
    }

    Object.values(ageGroups).forEach(group => {
        group.forEach((player, index) => {
            balancedTeams[index % numTeams].push(player);
        });
    });

    return balancedTeams;
}



function generateTeams(players, numTeams) {
   
    players.sort((a, b) => b.Rating - a.Rating);

    const balancedTeams = balanceAgeGroups(players, numTeams);

    
    const teams = Array.from({ length: numTeams }, (_, i) => ({
        id: i + 1,
        name: `Team ${i + 1}`,
        players: [],
        teamRating: 0
    }));

    let teamIndex = 0;
    players.forEach(player => {
        teams[teamIndex].players.push(player);
        teamIndex = (teamIndex + 1) % numTeams;
    });

    
    teams.forEach(team => {
        team.teamRating = calculateAverageRating(team.players);
    });

    
    const resultTeams = teams.map(team => ({
        id: team.id,
        name: team.name,
        players: team.players.map(player => player.name), 
        teamRating: team.teamRating
    }));

    return resultTeams;
}




const players = [
    { "id": 34, "name": "Ahmed", "Age-Group": 3, "Rating": 3 },
    { "id": 35, "name": "Osama", "Age-Group": 2, "Rating": 3 },
    { "id": 68, "name": "Ali", "Age-Group": 1, "Rating": 5 },
    { "id": 44, "name": "Nawaf", "Age-Group": 3, "Rating": 3 },
    { "id": 55, "name": "Omar", "Age-Group": 2, "Rating": 1 },
    { "id": 66, "name": "Mazen", "Age-Group": 1, "Rating": 5 },
    { "id": 77, "name": "Saleh", "Age-Group": 3, "Rating": 3 },
    { "id": 88, "name": "Hadi", "Age-Group": 2, "Rating": 4 },
    { "id": 99, "name": "Yusuf", "Age-Group": 1, "Rating": 5 },
    { "id": 11, "name": "Baraa", "Age-Group": 3, "Rating": 3 },
    { "id": 22, "name": "Fares", "Age-Group": 2, "Rating": 4 },
    { "id": 33, "name": "Meshary", "Age-Group": 1, "Rating": 5 },
    { "id": 10, "name": "Moahmed", "Age-Group": 3, "Rating": 3 },
    { "id": 9, "name":  "Moaz", "Age-Group": 2, "Rating": 1 },
    { "id": 12, "name": "Yasser", "Age-Group": 1, "Rating": 5 },
    { "id": 13, "name": "Mostafa", "Age-Group": 3, "Rating": 3 },
    { "id": 14, "name": "sayed", "Age-Group": 2, "Rating": 4 },
    { "id": 15, "name": "halem", "Age-Group": 1, "Rating": 5 },
    { "id": 16, "name": "shogaa", "Age-Group": 3, "Rating": 3 },
    { "id": 17, "name": "zyad", "Age-Group": 2, "Rating": 4 },
    { "id": 18, "name": "malek", "Age-Group": 1, "Rating": 5 },
    { "id": 19, "name": "basem", "Age-Group": 3, "Rating": 2 },
    { "id": 20, "name": "bassam", "Age-Group": 2, "Rating": 4 },
    { "id": 21, "name": "abdelmalik", "Age-Group": 1, "Rating": 5 },
    { "id": 23, "name": "nory", "Age-Group": 3, "Rating": 3 },
    { "id": 24, "name": "qaid", "Age-Group": 2, "Rating": 1 },
    { "id": 25, "name": "dogish", "Age-Group": 1, "Rating": 2 },
    { "id": 26, "name": "abdo", "Age-Group": 3, "Rating": 3 },
    { "id": 27, "name": "salman", "Age-Group": 2, "Rating": 1 },
    { "id": 28, "name": "morsy", "Age-Group": 1, "Rating": 5 },
    { "id": 29, "name": "fawazy", "Age-Group": 3, "Rating": 3 },
    { "id": 30, "name": "nabil", "Age-Group": 2, "Rating": 1 },
    { "id": 31, "name": "menesy", "Age-Group": 1, "Rating": 2 },
   
];


const teams = generateTeams(players, 4);

console.log(teams);


