<!--  -->
<template>
    <div class="content">
            <div v-for="item, index in showList" :key="item.id">
                <input type="checkbox" v-model="item.isSelected" @click="checkBoxClick(index)"/>
                <span>{{item.message}}</span>
                <button @click="deleteListItem(index)" style="float: right;">删除</button>
            </div>
    </div>
    <!-- <c-todo-item :showList="showList"></c-todo-item> -->
</template>

<script setup lang='ts'>
import cTodoItem from './c-todoItem.vue'
import { PropType, watch } from 'vue' 
import { ShowList } from './todoList_T'

const props = defineProps({
    showList: {
        type: Array as PropType<ShowList[]>,
        default: []
    }
})

const deleteListItem = (index: number) => {
    console.log(index);
    props.showList.splice(index, 1)
}

const checkBoxClick = (index: number) => {
    props.showList[index].isSelected = !props.showList[index].isSelected
    console.log(props.showList[index].isSelected);
}

// const emits = defineEmits(['updata:showList'])
// watch(
//     () => props.showList,
//     () => {
//         emits('updata:showList', props.showList)
//     },
//     {deep: true}
// ) 
</script>

<style lang='scss' scoped>

</style>