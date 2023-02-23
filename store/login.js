import { defineStore } from "pinia";
import { ref } from "vue";

export const useLoginStore = defineStore("global", () => {
    //state
    let isLoadingLogin = ref(false);

    //getters
    const isLoginInProgressStatus = computed(() => isLoadingLogin.value)

    //actions
    async function tryToLogin(){
        isLoadingLogin.value = true;
        setTimeout(() => {
            isLoadingLogin.value = false;
        },1500)
    }

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