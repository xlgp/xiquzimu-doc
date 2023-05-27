<template>
  <van-collapse v-model="activeNames" @change="changeHandler">
    <van-collapse-item title="点赞" :name="collapseNames[0]">
      双击悬浮窗头部时间可以点赞
      <van-image src="https://xlgp.gitee.io/static/xiquzimu/dianzan-1.png" fit="scale-down" />
    </van-collapse-item>
    <van-collapse-item title="添加唱段" :name="collapseNames[1]">
      点击唱段页面左上角图标，可添加唱段。
      <van-image src="https://xlgp.gitee.io/static/xiquzimu/add-changduan-btn.jpg" fit="scale-down" />
      戏曲字幕允许用户按照<a href="https://gitee.com/xlgp/opera-lyrics/blob/master/黄梅戏/五女拜寿-奉汤（男独唱）.lrc">格式</a>添加唱段。
    </van-collapse-item>
    <van-collapse-item title="下载戏曲字幕App" :name="collapseNames[2]">
      <p>{{ appDownloadUrl }}</p>
      <p>复制链接后，请在浏览器中打开链接，并下载最新的xiquzimu_vx.y.z_release.apk</p>
      <van-button :data-clipboard-text="appDownloadUrl" ref="copyBtnRef" type="primary" size="small" @click="copyHandler"
        block>复制下载链接</van-button>
    </van-collapse-item>
  </van-collapse>
</template>
<script setup lang="ts">
import { ref } from "vue";
import { useClipboard } from "../../composiable/useClipboard"

const collapseNames = ["1", "2", "3"];

const activeNames = ref([collapseNames[0]]);

const appDownloadUrl = ref(import.meta.env.XQZM_APP_DOWNLOAD_URL);

const copyBtnRef = ref();

const { copyHandler, createClipboard } = useClipboard(appDownloadUrl, copyBtnRef);

const changeHandler = (activeNames: String[]) => {
  if (activeNames.includes(collapseNames[2])) {
    createClipboard();
  }
}

</script>
