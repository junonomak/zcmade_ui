<template>
    <div class="contents">

        <div class="tabs-demo">
                <!-- 这边等同于:title="pageTitle" @update:title="pageTitle = $event" -->
                <!-- 子组件可以接受v-model传入的值，并通过emits('update:selected')传出 -->
            <c-tabs v-model:selected="selectedValue">
                <c-tabs-head>
                    <c-tabs-items name="onestar" :height="500">
                        我是内容1
                    </c-tabs-items>
                    <c-tabs-items name="1970s" :height="300">
                        我2
                    </c-tabs-items>
                    <c-tabs-items name="jackstar">
                        我是内容3
                    </c-tabs-items>
                    <c-tabs-items name="啊这" disable>
                        4
                    </c-tabs-items>
                </c-tabs-head>
            </c-tabs>
        </div>

        <div class="toast-demo">
            <c-button @click="onlick">我是绑定了toast的button</c-button>
        </div>

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
        <div class="row" style="border: 1px solid red;">
            <c-row gutter="20">
                <c-col span="2">1</c-col>
                <c-col span="14">2</c-col>
                <c-col span="8">3</c-col>
            </c-row> 

            <c-row>
                <c-col :phone="{span:18}">1</c-col>
                <c-col :phone="{span:2, offset:0}">2</c-col>
                <c-col :phone="{span:2, offset:0}">3</c-col>
                <c-col :phone="{span:2, offset:0}">4</c-col>
            </c-row>
        </div>
        <div class="layoutTest">
            <c-layout style="height: 30vh; margin-top: 20px">
                <c-header class="ldemo"></c-header>
                <c-content class="ldemo"></c-content>
                <c-footer class="ldemo"></c-footer>
            </c-layout>

            <c-layout style="margin-top: 20px">
                <c-header></c-header>
                <c-layout style="height: 100px">
                    <c-sider></c-sider>
                    <c-content></c-content>
                </c-layout>
                <c-footer></c-footer>
            </c-layout>

            <c-layout style="margin-top: 20px">
                <c-header></c-header>
                <c-layout style="height: 100px">
                    <c-content></c-content>
                    <c-sider></c-sider>
                </c-layout>
                <c-footer></c-footer>
            </c-layout>

            <c-layout style="height: 30vh;margin-top: 20px">
                <c-sider></c-sider>
                <c-layout>
                    <c-header></c-header>
                    <c-content></c-content>
                    <c-footer></c-footer>
                </c-layout>
            </c-layout>
        </div>


    </div>
    
</template>

<script setup scoped>
import {ref} from 'vue'
import { Toast } from '../components/Toast/toast.ts'

const sayhi = ref('我是v-model')

const onlick = () => {
    Toast({visible: true, text: '我是一个toast点击事件', showClose: true, center: true, delay: 3})
}


const changeValue = (e) => {
    console.log(e);
}

const selectedValue = ref('onestar')
</script>

<style scpoed>
.contents{
    margin: 20px;
}
.layoutTest{
    margin-top: 30px;
}
.ldemo{
    min-height: 50px;
}
.toast-demo{
    margin-top: 30px;
}
</style>
