<!--  -->
<template>
    <div class="row">
        <slot></slot>
    </div>
</template>

<script setup lang='ts'>
import { defineProps } from 'vue';
const props = defineProps({
    span: Number
})
</script>

<style lang='scss' scoped>
.row{
    display: flex;
}
</style>