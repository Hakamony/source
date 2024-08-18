
const isValidEvent = (data) => {
	const requiredFields = ['id', 'name', 'start-time', 'end-time', "sport", "score-type", 'fields-number', 'players-number', 'max-team-player', 'total-cost', 'teams-number', 'teams', 'event-type', 'status'];
	const dataKeys = Object.keys(data);
	for (const field of requiredFields) {
		if (!dataKeys.includes(field)) {
			return false;
		}
	}
	if (typeof data.id !== 'string') {
		return false;
	}
	if (typeof data.name !== 'string') {
		return false;
	}
	if (typeof data.Rating !== 'number' || data.Rating < 0 || data.Rating > 5) {
		return false;
	}
	if (
		typeof data['Age-Group'] !== 'number' ||
		data['Age-Group'] < 1 ||
		data['Age-Group'] > 3
	) {
		return false;
	}
	return true;
};


const saveEvent = (event) => {
	window.localStorage.setItem('currentEvent', JSON.stringify(event));
};

const getEvent = () =>{
    return JSON.parse(window.localStorage.getItem('currentEvent'))
}

const updateEvent = (data) => {
	try {
		let currentEvent = getEvent();
		currentEvent = { ...currentEvent, ...data };
		saveEvent(currentEvent);
	} catch (error) {
		console.log(error.message);
	}
};

const importEvent = () => {};


const eventStorage = {
    saveEvent,
    getEvent,
    updateEvent,
	importEvent
}

export default eventStorage
