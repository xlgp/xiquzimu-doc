<template>
  <header>
    <div style="display: flex;
    align-items: center;">
      <van-icon class-prefix="zimuicon" name="xin" :color="defaultColorValue" size="3rem"
        style="vertical-align: middle" />
      <span style="font-size: 1.5rem;">
        戏曲字幕服务中心
      </span>
    </div>
    <div class="van-cell-group__title">
      一款应用于戏曲直播时自动发送字幕的软件。
    </div>
  </header>
  <div class="x-van-col" :class="{ 'tip-bg': isDownload }" @click="toDownload">
    <van-icon name="down" size="2rem" class="col-icon" />
    <div class="icon-text">去下载</div>
  </div>
  <div style="padding: var(--van-cell-group-title-padding); padding-bottom: 0">
    <van-icon class-prefix="zimuicon" name="changci" size="1.5rem" class="icon-text"/>
    <span style="padding-left: 10px; color: var(--van-gray-6)">唱段</span>
  </div>
  <div class="x-van-col">
    <van-icon class-prefix="zimuicon" :name="item.name" size="2rem" class="col-icon" :color="item.color"
      v-for="item in changDuanList" @click="toChangDuan(item)">
      <i style="font-size: initial">{{ item.name }}</i>
    </van-icon>
  </div>
  <van-cell-group title="应用">
    <van-cell title="功能简介" value="查看" to="howToUse" is-link />
  </van-cell-group>
  <van-cell-group title="常见问题">
    <van-cell :class="{ 'tip-bg': isOpenAccesibilityService }" title="如何开启无障碍服务？" to="openAccesibilityService" value="查看"
      is-link />
    <van-cell title-class="zimu-van-cell-title" title="为什么无障碍服务会自动关闭？" to="WhyIsAutoCloseAccesibilityService" value="查看"
      is-link />
  </van-cell-group>
  <van-cell-group title="用户协议和隐私政策">
    <van-cell title="用户协议" to="agreement" value="查看" is-link />
    <van-cell title="隐私政策" to="privacy" value="查看" is-link />
  </van-cell-group>
</template>
<script setup lang="ts">
import { computed } from "vue";

import { useRoute, useRouter } from "vue-router";
import constants from "../constants";

const { defaultColorValue } = constants;

const { query } = useRoute();
const isOpenAccesibilityService = computed(
  () => query.item && query.item == "openAccesibilityService"
);
const isDownload = computed(() => query.item && query.item == "download");

type ChangDuanItemType = {
  name: string;
  url: string;
  color: string;
};

const changDuanList: ChangDuanItemType[] = [
  {
    name: "gitee",
    url: "https://gitee.com/xlgp/opera-lyrics/tree/master",
    color: "rgb(199, 29, 35)",
  },
  {
    name: "github",
    url: "https://github.com/xlgp/opera-lyrics/tree/master",
    color: "#1F2328",
  },
  {
    name: "gitlab",
    url: "https://gitlab.com/xlgp/opera-lyrics/tree/master",
    color: "#fc6d26",
  },
];

const router = useRouter();

const toDownload = () => {
  router.push("/download");
};

const toChangDuan = (item: ChangDuanItemType) => {
  window.location.href = item.url;
};
</script>
<style scoped>
.x-van-col {
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  margin: 10px;
  background-color: #f7f7f7;
}

.icon-text {
  color: var(--van-cell-text-color);
}

.col-icon {
  padding: 20px;
}

header {
  margin-top: 10px;
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
