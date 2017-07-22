/**
 * 可不在此文件内添加路由
 * 引入需要的模块
 */
import {
    ConfigCache,
    Opcache,
    Reflect,
    RouteCache,
    User,
    Auth,
    Role,
    // Crontab,
    // Control,
    // Main,
    Login,
    Home,
    // NotFound,
    // Content,
    // Material,
    // Modules,
    // CustermHelper
    Example
} from '../components/';

/**
 * 定义路由
 */

export default {

    routes : [
        {
            path: '/',
            redirect: to => {
                return 'main';
            }
        },
        {
            path: '/login',
            component: Login
        },
        {
            path: '/main',
            component:Home ,
            children: [{
                path: '',
                component: Example
            }]
        },
        {
            path: '/user',
            component:Home ,
            children: [{
                path: '',
                component: User
            }]
        },
        {
            path: '/role',
            component:Home ,
            children: [{
                path: '',
                component: Role
            }]
        },
        {
            path: '/permission',
            component:Home ,
            children: [{
                path: '',
                component: Auth
            }]
        },
        {
            path: '/config/cache',
            component:Home ,
            children: [{
                path: '',
                component: ConfigCache
            }]
        },
        {
            path: '/route/cache',
            component:Home ,
            children: [{
                path: '',
                component: RouteCache
            }]
        },
        {
            path: '/opcache',
            component:Home ,
            children: [{
                path: '',
                component: Opcache
            }]
        },
        {
            path: '/reflect',
            component:Home ,
            children: [{
                path: '',
                component: Reflect
            }]
        },
      //   {
      //       path: '/customer/helper',
      //       component: CustermHelper
      //   },
      //   {
      //     path: '/Control',
      //     component:Home ,
      //     children: [{
      //       path: '',
      //       component: Control
      //     }]
      //   },
      // {
      //   path: '/Status',
      //   component:Home,
      //   children: [{
      //           path: '',
      //           component: Status
      //       }]
      // },
      //   {
      //       path: '/404',
      //       component: Home,
      //       hidden: true,
      //       children: [{
      //           path: '',
      //           component: NotFound
      //       }]
      //   },
      //   {
      //       path: '/showdata',
      //       component: Home,
      //       hidden: true,
      //       children: [{
      //           path: '',
      //           component: Modules.showdata
      //       },
      //       {
      //       path: '/analysis',
      //       name: 'analysis',
      //       component: Modules.Analysis
      //   },{
      //       path: '/qtydata',
      //       name: 'Qtydata',
      //       component: Modules.Qtydata
      //   },
      //
      //
      //       ]
      //   },
      //
      //   {
      //     path: '/material',
      //     component:Home,
      //     children:[{
      //       path:'',
      //       component: Material
      //     }]
      //   },
      //   {
      //       path: '/database',
      //       icon: 'inbox',
      //       component: Home,
      //       children: [
      //       {
      //           hidden: true,
      //           path: '',
      //           redirect: to => {
      //               return 'top'
      //           }
      //       },
      //         {
      //           path: 'top',
      //           icon: 'inbox',
      //           component: Content,
      //           children: [
      //           {
      //               hidden: true,
      //               path: '',
      //               redirect: to => {
      //                   return 'list'
      //               }
      //           }, {
      //               path: 'list',
      //               name: 'TOP100',
      //               icon: 'reorder',
      //               component: Modules.Database.Top.List
      //           },
      //           {
      //               path: 'else',
      //               name: 'productList',
      //               icon: 'reorder',
      //               component: Modules.Database.Top.Else
      //           },
      //           {
      //               path: 'edit',
      //               name: '编辑文章',
      //               icon: 'edit',
      //               component: Modules.Database.Top.Edit
      //           }, {
      //               path: 'detail/:specode',
      //               name: 'top_detail',
      //               icon: 'detail',
      //               component: Modules.Database.Top.Detail
      //           }
      //           ]
      //       },
      //       ]
      //   },
      //   {
      //       path: '/Crontab',
      //       component: Home,
      //       children: [{
      //           path: '',
      //           component: Crontab.Detail
      //       }, {
      //           path: 'add',
      //           name: 'Crontab_add',
      //           icon: 'add',
      //           component: Crontab.Add
      //       }]
      //   },
      //   {
      //     path: '/Role',
      //     component:Home,
      //     children:[{
      //       path:'',
      //       component: Role
      //     }]
      //   },
      //   {
      //     path: '/Auth',
      //     component:Home,
      //     children:[{
      //       path:'',
      //       component: Auth
      //     }]
      //   },
      //   {
      //     path: '/User',
      //     component:Home,
      //     children:[{
      //       path:'',
      //       component: User
      //     }]
      //   },
      //   {
      //     path:'/AuthRule',
      //     component: Home,
      //     children:[{
      //       path:'',
      //       component:AuthRule
      //     }]
      //   },
      //   {
      //     path:'/Node',
      //     component:Home,
      //     children:[{
      //       path:'',
      //       component:Node
      //     }]
      //   },
      //   {
      //     path:'/Brand',
      //     component:Home,
      //     children:[{
      //       path:'',
      //       component:Brand.Category
      //     },{
      //       path:'Detail',
      //       name:'Brand_detail',
      //       component:Brand.Detail
      //     },{
      //       path:'Manage',
      //       component:Brand.Manage
      //     }]
      //   },
      //   {
      //     path:'/Outside',
      //     component:Home,
      //     children:[{
      //       path:'',
      //       component:Outside
      //     }]
      //   }
    ]
}
