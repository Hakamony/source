import storageHelper from './storageHelper';
import playerStorage from './playerStorage';

const isValidTeam = (data) => {
	const requiredFields = {
		id: 'string',
		name: 'string',
		players: typeof [],
		'match-played': typeof {},
	};
	const requiredFieldsMatchPlayed = {
		won: 'number',
		tie: 'number',
		lose: 'number',
	};
	storageHelper.validFields(requiredFields, data);
	storageHelper.validFields(requiredFieldsMatchPlayed, data['match-played']);
	storageHelper.validIdList(data.players);
};

const getTeams = () => {
	/**
	 * return teams as json
	 */
	return JSON.parse(window.localStorage.getItem('teams'));
};

const getTeam = (id) => {
	const teams = getTeams();
	const result = teams.find((team) => team.id === id);
	if (!result) {
		throw new Error('no team has this id');
	}
	return result;
};

const saveTeamsNoValidation = (teams) => {
	window.localStorage.setItem('teams', JSON.stringify(teams));
};

const saveTeams = (teams) => {
	/**
	 * replace the teams list in local storage with new teams list
	 */
	teams.forEach((team) => {
		team.id = storageHelper.generateID();
		isValidTeam(team);
	});
	saveTeamsNoValidation(teams);
};

const addTeam = (team) => {
	/**
	 * adds a team to teams list in local storage
	 */
	team.id = storageHelper.generateID();
	isValidTeam(team);
	const teams = getTeams();
	teams.unshift(team);
	saveTeamsNoValidation(teams);
};

const updateTeam = (id, data) => {
	/**
	 * updates the player with provided id in local storage
	 */
	const oldTeam = getTeam(id);
	const newTeam = { ...oldTeam, ...data };
	isValidTeam(newTeam);
	const newTeams = getTeams().filter((team) => team.id !== id);
	newTeams.unshift(newTeam);
	saveTeamsNoValidation(newTeams);
};

const removeTeam = (id) => {
	const teams = getTeams();
	const newTeams = teams.filter((team) => team.id !== id);
	if (teams.length === newTeams.length) {
		throw new Error('no team has this id');
	}
	saveTeamsNoValidation(newTeams);
};

const addPlayerToTeam = (playerId, teamId) => {
	const team = getTeam(teamId);
	if (team.players.find((id) => id === playerId)) {
		throw new Error(`the player with id ${playerId} is already in the team`);
	}
	team.players.unshift(playerId);
	updateTeam(teamId, team);
};

const getTeamRating = (teamId) => {
	const team = getTeam(teamId);
	if (team.players.length) {
		const totalRating = team.players.reduce(
			(sum, playerId) => {
                const player = playerStorage.getPlayer(playerId)
                return sum + player.Rating
            },0   
		);
		return totalRating / team.players.length;
	}
	return 0;
};

const teamStorage = {
	getTeam,
	getTeams,
	addTeam,
	saveTeams,
	updateTeam,
	removeTeam,
	addPlayerToTeam,
	getTeamRating,
};

export default teamStorage;
