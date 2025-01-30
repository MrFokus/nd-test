<template>
  <header class="page-container">
    <LogoIcon class="logo" />
    <button class="primary sign-in"><SignInIcon/>Вход</button>
  </header>
  <main class="flex-col">
    <slot />
  </main>
</template>

<script setup lang="ts">
import LogoIcon from "@/assets/img/logo.svg?component";
import SignInIcon from "@/assets/img/sign-in.svg?component";
</script>

<style scoped lang="scss">
header {
  display: flex;
  padding-top: 40px;
  padding-bottom: 40px;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  right: 0;
  left: 0;
  background-color: $dark;
}
.sign-in{
    &>svg{
        width: 34px;
    }
}

.logo{
    height: 50px;
}
main{
    flex: 1 0 0;
}
</style>
