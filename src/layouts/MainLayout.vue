<template>
 <div :class="$style.container">
   <slot />
 </div>
</template>

<script>
export default {
  name: 'MainLayout',
};
</script>

<style lang="scss" module>
.container {
  display: flex;
  flex-direction: row;
}
</style>
