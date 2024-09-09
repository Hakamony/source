import storageHelper from "./storageHelper";

const isValidEvent = (data) => {
	const requiredFields = {
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
	if(data.status < 0 || data.status >2){
        throw new Error('status out of boundary');
    }
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
	let currentEvent = getEvent();
	if(!currentEvent){
		currentEvent = {}
	}
	const newEvent = { ...currentEvent, ...data };
	saveEvent(newEvent);
};

const addTeam = (id) =>{
	let currentEvent = getEvent()
	if(!currentEvent){
		currentEvent = storageHelper.getDefaultEvent()
	}
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

const clearCurrentEvent = () =>{
	window.localStorage.setItem('currentEvent', JSON.stringify({}));
}

const eventStorage = {
	saveEvent,
	getEvent,
	updateEvent,
	addTeam,
	removeTeam,
	clearCurrentEvent
};

export default eventStorage;
