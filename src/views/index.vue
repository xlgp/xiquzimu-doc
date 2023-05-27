<template>
  <header>
    <h2>戏曲字幕服务中心</h2>
    <div class="van-cell-group__title">一款应用于戏曲直播时自动发送字幕的软件。</div>
  </header>
  <van-cell-group title="应用">
    <van-cell center title="功能简介" value="查看" to="howToUse" is-link />
    <van-cell center title="戏曲字幕" value="去下载" to="download" is-link />
  </van-cell-group>
  <van-cell-group title="唱段">
    <van-cell
      title="唱段列表"
      value="查看"
      url="https://gitee.com/xlgp/opera-lyrics/tree/master"
      is-link
    />
  </van-cell-group>
  <van-cell-group title="常见问题">
    <van-cell
      title="如何开启无障碍服务？"
      to="openAccesibilityService"
      value="查看"
      is-link
    />
    <van-cell
      title-class="zimu-van-cell-title"
      title="为什么无障碍服务会自动关闭？"
      to="WhyIsAutoCloseAccesibilityService"
      value="查看"
      is-link
    />
  </van-cell-group>
  <van-cell-group title="用户协议和隐私政策">
    <van-cell title="用户协议" to="agreement" value="查看" is-link />
    <van-cell title="隐私政策" to="privacy" value="查看" is-link />
  </van-cell-group>
</template>
<script setup lang="ts">
</script>
<style scoped>
header {
  margin-top: 30px;
  display: flex;
  align-items: center;
  flex-direction: column;
}
</style>
<style>
.zimu-van-cell-title {
  flex: 2;
}
</style>
