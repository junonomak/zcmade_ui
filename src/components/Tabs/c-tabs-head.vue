<!--  -->
<template>
    <div @click="a">
        <slot></slot>
    </div>
</template>

<script setup>
import { ref } from 'vue'
const props = defineProps({
    selected: {
        type: String,
        required: true
    }
})

const emits = defineEmits()
const b = ref('aaa')
const a = () => {
    console.log('我要传事件出去了！');
    emits('update:selected', b.value)
    console.log(props.selected);
}

</script>

<style lang='scss' scoped>

</style>