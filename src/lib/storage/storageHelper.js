const getDefaultEvent = () =>{
	return {
		name: '',
		'start-time': '',
		'end-time': '',
		sport: '',
		'score-type': '',
		'fields-number': 0,
		'players-number': 0,
		'max-team-player': 0,
		'total-cost': 0,
		'teams-number': 0,
		'matches-number': 0,
		teams: [],
		'event-type': '',
		status: 0, // 0: not started, 1: on going, 2: done
	};
}

const localStorageConfig = () => {
	/**
	 * run this function at home page
	 */
	const players = [];
	const teams = [];
	const event = getDefaultEvent();
	const matches = []
	const matchList = []
	window.localStorage.setItem('players', JSON.stringify(players));
	window.localStorage.setItem('teams', JSON.stringify(teams));
	window.localStorage.setItem('currentEvent', JSON.stringify(event));
	window.localStorage.setItem('matches', JSON.stringify(matches));
	window.localStorage.setItem('matchList', JSON.stringify(matches));
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
	getDefaultEvent
};

export default storageHelper;
