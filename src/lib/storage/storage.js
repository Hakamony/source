import helper from './storageHelper';

const importEvent = () => {};

const localStorageConfig = () => {
	// runs first at the creation of new event
	const players = [
		{ id: -1, name: 'noName', 'Age-Group': -1, Rating: -1 },
	];
	const teams = [
		{
			id: -1,
			name: 'noName',
			'number-of-players': -1,
			players: [-1, -2],
			'team-rating': -1,
			'match-played': {
				won: -1,
				tie: -1,
				lose: -1,
				total: -1,
			},
			points: -1,
		},
	];
	const event = {
		id: -1,
		name: 'noName',
		'start-time': 'noTime',
		'end-time': 'noTime',
		sport: 'noName',
		'score-type': 'noType',
		'fields-number': -1,
		'players-number': -1,
		'max-team-player': -1,
		'total-coast': -1,
		'teams-number': -1,
		'matches-number': -1,
		teams: [-1, -1],
		'event-type': 'noType',
		status: -1, // 0: not started, 1: on going, 2: done
	};

	window.localStorage.setItem('players', JSON.stringify(players));
	window.localStorage.setItem('teams', JSON.stringify(teams));
	window.localStorage.setItem('currentEvent', JSON.stringify(event));
};


const updateEvent = (data) => {
	try {
		let currentEvent = helper.getEvent();
		currentEvent = { ...currentEvent, ...data };
		helper.saveEvent(currentEvent);
	} catch (error) {
		console.log(error.message);
	}
};

const importPlayers = () => {};

const addPlayer = () => {};

const addTeams = () => {};

const storage = {
	importEvent,
	updateEvent,
	importPlayers,
	addPlayer,
	addTeams,
	localStorageConfig,
};

export default storage;
