<template>
  <ModalBase :open-query="OPEN_QUERY">
    <ModalPrimary
      class="modal-primary"
      name-modal="Добавление заметки"
      :error="modalError"
      :open-query="OPEN_QUERY"
    >
      <form @submit.prevent="addNoteRequest" class="flex-col">
        <section class="fields flex-col">
          <FormInput
            :invalid-msg="formData.title.error"
            :current-symbols="formData.title.value.length"
            :max-symbols="inputMaxValueLength"
            lable-name="Название заметки"
          >
            <input
              v-model="formData.title.value"
              @input="
                ($event) =>
                  (formData.title.error = validText(
                    $event.target?.value,
                    inputMaxValueLength
                  ))
              "
              type="text"
              class="primary"
              placeholder="Введите значение"
            />
          </FormInput>
          <FormInput
            :invalid-msg="formData.content.error"
            :current-symbols="formData.content.value.length"
            :max-symbols="textareaMaxValueLength"
            class="description-field"
            lable-name="Текст заметки"
          >
            <textarea
              @input="
                ($event) =>
                  (formData.content.error = validText(
                    $event.target.value,
                    textareaMaxValueLength
                  ))
              "
              v-model="formData.content.value"
              rows="7"
              placeholder="Введите текст"
              class="primary"
            ></textarea>
          </FormInput>
        </section>
        <footer class="flex">
          <button :disabled="isDisabledBtn" class="primary">
            <SignInIcon />Добавить
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
import { removeQueryParamUrl } from "~/helpers/route";
import { addNote } from "~/api/note";
import { useNotesStore } from "~/store/notes";

const OPEN_QUERY = "add-note";
const inputMaxValueLength = 64;
const textareaMaxValueLength = 255;
const modalError = ref("");
const formData = ref({
  title: {
    value: "",
    error: "",
  },
  content: {
    value: "",
    error: "",
  },
});

const isDisabledBtn = computed<boolean>(() =>
  Boolean(
    formData.value.title.error ||
      formData.value.content.error ||
      !formData.value.title.value ||
      !formData.value.content.value
  )
);

watch(
  () => useRoute().query,
  () => {
    formData.value = {
      title: {
        value: "",
        error: "",
      },
      content: {
        value: "",
        error: "",
      },
    };
  }
);

function setErrorMessage(value: string, time: number = 3000) {
  modalError.value = value;
  setTimeout(() => {
    modalError.value = "";
  }, time);
}

function validText(value: string, max: number) {
  if (value.length > max) {
    return "Слишком большая длина";
  }
  return "";
}

async function addNoteRequest() {
  const res = await addNote(
    formData.value.title.value,
    formData.value.content.value
  );
  console.log(res);

  if (res.data.value) {
    alert("Заметка успешно создана!");
    useNotesStore().getNotesRequestStore();
    removeQueryParamUrl(OPEN_QUERY);
  }
  if (res.error.value) {
    setErrorMessage(res.error.value.data.message[0]);
  }
}
</script>

<style scoped lang="scss">
footer {
  justify-content: flex-end;
}
@media (max-width: 450px) {
  footer {
    flex-direction: column-reverse;
    button.primary {
      width: 100%;
    }
  }
}
</style>
