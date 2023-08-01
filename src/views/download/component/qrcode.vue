<template>
  <QRCodeVue3
    :width="200"
    :height="200"
    :value="apkDownloadUrl"
    :qrOptions="{ typeNumber: 0, mode: 'Byte', errorCorrectionLevel: 'H' }"
    :imageOptions="{ hideBackgroundDots: true, imageSize: 0.2, margin: 4 }"
    :dotsOptions="{
      type: 'dots',
      color: defaultColorValue,
      gradient: {
        type: 'linear',
        rotation: 0,
        colorStops: [
          { offset: 0, color: defaultColorValue },
          { offset: 1, color: defaultColorValue },
        ],
      },
    }"
    :backgroundOptions="{ color: '#ffffff' }"
    :cornersSquareOptions="{ type: 'dot', color: '#000000' }"
    :cornersDotOptions="{ type: undefined, color: '#000000' }"
    fileExt="png"
    :download="true"
    image="/logo.png"
    myclass="my-qur"
    imgclass="img-qr"
    downloadButton="my-button"
    :downloadOptions="{ name: 'vqr', extension: 'png' }"
  />
</template>
<script setup lang="ts">
import QRCodeVue3 from "qrcode-vue3";
import constants from "../../constants";
const { apkInfo, defaultColorValue } = constants;
const { apkDownloadUrl, version } = apkInfo;
</script>
