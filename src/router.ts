import { createRouter, createWebHashHistory } from "vue-router";
import Index from "./views/index.vue"
import AccesibilityServiceComp from "./views/helpCenter/openAccesibilityService.vue"
import statementComp from "./views/statement/index.vue"
import navbarComp from "./layouts/navbar.vue"
import featuresComp from "./views/features/index.vue"

const routes = [
    { path: '/', component: Index, meta: { title: "首页" } },
    {
        path: "/xiquzimu",
        component: navbarComp,
        children: [
            { path: "openAccesibilityService", name: "openAccesibilityService", meta: { title: "如何开启无障碍服务" }, component: AccesibilityServiceComp },
            { path: "statement", name: "statement", meta: { title: "声明" }, component: statementComp },
            { path: "howToUse", name: "howToUse", meta: { title: "功能简介" }, component: featuresComp }
        ]
    },

]

export default createRouter({
    // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
    history: createWebHashHistory(),
    routes, // `routes: routes` 的缩写
})