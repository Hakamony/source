const saveEvent = (event) => {
	window.localStorage.setItem('currentEvent', JSON.stringify(event));
};

const getEvent = () =>{
    return JSON.parse(window.localStorage.getItem('currentEvent'))
}

const helper = {
	saveEvent,
    getEvent
};

export default helper;
