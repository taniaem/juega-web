import { defineStore } from "pinia";
import { ref } from "vue";

export const useGlobalStore = defineStore("global", () => {
    const state = {}
    const getters = {}
    const actions = {}

    return {
        ...state,
        ...getters,
        ...actions,
    }
});