<template>
  <QRCodeVue3
    :width="300"
    :height="300"
    :value="apkDownloadUrl"
    :qrOptions="{ typeNumber: 0, mode: 'Byte', errorCorrectionLevel: 'H' }"
    :imageOptions="{ hideBackgroundDots: true, imageSize: 0.2, margin: 2 }"
    :dotsOptions="{
      type: 'dots',
      color,
      gradient: {
        type: 'linear',
        rotation: 0,
        colorStops: [
          { offset: 0, color },
          { offset: 1, color },
        ],
      },
    }"
    :backgroundOptions="{ color: '#ffffff00' }"
    :cornersSquareOptions="{ type: 'extra-rounded', color }"
    :cornersDotOptions="{ type: undefined, color }"
    fileExt="png"
    :image="iamgeUrl"
  />
</template>
<script setup lang="ts">
import QRCodeVue3 from "qrcode-vue3";
import constants from "../../../constants";

const { apkInfo } = constants;
const { apkDownloadUrl } = apkInfo;

const color = "#780af6dd";

const iamgeUrl = import.meta.env.BASE_URL + "logo.png";
</script>
