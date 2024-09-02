import playerStorage from '../storage/playerStorage';
import teamStorage from '../storage/teamStorage';

function calculateAverageRating(players) {
	const totalRating = players.reduce((sum, player) => sum + player.Rating, 0);
	return totalRating / players.length;
}

function shuffleArray(array) {
	for (let i = array.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[array[i], array[j]] = [array[j], array[i]];
	}
	return array;
}

function balanceAgeGroups(players, numTeams) {
	const ageGroups = {};
	players.forEach((player) => {
		if (!ageGroups[player['Age-Group']]) {
			ageGroups[player['Age-Group']] = [];
		}
		ageGroups[player['Age-Group']].push(player);
	});

	const balancedTeams = Array.from({ length: numTeams }, () => []);
	Object.values(ageGroups).forEach((group) => {
		shuffleArray(group); // Shuffle age group players to randomize
		group.forEach((player, index) => {
			balancedTeams[index % numTeams].push(player);
		});
	});

	return balancedTeams;
}

function distributePlayersEqually(players, numTeams) {
	const teams = Array.from({ length: numTeams }, () => []);
	const totalPlayers = players.length;

	// Distribute players equally across teams
	players.forEach((player, index) => {
		teams[index % numTeams].push(player);
	});

	return teams;
}

function generateTeamsByNumber(numTeams) {
	const players = playerStorage.getPlayers();
	const shuffledPlayers = shuffleArray([...players]);
	const ageBalancedTeams = distributePlayersEqually(shuffledPlayers, numTeams);

	const teams = ageBalancedTeams.map((team, i) => {
		const newTeam = {
			name: `Team ${i + 1}`,
			players: team,
			'team-rating': calculateAverageRating(team),
			'number-of-players': team.length,
		};
		return newTeam;
	});

	const newTeams = teams.map((team) => ({
		name: team.name,
		players: team.players.map((player) => player.id),
		'team-rating': Number(team['team-rating'].toFixed(2)),
		'number-of-players': team['number-of-players'],
		'match-played': {
			won: 0,
			tie: 0,
			lose: 0,
		},
	}));

	teamStorage.saveTeams(newTeams);
}

function generateTeamsByMaxPlayers(maxPlayersPerTeam) {
	const players = playerStorage.getPlayers();
	const shuffledPlayers = shuffleArray([...players]);
	const numTeams = Math.ceil(shuffledPlayers.length / maxPlayersPerTeam);

	const ageBalancedTeams = distributePlayersEqually(shuffledPlayers, numTeams);

	const teams = ageBalancedTeams.map((team, i) => {
		const newTeam = {
			name: `Team ${i + 1}`,
			players: team,
			'team-rating': calculateAverageRating(team),
			'number-of-players': team.length,
		};
		return newTeam;
	});

	const newTeams = teams.map((team) => ({
		name: team.name,
		players: team.players.map((player) => player.id),
		'team-rating': Number(team['team-rating'].toFixed(2)),
		'number-of-players': team['number-of-players'],
		'match-played': {
			won: 0,
			tie: 0,
			lose: 0,
		},
	}));

	teamStorage.saveTeams(newTeams);
}

// Example usage:
const players = [
	{ id: 34, name: 'Ahmed', 'Age-Group': 3, Rating: 3 },
	{ id: 35, name: 'Osama', 'Age-Group': 2, Rating: 3 },
	{ id: 68, name: 'Ali', 'Age-Group': 1, Rating: 5 },
	{ id: 44, name: 'Nawaf', 'Age-Group': 3, Rating: 3 },
	{ id: 55, name: 'Omar', 'Age-Group': 2, Rating: 1 },
	{ id: 66, name: 'Mazen', 'Age-Group': 1, Rating: 5 },
	{ id: 77, name: 'Saleh', 'Age-Group': 3, Rating: 3 },
	{ id: 88, name: 'Hadi', 'Age-Group': 2, Rating: 4 },
	{ id: 99, name: 'Yusuf', 'Age-Group': 1, Rating: 5 },
	{ id: 11, name: 'Baraa', 'Age-Group': 3, Rating: 3 },
	{ id: 22, name: 'Fares', 'Age-Group': 2, Rating: 4 },
	{ id: 33, name: 'Meshary', 'Age-Group': 1, Rating: 5 },
	{ id: 10, name: 'Moahmed', 'Age-Group': 3, Rating: 3 },
	{ id: 9, name: 'Moaz', 'Age-Group': 2, Rating: 1 },
	{ id: 12, name: 'Yasser', 'Age-Group': 1, Rating: 5 },
	{ id: 13, name: 'Mostafa', 'Age-Group': 3, Rating: 3 },
	{ id: 14, name: 'Sayed', 'Age-Group': 2, Rating: 4 },
	{ id: 15, name: 'Halem', 'Age-Group': 1, Rating: 5 },
	{ id: 16, name: 'Shogaa', 'Age-Group': 3, Rating: 3 },
	{ id: 17, name: 'Zyad', 'Age-Group': 2, Rating: 4 },
	{ id: 17, name: 'Zyad', 'Age-Group': 2, Rating: 4 },
	{ id: 17, name: 'Zyad', 'Age-Group': 2, Rating: 4 },
];

// // For number of teams
// const teamsByNumber = generateTeamsByNumber(players, 4);
// console.log("Teams by Number of Teams:", teamsByNumber);

// // For maximum number of players per team
// const teamsByMaxPlayers = generateTeamsByMaxPlayers(players, 8);
// console.log("Teams by Max Players per Team:", teamsByMaxPlayers);

const generateTeams = {
	generateTeamsByNumber,
	generateTeamsByMaxPlayers,
};

export default generateTeams;
