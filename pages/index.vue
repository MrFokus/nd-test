<template>
  <section class="welcome page-container flex">
    <div class="title-container flex-col">
      <h1 class="h1">Мои заметки</h1>
      <p class="h3 color-gray">Не забывай о важном, храни его в облаке.</p>
    </div>
    <div class="preview" />
  </section>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.welcome {
  flex: 1 0 0;
  align-items: center;
  justify-content: space-between;
  max-width: 100%;
  max-height: 100%;
  gap: 90px;
  flex-wrap: wrap;
}
.h1 {
  max-width: 488px;
}
.h3 {
  max-width: 394px;
}
.title-container {
  gap: 40px;
  width: fit-content;
}
.preview {
  display: flex;
  flex: 1 0 0;
  height: 100%;
  background-position: right bottom;
  background-size: contain;
  background-repeat: no-repeat;
  background-image: url("@/assets/img/index-preview.svg");
}

@media (max-width: 1200px) {
  .welcome {
    flex-direction: column;
    gap: 0;
    padding-top: 40px;
  }
  .h1,
  .h3 {
    max-width: initial;
    text-align: center;
  }
  .preview{
    width: 100%;
    background-position: bottom;
  }
}
@media (max-width: 580px) {
  .welcome{
    padding-top: 20px;
  }
}
</style>
