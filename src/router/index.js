import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
    //这是路由的配置文件
export default new Router({
    // mode:"history",
    routes: [{
            path: '/',
            name: '',
            component: function(resolve) {
                require(['@/components/Hello'], resolve)
            }
        },
        {
            path: '/b',
            name: 'b',
            component: function(resolve) {
                require(['@/components/b'], resolve)
            }
        },
        {
            path: '/a',
            name: 'a',
            component: function(resolve) {
                require(['@/components/a'], resolve)
            }
        }
    ]
})