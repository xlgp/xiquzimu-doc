import { createRouter, createWebHashHistory } from "vue-router";
import Index from "./views/index.vue"

/**
 * 是否来自本网站
 * @param location 
 * @param referrer 
 * @returns true or false
 */
const fromHost = (location: Location, referrer: string) => {
    return referrer && referrer.includes(location.hostname);
}



const routes = [
    { path: '/', name: "Index", component: Index, meta: { title: "首页" } },
    { path: "/openAccesibilityService", name: "openAccesibilityService", meta: { title: "如何开启无障碍服务" }, component: () => import("./views/helpCenter/openAccesibilityService.vue") },
    { path: "/WhyIsAutoCloseAccesibilityService", name: "WhyIsAutoCloseAccesibilityService", meta: { title: "为什么无障碍服务会自动关闭" }, component: () => import("./views/helpCenter/WhyIsAutoCloseAccesibilityService.vue") },
    { path: "/agreement", name: "agreement", meta: { title: "用户协议" }, component: () => import("./views/agreement-privacy/agreement.vue") },
    { path: "/privacy", name: "privacy", meta: { title: "隐私政策" }, component: () => import("./views/agreement-privacy/privacy.vue") },
    { path: "/download", name: "download", meta: { title: "应用下载" }, component: () => import("./views/download/index.vue") },
    { path: "/howToUse", name: "howToUse", meta: { title: "功能简介" }, component: () => import("./views/features/index.vue") },
    //跳回首页
    {
        path: '/:pathMatch(.*)*', name: 'NotFound', redirect: (to: any) => {
            if (fromHost(window.location, document.referrer)) {
                return "/";
            }
            window.location.href = "/";
        }
    },
]

export default createRouter({
    // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
    history: createWebHashHistory(),
    routes, // `routes: routes` 的缩写
})