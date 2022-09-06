<!--  -->
<template>
    <h2>item</h2>
</template>

<script setup lang='ts'>

const props = defineProps({
    showList: {
        type: Array,
        default: []
    }
})

console.log(props.showList);


</script>

<style lang='scss' scoped>

</style>