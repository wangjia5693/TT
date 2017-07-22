<template v-loading.fullscreen.lock="$store.state.global.ajax_loading">
    <div class="layout" :class="{'layout-hide-text': spanLeft < 5}">
        <div class="layout-left">
            <i-menu :accordion="true" theme="dark" width="auto">
                <div class="layout-logo-left">Sunshine</div>
                <template v-for="(item, key) in sidebar">
                    <submenu :name="'sidebar-' + key" v-if="item.children">
                        <template slot="title">
                            <icon :type="item.icon"></icon>
                            {{ item.title }}
                        </template>
                        <menu-item :name="'sidebar-' + key + '-' + index" v-for="(sub, index) in item.children"
                                   :key="index">
                            <router-link :to="sub.path">{{ sub.title }}</router-link>
                        </menu-item>
                    </submenu>
                    <menu-item :name="'sidebar-' + key" v-else>
                        <router-link :to="item.path">
                            <icon :type="item.icon"></icon>
                            {{ item.title }}
                        </router-link>
                    </menu-item>
                </template>
            </i-menu>
        </div>
        <div class="layout-header">
            <i-button type="text" @click.native="toggleClick">
                <icon type="navicon" size="32"></icon>
            </i-button>
            <i-menu mode="horizontal" theme="light">
                <menu-item :name="'nav-' + key" v-for="(nav, key) in navigation" :key="key">
                    <router-link :to="nav.path">
                        <icon :type="nav.icon"></icon>
                        {{ nav.title }}
                    </router-link>
                </menu-item>
            </i-menu>
            <i-menu mode="horizontal" theme="light">
                <submenu name="right-2">
                    <template slot="title">
                        <icon type="person"></icon>
                        {{this.$store.state.user.userinfo.name}}
                    </template>
                    <menu-item name="right-2-1" @click.native="logout">退出</menu-item>
                </submenu>
            </i-menu>
        </div>
        <div class="layout-content">
            <div class="layout-content-main">
                <router-view></router-view>
            </div>
            <div class="layout-copy">2017 &copy; Sunshine</div>
        </div>
    </div>
</template>
<script>

import injection from '../../injection';

    export default {
        name: 'home',
        computed: {
            iconSize() {
                return this.spanLeft === 5 ? 14 : 24;
            },
        },
        created() {
            Object.assign(injection.sidebar, {
                active: this.active('setting'),
            });
        },
        data() {
            return {
                navigation: injection.navigation,
                sidebar: [],
                spanLeft: 5,
                spanRight: 19,
                url: window.url,
            };
        },
        methods: {
            active(key) {
                if (injection.sidebar.lists[key]) {
                    this.sidebar = injection.sidebar.lists[key];
                }
            },
            logout() {
                window.localStorage.clear();
                this.$router.push('/login');
            },
            toggleClick() {
                if (this.spanLeft === 5) {
                    this.spanLeft = 2;
                    this.spanRight = 22;
                } else {
                    this.spanLeft = 5;
                    this.spanRight = 19;
                }
            },
        },
    }
</script>
<style scoped>
    html,
    body {
        background: #f5f7f9;
    }
    .layout {
        border-radius: 4px;
        position: relative;
        width: 100%;
    }
    .layout > .layout-left {
        background: #464c5b;
        height: 100%;
        left: 0;
        position: fixed;
        top: 0;
        width: 300px;
        z-index: 11;
    }
    .layout > .layout-left > .ivu-menu > .layout-logo-left {
        background: #5b6270;
        border-radius: 3px;
        color: #fff;
        height: 30px;
        line-height: 30px;
        margin: 15px auto;
        text-align: center;
        width: 90%;
    }
    .layout > .layout-left > .ivu-menu .ivu-menu-item {
        padding: 0;
    }
    .layout > .layout-left > .ivu-menu .ivu-menu-item > a {
        color: #9ea7b4;
        display: block;
        padding: 14px 24px;
    }
    .layout > .layout-left > .ivu-menu .ivu-menu-item > a > i {
        margin-right: 8px;
    }
    .layout > .layout-left > .ivu-menu .ivu-menu-submenu .ivu-menu-item.ivu-menu-item-active > a,
    .layout > .layout-left > .ivu-menu .ivu-menu-submenu .ivu-menu-item.ivu-menu-item-active:hover > a {
        color: #fff;
    }
    .layout > .layout-left > .ivu-menu .ivu-menu-submenu .ivu-menu-item > a {
        padding-left: 47px;
    }
    .layout > .layout-header {
        background: #fff;
        box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
        height: 60px;
        left: 0;
        padding-left: 300px;
        position: fixed;
        top: 0;
        width: 100%;
        z-index: 10;
    }
    .layout > .layout-header > button.ivu-btn {
        float: left;
        margin: 6.5px 0;
    }
    .layout > .layout-header > .ivu-menu {
        float: left;
    }
    .layout > .layout-header > .ivu-menu:last-child {
        float: right;
    }
    .layout > .layout-header > .ivu-menu > .ivu-menu-item {
        border-color: #fff;
        padding: 0;
    }
    .layout > .layout-header > .ivu-menu > .ivu-menu-item.ivu-menu-item-active,
    .layout > .layout-header > .ivu-menu > .ivu-menu-item:hover {
        border-bottom: 2px solid #3399ff;
    }
    .layout > .layout-header > .ivu-menu > .ivu-menu-item.ivu-menu-item-active > a,
    .layout > .layout-header > .ivu-menu > .ivu-menu-item:hover > a {
        color: #3399ff;
    }
    .layout > .layout-header > .ivu-menu > .ivu-menu-item > a {
        color: #657180;
        display: block;
        padding: 0 20px;
    }
    .layout > .layout-header > .ivu-menu > .ivu-menu-submenu {
        border-color: #fff;
    }
    .layout > .layout-content {
        margin-top: 60px;
        margin-left: 300px;
        padding: 20px;
    }
    .layout > .layout-content > .layout-copy {
        color: #9ea7b4;
        text-align: center;
        padding: 10px 0 20px;
    }
    .layout > .layout-content > .layout-content-main {
        margin-bottom: 20px;
    }

</style>
