<template>
    <button class="c-button">默认</button>
</template>

<script setup>

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
</style>
