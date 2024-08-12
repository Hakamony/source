const saveEvent = (event) => {
	window.localStorage.setItem('currentEvent', event);
};

const localStorageConfig = () => {
	// runs first at the creation of new event
	window.localStorage.setItem('players', JSON.stringify({}));
	window.localStorage.setItem('teams', JSON.stringify({}));
	window.localStorage.setItem('currentEvent', JSON.stringify({}));
};

const helper = {
	saveEvent,
    localStorageConfig
};

export default helper;
