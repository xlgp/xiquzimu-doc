<template>
  <van-collapse v-model="activeNames">
    <van-collapse-item title="点赞" name="1">
      双击悬浮窗头部时间可以点赞
      <van-image
        src="https://xlgp.gitee.io/static/xiquzimu/dianzan-1.png"
        fit="scale-down"
      />
    </van-collapse-item>
    <van-collapse-item title="添加唱段" name="2">
      点击唱段页面左上角图标，可添加唱段。
      <van-image
        src="https://xlgp.gitee.io/static/xiquzimu/add-changduan-btn.jpg"
        fit="scale-down"
      />
      戏曲字幕允许用户按照<a
        href="https://gitee.com/xlgp/opera-lyrics/blob/master/黄梅戏/五女拜寿-奉汤（男独唱）.lrc"
        >格式</a
      >添加唱段。
    </van-collapse-item>
    <van-collapse-item title="下载戏曲字幕App" name="3">
      复制链接后，请在浏览器中打开链接，并下载最新的xiquzimu_vx.y.z_release.apk
      <van-button type="primary" size="small" @click="copy" block>复制下载链接</van-button>
    </van-collapse-item>
  </van-collapse>
</template>
<script setup lang="ts">
import { ref, watch } from "vue";
import { useClipboard } from "@vueuse/core";
import { showToast } from "vant";
import "vant/es/toast/style";

const activeNames = ref(["1"]);

const appReleaseUrl = ref("https://gitee.com/xlgp/xiquzimu-apk/releases");

const { copy, copied } = useClipboard({ source: appReleaseUrl });

watch(copied, (value) => {
  if (value) {
    showToast("已复制");
  }
});
</script>
