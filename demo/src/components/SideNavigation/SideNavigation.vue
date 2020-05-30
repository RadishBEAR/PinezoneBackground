<template>
    <div id="sideNav">
        <el-collapse
                :accordion="accordion"
                style="margin-left: 20px;margin-right: 20px;padding-top: 30px"
                v-model="activeNames">
            <el-collapse-item
                    v-for="(functionModule,index) in this.functionModuleNames"
                    :key="index"
                    :name=index
                    :title="functionModule.mainModuleName"
            >
                <div
                        v-for="(subFunctionModule,index) in functionModule.subFunctionModule"
                        :key="index"
                        @click="selectFunctionModule(subFunctionModule)"
                        class="subFunctionModule"
                >
                    {{subFunctionModule}}
                </div>
            </el-collapse-item>
        </el-collapse>
    </div>
</template>

<script>
    import { EventBus } from '../../tools/EventBus'
    export default {
        name: "SideNavigation",
        data(){
            return{
                accordion:false, // 这是手风琴开关，设为true能打开手风琴模式
                activeNames: [0,1,2],
                functionModuleNames:[
                    {
                        mainModuleName:'系统操作',
                        subFunctionModule:['系统信息','公告系统']
                    },
                    {
                        mainModuleName:'数据显示',
                        subFunctionModule:['文章数据','用户数据']
                    },
                    {
                        mainModuleName:'信息列表',
                        subFunctionModule:['用户列表','文章列表']
                    }
                ]
            }
        },
        methods:{
            selectFunctionModule(name){
                EventBus.$emit('selectFunctionModule',name);
            }
        }
    }
</script>

<style scoped>
#sideNav{
    width: 100%;
    height: 100%;
    background-color: #f5f5f7;
}
#sideNav>>>.el-collapse-item__header{
    font-size: 16px;
    font-weight: 500;
    background-color: #f5f5f7;
    color: #8f99a5;
}
#sideNav>>>.el-collapse-item__header:hover{
    color: #333333;
}
#sideNav>>>.el-collapse-item__content{
    padding-left: 20px;
    cursor: default;
    text-align: left;
    font-size: 16px;
    font-weight: 500;
    background-color: #f5f5f7;
    color: #8f99a5;
}
    .subFunctionModule:hover{
        color: #333333;
    }
</style>
