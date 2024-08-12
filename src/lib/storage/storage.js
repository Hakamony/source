import helper from './storageHelper';

const importEvent = () => {};

const createEvent = (data) => {
	const event = {
		name: data.name,
		'sport-type': data['sport-type'],
		'event-type': data['event-type'],
	};

	helper.saveEvent(event);
};

const updateEvent = () => {};

const importPlayers = () => {};

const addPlayer = () => {};

const addTeams = () => {};

const storage = {
	importEvent,
	createEvent,
	updateEvent,
	importPlayers,
	addPlayer,
	addTeams,
};

export default storage;
