<!--  -->
<template>
    <div>
        <slot></slot>
        {{name}}
    </div>
</template>

<script setup>
const props = defineProps({
    name: {
        type: String,
        required: true
    }
})
</script>

<style lang='scss' scoped>

</style>