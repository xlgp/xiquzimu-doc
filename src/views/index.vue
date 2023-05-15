<template>
  <header>
    <h2>戏曲字幕</h2>
    <p>一款应用于戏曲直播时自动发送字幕的软件。</p>
  </header>
  <van-cell-group title="应用">
    <van-cell
      center
      title="功能简介"
      value="查看"
      to="xiquzimu/howToUse"
      is-link
    />
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
      to="xiquzimu/openAccesibilityService"
      value="查看"
      is-link
    />
    <van-cell title=""/>
  </van-cell-group>
  <van-cell-group title="声明">
    <van-cell title="戏曲字幕声明" to="xiquzimu/statement" value="查看" is-link />
  </van-cell-group>
</template>
<script setup lang="ts"></script>
<style scoped>
header {
  display: flex;
  align-items: center;
  flex-direction: column;
}
</style>
