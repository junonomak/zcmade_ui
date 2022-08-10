<template>
    <div class="content">
        <c-button icon="i-like" iconPosition="right">设置</c-button>
        <c-button :loading="true" iconPosition="right" icon="i-like">加载中</c-button>
        <div>
            <c-group-button>
                <c-button icon="i-left">上一页</c-button>
                <c-button >设置</c-button>
                <c-button icon="i-right" iconPosition="right">下一页</c-button>
            </c-group-button>
        </div>
        <div style="margin-top: 30px">
            <c-input modelValue="一号" disabled></c-input>
            <c-input modelValue="二号" readonly></c-input>
            <c-input modelValue="三号" error="用户名格式错误"></c-input>
            <c-input @input="changeValue" modelValue="我绑定了@input事件"></c-input>
            <c-input v-model="sayhi"></c-input>
            <c-input modelValue="五号"></c-input>
            <h2>{{sayhi}}</h2>
        </div>
    </div>
    
</template>

<script setup>
import {ref} from 'vue'

const sayhi = ref('我是v-model')
setInterval(()=>{
    sayhi.value += '1'
},1000)


const changeValue = (e) => {
    console.log(e);
}
</script>

<style scpoed>
.content{
    margin: 20px;
}
</style>
