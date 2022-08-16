<template>
    <div class="contents">

        <div class="dialog-demo">
            <c-button icon="like" iconPosition="right" @click="dialogClick">触发dialog的按钮1</c-button><br>
            <c-button icon="like" iconPosition="right" @click="dialogClick2">包含backgroundCloseAble的按钮2</c-button><br>
            <c-button icon="like" iconPosition="right" @click="dialogClick3">包含确定和取消函数的按钮</c-button>
            <c-dialog v-model:visible="dialogVisible">
                <h2>我是内容</h2>
            </c-dialog>
            <c-dialog v-model:visible="dialogVisible2" backgroundCloseAble>
                <h2>我包含backgroundCloseAble</h2>
            </c-dialog>
            <c-dialog v-model:visible="dialogVisible3" :confirm="onConfirm" :cancel="onCancel">
                <h2>包含确定和取消函数</h2>
            </c-dialog>
        </div>

        <div class="popover-demo" style="margin-bottom: 20px">
            <!-- <c-popover v-model:visible="pvisibleVlaue"></c-popover> -->
        </div>

        <div class="switch-demo" style="margin-bottom: 20px">
            <c-switch v-model:switchValue="switchValue" ></c-switch>
            <c-switch v-model:switchValue="switchValue2" disable></c-switch>
        </div>

        <div class="card-demo" style="margin-bottom:20px">
            <c-card title="我是一个标题">我是第一个的内容</c-card>
            <c-card title="我是hover-card" hoverable>第二个的内容</c-card>
            <c-card title="我是shadow-card" shadow>第三个的内容</c-card>
        </div>

        <div class="tabs-demo">
                <!-- 这边等同于:title="pageTitle" @update:title="pageTitle = $event" -->
                <!-- 子组件可以接受v-model传入的值，并通过emits('update:selected')传出 -->
            <c-tabs v-model:selected="selectedValue">
                <c-tabs-head>
                    <c-tabs-items name="onestar" :height="200">
                        <c-button @click="onlick">我是绑定了toast的button</c-button><br>
                        <c-button icon="like" iconPosition="right">设置</c-button>
                        <c-button :loading="true" iconPosition="right" icon="like">加载中</c-button>
                        <div>
                            <c-group-button>
                                <c-button icon="left">上一页</c-button>
                                <c-button icon="setting">设置</c-button>
                                <c-button icon="right" iconPosition="right">下一页</c-button>
                            </c-group-button>
                        </div>
                    </c-tabs-items>
                    <c-tabs-items name="1970s" :height="300">
                        我2
                    </c-tabs-items>
                    <c-tabs-items name="jackstar" disable>
                        我是内容3
                    </c-tabs-items>
                </c-tabs-head>
            </c-tabs>
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
import { Toast } from '../components/Toast/toast.ts'
import {ref, watch} from 'vue'

const sayhi = ref('我是v-model')

const onlick = () => {
    Toast({visible: true, text: '我是一个toast点击事件', showClose: true, center: true, delay: 3})
}

const changeValue = (e) => {
    console.log(e);
}
const selectedValue = ref('onestar')

const switchValue = ref(false)
const switchValue2 = ref(false)


const dialogVisible = ref(false)
const dialogClick = () => {
    dialogVisible.value = !dialogVisible.value
}
const dialogVisible2 = ref(false)
const dialogClick2 = () => {
    dialogVisible2.value = !dialogVisible2.value
}
const dialogVisible3 = ref(false)
const dialogClick3 = () => {
    dialogVisible3.value = !dialogVisible3.value
}
const onConfirm = () => {
    console.log('我是确定我被触发了');
    return false
}
const onCancel = () => {
    console.log('我是取消我被触发了');
}
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
</style>
