<template>
  <div class="vedio-block">
    <div v-for="item in vediotwo[type]" :key="item.index" class="vedio-item" @click="goMovie(item)">
      <img :src="item.snippet.thumbnails.high.url" alt srcset />
      <div class="title">{{item.snippet.title}}</div>
      <div
        class="love"
        @click.stop="loveClick(item.contentDetails.videoId)"
        :class="{active: love(item.contentDetails.videoId)}"
      >
        <img src="~assets/img/icon-nolove.png" alt />
      </div>
    </div>
    <bookmark :markNum="markNum" @tabClick="tabClick"></bookmark>
  </div>
</template>

<script>
import axios from "axios";

import Bookmark from "components/common/bookmark/Bookmark";

export default {
  name: "Home",
  components: {
    Bookmark,
  },
  data() {
    return {
      vedios: [],
      vediotwo: [],
      markNum: null,
      type: 0,
      favorites: [],
    };
  },

  created() {
    function data() {
      return axios.get("https://www.googleapis.com/youtube/v3/playlistItems", {
        params: {
          part: "snippet,contentDetails", // 必填，把需要的資訊列出來
          playlistId: "UUMUnInmOkrWN4gof9KlhNmQ", // 播放清單的id
          maxResults: 50, // 預設為五筆資料，可以設定1~50
          key: "AIzaSyCyvYJPKiivJIGcf2G77E2GRJSaDSaevO8",
        },
      });
    }
    function data2() {
      return axios.get("https://www.googleapis.com/youtube/v3/playlistItems", {
        params: {
          part: "snippet,contentDetails", // 必填，把需要的資訊列出來
          playlistId: "UUMUnInmOkrWN4gof9KlhNmQ", // 播放清單的id
          maxResults: 50, // 預設為五筆資料，可以設定1~50
          key: "AIzaSyCyvYJPKiivJIGcf2G77E2GRJSaDSaevO8",
          pageToken: "CDIQAA",
        },
      });
    }
    axios.all([data(), data2()]).then(
      axios.spread((acct, acct2) => {
        // Both requests are now complete
        this.vedios.push(...acct.data.items);
        this.vedios.push(...acct2.data.items);
        function sliceArray(arr, size) {
          var arr2 = [];
          for (var i = 0; i < arr.length; i = i + size) {
            arr2.push(arr.slice(i, i + size));
          }
          return arr2;
        }
        let newArr = sliceArray(this.vedios, 12);
        this.vediotwo = newArr;
        this.markNum = this.vediotwo.length;
      })
    );

  },
  mounted() {
    this.favorites = JSON.parse(localStorage['favorites'])
    
  },

  methods: {
    tabClick(index) {
      this.type = index;
    },
    loveClick(id) {
      console.log(id);
      // console.log(key)
      if (this.favorites.indexOf(id) !== -1) {
        for (let i = 0; i < this.favorites.length; i++) {
          if (this.favorites[i] === id) {
            console.log("陣列內有相同的值");
            var theDoubleOneIndex = this.favorites.indexOf(this.favorites[i]); //找到某物件的位置
            this.favorites.splice(theDoubleOneIndex, 1); //刪除陣列本身的相同物件
          }
        }
      } else {
        this.favorites.push(id);
      }
      localStorage['favorites'] = JSON.stringify(this.favorites)


      console.log(this.favorites);
    },
    love(id) {
      if (this.favorites.indexOf(id) !== -1) {
        return true;
      }
    },
    goMovie(item) {
      this.$router.replace('vedio')
      localStorage['vedio'] =  JSON.stringify(item)
    }
  },
  watch: {},
};
</script>

<style scoped lang="scss">
.active {
  background-color: red;
}
.vedio-block {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 15px;
}
.vedio-item {
  width: calc(25% - 20px);
  margin-bottom: 30px;
  position: relative;
  cursor: pointer;
  img {
    width: 100%;
  }
  .love {
    position: absolute;
    top: 5px;
    right: 5px;
    cursor: pointer;
    &:hover {
      transform: scale(1.2);
      translate: 0.2s;
    }
  }
}
@media all and(max-width: 991px) {
  .vedio-item {
    width: calc(50% - 20px);
    margin-bottom: 30px;
    img {
      width: 100%;
    }
  }
}
@media all and(max-width: 767px) {
  .vedio-item {
    width: 100%;
    margin-bottom: 30px;
    img {
      width: 100%;
    }
  }
}
</style>