<template>
  <LayoutMain>
    <RouterView />
  </LayoutMain>
</template>

<script>
import LayoutMain from '@/layouts/LayoutMain.vue';

export default {
  name: 'App',
  components: { LayoutMain },
  props: {
    hello: Boolean,
  },
};
</script>
