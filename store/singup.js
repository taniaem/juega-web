import { defineStore } from "pinia";
import { ref } from "vue";

export const userSignUpStore = defineStore("signup", () => {
    const state = {
        isLoadingLogin,
    }
    const getters = {
        isLoginInProgressStatus,
    }
    const actions = {
        tryToLogin,
    }

    return {
        ...state,
        ...getters,
        ...actions,
    }
});