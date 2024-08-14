const isValidPlayer = (data) => {
	const requiredFields = ['id', 'name', 'Rating', 'Age-Group'];
    const dataKeys = Object.keys(data) 
	for (let field of requiredFields) {
		if (!dataKeys.includes(field)) {
			return false;
		}
	}
    if(typeof data.id !== 'number' || data.id < 0){
        return false
    }
    if(typeof data.name !== 'string'){
        return false
    }
    if(typeof data.Rating !== 'number' || data.Rating < 0 || data.Rating > 5){
        return false
    }
    if(typeof data['Age-Group'] !== 'number' || data['Age-Group'] < 1 || data['Age-Group'] > 3 ){
        return false
    }
    return true
};

const getPlayers = () => {
	// return players as json
	return JSON.parse(window.localStorage.getItem('players'));
};
const getPlayer = (id) => {
	const players = getPlayers();
	const result = players.find((player) => player.id === id);
	return result;
};

const savePlayers = (players) => {
	players.forEach((player) => {
		if (!isValidPlayer(player)) {
			throw new Error('invalid data');
		}
	});
	window.localStorage.setItem('players', JSON.stringify(players));
};

const savePlayer = (player) => {
	if (!isValidPlayer(player)) {
		throw new Error('invalid data');
	}
	const players = getPlayers();
	players.unshift(player);
	savePlayers(players);
};

const playerStorage = {
	getPlayer,
	getPlayers,
	savePlayer,
	savePlayers,
};

export default playerStorage;
