<template>
 <div :class="$style.container">
   <div :class="$style.header">
     <RouterLink
       v-for="name in $options.ROUTE_NAMES"
       :key="name"
       :to="{ name }"
     >
       {{ name }}
     </RouterLink>
   </div>
   <div :class="$style.content">
     <slot />
   </div>
 </div>
</template>

<script>
import ROUTE_NAMES from '@/router/constRouteNames';

export default {
  name: 'MainLayout',
  ROUTE_NAMES,
  created() {
    window.comp = this.$router.currentRoute;
  },
};
</script>

<style lang="scss" module>
.container {
  display: block;
}
.header {
  display: flex;
  justify-content: space-around;
}
.content {
  display: block;
}
</style>
