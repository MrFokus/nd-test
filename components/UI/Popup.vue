<template>
  <ul class="popup clear">
    <slot>
      <li v-for="btn in list">
        <button class="clear link" @click="btn.fn()">{{ btn.name }}</button>
      </li>
    </slot>
  </ul>
</template>

<script setup lang="ts">
const props = defineProps<{
  list?: {
    name: string;
    fn: Function;
  }[];
}>();
</script>

<style scoped lang="scss">
.popup {
  padding: 40px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  position: absolute;
  background-color: $dark-middle;
  box-shadow: 0px 15px 46px -10px rgba(0, 0, 0, 0.6);
  border-radius: 12px;
  top: calc(100% + 12px);
  right: 0;

  &::before {
    content: "";
    background-image: url("~/assets/img/popup-corner.svg");
    background-position: center center;
    background-size: 100%;
    background-repeat: no-repeat;
    position: absolute;
    top: -8px;
    right: 20px;
    width: 18px;
    height: 9px;
  }
}
</style>
