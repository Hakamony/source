const localStorageConfig = () => {
	// runs first at the creation of new event
	const players = [{ id: 1, name: 'noName', 'Age-Group': 1, Rating: 1 }];
	const teams = [
		{
			id: -1,
			name: 'noName',
			players: [-1, -2],
			'match-played': {
				won: -1,
				tie: -1,
				lose: -1,
			},
		},
	];
	const event = {
		id: 'someID',
		name: 'noName',
		'start-time': 'noTime',
		'end-time': 'noTime',
		sport: 'noName',
		'score-type': 'noType',
		'fields-number': -1,
		'players-number': -1,
		'max-team-player': -1,
		'total-cost': -1,
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

const generateID = () => {
	return (
		Date.now().toString(36) +
		Math.random().toString(36).substring(2, 12).padStart(12, 0)
	);
};

const validFields = (requiredFields, data) => {
	/**
	 * check if all the required fields are in the data
	 * and check each for rquired data types of the fields
	 * 
	 * requiredFields should have the form 
	 * {
	 * 	field: field type,
	 * 	field: field type,
	 * }
	 */
	const fieldsKeys = Object.keys(requiredFields);
	const dataKeys = Object.keys(data);
	if(dataKeys.length !== fieldsKeys.length){
		throw new Error("Invalid data: missing or extra fields")
	}
	for (const field of fieldsKeys) {
		if (!dataKeys.includes(field)) {
			throw new Error(`${field} not found`);
		}
		if (typeof data[field] !== requiredFields[field]) {
			throw new Error(`${field} have invalid type`);
		}
	}
};

const validIdList = (idList) => {
	idList.forEach((element) => {
		if (typeof element !== 'string') {
			throw new Error('Invalid id list');
		}
	});
};

const storageHelper = {
	localStorageConfig,
	generateID,
	validFields,
	validIdList,
};

export default storageHelper;
