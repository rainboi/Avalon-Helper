<template>
    <div id="app">
        <button :disabled="inGame" @click="newPlayer">New Player</button>

        <button
            :disabled="inGame || !!players.find(player => player.name === '')"
            @click="startGame"
        >Start Game</button>

        <button :disabled="!inGame" @click="restartGame">Restart</button>

        <div class="roles-container">
            <Roles />
        </div>

        <div v-if="!!players.find(player => player.name === '')">
            <span>Please enter the name of every player in order to start</span>
        </div>

        <div class="players">
            <Player v-for="player in players" :key="player.id" :id="player.id" />
        </div>
    </div>
</template>

<script>
import Player from "./components/Player";
import Roles from "./components/Roles";
import { mapGetters, mapActions } from "vuex";

export default {
    name: "App",
    components: {
        Player,
        Roles
    },
    computed: {
        ...mapGetters(["players", "inGame"])
    },
    data() {
        return {};
    },
    methods: {
        ...mapActions(["newPlayer", "startGame", "restartGame"])
    }
};
</script>

<style scoped>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}

.players {
    background-color: white;
    border: 1px solid black;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
}
</style>
