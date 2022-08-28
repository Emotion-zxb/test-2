// 这个文件是配置整个项目的路由器的
import VueRouter from "vue-router";
import Vue from "vue";

// 引入组件
import Life from '@/components/Life.vue'
import Study from '@/components/Study.vue'
import Man from '@/pages/Man.vue'
import Woman from '@/pages/Woman.vue'
import List from '@/pages/List.vue'

// 使用插件
Vue.use(VueRouter);


const router = new VueRouter({
    routes: [
        {
            name: 'shenghuo',
            path: '/life',
            component: Life,
            children: [ //通过children 配置项配置 多级路由
                {
                    name: 'nan',
                    meta: { isAuth: true },
                    path: 'man', //此处一定不要加
                    component: Man,
                    beforeEnter(to, from, next) {
                        // 鉴权逻辑
                        if (to.meta.isAuth) {  // 需要鉴权
                            if (localStorage.getItem('name') === 'zhaxiaobing') {
                                next();
                            } else {
                                alert('暂无权限~');
                            }
                        }
                    }
                },
                {
                    name: 'nv',
                    path: 'woman',
                    component: Woman
                }
            ]
        },
        {
            path: '/study',
            component: Study,
            children: [
                {
                    name: 'leibiao', //给路由起名字
                    path: 'list/:id/:name', //使用占位符，声明接收params参数
                    component: List,
                    props({ params: { id, name } }) { //回调函数，我们不去调用，官方帮我们调用，参数为 $route 组件路由
                        return {
                            id,
                            name
                        }
                    }
                }
            ]
        }
    ]
})

// 全局前置守卫，初始化时执行，每次切换路由前执行    // 进来前判断是否给进 
// router.beforeEach((to, from, next) => {
//     console.log('to,form,next', to, from);
//     next();     //执行了next()才会放行
// })
// // 全局后置守卫，初始化时执行，每次切换路由后执行      // 进来后，做一些你要做的事
// router.afterEach(
//     (to, from) => {
//         console.log('to,form,next', to, from);
//     }
// )

export default router