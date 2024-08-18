import helper from "./storageHelper"

const isValidPlayer = (data) => {
	const requiredFields = ['id', 'name', 'Rating', 'Age-Group'];
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

const getPlayers = () => {
	// return players as json
	return JSON.parse(window.localStorage.getItem('players'));
};
const getPlayer = (id) => {
	const players = getPlayers();
	const result = players.find((player) => player.id === id);
	if (!result) {
		throw new Error('no player has this id');
	}
	return result;
};


const savePlayersNoValidation = (players) => {
	window.localStorage.setItem('players', JSON.stringify(players));
};

const savePlayers = (players) => {
    /**
     * replace the players list in local storage with new players list
     */
	players.forEach((player) => {
		player.id = helper.generateID()
		if (!isValidPlayer(player)) {
			throw new Error('invalid data');
		}
	});
	savePlayersNoValidation(players)
};

const addPlayer = (player) => {
    /**
     * adds a player to players list in local storage
     */
	player.id = helper.generateID()
	if (!isValidPlayer(player)) {
		throw new Error('invalid data');
	}
	const players = getPlayers();
	players.unshift(player);
	savePlayersNoValidation(players);
};

const updatePlayer = (id, data) => {
    /**
     * updates the player with provided id in local storage
     */
	const oldPlayer = getPlayer(id);
	const newPlayer = { ...oldPlayer, ...data };
	if (!isValidPlayer(newPlayer)) {
		throw new Error('invalid data');
	}
	const newPlayers = getPlayers().filter((player) => player.id !== id);
	newPlayers.unshift(newPlayer);
	savePlayersNoValidation(newPlayers);
};

const removePlayer = (id) =>{
	const players = getPlayers()
	const newPlayers = players.filter((player) => player.id !== id)
	if(players.length === newPlayers.length){
		throw new Error('no player has this id')
	}
	savePlayersNoValidation(newPlayers)
}

const playerStorage = {
	getPlayer,
	getPlayers,
	addPlayer,
	savePlayers,
    updatePlayer,
	removePlayer
};

export default playerStorage;
