<template>
  <div class="vedio-block">
    <div v-for="item in vediotwo[0]" :key="item.index" class="vedio-item">
      <img :src="item.snippet.thumbnails.high.url" alt srcset />
      <div class="title">{{item.snippet.title}}</div>
    </div>
    <bookmark :markNum="markNum"></bookmark>
  </div>
</template>

<script>
import axios from "axios";

import Bookmark from "components/common/bookmark/Bookmark"

export default {
  name: "Home",
  components: {
    Bookmark
    
  },
  data() {
    return {
      vedios: [],
      vediotwo: [],
      markNum: ''
    };
  },

  created() {
    // axios
    //   .get("https://www.googleapis.com/youtube/v3/playlistItems", {
    //     params: {
    //       part: "snippet,contentDetails", // 必填，把需要的資訊列出來
    //       playlistId: "UUMUnInmOkrWN4gof9KlhNmQ", // 播放清單的id
    //       maxResults: 50, // 預設為五筆資料，可以設定1~50
    //       key: "AIzaSyCyvYJPKiivJIGcf2G77E2GRJSaDSaevO8",
    //     },
    //   })
    //   .then((res) => {
    //     console.log(res.data.nextPageToken);
    //     this.vedios = res.data.items;
    //   })
    //   .catch((e) => console.log(e));
    // axios
    //   .get("https://www.googleapis.com/youtube/v3/playlistItems", {
    //     params: {
    //       part: "snippet,contentDetails", // 必填，把需要的資訊列出來
    //       playlistId: "UUMUnInmOkrWN4gof9KlhNmQ", // 播放清單的id
    //       maxResults: 50, // 預設為五筆資料，可以設定1~50
    //       key: "AIzaSyCyvYJPKiivJIGcf2G77E2GRJSaDSaevO8",
    //       pageToken: 'CDIQAA'
    //     },
    //   })
    //   .then((res) => {
    //     // console.log(res.data.nextPageToken);
    //     this.vediotwo = res.data.items;

    //   })
    //   .catch((e) => console.log(e));
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
        this.markNum = this.vediotwo.length
      })
    );
  },

  methods: {},
};
</script>

<style scoped lang="scss">
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
  img {
    width: 100%;
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