<template>
  <van-nav-bar :title="title" left-text="返回" left-arrow @click-left="onClickLeft" />
  <router-view />
</template>
<script setup lang="ts">
import { ref } from "vue";
import { useRoute } from "vue-router";
import constants from "../constants/index";

const route = useRoute();

const title = ref(route.meta.title as string || constants.title);

const onClickLeft = () => history.back();
</script>
