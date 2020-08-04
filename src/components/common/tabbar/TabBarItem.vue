<template>
  <div class="tab-bar-item" @click="itemClick">
    <!-- 圖片的活躍狀態 -->
    <div><slot name="item-icon"></slot></div>
    <div><slot name="item-icon-active"></slot></div>
    <!-- 文字的活躍狀態 -->
    <div :style="activeStyle"><slot name="item-title"></slot></div>
  </div>
</template>

<script>
export default {
  name: 'TabBarItem',
  props: {
    path: String,
    activeColor: {
      type: String,
      default: 'red'
      
    }
  },
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.path) !== -1
    },
    activeStyle() {
      if(this.isActive){
        return {color: this.activeColor}
      }else{
        return {}
      }
    }

  },
  methods: {
    itemClick() {
      this.$router.replace(this.path)
    }
  }
  
}
</script>

<style scoped>
  .tab-bar-item {
    width:100%;
    height: 100px;
    border: 1px solid white;
    cursor: pointer;
  }

</style>