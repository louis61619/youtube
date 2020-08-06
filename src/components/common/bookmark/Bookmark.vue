<template>
  <div class="bookmark">
    <div class="bookmark-item" v-for="(item, index) in markNum" :key="item.index" @click="clickItme(index)">
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
  },
  data() {
    return {
      currentIndex: 0
    }
  },
  methods: {
    clickItme(index) {
      console.log(index)
      this.$emit('tabClick', index)
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
      display: flex;
      align-items: center;
      justify-content: center;
      margin-left: 3px;
      cursor: pointer;
    }
  }
</style>