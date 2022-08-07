<template>
    <div class="content">
        <c-button icon="i-like" iconPosition="right" >设置</c-button>
        <c-button :loading="true" iconPosition="right" icon="i-like">加载中</c-button>

    <div>
        <c-group-button>
            <c-button icon="i-left">上一页</c-button>
            <c-button >设置</c-button>
            <c-button icon="i-right" iconPosition="right">下一页</c-button>
        </c-group-button>
    </div>

    </div>
    
</template>

<script setup>
import cButton from '../components/c-button.vue'
import cIcon from '../components/c-icon.vue'
import cGroupButton from '../components/c-group-button.vue'

</script>

<style scpoed>
.content{
    margin: 20px;
}
</style>
