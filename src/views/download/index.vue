<template>
    <h3 style="margin: 160px 0 20px; text-align: center">
    戏曲字幕应用
  </h3>
  <h4 class="van-cell-group__title" style="text-align: center">
    点击下载
  </h4>
  <a :href="url">
    <van-image :src="logoImgUrl" width="6rem" radius="16" />
    <van-icon name="down" class="icon" size="3rem" />
  </a>
  <div style="text-align: center; padding-top: 0" class="van-cell-group__title">
    {{ version }}
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";

const logoImgUrl = ref(import.meta.env.BASE_URL + "logo.png");

const version = "v12.2.0";

const url = `https://gitee.com/xlgp/xiquzimu-apk/releases/download/${version}/xiquzimu_${version}_release.apk`;
</script>
<style scoped>
a {
  display: flex;
  position: relative;
  width: 6rem;
  margin: 20px auto;
}
.icon {
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 16px;
  align-items: center;
  display: inline-flex;
  justify-content: center;
  background: #ffffff8f;
  color: #780af6;
}
</style>
