export default function (injection) {
    Object.assign(injection, {
        sidebar: {
            active: null,
            lists: {
                setting: [
                    {
                        children: [
                            {
                                path: '/user',
                                title: '用户管理',
                            },
                            {
                                path: '/role',
                                title: '角色管理',
                            },
                            {
                                path: '/permission',
                                title: '权限管理',
                            },
                        ],
                        icon: 'ios-cog',
                        title: "权限访问控制",
                    },
                    {
                        children: [
                            {
                                path: '/config/cache',
                                title: "重置设置缓存",
                            },
                            {
                                path: '/route/cache',
                                title: "重置路由缓存",
                            },
                            {
                                path: '/opcache',
                                title: "重置Opcache",
                            },
                            {
                                path: '/reflect',
                                title: "类映射重载",
                            },
                        ],
                        icon: 'ios-paper',
                        title: "系统命令",
                    },
                    {
                        children: [
                            {
                                path: '/module',
                                title: "模块配置",
                            },
                            {
                                path: '/extension',
                                title: "扩展配置",
                            },
                            {
                                path: '/template',
                                title: "模板配置",
                            },
                            {
                                path: '/expand',
                                title: "拓展配置",
                            },
                        ],
                        icon: 'plus',
                        title: "应用管理",
                    },
                    {
                        children: [],
                        icon: 'plus',
                        title: "全局插件",
                    },
                    {
                        children: [
                            // {
                            //     path: '/navigation',
                            //     title: '导航管理',
                            // },
                            {
                                path: '/mail',
                                title: "邮件设置",
                            },
                            {
                                path: '/debug',
                                title: "调试工具",
                            },
                        ],
                        icon: 'stats-bars',
                        title: "系统组件",
                    },
                ],
            },
        },
    });
}