import axios from 'axios'

export function data() {
    return axios.get("https://www.googleapis.com/youtube/v3/playlistItems", {
      params: {
        part: "snippet,contentDetails", // 必填，把需要的資訊列出來
        playlistId: "UUMUnInmOkrWN4gof9KlhNmQ", // 播放清單的id
        maxResults: 50, // 預設為五筆資料，可以設定1~50
        key: "AIzaSyAt_90ef3mtNiDqS7whuD6qOKEBoYd8Ars",
      },
    });
  }
export function data2() {
    return axios.get("https://www.googleapis.com/youtube/v3/playlistItems", {
      params: {
        part: "snippet,contentDetails", // 必填，把需要的資訊列出來
        playlistId: "UUMUnInmOkrWN4gof9KlhNmQ", // 播放清單的id
        maxResults: 50, // 預設為五筆資料，可以設定1~50
        key: "AIzaSyAt_90ef3mtNiDqS7whuD6qOKEBoYd8Ars",
        pageToken: "CDIQAA",
      },
    });

}

