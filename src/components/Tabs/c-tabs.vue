<!--  -->
<template>
    <div class="tabs">
        <slot></slot>
    </div>
</template>

<script setup lang='ts'>

const props = defineProps({
    selected: {
        type: String,
        required: true
    }
})

</script>

<style lang='scss' scoped>

</style>