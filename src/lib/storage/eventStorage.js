import storageHelper from "./storageHelper";

const isValidEvent = (data) => {
	const requiredFields = {
		id: 'string',
		name: 'string',
		'start-time': 'string',
		'end-time': 'string',
		sport: 'string',
		'score-type': 'string',
		'fields-number': 'number',
		'players-number': 'number',
		'max-team-player': 'number',
		'total-cost': 'number',
		'teams-number': 'number',
		'matches-number': 'number',
		teams: typeof [],
		'event-type': 'string',
		status: 'number', // 0: not started, 1: on going, 2: done
	};
	storageHelper.validFields(requiredFields, data)
	storageHelper.validIdList(data.teams)
};

const saveEvent = (event) => {
	isValidEvent(event);
	window.localStorage.setItem('currentEvent', JSON.stringify(event));
};

const getEvent = () => {
	return JSON.parse(window.localStorage.getItem('currentEvent'));
};

const updateEvent = (data) => {
	const currentEvent = getEvent();
	const newEvent = { ...currentEvent, ...data };
	saveEvent(newEvent);
};

const addTeam = (id) =>{
	const currentEvent = getEvent()
	currentEvent.teams.unshift(id)
}
const importEvent = () => {};

const eventStorage = {
	saveEvent,
	getEvent,
	updateEvent,
	importEvent,
	addTeam
};

export default eventStorage;
