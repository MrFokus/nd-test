<template>
    <div class="flex user-menu">
        <p class="user-email text-small color-white">{{ user.email }}</p>
        <button @click="isOpenMenu = !isOpenMenu" class="clear pointer circle profile-img">
            <UserIcon/>
        </button>
        <Popup v-if="isOpenMenu" v-on-click-outside="()=>isOpenMenu=false" class="popup" :list="popupList"/>
    </div>
</template>

<script setup lang="ts">
import UserIcon from "~/assets/img/user.svg?component"
import Popup from "../UI/Popup.vue";
import { vOnClickOutside } from '@vueuse/components'
import logout from "~/helpers/logout";

const isOpenMenu = ref(false)
const props = defineProps<{
    user:{
        id:number,
        email:string
    }
}>()
const popupList = [{
    name:"Выйти",
    fn:logout
}]
</script>

<style scoped lang="scss">
.profile-img{
    background-color: $dark-middle;
    border-radius: 100%;
}
.user-menu{
    align-items: center;
    gap: 12px;
    position: relative;
}
@media (max-width:767px) {
    .user-email{
        display: none;
    }
}

</style>