<template>
  <header>
    <van-image width="100" height="100" :src="url.logo" />
    <h2>戏曲字幕服务中心</h2>
    <div class="van-cell-group__title">一款应用于戏曲直播时自动发送字幕的软件。</div>
  </header>
  <van-row gutter="20">
    <van-col span="12">
      <div class="x-van-col" :class="{ 'tip-bg': isDownload }" @click="toDownload">
        <van-icon name="down" size="2rem" class="col-icon" />
        <div class="icon-text">去下载</div>
      </div>
    </van-col>
    <van-col span="12">
      <div class="x-van-col" @click="toChangDuan">
        <van-icon :name="url.icChangCi" size="2rem" class="col-icon" />
        <div class="icon-text">唱段</div>
      </div>
    </van-col>
  </van-row>
  <van-cell-group title="应用">
    <van-cell title="功能简介" value="查看" to="howToUse" is-link />
  </van-cell-group>
  <van-cell-group title="常见问题">
    <van-cell
      :class="{ 'tip-bg': isOpenAccesibilityService }"
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
import { computed } from "vue";

import { useRoute, useRouter } from "vue-router";

const { query } = useRoute();
const isOpenAccesibilityService = computed(
  () => query.item && query.item == "openAccesibilityService"
);
const isDownload = computed(() => query.item && query.item == "download");

const giteeChangDuanUrl = "https://gitee.com/xlgp/opera-lyrics/tree/master";

console.log(import.meta.env.BASE_URL);

const url = {
  logo: import.meta.env.BASE_URL + "logo.svg",
  icChangCi: import.meta.env.BASE_URL + "ic_changci.svg",
};

const router = useRouter();

const toDownload = () => {
  router.push("/download");
};

const toChangDuan = () => {
  window.location.href = giteeChangDuanUrl;
};
</script>
<style scoped>
.x-van-col {
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  margin: 10px;
  flex-direction: column;
  background-color: #f7f7f7;
  padding-bottom: 20px;
}

.icon-text {
  color: var(--van-cell-text-color);
}

.col-icon {
  padding: 20px;
}

header {
  margin-top: 30px;
  display: flex;
  align-items: center;
  flex-direction: column;
}

@keyframes tips {
  from {
    background: #d4b6ff;
  }

  to {
    background: var(--van-cell-background);
  }
}

.tip-bg {
  animation: tips 2s ease-in-out 0s 2;
}
</style>
<style>
.zimu-van-cell-title {
  flex: 2;
}
</style>
