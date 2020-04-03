<template>
    <div class="player" :key="_player.id">
        <!-- <div class="field">
            <label for="id">ID:</label>
            <span name="id">{{id}}</span>
        </div>-->

        <div class="field">
            <button class="delete-btn" @click="deletePlayer(_player.id)">Delete</button>
        </div>

        <div class="field">
            <label for="name">Name:</label>
            <input
                :disabled="inGame"
                class="name"
                name="name"
                type="text"
                v-model="name"
                placeholder="name"
            />
        </div>

        <div class="field">
            <label for="isEvil">Is evil:</label>
            <input
                :disabled="_player.role"
                type="checkbox"
                name="isEvil"
                id="isEvil"
                v-model="isEvil"
            />
        </div>
        <select
            name="role"
            id="role"
            @change="setPlayerRole({ _player, selectedRole})"
            v-model="selectedRole"
        >
            <option value="null">Unknown</option>
            <option
                :disabled="players.find(player => player.role ? player.role.name === role.name : false)"
                v-for="role in enabledRoles"
                :key="role.name"
            >{{ role.name }}</option>
        </select>
    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
    name: "Player",
    props: ["id"],
    computed: {
        ...mapGetters(["players", "player", "enabledRoles", "inGame"]),
        _player: {
            get() {
                return this.player(this.id);
            }
        },
        name: {
            set(value) {
                const id = this.id;
                this.setPlayerName({
                    id,
                    name: value
                });
            },
            get() {
                return this._player.name;
            }
        },
        isEvil: {
            set(value) {
                const id = this.id;
                this.setPlayerIsEvil({
                    id,
                    isEvil: value
                });
            },
            get() {
                return this._player.isEvil;
            }
        }
    },
    data() {
        return {
            selectedRole: null
        };
    },
    methods: {
        ...mapActions([
            "setPlayerName",
            "setPlayerIsEvil",
            "setPlayerRole",
            "deletePlayer"
        ])
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.player {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    width: calc(100% - 20px);
    height: calc(100% - 20px);
    border: 1px solid red;
    box-sizing: border-box;
    padding: 10px;
    margin: 10px;
    height: 100px;
}

.name {
    outline: none;
    text-align: center;
    border: 1px solid rgba(0, 0, 0, 0.1);
    width: 100%;
}

.name:disabled {
    color: none;
    background: none;
    border: none;
}

.field {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
}

.field > .delete-btn {
    grid-column: 1 / span 2;
}

.field > label {
    text-align: start;
}
</style>
