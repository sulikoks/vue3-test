<template>
  <div :class="$style.container">
    <div :class="$style.scanner">
      <QrStream :class="$style.scanner__inner" @decode="onDecode" />
    </div>
    <div :class="$style.res">Result: {{ qrResult }}</div>
  </div>
</template>

<script>
import { QrStream } from 'vue3-qr-reader';
import { ref } from 'vue';

export default {
  name: 'ViewQRCodeScanner',
  components: {
    QrStream,
  },
  setup() {
    const qrResult = ref('');

    function onDecode(res) {
      qrResult.value = res;
    }

    return {
      qrResult,
      onDecode,
    };
  },
};
</script>

<style lang="scss" module>
.container {
  display: block;
}
.scanner {
  position: relative;
  width: 80%;
  height: 0;
  padding-top: 80%;
  margin: 0 auto;
  border-radius: 10px;
  &__inner {
    position: absolute !important;
    top: 0;
    left: 0;
  }
}
</style>
