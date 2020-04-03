<template>
    <div class="player" :key="_player.id">
        <!-- <div class="field">
            <label for="id">ID:</label>
            <span name="id">{{id}}</span>
        </div>-->

        <div class="field">
            <button :disabled="inGame" class="delete-btn" @click="deletePlayer(_player.id)">Delete</button>
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
            <label
                :class="{ 'evil': _player.isEvil, 'good': _player.isEvil === false}"
                for="isEvil"
            >Evil:</label>
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
    grid-template-rows: 1fr 1fr 1fr 1fr;
    width: calc(100% - 20px);
    height: calc(100% - 20px);
    box-sizing: border-box;
    padding: 10px;
    margin: 10px;
    height: 200px;
    background-color: rgba(255, 255, 255, 0.9);
    border-radius: 15px;
    align-items: center;
    color: black;
    font-family: "Tajawal-Bold";
    font-size: 18px;
}

.name {
    outline: none;
    text-align: center;
    border: 0.1px solid rgba(0, 0, 0, 0.1);
    width: 100%;
    height: 60%;
    font-family: "Tajawal-Regular";
    font-size: 17px;
}

.name:disabled {
    background-color: transparent;
    color: none;
    background: none;
    border: none;
}

.field {
    display: grid;
    grid-template-columns: 1fr 2fr;
    align-items: center;
    border-bottom: 1px solid rgba(237, 171, 47, 0.3);
    align-items: center;
    height: 100%;
    width: 100%;
}

.delete-btn {
    outline: none;
    grid-column: 1 / span 2;
    background: none;
    border: none;
    color: red;
    font-family: "Tajawal-ExtraBold";
    font-size: 18px;
}

.delete-btn:disabled {
    opacity: 0.7;
}

.field > label {
    text-align: start;
}

.field > input[type="checkbox"] {
    justify-self: center;
    width: 18px;
    height: 18px;
}

select,
option {
    outline: none;
    transition: all 0.5s ease-in-out;
}

.evil {
    color: #e00000;
}

.good {
    color: #39db39;
}
</style>
