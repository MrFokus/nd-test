<template>
    <div class="ui-kit flex-col">
        <section class="buttons flex-col">
            <button class="primary"><SignInIcon class="sign-in-icon"/> Вход</button>
            <button disabled class="primary"><SignInIcon class="sign-in-icon"/> Вход</button>
            <button class="primary close"><CloseIcon class="close-icon"/></button>
            <button disabled class="primary close"><CloseIcon class="close-icon"/></button>
        </section>
        <input type="text" placeholder="Введите значение" class="primary">
        <textarea class="primary" placeholder="Введите значение"></textarea>
    </div>
</template>

<script setup lang="ts">
import SignInIcon from "@/assets/img/sign-in.svg?component";
import CloseIcon from "@/assets/img/close.svg?component";
</script>

<style scoped lang="scss">
.ui-kit{
    gap: 16px;
}
.sign-in-icon{
    width: 32px;
}
.close-icon{
    width: 16px;
}
.close{
    aspect-ratio: 1;
}
.buttons{
    gap: 8px;
}
input,textarea{
    width: 680px;
}
</style>