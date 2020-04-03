<template>
    <div class="roles">
        <div class="role" v-for="role in roles" :key="role.name">
            <label :class="{ 'evil': role.isEvil }" :for="role.name">{{role.name}}</label>
            <input
                :disabled="!role.optional || inGame"
                type="checkbox"
                :name="role.name"
                :checked="role.enabled"
                @input="roleEnabled(role)"
            />
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
    name: "Roles",
    computed: {
        ...mapGetters(["roles", "inGame"])
    },
    data() {
        return {};
    },
    methods: {
        ...mapActions(["toggleRole"]),
        roleEnabled(role) {
            this.toggleRole(role);
        }
    }
};
</script>

<style scoped>
.role {
    display: grid;
    grid-template-columns: 1fr auto;
    width: 140px;
    text-align: start;
    font-size: 23px;
    font-family: "Tajawal-Bold";
    color: #fff;
    align-items: center;
    margin: 3px auto;
    color: #72f542;
}

.role > input {
    height: 18px;
    width: 18px;
    border: none;
}

.evil {
    color: #ed0211;
}
</style>