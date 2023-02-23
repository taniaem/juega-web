<template>
  <v-row no-gutters>
    <v-col>
      <h1 class="text-center capitalize mulish bold">
        {{ $t("loginMessage") }}
      </h1>
    </v-col>
  </v-row>
  <v-row>
    <v-col>
      <v-sheet width="300" class="mx-auto">
        <v-form @submit.prevent="submitForm" ref="form">
          <!--username field-->

          <v-text-field
            label="correo electrónico"
            class="juega-text-field"
            v-model="formState.username"
            :error-messages="v$.username.$errors.map(e => e.$message)"
            @input="v$.username.$touch"
            @blur="v$.username.$touch"
          >
          </v-text-field>
          <!--password field-->
          <v-text-field
            type="password"
            label="password"
            v-model="formState.password"
            :error-messages="v$.password.$errors.map(e => e.$message)"
            @input="v$.password.$touch"
            @blur="v$.password.$touch"
          ></v-text-field>

          <v-btn
            color="primary"
            variant="flat"
            block
            size="large"
            :loading="isLoginInProgressStatus"
            :disabled="v$.$invalid"
            type="submit"
            >{{ $t("join") }}</v-btn
          >
        </v-form>
      </v-sheet>
    </v-col>
  </v-row>
  <v-row>
    <v-col>
      <p class="text-center text-primary primary--text">
        <NuxtLink
          :to="localePath('/login/forgot-password')"
          class="text-primary"
          >¿OLVIDASTE TU CONTRASEÑA?</NuxtLink
        >
      </p>
    </v-col>
  </v-row>
</template>

<script setup>
import { reactive, ref } from "vue"; // "from '@vue/composition-api'" if you are using Vue 2.x
import { storeToRefs } from "pinia";
import { useLoginStore } from "@/store/login";

import { useVuelidate } from "@vuelidate/core";
import { 
  email, 
  required 
} from "@vuelidate/validators";

//store
const loginStore = useLoginStore();
const { isLoginInProgressStatus } = storeToRefs(loginStore);

const formState = reactive({
  username: "",
  password: "",
});

const rules = {
  password: { required },
  username: { required, email },
};

const v$ = useVuelidate(rules, formState);

const form = ref(null);

//methods
const submitForm = async () => {
  let validation = await v$.value.$validate();
  if(validation){
    await loginStore.tryToLogin();
  }
};

function clear() {
  v$.value.$reset();

  for (const [key, value] of Object.entries(initialState)) {
    state[key] = value;
  }
}
</script>
