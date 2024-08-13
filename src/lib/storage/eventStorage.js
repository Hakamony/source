
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
