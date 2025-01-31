<template>
  <ModalBase :open-query="OPEN_QUERY">
    <ModalPrimary name-modal="Вход в ваш аккаунт" :error="modalError" :open-query="OPEN_QUERY">
      <form @submit.prevent="signIn" class="flex-col">
        <section class="fields flex-col">
          <FormInput :invalid-msg="formData.email.error" :current-symbols="formData.email.value.length" :max-symbols="inputMaxValueLength" lable-name="Email">
            <input v-model="formData.email.value" @input="changeInputEmail" type="text" class="primary" placeholder="Введите значение">
          </FormInput>
          <FormInput :invalid-msg="formData.password.error" :current-symbols="formData.password.value.length" :max-symbols="inputMaxValueLength" class="password-field" lable-name="Пароль">
            <InputIcon  :type="isViewPassword?'text':'password'" :value="formData.password.value" @input="changeInputPassword" class="primary" placeholder="Введите пароль">
              <button type="button" class="clear pointer" @click.stop="isViewPassword = !isViewPassword">
                <OutViewIcon v-if="isViewPassword"/>
                <InViewIcon v-else/>
              </button>
            </InputIcon>
          </FormInput>
        </section>
        <footer class="flex">
          <p class="text-small no-account">
            У вас нет аккаунта?
            <NuxtLink class="primary" to="?register"
              >Зарегистрируйтесь</NuxtLink
            >
          </p>
          <button :disabled="isDisabledBtn" class="primary"><SignInIcon/>Войти</button>
        </footer>
      </form>
    </ModalPrimary>
  </ModalBase>
</template>

<script setup lang="ts">
import ModalPrimary from "../UI/ModalPrimary.vue";
import FormInput from "../UI/FormInput.vue";
import ModalBase from "../UI/ModalBase.vue";
import SignInIcon from "~/assets/img/sign-in.svg?component"
import InViewIcon from "~/assets/img/in-view.svg?component"
import OutViewIcon from "~/assets/img/out-view.svg?component"
import InputIcon from "../UI/InputIcon.vue";
import { errorMessages } from "vue/compiler-sfc";

const OPEN_QUERY = 'sign-in'
const inputMaxValueLength = 100
const isViewPassword = ref(false)
const modalError = ref('')
const formData = ref({
  email:{
    value:'',
    error:'',
  },
  password:{
    value:'',
    error:'',
  },
})
function setErrorMessage(value:string, time:number = 3000){
  modalError.value = value
  setTimeout(() => {
    modalError.value = ''
  }, time);
}
function changeInputPassword(event:InputEvent){
  formData.value.password.value = event.target?.value
  formData.value.password.error = validPassword(formData.value.password.value)
}
function changeInputEmail(){
  formData.value.email.error = validEmail(formData.value.email.value)
}
function validEmail(value:string){
  if(!value.includes('@')){
    return 'Электронная почта должна содержать @'
  }
  if(value.length>inputMaxValueLength){
    return "Слишком большая длина"
  }
  return ''
}

function validPassword(value:string){
  if(value.length>inputMaxValueLength){
    return "Слишком большая длина"
  }
  return ''
}
const isDisabledBtn = computed<boolean>(()=> Boolean(formData.value.password.error || formData.value.email.error || !formData.value.password.value || !formData.value.email.value))

async function signIn(){
  const res = await useFetch(`${useRuntimeConfig().public.apiUrl}api/auth`,{
    method:"POST",
    body:{
      email:formData.value.email.value,
      password:formData.value.password.value
    }
  });
  if(res.data.value){
    const userToken = useCookie("user_token_nd");
    userToken.value = res.data.value.accessToken
    navigateTo('/dashboard')
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
footer{
  align-items: center;
  justify-content: space-between;
  gap: 40px;
}
.password-field :deep(label){
  width: 100%;
}
</style>
