<template>
    <div id="app">
        <div class="controls">
            <button :disabled="inGame" @click="newPlayer">New Player</button>

            <button
                :disabled="inGame || !!players.find(player => player.name === '')"
                @click="startGame"
            >Start Game</button>

            <button :disabled="!inGame" @click="restartGame">Restart</button>
        </div>
        <div class="roles-container">
            <h2>Roles</h2>
            <Roles />
        </div>

        <div
            class="names-required"
            :class="{ 'names-required-filled':!players.find(player => player.name === '') }"
        >
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
    font-family: "Tajawal-Regular";
    box-sizing: border-box;
    padding-top: 50px;
}

.controls {
    display: grid;
    width: 300px;
    margin: 0 auto;
}

.controls > button {
    transition: all 1s ease-in-out;
    background: none;
    border: none;
    color: #ffffff;
    font-size: 25px;
    font-family: "Tajawal-Bold";
    cursor: pointer;
    margin: 5px 0;
    outline: none;
}

.controls > button:disabled {
    color: rgba(255, 255, 255, 0.3);
    cursor: default;
}

.roles-container {
    margin-top: 20px;
}

.roles-container > h2 {
    font-family: "Tajawal-ExtraBold";
    color: #edab2f;
    font-size: 40px;
    margin-bottom: 10px;
}

.players {
    /* border: 1px solid rgba(255, 255, 255, 1); */
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
}

.names-required {
    height: 30px;
    margin-top: 20px;
    margin-bottom: 25px;
    font-size: 30px;
    color: #e62c51;
    transition: all 1s ease-in-out;
}

.names-required span {
    transition: all 1s ease-in-out;
}

.names-required-filled {
    height: 0;
    margin: 0;
}

.names-required-filled span {
    opacity: 0;
}
</style>


<style>
html,
body,
div,
span,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
abbr,
address,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
samp,
small,
strong,
sub,
sup,
var,
b,
i,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section,
summary,
time,
mark,
audio,
video {
    margin: 0;
    padding: 0;
    border: 0;
    outline: 0;
    font-size: 100%;
    vertical-align: baseline;
    background: transparent;
}
body {
    line-height: 1;
}
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
    display: block;
}
nav ul {
    list-style: none;
}
blockquote,
q {
    quotes: none;
}
blockquote:before,
blockquote:after,
q:before,
q:after {
    content: none;
}
a {
    margin: 0;
    padding: 0;
    font-size: 100%;
    vertical-align: baseline;
    background: transparent;
    text-decoration: none;
}
mark {
    background-color: #ff9;
    color: #000;
    font-style: italic;
    font-weight: bold;
}
del {
    text-decoration: line-through;
}
abbr[title],
dfn[title] {
    border-bottom: 1px dotted;
    cursor: help;
}
table {
    border-collapse: collapse;
    border-spacing: 0;
}
hr {
    display: block;
    height: 1px;
    border: 0;
    border-top: 1px solid #ccc;
    margin: 1em 0;
    padding: 0;
}
input,
select {
    vertical-align: middle;
}
li {
    list-style: none;
}

body,
html {
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
    min-height: 600px;
    height: 100vh;
    background-color: #131417;
}

@font-face {
    font-family: "Tajawal-Regular";
    src: url(~@/assets/fonts/Tajawal-Regular.ttf);
}

@font-face {
    font-family: "Tajawal-Bold";
    src: url(~@/assets/fonts/Tajawal-Bold.ttf);
}

@font-face {
    font-family: "Tajawal-ExtraBold";
    src: url(~@/assets/fonts/Tajawal-ExtraBold.ttf);
}
</style>