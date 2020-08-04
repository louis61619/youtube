<template>
  <div class="bookmark">
    <div class="bookmark-item" v-for="item in markNum" :key="item.index">
      {{item}}
    </div>
  </div>
</template>

<script>
export default {
  name: "Bookmark",
  props: {
    markNum: {
      type: Number,

    }
  }
}
</script>

<style scoped lang="scss">
  .bookmark {
    margin: auto;
    width: 600px;
    height: 60px;
    border: 1px solid red;
    display: flex;

    .bookmark-item{
      width: 60px;
      height: 60px;
      border: 1px solid green;
    }
  }
</style>