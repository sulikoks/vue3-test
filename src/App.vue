<template>
  <MainLayout>
    <RouterView />
  </MainLayout>
</template>

<script>
import MainLayout from '@/layouts/MainLayout.vue';

export default {
  name: 'App',
  components: { MainLayout },
  props: {
    hello: Boolean,
  },
};
</script>
