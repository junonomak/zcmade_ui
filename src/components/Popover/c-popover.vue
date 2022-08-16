<!--  -->
<template>
    <div class="popover">
        <h2 @click="a" v-show="visiable">我是popover</h2>
    </div>
</template>

<script setup lang='ts'>
const props = defineProps({
    visiable: {
        type: Boolean,
        default: false
    }
})

const emits = defineEmits(["updata:visiable"])
const a = () => {
    emits("updata:visiable", false)
    console.log(props.visiable);
    
}



</script>

<style lang='scss' scoped>

</style>