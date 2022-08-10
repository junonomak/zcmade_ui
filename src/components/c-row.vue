<!--  -->
<template>
    <div class="row" :style="gutter && gutterStyle">
        <slot></slot>
    </div>
</template>

<script setup lang='ts'>
import { defineProps, provide, ref, computed} from 'vue';
const props = defineProps({ 
    gutter: null
})

const init = () => {
    
}
init()

const gutterStyle = computed(() => {
    return 'margin: 0px -' + props.gutter/2 + 'px'
})

const fatherGutter = ref(props.gutter)
// console.log(fatherGutter.value);
 provide('gutter', fatherGutter);


</script>

<style lang='scss' scoped>
.row{
    display: flex;
}
</style>