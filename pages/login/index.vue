<template>
  <v-container fluid class="fill-height space-elements-login">
    <v-row no-gutters class="form-container">
      <HeaderSpacer />
      <v-col cols="12" md="12" lg="12" sm="12">
        <v-row no-gutters align="center" justify="center">
          <v-col cols="12" md="6">
            <h1 class="text-center capitalize mulish bold text-primary">
              {{ $t("loginMessage") }}
            </h1>

            <VForm @submit.prevent="submitForm" ref="form" class="mt-7">
              <div class="mt-1">
                <!--username field-->
                <v-text-field
                  label="correo electrónico"
                  class="juega-text-field mb-2"
                  v-model="formState.username"
                  :error-messages="v$.username.$errors.map((e) => e.$message)"
                  @input="v$.username.$touch"
                  @blur="v$.username.$touch"
                >
                </v-text-field>
              </div>
              <div class="mt-1">
                <!--password field-->
                <v-text-field
                  type="password"
                  label="password"
                  class="juega-text-field"
                  v-model="formState.password"
                  :error-messages="v$.password.$errors.map((e) => e.$message)"
                  @input="v$.password.$touch"
                  @blur="v$.password.$touch"
                ></v-text-field>
              </div>
              <div class="mt-5">
                <v-btn
                  color="secondary"
                  variant="flat"
                  block
                  size="large"
                  :loading="isLoginInProgressStatus"
                  :disabled="v$.$invalid"
                  type="submit"
                  >{{ $t("join") }}</v-btn
                >
              </div>
            </VForm>
            <p class="text-center text-caption mt-10">
              <span>
                <NuxtLink
                  :to="localePath('/forgot-password')"
                  class="text-primary"
                  >¿OLVIDASTE TU CONTRASEÑA?</NuxtLink
                ></span
              >
            </p>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-row class="bg-primary form-footer-container">
      <v-col>
        <v-col cols="12" md="12" lg="12" sm="12">
          <p class="text-center light--text">¿No tienes cuenta aún?</p>
          <p class="bold text-center">
            <NuxtLink
              :to="localePath('/signup')"
              class="bold text-tertiary"
              >Regístrate</NuxtLink
            >
          </p>
        </v-col>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
// const email = ref("");
// const password = ref("");

// const { ruleEmail, rulePassLen, ruleRequired } = useFormRules();

// const submit = async () => {};

import { reactive, ref } from "vue"; // "from '@vue/composition-api'" if you are using Vue 2.x
import { storeToRefs } from "pinia";
import { useLoginStore } from "@/store/login";

import { useVuelidate } from "@vuelidate/core";
import { email, required } from "@vuelidate/validators";

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
  if (validation) {
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

<style lang="scss" scoped>
.space-elements-login {
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch !important;
  flex-wrap: nowrap;
  .form-container {
    flex-grow: 0;
    flex-shrink: 0;
  }
  .form-footer-container {
    flex-grow: 0;
    flex-shrink: 0;
  }
}
</style>
