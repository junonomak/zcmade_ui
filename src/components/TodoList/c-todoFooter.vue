<!--  -->
<template>
    <div class="footer">
        <span>全选</span>
        <input type="checkbox" v-model="allSelected" @click="allSelectedClick"/>
        <button style="float: right;" @click="deleteListItem">删除</button>
    </div>
</template>

<script setup lang='ts'>
import { ref, PropType } from 'vue'
import { ShowList } from './todoList_T';

const props = defineProps({
    showList: {
        type: Array as PropType<ShowList[]>,
        default: []
    }
})

const allSelected = ref(false)
const allSelectedClick = () => {
    allSelected.value = !allSelected.value
    props.showList.forEach(item => {
        item.isSelected = allSelected.value
    })
}
const deleteListItem = () => {
    for(let i = 0;i < props.showList.length; i++){
        if (props.showList[i].isSelected === true) {
            props.showList.splice(i, 1)
            i--
        }
    } 
    console.log(props.showList);
    allSelected.value = false
}
</script>

<style lang='scss' scoped>

</style>