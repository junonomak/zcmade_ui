<!--  -->
<template>
    <div class="todoList">
        <c-todo-header v-model:showList="data.showList" @addListItem="addListItem"></c-todo-header>
        <c-todo-content v-model:showList="data.showList"></c-todo-content>
        <c-todo-footer v-model:showList="data.showList"></c-todo-footer>
    </div>

</template>

<script setup lang='ts'>
import cTodoContent from './c-todoContent.vue'
import cTodoHeader from './c-todoHeader.vue'
import cTodoFooter from './c-todoFooter.vue'

import { ref, watch } from 'vue'

import { ShowList } from './todoList_T'

const data = ref<{showList: ShowList[]}>({
    showList: [
        {id: 1, message: 'a', isSelected: false},
        {id: 2, message: 'b', isSelected: true},
        {id: 3, message: 'c', isSelected: false},
        {id: 4, message: 'd', isSelected: false}
    ]
})


const addListItem = (value: string) => {
    data.value.showList.push({
        id: data.value.showList.length + 2,
        message: value,
        isSelected: false
    })
}
</script>

<style lang='scss' scoped>
.todoList{
    width: 200px;
}
</style>