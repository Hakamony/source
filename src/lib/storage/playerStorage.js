import helper from './storageHelper';

const isValidPlayer = (data) => {
	const requiredFields = {
		id: 'string',
		name: 'string',
		Rating: 'number',
		'Age-Group': 'number',
	};
	helper.validFields(requiredFields, data);

	if (data.Rating < 0 || data.Rating > 5) {
		throw new Error(`Rating out of boundary`);
	}
	if (data['Age-Group'] < 1 || data['Age-Group'] > 3) {
		throw new Error(`Age-Group out of boundary`);
	}
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
		player.id = helper.generateID();
		isValidPlayer(player);
	});
	savePlayersNoValidation(players);
};

const addPlayer = (player) => {
	/**
	 * adds a player to players list in local storage
	 */
	player.id = helper.generateID();
	isValidPlayer(player);
	let players = getPlayers();
	if (!players) {
		players = [];
	}
	players.unshift(player);
	savePlayersNoValidation(players);
};

const updatePlayer = (id, data) => {
	/**
	 * updates the player with provided id in local storage
	 * you should only provide the fields you want to change in data
	 * for example if you want to change the name call updatePlayer(id, {name:"newName"})
	 */
	const oldPlayer = getPlayer(id);
	const newPlayer = { ...oldPlayer, ...data };
	isValidPlayer(newPlayer);
	const newPlayers = getPlayers().filter((player) => player.id !== id);
	newPlayers.unshift(newPlayer);
	savePlayersNoValidation(newPlayers);
};

const removePlayer = (id) => {
	const players = getPlayers();
	const newPlayers = players.filter((player) => player.id !== id);
	if (players.length === newPlayers.length) {
		throw new Error('no player has this id');
	}
	savePlayersNoValidation(newPlayers);
};

const clearPlayers = () => {
	window.localStorage.setItem('players', []);
};

const importPlayers = (data) => {
	/**
	 * data should be of type json
	 */

	const players = data.map((player) => {
		delete player.id;
		return player;
	});
	savePlayers(players)
};

const playerStorage = {
	getPlayer,
	getPlayers,
	addPlayer,
	savePlayers,
	updatePlayer,
	removePlayer,
	clearPlayers,
	importPlayers,
};

export default playerStorage;
