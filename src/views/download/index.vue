<template>
  <div class="box">
    <h3>戏曲字幕应用</h3>
    <div class="van-cell-group__title">心灵的孤僻</div>
    <van-button
      plain
      :url="apkDownloadUrl"
      :color="colorValue"
      icon="down"
      type="primary"
      block
      round
      >下载<small>({{ version }})</small></van-button
    >
    <div class="van-cell-group__title">或扫码</div>
    <ApkQrcode />
    <van-button
      :data-clipboard-text="appDownloadUrl"
      ref="copyBtnRef"
      type="primary"
      size="mini"
      plain
      :color="colorValue"
      block
      round
      @click="copyHandler"
      class="copybtn"
      >或者点我复制下载链接</van-button
    >
    <div class="tip">
      复制链接后，请在浏览器中打开链接，并下载最新的xiquzimu_vx.y.z_release.apk
    </div>
  </div>
</template>
<script setup lang="ts">
import ApkQrcode from "./component/apk-qrcode.vue";
import { useClipboard } from "../../composiable/useClipboard";
import { ref } from "vue";
import constants from "../../constants";

const { apkInfo, defaultColorValue } = constants;

const { apkDownloadUrl, version } = apkInfo;

const appDownloadUrl = ref(import.meta.env.XQZM_APP_DOWNLOAD_URL);

const colorValue = defaultColorValue;

const copyBtnRef = ref();

const { copyHandler } = useClipboard(appDownloadUrl, copyBtnRef);
</script>
<style scoped>
.box {
  display: flex;
  flex-flow: column;
  padding: 0 30px;
  align-items: center;
  justify-content: center;
  position: fixed;
  margin-top: -70px;
  background: linear-gradient(324deg, #d9b7ff 0%, white 40%, #d9b7ff 97%);
  background-color: #f1e5ff;
  right: 0;
  left: 0;
  bottom: 0;
  top: 0;
}

.copybtn {
  margin-top: 30px;
}

.tip {
  padding: 20px;
  color: #969799;
  font-size: 13px;
}
</style>
