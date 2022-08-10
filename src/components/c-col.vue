<!--  -->
<template>
    <div class="col" 
    :class="[span && `col-${span}`, offset && `offset-${offset}`]"
    :style="gutter && 'padding: 0px ' + gutter/2 + 'px'">
        <div class="box">
            <slot></slot>
        </div>
    </div>
</template>

<script setup lang='ts'>
import { defineProps, inject, ref, computed} from 'vue';
const props = defineProps({
    span: {
        type: [Number, String] 
    },
    offset: {
        type: [Number, String] 
    }
})

const gutter:any = inject('gutter')
console.log(gutter);

const gutterStyle = computed(() => {
    return 'padding: 0px ' + gutter/2 + 'px'
})
</script>

<style lang='scss' scoped>
.col{
    height: 100px;
    width: 50%;

    $class: col-;
    @for $n from 1 through 24 {
        &.#{$class}#{$n} {
            width: ($n/24) * 100%;
        }
    }
    $class: offset-;
    @for $n from 1 through 24 {
        &.#{$class}#{$n} {
            margin-left: ($n/24) * 100%;
        }
    }
}
.box{
    border: 1px solid black;
}

</style>