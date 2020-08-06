<template>
  <div class="vedio-block">
    <div v-for="item in filterArr" :key="item.index" class="vedio-item">
      <img :src="item.snippet.thumbnails.high.url" alt srcset />
      <div class="title">{{item.snippet.title}}</div>
      <div
        class="love"
        @click="loveClick(item.contentDetails.videoId)"
        :class="{active: love(item.contentDetails.videoId)}"
      >
        <img src="~assets/img/icon-nolove.png" alt />
      </div>
    </div>
  </div>
</template>

<script>
import { data, data2 } from "network/home";
import axios from "axios";

export default {
  name: "Favorites",
  data() {
    return {
      vedios: [],
      favorites: [],
      // gofav: [],
      myarr: [],

    };
  },
  created() {
    data(), data2();
    this.favorites = JSON.parse(localStorage["favorites"]);
    axios.all([data(), data2()]).then(
      axios.spread((acct, acct2) => {
        // Both requests are now complete
        this.vedios.push(...acct.data.items);
        this.vedios.push(...acct2.data.items);
      })
    );
  },

  computed: {
    filterArr() {
      let myarr = [];
      for (let i of this.favorites) {
        var obj = this.vedios.filter(function (item, index, array) {
          return item.contentDetails.videoId == i;
        });
        myarr.push(...obj);
      }
      return myarr
      
    }
  },

  methods: {
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

      // console.log(this.favorites);
    },
    love(id) {
      if (this.favorites.indexOf(id) !== -1) {
        return true;
      }
    },

  },
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
@media all and(min-width: 992px){
  .vedio-block{
    justify-content: start;
    .vedio-item{
      margin-right: calc(80px/3);
      &:nth-child(4n){
        margin-right: 0;
      }
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