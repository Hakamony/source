import teamStorage from '../storage/teamStorage';
import matchStorage from '../storage/matchStorage';
import eventStorage from '../storage/eventStorage';

function generateMatches() {
	const teams = teamStorage.getTeams();
	const event = eventStorage.getEvent();
	const fields = event['fields-number'];
	let matches = [];
	let matchId = 1;

	// Generate matches so that each team plays against each other once
	for (let i = 0; i < teams.length; i++) {
		for (let j = i + 1; j < teams.length; j++) {
			matches.push({
				number: matchId++,
				teams: {
					first: teams[i].id,
					second: teams[j].id,
				},
				scores: {
					first: 0,
					second: 0,
				},
				'start-time': 'fdafdfa',
				'end-time': 'fdafdfa',
				status: 0,
			});
		}
	}
	matchStorage.saveMatches(matches);
	matches = matchStorage.getMatches();
	// Shuffle matches to randomize the order
	for (let i = matches.length - 1; i > 0; i--) {
		const randomIndex = Math.floor(Math.random() * (i + 1));
		[matches[i], matches[randomIndex]] = [matches[randomIndex], matches[i]];
	}

	// Return a list of match IDs in the randomized order
	matches.forEach((match) => {
		matchStorage.addToMatchList(match.id);
	});

	for (let i = 0; i < fields; i++) {
		const id = matches[i].id;
		matchStorage.updateMatch(id, { status: 1 });
	}
}
// Example usage
const teams = [
	{
		id: 1,
		name: 'Team 1',
		players: [22, 13, 17, 10, 35, 34, 44, 66],
		teamRating: '3.50',
		numberOfPlayers: 8,
	},
	{
		id: 2,
		name: 'Team 2',
		players: [17, 12, 14, 16, 15, 77, 33],
		teamRating: '4.14',
		numberOfPlayers: 7,
	},
	{
		id: 3,
		name: 'Team 3',
		players: [55, 9, 17, 99, 68, 11, 88],
		teamRating: '3.29',
		numberOfPlayers: 7,
	},
	{
		id: 4,
		name: 'Team 4',
		players: [55, 9, 17, 99, 68, 11],
		teamRating: '3.6',
		numberOfPlayers: 6,
	},
	{
		id: 5,
		name: 'Team 5',
		players: [55, 9, 17, 99, 68, 11, 13, 22, 14],
		teamRating: '3.2',
		numberOfPlayers: 9,
	},
];

// const matchIds = generateMatches(teams);
// console.log(matchIds);

export default generateMatches;
