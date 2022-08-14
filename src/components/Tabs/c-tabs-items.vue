<!--  -->
<template>
    <div>
        <h2>{{name}}</h2>
    </div>
</template>

<script setup>

const props = defineProps({
    name: {
        type: String,
        required: true
    }
})

// const emits = defineEmits()
// const init = () => {
//     console.log('我要传事件出去了！');
//     emits('updata:selected')
// }
// console.log(props.selected);

</script>

<style lang='scss' scoped>

</style>