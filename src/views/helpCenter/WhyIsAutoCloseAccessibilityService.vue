<template>
  <main style="padding: 20px">
    <h2>无障碍服务为什么会自动关闭</h2>
  </main>
  <div>
    <p>因为无障碍服务（AccessibilityService）是系统服务，由系统控制开启和关闭。</p>
    <p>
      系统为避免造成更大负担，进而可能导致用户体验下降，当戏曲字幕应用进入后台数分钟后系统将停止无障碍服务（AccessibilityService）。
    </p>
  </div>
  <h3>用户可以锁定戏曲字幕应用，避免系统关闭无障碍服务。</h3>
  <h5>
    <a href="https://consumer.huawei.com/cn/support/content/zh-cn00410039/"
      >华为手机/平板无障碍中的第三方应用的服务开关自动关闭</a
    >
  </h5>
  <h5>vivo手机设置如下：</h5>
  <p>
    <van-image
      src="https://xlgp.gitee.io/static/xiquzimu/xiquzimu-suoding-1.png"
      fit="scale-down"
    />
  </p>
  <p>
    <van-image
      src="https://xlgp.gitee.io/static/xiquzimu/xiquzimu-suoding-2.png"
      fit="scale-down"
    />
  </p>
  <p>
    <van-image
      src="https://xlgp.gitee.io/static/xiquzimu/xiquzimu-suoding-3.png"
      fit="scale-down"
    />
  </p>
</template>
<script setup lang="ts"></script>
