import storageHelper from './storageHelper';

const isValidMatch = (data) => {
	const requiredFields = {
		id: 'string',
		number: 'number',
		teams: typeof {},
		scores: typeof {},
		'start-time': 'string',
		'end-time': 'string',
		status: 'number',
		added: 'boolean',
	};
	const teamsFields = {
		first: 'string',
		second: 'string',
	};
	const scoresFields = {
		first: 'number',
		second: 'number',
	};
	storageHelper.validFields(requiredFields, data);
	storageHelper.validFields(teamsFields, data.teams);
	storageHelper.validFields(scoresFields, data.scores);

	if (data.status < 0 || data.status > 2) {
		throw new Error('status out of boundary');
	}
};

const getMatches = () => {
	return JSON.parse(window.localStorage.getItem('matches'));
};

const getMatch = (id) => {
	const matches = getMatches();
	const result = matches.find((match) => match.id === id);
	if (!result) {
		throw new Error('no match has this id');
	}
	return result;
};

const saveMatchesNoValidation = (matches) => {
	window.localStorage.setItem('matches', JSON.stringify(matches));
};

const saveMatches = (matches) => {
	/**
	 * replace the matches list in local storage with new matches list
	 */
	matches.forEach((match) => {
		match.id = storageHelper.generateID();
		isValidMatch(match);
	});
	saveMatchesNoValidation(matches);
};

const addMatch = (match) => {
	/**
	 * adds a team to teams list in local storage
	 */
	match.id = storageHelper.generateID();
	isValidMatch(match);
	let matches = getMatches();
	if (!matches) {
		matches = [];
	}
	matches.unshift(match);
	saveMatchesNoValidation(matches);
};

const updateMatch = (id, data) => {
	const oldMatch = getMatch(id);
	const newMatch = { ...oldMatch, ...data };
	isValidMatch(newMatch);
	const newMatches = getMatches().filter((match) => match.id !== id);
	newMatches.unshift(newMatch);
	saveMatchesNoValidation(newMatches);
};

const removeMatch = (id) => {
	const matches = getMatches();
	const newMatches = matches.filter((match) => match.id !== id);
	if (matches.length === newMatches.length) {
		throw new Error('no match has this id');
	}
	saveMatchesNoValidation(newMatches);
};

const setMatchFirstTeam = (matchID, teamID) => {
	const match = getMatch(matchID);
	match.teams = { ...match.teams, first: teamID };
	updateMatch(matchID, match);
};

const setMatchSecondTeam = (matchID, teamID) => {
	const match = getMatch(matchID);
	match.teams = { ...match.teams, second: teamID };
	updateMatch(matchID, match);
};

const setMatchFirstTeamScore = (matchID, score) => {
	const match = getMatch(matchID);
	match.scores = { ...match.scores, first: score };
	updateMatch(matchID, match);
};

const setMatchSecondTeamScore = (matchID, score) => {
	const match = getMatch(matchID);
	match.scores = { ...match.scores, second: score };
	updateMatch(matchID, match);
};

const getMatchesList = () => {
	return JSON.parse(window.localStorage.getItem('matchList'));
};

const saveMatchListNoValidation = (matchList) => {
	window.localStorage.setItem('matchList', JSON.stringify(matchList));
};

const saveMatchList = (matchList) => {
	storageHelper.validIdList(matchList);
	saveMatchListNoValidation(matchList);
};

const addToMatchList = (matchId) => {
	let matchList = getMatchesList();
	if (!matchList) {
		matchList = [];
	}
	matchList.push(matchId);
	saveMatchList(matchList);
};

const moveMatch = (matchID, place) => {
	let matchList = getMatchesList();
	matchList = matchList.filter((id) => id !== matchID);
	matchList.splice(place, 0, matchID);
	saveMatchList(matchList);
};

const getNextMatch = () => {
	/**
	 * returns next unActive match;
	 * if no match is upcoming returns -1;
	 * returns the next unActive match
	 */
	const matchList = getMatchesList();
	const teamsPlaying = [];
	const matches0 = [];
	for (let i = 0; i < matchList.length; i++) {
		const match = getMatch(matchList[i]);
		if (match.status === 1 || match.added) {
			teamsPlaying.push(match.teams.first);
			teamsPlaying.push(match.teams.second);
		} else if (match.status === 0) {
			matches0.push(match);
		}
	}

	for (let i = 0; i < matches0.length; i++) {
		const match = matches0[i];
		if (
			!(
				teamsPlaying.includes(match.teams.first) ||
				teamsPlaying.includes(match.teams.second)
			) ||
			i === matches0.length - 1
		)
			return match.id;
	}

	return -1;
};

const clearMatches = () => {
	window.localStorage.setItem('matches', []);
};

const clearMatchList = () => {
	window.localStorage.setItem('matchList', JSON.stringify([]));
};

const matchStorage = {
	getMatch,
	getMatches,
	addMatch,
	saveMatches,
	updateMatch,
	removeMatch,
	setMatchFirstTeam,
	setMatchSecondTeam,
	setMatchFirstTeamScore,
	setMatchSecondTeamScore,
	getMatchesList,
	saveMatchList,
	addToMatchList,
	moveMatch,
	clearMatchList,
	clearMatches,
	getNextMatch,
};

export default matchStorage;
