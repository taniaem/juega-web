<template>
  <v-row no-gutters id="header-container">
    <v-col>
      <v-card flat height="60px" rounded="0" class="pt-3 pl-5 pb-3 pr-0">
        <v-row justify="space-between" no-gutters>
          <v-col class="pt-1">
            <NuxtLink :to="localePath('/')">
              <v-img
                src="/assets/img/global/logo.png"
                height="31px"
                width="134px"
              ></v-img>
            </NuxtLink>
          </v-col>
          <v-col>
            <v-row no-gutters justify="end">
              <v-btn color="secondary" variant="flat">
              <NuxtLink :to="localePath('/login')" class="no-text-decoration">
                {{ $t('join') }}
              </NuxtLink>
            </v-btn>
              <v-btn variant="plain">
                <font-awesome-icon icon="fa-solid fa-bars" />
              </v-btn>
            </v-row>
          </v-col>
        </v-row>
      </v-card>
    </v-col>
  </v-row>
</template>

<script setup>
const { locale } = useI18n();
const localePath = useLocalePath();
</script>

<style lang="scss" scoped>
#header-container {
  border-bottom: solid 1px #ededed;
}
</style>
