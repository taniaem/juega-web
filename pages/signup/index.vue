<template>
  <v-container fluid class="fill-height space-elements-login">
    <v-row no-gutters class="form-container">
      <HeaderSpacer />
      <v-col cols="12" md="12" lg="12" sm="12">
        <v-row no-gutters align="center" justify="center">
          <v-col cols="12" md="6">
            <h1 class="text-left capitalize mulish bold text-primary">
              Regístrate
            </h1>
            <br />
            <v-form @submit.prevent="submitForm" ref="form">
              <div class="mt-1">
                <v-text-field
                  label="correo electrónico"
                  v-model="formState.username"
                  :error-messages="v$.username.$errors.map((e) => e.$message)"
                  @input="v$.username.$touch"
                  @blur="v$.username.$touch"
                ></v-text-field>
                <!-- <div class="error-field-container" v-if="v$.username.$errors.length > 0">
					<p class="text-error" v-for="(e, index) of v$.username.$errors" :key="index">
						<small>{{ e.$message }}</small>
					</p>
				</div> -->
              </div>
              <div class="mt-1">
                <v-text-field
                  label="Contraseña"
                  ref="passwordField"
                  type="password"
                  v-model="formState.password"
                  :error-messages="v$.password.$errors.map((e) => e.$message)"
                  @input="v$.password.$touch"
                  @blur="v$.password.$touch"
                ></v-text-field>
                <v-row class="mb-1">
                  <v-col cols="3" md="3" sm="12">
                    <p
                      :class="{
                        'text-success': validateContainsUppercase,
                        'text-gray': !validateContainsUppercase,
                      }"
                    >
                      <font-awesome-icon icon="fa-solid fa-circle-check" />
                      &nbsp;Mayúscula
                    </p>
                  </v-col>
                  <v-col cols="3" md="3" sm="12">
                    <p
                      :class="{
                        'text-success': containsLowerCase,
                        'text-gray': !containsLowerCase,
                      }"
                    >
                      <font-awesome-icon
                        icon="fa-solid fa-circle-check"
                      />&nbsp;Minúscula
                    </p>
                  </v-col>
                  <v-col cols="3" md="3" sm="12">
                    <p
                      :class="{
                        'text-success': containsNumber,
                        'text-gray': !containsNumber,
                      }"
                    >
                      <font-awesome-icon
                        icon="fa-solid fa-circle-check"
                      />&nbsp;Número
                    </p>
                  </v-col>
                  <v-col cols="3" md="3" sm="12">
                    <p
                      :class="{
                        'text-success': containsMinLength,
                        'text-gray': !containsMinLength,
                      }"
                    >
                      <font-awesome-icon
                        icon="fa-solid fa-circle-check"
                      />&nbsp;8 Caracteres
                    </p>
                  </v-col>
                </v-row>
              </div>
              <div class="mt-1">
                <v-text-field
                  label="Confirma contraseña"
                  v-model="formState.passwordConfirm"
                  ref="confirmPasswordField"
                  type="password"
                  :error-messages="
                    v$.passwordConfirm.$errors.map((e) => e.$message)
                  "
                  @input="v$.passwordConfirm.$touch"
                  @blur="v$.passwordConfirm.$touch"
                ></v-text-field>
                <!-- <span v-if="!$v.user.confirmPassword.required">Confirm Password is required</span> -->
              </div>
              <h1 class="text-left capitalize mulish bold text-primary">
                Datos personales
              </h1>
              <br />
              <div class="mt-1">
                <v-text-field
                  label="Nombre(s)"
                  v-model="formState.firstname"
                  :error-messages="v$.firstname.$errors.map((e) => e.$message)"
                  @input="v$.firstname.$touch"
                  @blur="v$.firstname.$touch"
                ></v-text-field>
              </div>
              <div class="mt-1">
                <v-text-field
                  label="Apellido(s)"
                  v-model="formState.lastname"
                  :error-messages="v$.lastname.$errors.map((e) => e.$message)"
                  @input="v$.lastname.$touch"
                  @blur="v$.lastname.$touch"
                ></v-text-field>
              </div>
              <div class="mt-1">
                <v-text-field
                  label="Fecha de nacimiento"
                  type="date"
                  v-model="formState.birthdate"
                  :error-messages="v$.birthdate.$errors.map((e) => e.$message)"
                  @input="v$.birthdate.$touch"
                  @blur="v$.birthdate.$touch"
                ></v-text-field>
              </div>
              <div class="mt-1">
                <v-text-field label="Teléfono"></v-text-field>
              </div>
              <div class="mt-1">
                <v-checkbox
                  label="Confirmo que soy mayor de 18 años."
                  v-model="formState.over18"
                  :error-messages="v$.over18.$errors.map((e) => e.$message)"
                  @input="v$.over18.$touch"
                  @blur="v$.over18.$touch"
                  @change="v$.over18.$touch"
                ></v-checkbox>
                <v-checkbox
                  label="Acepto los Términos y Condiciones y la Política de Privacidad."
                  v-model="formState.agreTerms"
                  :error-messages="v$.agreTerms.$errors.map((e) => e.$message)"
                  @input="v$.agreTerms.$touch"
                  @blur="v$.agreTerms.$touch"
                  @change="v$.agreTerms.$touch"
                ></v-checkbox>
              </div>
              <div class="mt-1">
                <v-btn
                  block
                  color="secondary"
                  type="submit"
                  :disabled="v$.$invalid"
                  :loading="isSubmitLoading"
                  >Crear una cuenta</v-btn
                >
              </div>
            </v-form>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { reactive, ref } from "vue";
