<template>
    <div class="list">
        <el-col :span="24" class='actions-top'>
            <el-button type='danger' icon='delete'
                :disabled='batch_flag'
                @click='onDeleteUser(true)'>删除选中</el-button>
            
            <el-form :inline="true" :model='search_data' class="demo-form-inline">
                <el-form-item>
                    <el-input placeholder="姓名" 
                        v-model='search_data.username'
                        clear></el-input>
                </el-form-item>
                <el-form-item>
                    <el-input placeholder="邮箱" v-model='search_data.email'></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="default" @click='onSearch'>查询</el-button>
                </el-form-item>
            </el-form>
        </el-col>
        <el-table border style="width: 100%" align='center' 
            :data="user_list"
            @selection-change='onSelectionChange'>
            <el-table-column
                type="selection"
                width="55">
            </el-table-column>
            <el-table-column
                prop="username"
                label="姓名"
                align="center"
                width="150"
                :sortable="true">
            </el-table-column>
            <el-table-column
                prop="email"
                label="邮箱"
                align="center"
                :sortable="true">
            </el-table-column>
            <el-table-column
                prop="sex"
                label="性别"
                align="center"
                width="130"
                sortable="true"
                :formatter="formatterSex"
                :filters="sex_filters.list"
                :filter-method="filterSex"
                :filter-multiple="sex_filters.multiple">
            </el-table-column>
            <el-table-column
                prop="create_time"
                label="创建时间"
                align="center"
                width="180"
                :sortable="true">
            </el-table-column>
            <el-table-column
                prop="status"
                label="状态"
                align="center"
                width="130"
                :sortable="true"
                :formatter="formatterStatus"
                :filters="status_filters.list"
                :filter-method="filterStatus"
                :filter-multiple="status_filters.multiple">
            </el-table-column>
            <el-table-column
                label='住址' 
                type="expand">
                <template scope="props">
                    <p>住址: {{ props.row.address }}</p>
                </template>
            </el-table-column>
            <el-table-column
                label="操作"
                :width="$store.state.user.userinfo.pid==0 ? 200 : 136" 
                :context="_self">
                <template scope='scope'>
                    <el-button 
                        type="info" 
                        icon='view' 
                        size="mini"
                        @click='onSelectUser(scope.row)'></el-button>
                    <el-button 
                        type="info" 
                        icon='edit' 
                        size="mini"
                        @click='onEditUser(scope.row)'></el-button>
                    <el-button 
                        type="danger" 
                        icon='delete' 
                        size="mini"
                        @click='onDeleteUser(scope.row,scope.$index,user_list)'></el-button>

                    <!-- 不要试图强制打开这个操作，因为服务端做了验证，打开也没用n(*≧▽≦*)n -->
                    <el-button
                        v-if='$store.state.user.userinfo.pid==0'
                        size="mini"
                        :type="scope.row.status==1 ? 'danger' : 'info'" 
                        @click='onAccessUser(scope.row,scope.$index,user_list)'>{{scope.row.status==1 ? '禁用' : '启用'}}</el-button>
                </template>
            </el-table-column>
        </el-table>

        <el-dialog title="用户信息" v-model="dialog.show" size="tiny">
            <el-form style="margin:20px;width:60%;min-width:100%" 
                label-width="100px" 
                :model="dialog.user_info">
                <el-form-item class='edit-form' 
                    label="邮箱" 
                    prop='email'>
                    {{dialog.user_info.email}}
                </el-form-item>
                <el-form-item class='edit-form' 
                    label="用户名称" 
                    prop='username'>
                    {{dialog.user_info.username}}
                </el-form-item>
                <el-form-item label="性别">
                    {{dialog.user_info.sex==1 ? '男' : (dialog.user_info.sex==2 ? '女' : '未知')}}
                </el-form-item>
                <el-form-item label="生日">
                    {{dialog.user_info.birthday}}
                </el-form-item>
                <el-form-item class="edit-form" 
                    label='地址'>
                    {{dialog.user_info.address}}
                </el-form-item>
                <el-form-item label="状态">
                    {{dialog.user_info.status==1 ? '启用' : '禁用'}}
                </el-form-item>
                <el-form-item label="创建时间">
                    {{dialog.user_info.create_time}}
                </el-form-item>
                <el-form-item label="最后更新时间">
                    {{dialog.user_info.update_time}}
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialog.show = false">取 消</el-button>
                <el-button type="primary" @click="dialog.show = false">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
    import ListJs from './List.js';
    export default ListJs;
</script>
<style scoped>
    .demo-form-inline{
        display: inline-block;
        float: right;
    }
    .btm-action{
        margin-top: 20px;
        text-align: center;
    }
    .actions-top{
        height: 46px;
    }
    .pagination{
        display: inline-block;
    }
</style>
