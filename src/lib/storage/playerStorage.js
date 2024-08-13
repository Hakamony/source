const getPlayers = () =>{
    // return players as json
    return JSON.parse(window.localStorage.getItem("players"))
}
const getPlayer = (id) =>{
    const players = getPlayers()
    const result = players.find(player => player.id === id)
    return result
}

const savePlayers = (players) =>{
    window.localStorage.setItem("players", JSON.stringify(players))
}

const savePlayer = (player) => {
	const players = getPlayers()
    players.unshift(player)
    savePlayers(players)
};


const playerStorage = {
    getPlayer,
    getPlayers,
    savePlayer,
    savePlayers
}

export default playerStorage