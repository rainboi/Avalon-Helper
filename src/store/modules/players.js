class Player {
    constructor(id) {
        this.id = id;
        this.name = '';
        this.isEvil = null;
        this.role = null;
    }

    setIsEvil(isEvil) {
        if (this.role === null || isEvil && this.role.isEvil) {
            this.isEvil = isEvil;
        }
    }

    setName(value) {
        this.name = value;
    }

    setRole(role) {
        this.role = role ? role : null;
        this.isEvil = role ? role.isEvil : null;
    }
}

const state = {
    players: [],
};

const getters = {
    players: (state) => state.players,
    player: (state) => id => state.players[state.players.findIndex((player => player.id === id))]
};

const actions = {
    newPlayer({ commit, getters }) {
        const playerID = getters.players.length;
        const player = new Player(playerID);
        commit('addPlayer', player);
    },

    setPlayerName({ commit, getters }, data) {
        const player = getters.player(data.id);
        const newName = data.name
        commit('setPlayerName', {
            player,
            newName
        });
    },

    setPlayerIsEvil({ commit, getters }, data) {
        const player = getters.player(data.id);
        const isEvil = data.isEvil;
        commit('setPlayerIsEvil', {
            player,
            isEvil
        })

    },

    setPlayerRole({ commit, getters }, data) {
        const player = data._player;
        const role = getters.enabledRoles.find(_role => _role.name === data.selectedRole)
        commit('setPlayerRole', {
            player,
            role
        })
    },

    deletePlayer({ commit, getters }, id) {
        const index = getters.players.findIndex((player => player.id === id));
        commit('deletePlayer', index)
    }
};

const mutations = {
    addPlayer: (state, player) => (state.players.push(player)),
    setPlayerName: (state, data) => (data.player.setName(data.newName)),
    setPlayerIsEvil: (state, data) => (data.player.setIsEvil(data.isEvil)),
    setPlayerRole: (state, data) => (data.player.setRole(data.role)),
    deletePlayer: (state, index) => (state.players.splice(index, 1))

};


export default {
    state,
    getters,
    actions,
    mutations
}