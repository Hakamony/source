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
	/**
	 * you should only provide the fields you want to change in data
     * for example if you want to change the name call updateEvent({name:"newName"})
	 */
	const currentEvent = getEvent();
	const newEvent = { ...currentEvent, ...data };
	saveEvent(newEvent);
};

const addTeam = (id) =>{
	const currentEvent = getEvent()
	if(currentEvent.teams.find(teamId => teamId === id)){
		throw new Error("the team is already added to current event")
	}
	currentEvent.teams.unshift(id)
	saveEvent(currentEvent)
}

const removeTeam = id =>{
	const currentEvent = getEvent()
	currentEvent.teams.filter(teamId => teamId !== id)
	saveEvent(currentEvent)
}

const importEvent = () => {};

const eventStorage = {
	saveEvent,
	getEvent,
	updateEvent,
	importEvent,
	addTeam,
	removeTeam
};

export default eventStorage;
