<!--  -->
<template>
    <input type="text" v-model="inputValue">
    <button @click="addListItem" style="float: right;">添加</button>
</template>

<script setup lang='ts'>
import { PropType, ref } from 'vue' 

import { ShowList } from './todoList_T'

const props = defineProps({
    showList: {
        type: Array as PropType<ShowList[]>,
        default: []
    }
})
const inputValue = ref('')

const emits = defineEmits(['addListItem'])
const addListItem = () => {
    emits('addListItem', inputValue.value)
}
</script>

<style lang='scss' scoped>

</style>