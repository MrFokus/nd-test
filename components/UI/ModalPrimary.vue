<template>
  <div class="modal-container">
    <header>
      <slot name="header">
        <p class="h2">
          {{ nameModal }}
        </p>
      </slot>
      <button
        @keypress.esc="closeFn ? closeFn() : removeQueryParamUrl(openQuery)"
        v-if="openQuery"
        @click="closeFn ? closeFn() : removeQueryParamUrl(openQuery)"
        class="primary close circle"
      >
        <CloseIcon />
      </button>
    </header>
    <slot></slot>
    <div v-if="error" class="error text-small">
      {{ error }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { removeQueryParamUrl } from "~/helpers/route";
import CloseIcon from "~/assets/img/close.svg?component";
const props = defineProps<{
  nameModal: string;
  closeFn?: Function;
  openQuery?: string;
  error?: string;
}>();
</script>

<style scoped lang="scss">
.modal-container {
  display: flex;
  padding: min(80px,10vw);
  flex-direction: column;
  position: absolute;
  margin: auto;
  inset: 0;
  width: fit-content;
  height: fit-content;
  border-radius: 40px;
  background: $dark-middle;
  max-width: 100%;
}
.close {
  position: absolute;
  top: 20px;
  right: 20px;
}
.error {
  border-radius: 24px;
  background: rgba(255, 116, 97, 0.1);
  display: flex;
  padding: 8px 20px;
  justify-content: center;
  gap: 8px;
  color: $red;
  margin-top: 20px;
}
</style>
