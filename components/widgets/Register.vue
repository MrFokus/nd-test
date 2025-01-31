<template>
  <ModalBase :open-query="OPEN_QUERY">
    <ModalPrimary
      name-modal="Регистрация"
      :error="modalError"
      :open-query="OPEN_QUERY"
    >
      <form @submit.prevent="register" class="flex-col">
        <section class="fields flex-col">
          <FormInput
            :invalid-msg="formData.email.error"
            :current-symbols="formData.email.value.length"
            :max-symbols="inputMaxValueLength"
            lable-name="Email"
          >
            <input
              v-model="formData.email.value"
              @input="changeInputEmail"
              type="text"
              class="primary"
              placeholder="Введите значение"
            />
          </FormInput>
          <FormInput
            :invalid-msg="formData.password.error"
            :current-symbols="formData.password.value.length"
            :max-symbols="inputMaxValueLength"
            class="password-field"
            lable-name="Пароль"
          >
            <InputIcon
              :type="isViewPassword ? 'text' : 'password'"
              :value="formData.password.value"
              @input="changeInputPassword"
              class="primary"
              placeholder="Введите пароль"
            >
              <button
                type="button"
                class="clear pointer"
                @click.stop="isViewPassword = !isViewPassword"
              >
                <OutViewIcon v-if="isViewPassword" />
                <InViewIcon v-else />
              </button>
            </InputIcon>
          </FormInput>
          <FormInput
            :invalid-msg="formData.passwordRepeat.error"
            :current-symbols="formData.passwordRepeat.value.length"
            :max-symbols="inputMaxValueLength"
            class="password-field"
            lable-name="Пароль ещё раз"
          >
            <InputIcon
              :type="isViewPasswordRepeat ? 'text' : 'password'"
              :value="formData.passwordRepeat.value"
              @input="changeInputPasswordRepeat"
              class="primary"
              placeholder="Введите пароль"
            >
              <button
                type="button"
                class="clear pointer"
                @click.stop="isViewPasswordRepeat = !isViewPasswordRepeat"
              >
                <OutViewIcon v-if="isViewPasswordRepeat" />
                <InViewIcon v-else />
              </button>
            </InputIcon>
          </FormInput>
        </section>
        <footer class="flex">
          <p class="text-small no-account">
            У вас есть аккаунт?
            <NuxtLink class="primary" to="?register"> Войдите </NuxtLink>
          </p>
          <button :disabled="isDisabledBtn" class="primary">
            <SignInIcon />Войти
          </button>
        </footer>
      </form>
    </ModalPrimary>
  </ModalBase>
</template>

<script setup lang="ts">
import ModalPrimary from "../UI/ModalPrimary.vue";
import FormInput from "../UI/FormInput.vue";
import ModalBase from "../UI/ModalBase.vue";
import SignInIcon from "~/assets/img/sign-in.svg?component";
import InViewIcon from "~/assets/img/in-view.svg?component";
import OutViewIcon from "~/assets/img/out-view.svg?component";
import InputIcon from "../UI/InputIcon.vue";

const OPEN_QUERY = "register";
const inputMaxValueLength = 100;
const isViewPassword = ref(false);
const isViewPasswordRepeat = ref(false);
const modalError = ref("");
const formData = ref({
  email: {
    value: "",
    error: "",
  },
  password: {
    value: "",
    error: "",
  },
  passwordRepeat: {
    value: "",
    error: "",
  },
});
function changeInputPassword(event: InputEvent) {
  formData.value.password.value = event.target?.value;
  formData.value.password.error = validPassword(formData.value.password.value);
}
function changeInputPasswordRepeat(event: InputEvent) {
  formData.value.passwordRepeat.value = event.target?.value;
  formData.value.passwordRepeat.error = validPasswordRepeat(
    formData.value.passwordRepeat.value
  );
}
function changeInputEmail() {
  formData.value.email.error = validEmail(formData.value.email.value);
}
function validEmail(value: string) {
  if (!value.includes("@")) {
    return "Электронная почта должна содержать @";
  }
  if (value.length > inputMaxValueLength) {
    return "Слишком большая длина";
  }
  return "";
}

function setErrorMessage(value:string, time:number = 3000){
  modalError.value = value
  setTimeout(() => {
    modalError.value = ''
  }, time);
}

function validPassword(value: string) {
  if (value.length < 8) {
    return "Минимальная длина состовляет 8 символов";
  }
  if (value.length > inputMaxValueLength) {
    return "Слишком большая длина";
  }
  return "";
}
function validPasswordRepeat(value: string) {
  validPassword(value);
  if (value !== formData.value.password.value) {
    return "Пароли не совпадают";
  }
  return "";
}
const isDisabledBtn = computed<boolean>(() =>
  Boolean(
    formData.value.password.error ||
      formData.value.email.error ||
      !formData.value.password.value ||
      !formData.value.email.value ||
      !formData.value.passwordRepeat.value ||
      formData.value.passwordRepeat.error
  )
);

async function register() {
  const res = await useFetch(`${useRuntimeConfig().public.apiUrl}api/reg`, {
    method: "POST",
    body: {
      email: formData.value.email.value,
      password: formData.value.password.value,
      confirm_password: formData.value.passwordRepeat.value,
    },
  });
  if (res.data.value) {
    navigateTo('?sign-in')
  }
  if (res.error.value) {
    setErrorMessage(res.error.value?.data.message)
  }
}
</script>

<style scoped lang="scss">
form {
  gap: 40px;
  width: 620px;
}
.fields {
  gap: 24px;
}
.no-account {
  display: flex;
  gap: 4px;
}
footer {
  align-items: center;
  justify-content: space-between;
  gap: 40px;
}
.password-field :deep(label) {
  width: 100%;
}
</style>
