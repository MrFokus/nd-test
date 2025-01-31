<template>
  <div v-if="openQuery in route.query" class="modal-base">
    <div
      @click.stop="closeFn?closeFn():removeQueryParamUrl(openQuery)"
      class="outer-space"
    ></div>
      <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { removeQueryParamUrl } from "~/helpers/route";
const route = useRoute()
const props = defineProps<{
  openQuery: string | string[];
  closeFn?: Function;
}>();
</script>

<style scoped lang="scss">
.modal-base {
  position: fixed;
  z-index: 20;
  inset: 0;
}
.outer-space {
  opacity: 0.7;
  background: $dark;
  width: 100%;
  height: 100%;
}
</style>
