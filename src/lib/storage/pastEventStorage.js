import storageHelper from './storageHelper';
import eventStorage from './eventStorage';

const isValidPastEvent = (data) => {
	const requiredFields = {
		id: 'string',
		name: 'string',
		sport: 'string',
		'score-type': 'string',
		'fields-number': 'number',
		'total-cost': 'number',
		'teams-number': 'number',
		'event-type': 'string',
	};

	storageHelper.validFields(requiredFields, data);
};

const getPastEvents = () => {
	const pastEvents = JSON.parse(window.localStorage.getItem('pastEvents'));
	if (!pastEvents) {
		return JSON.parse([]);
	}
	return pastEvents;
};

const savePastEventsNoValidation = (pastEvents) => {
	window.localStorage.setItem('pastEvents', JSON.stringify(pastEvents));
};

const savePastEvents = (pastEvents) => {
	pastEvents.forEach((event) => {
		event.id = storageHelper.generateID();
		isValidPastEvent(event);
	});
	savePastEventsNoValidation(pastEvents);
};

const addPastEvent = (pastEvent) => {
	const pastEvents = getPastEvents();
	pastEvent.id = storageHelper.generateID();
	isValidPastEvent(pastEvent);
	pastEvents.push(pastEvent);
	savePastEventsNoValidation(pastEvents);
};

const saveCurrentEventToPastEvents = () => {
	const currentEvent = eventStorage.getEvent();
	const newPastEvent = {
		name: currentEvent.name,
		sport: currentEvent.sport,
		'score-type': currentEvent['score-type'],
		'fields-number': currentEvent['fields-number'],
		'total-cost': currentEvent['total-cost'],
		'teams-number': currentEvent['teams-number'],
		'event-type': currentEvent['event-type'],
	};
	addPastEvent(newPastEvent);
};

const clearPastEvents = () => {
	savePastEventsNoValidation([]);
};

const pastEventStorage = {
	getPastEvents,
	saveCurrentEventToPastEvents,
	clearPastEvents,
};

export default pastEventStorage;
