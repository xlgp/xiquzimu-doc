<template>
  <div class="box">
    <h3>戏曲字幕应用</h3>
    <div class="van-cell-group__title">心灵的孤僻</div>
    <van-button
      plain
      :url="url"
      :color="colorValue"
      icon="down"
      type="primary"
      block
      round
      >下载<small>({{ version }})</small></van-button
    >
    <div class="van-cell-group__title">或扫码</div>
    <qrcode-vue :value="url" :size="200" level="L" :foreground="colorValue" />
  </div>
</template>
<script setup lang="ts">
import QrcodeVue from "qrcode.vue";
const version = "v12.2.0";

const colorValue = "#780af6";

const url = `https://gitee.com/xlgp/xiquzimu-apk/releases/download/${version}/xiquzimu_${version}_release.apk`;
</script>
<style scoped>
.box {
  display: flex;
  flex-flow: column;
  padding: 0 30px;
  align-items: center;
  justify-content: center;
  position: fixed;
  margin-top: -50px;
  background: linear-gradient(324deg, #9c48fb 0%, white 40%, #9c48fb 97%);
  background-color: #f1e5ff;
  right: 0;
  left: 0;
  bottom: 0;
  top: 0;
}
</style>
