<!--  -->
<template>
    <div class="col" :class="[`col-${span}`]">
        <slot></slot>
    </div>
</template>

<script setup lang='ts'>
import { defineProps } from 'vue';
const props = defineProps({
    span: {
        type: [Number, String] 
    }
})
</script>

<style lang='scss' scoped>
.col{
    height: 100px;
    background-color: blue;
    width: 50%;
    border: 1px solid red;

    $class: col-;
    @for $n from 1 through 24 {
        &.#{$class}#{$n} {
            width: ($n/24) * 100%;
        }
    }
}

</style>