<template>
    <div class="task">
        <header>
            <p class="h4">Заголовок</p>
        </header>
        <section class="task-content text-normal">
            Не следует, однако, забывать, что базовый вектор развития предопределяет высокую востребованность позиций, занимаемых участниками в отношении поставленных задач. Вот вам яркий пример современных тенденций — повышение уровня гражданского сознания требует анализа переосмысления внешнеэкономических политик.        </section>
        <footer>
            <button class="clear primary text-normal delete-task">
                <CloseIcon/>
                Удалить
            </button>
        </footer>
    </div>
</template>

<script setup lang="ts">
import CloseIcon from "~/assets/img/close.svg?component"

</script>

<style scoped lang="scss">
.task{
    background-color: $green-light;
    border-radius: 12px;
    position: relative;
    box-shadow: 0px 15px 15px -10px rgba(0, 0, 0, 0.40);

    &::before{
        content: '';
        position: absolute;
        right: 0;
        top: 0;
        background-image: url('~/assets/img/task-corner.svg');
        background-position: center;
        background-size: 110%;
        background-repeat: no-repeat;
        background-color: $dark;
        width: 20px;
        aspect-ratio: 1;
    }
}
header{
    padding:20px 28px;
    border-bottom: 1px $green solid;
}
footer{
    padding: 8px;
    border-top: 1px $green solid;
    display: flex;
    justify-content: flex-end;
}
.task-content{
    text-overflow: ellipsis;
    overflow: hidden;
    -webkit-line-clamp: 9;
    padding: 28px;
    max-width: 100%;
    max-height: 288px;
    -webkit-box-orient: vertical;
    box-orient: vertical;
    display: -webkit-box;
}
</style>