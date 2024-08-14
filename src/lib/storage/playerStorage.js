const isValidPlayer = (data) => {
	const requiredFields = ['id', 'name', 'Rating', 'Age-Group'];
	const dataKeys = Object.keys(data);
	for (let field of requiredFields) {
		if (!dataKeys.includes(field)) {
			return false;
		}
	}
	if (typeof data.id !== 'number' || data.id < 0) {
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
        console.log(result)
		throw new Error('no player has this id');
	}
	return result;
};

const savePlayers = (players) => {
    /**
     * replace the players list in local storage with new players list
     */
	players.forEach((player) => {
		if (!isValidPlayer(player)) {
			throw new Error('invalid data');
		}
	});
	window.localStorage.setItem('players', JSON.stringify(players));
};

const savePlayersNoValidation = (players) => {
	window.localStorage.setItem('players', JSON.stringify(players));
};

const addPlayer = (player) => {
    /**
     * adds a player to players list in local storage
     */
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
	let oldPlayer = getPlayer(id);
	let newPlayer = { ...oldPlayer, ...data };
	if (!isValidPlayer(newPlayer)) {
		throw new Error('invalid data');
	}
	let newPlayers = getPlayers().filter((player) => player.id !== id);
	newPlayers.unshift(newPlayer);
	savePlayersNoValidation(newPlayers);
};

const playerStorage = {
	getPlayer,
	getPlayers,
	addPlayer,
	savePlayers,
    updatePlayer
};

export default playerStorage;
