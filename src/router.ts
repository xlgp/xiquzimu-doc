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
    { path: "/openAccessibilityService", name: "openAccessibilityService", meta: { title: "如何开启无障碍服务" }, component: () => import("./views/helpCenter/openAccessibilityService.vue") },
    { path: "/WhyIsAutoCloseAccessibilityService", name: "WhyIsAutoCloseAccessibilityService", meta: { title: "为什么无障碍服务会自动关闭" }, component: () => import("./views/helpCenter/WhyIsAutoCloseAccessibilityService.vue") },
    { path: "/openAccessibilityServiceShortCut", name: "openAccessibilityServiceShortCut", meta: { title: "无障碍服务快捷开启方式" }, component: () => import("./views/helpCenter/openAccessibilityServiceShortCut.vue") },
    { path: "/agreement", name: "agreement", meta: { title: "用户协议" }, component: () => import("./views/agreement-privacy/agreement.vue") },
    { path: "/privacy", name: "privacy", meta: { title: "隐私政策" }, component: () => import("./views/agreement-privacy/privacy.vue") },
    { path: "/download", name: "download", meta: { title: "应用下载" }, component: () => import("./views/download/index.vue") },
    { path: "/howToUse", name: "howToUse", meta: { title: "功能简介" }, component: () => import("./views/features/index.vue") },
    //跳回首页
    {
        path: '/:pathMatch(.*)*', name: 'NotFound', redirect: () => {
            if (!fromHost(window.location, document.referrer)) {
                window.location.href = window.location.pathname;
            }
            return "/";
        }
    },
]

export default createRouter({
    // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
    history: createWebHashHistory(),
    routes, // `routes: routes` 的缩写
})