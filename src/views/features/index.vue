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
    <van-collapse-item title="标题3" name="3">
      在代码阅读过程中人们说脏话的频率是衡量代码质量的唯一标准。
    </van-collapse-item>
  </van-collapse>
</template>
<script setup lang="ts">
import { ref } from "vue";

const activeNames = ref(["1"]);
</script>
