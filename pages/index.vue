<template>
  <section class="welcome page-container flex">
    <div class="title-container flex-col">
        <h1 class="h1">Мои <br> заметки</h1>
        <p class="h3 color-gray">Не забывай о важном,<br> храни его в облаке.</p>
    </div>
    <div class="preview"/>
  </section>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.welcome{
    flex: 1 0 0;
    align-items: center;
    justify-content: space-between;
    max-width: 100%;
    max-height: 100%;
    gap: 90px;
}
.title-container {
    gap: 40px;
    width: fit-content;
}
.preview{
  display: flex;
  flex: 1 0 0;
  height: 100%;
  background-image: 100%;
  background-position: right;
  background-size: contain;
  background-repeat: no-repeat;
  background-image: url("@/assets/img/index-preview.svg");
}
</style>
