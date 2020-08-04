<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
#tab-bar {
  background: #f6f6f6;
  position: fixed;
  left: 0;
  top: 0;
  height: 100%;
  width: 200px;
  box-shadow: 0px -1px 1px rgba(100, 100, 100, 0.2);
  z-index: 5;
}
</style>