<template>
    <div class="roles">
        <div class="role" v-for="role in roles" :key="role.name">
            <label :for="role.name">{{role.name}}</label>
            <input
                :disabled="!role.optional || inGame"
                type="checkbox"
                :name="role.name"
                :class="{ 'Evil': role.isEvil }"
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

<style>
</style>