import { useVuelidate } from "@vuelidate/core";
import {
  email,
  required,
  sameAs,
  minLength,
  helpers,
} from "@vuelidate/validators";

import { ajax } from "rxjs/ajax";

import { endWith, map, startWith } from "rxjs/operators";

const form = ref(null);
const confirmPasswordField = ref(null);
const passwordField = ref(null);

let isSubmitLoading = ref(false);

const formState = reactive({
  username: "",
  password: "",
  passwordConfirm: "",
  firstname: "",
  lastname: "",
  birthdate: "",
  over18: false,
  agreTerms: false,
});

const formRules = computed(() => {
  return {
    username: {
      required: helpers.withMessage(
        validationRequiredField("correo electrónico"),
        required
      ),
      email,
    },
    password: {
      required: helpers.withMessage(
        validationRequiredField("contraseña"),
        required
      ),
      containsUppercase: (value) => /[A-Z]/gm.test(value),
      containsLowerCase: (value) => /[a-z]/gm.test(value),
      containsNumber: (value) => /[0-9]/gm.test(value),
      minLength: minLength(8),
      // valid: function(value) {
      //   const containsUppercase = /[A-Z]/.test(value)
      //   const containsLowercase = /[a-z]/.test(value)
      //   const containsNumber = /[0-9]/.test(value)
      //   const containsSpecial = /[#?!@$%^&*-]/.test(value)
      //   return containsUppercase && containsLowercase && containsNumber && containsSpecial
      // },
    },
    passwordConfirm: {
      required: helpers.withMessage(
        validationRequiredField("confirma contraseña"),
        required
      ),
      sameAsPassword: sameAs(formState.password),
    },
    firstname: {
      required: helpers.withMessage(
        validationRequiredField("nombre(s)"),
        required
      ),
    },
    lastname: {
      required: helpers.withMessage(
        validationRequiredField("apellido(s)"),
        required
      ),
    },
    over18: {
      required: helpers.withMessage(
        validationRequiredField("Confirmo que soy mayor de 18 años."),
        required
      ),
      valid: helpers.withMessage(
        validationRequiredField(
          "debes confirmar que eres mayor de 18 años para continuar."
        ),
        (value) => value
      ),
    },
    agreTerms: {
      valid: helpers.withMessage(
        validationRequiredField(
          "debes aceptar los Términos y Condiciones y la Política de Privacidad para continuar."
        ),
        (value) => value
      ),
    },
    birthdate: {
      required: helpers.withMessage(
        validationRequiredField("fecha de nacimiento"),
        required
      ),
    },
  };
});

const v$ = useVuelidate(formRules, formState);

const validateContainsUppercase = computed(
  () =>
    v$.value.password.$errors.filter(
      (e) => e.$validator === "containsUppercase"
    ).length === 0 && v$.value.password.$dirty
);
const containsLowerCase = computed(
  () =>
    v$.value.password.$errors.filter(
      (e) => e.$validator === "containsLowerCase"
    ).length === 0 && v$.value.password.$dirty
);
const containsNumber = computed(
  () =>
    v$.value.password.$errors.filter((e) => e.$validator === "containsNumber")
      .length === 0 && v$.value.password.$dirty
);
const containsMinLength = computed(
  () =>
    v$.value.password.$errors.filter((e) => e.$validator === "minLength")
      .length === 0 &&
    v$.value.password.$dirty &&
    formState.password.length > 0
);

const submitForm = async () => {
  let validation = await v$.value.$validate();
  if (validation) {
    //await loginStore.tryToLogin();
    console.log("form ok");

    await ajax
      .getJSON("https://reqres.in/api/users/2?delay=3")
      .pipe(
        startWith<string>("loading"),
        endWith<string>("notloading"),
        map<any>((d) => (typeof d === "string" ? d : d.data))
      )
      .subscribe<any>((resp) => {
        if (resp === "loading") {
          isSubmitLoading.value = true;
        }

        if (resp === "notloading") {
          isSubmitLoading.value = false;
        }

        console.log(resp);
      });
  }
};

function validationRequiredField(fieldname = "") {
  return `el campo ${fieldname} es requerido`;
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

.error-field-container {
  margin-top: -16px;
  margin-bottom: 14px;
}
</style>
