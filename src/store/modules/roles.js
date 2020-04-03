const state = {
    roles: [
        {
            id: 0,
            name: "Merlin",
            enabled: true,
            optional: false,
            isEvil: false,
            bindedTo: null,
        },
        {
            id: 1,
            name: "Persival",
            enabled: false,
            optional: true,
            isEvil: false,
            bindedTo: 2,
        },
        {
            id: 2,
            name: "Morgana",
            enabled: false,
            optional: true,
            isEvil: true,
            bindedTo: 1,
        },
        {
            id: 3,
            name: "Mordred",
            enabled: false,
            optional: true,
            isEvil: true,
            bindedTo: null,
        }
    ]
};

const getters = {
    roles: (state) => state.roles,
    enabledRoles: (state) => state.roles.filter(role => role.enabled)
};

const actions = {

    toggleRole({ commit, getters, dispatch }, role) {
        if (role.optional && !getters.inGame) {
            commit('toggleRole', role)
            if (role.bindedTo !== null) {
                const bindedTo = getters.roles.find(_role => _role.id === role.bindedTo);
                if (role.enabled !== bindedTo.enabled) {
                    dispatch('toggleRole', bindedTo)
                }
            }
        }
    }
};

const mutations = {
    toggleRole: (state, role) => (role.enabled = !role.enabled),

};


export default {
    state,
    getters,
    actions,
    mutations
}