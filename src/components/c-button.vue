<template>
    <button class="c-button" :class="{[`icon-${iconPosition}`]: true}">
        <i :class="`cmade-icon ${icon}`"></i>
            <slot></slot>
    </button>
</template>

<script setup>
import {defineProps} from 'vue'
const props = defineProps({
    icon: String,
    iconPosition: String
})

console.log(props.iconPosition);

</script>

<style scpoed>
    :root{
        --button-height: 32px;
        --font-size: 14px;
        --button-bg: white;
        --button-active-bg: #eee;
        --border-radius: 4px;
        --color: #999;
        --boder-color-hover: #666;
    }
    .c-button{
        height: var(--button-height);
        font-size: var(--font-size);
        padding: 0 1em;
        font: inherit;
        border: 1px solid var(--color);
        border-radius: var(--border-radius); 
        background-color: var(--button-bg);
    }
    .c-button:hover{
        border-color: var(--boder-color-hover);
    }
    .c-button:active{
        background-color: var(--button-active-bg);
    }
    .c-button:focus{
        outline: none;
    }
    .cmade-icon{
        margin-right: .1em;
    }
    .icon-right{
        display: inline-flex;
        justify-content: center;
        align-items: center;
    }
    .icon-right > .cmade-icon{
        order: 2;
        margin-left: .1em;
        margin-right: 0 ! important;
    }




</style>
