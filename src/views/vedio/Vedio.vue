<template>
  <div>
    <h2>{{form.snippet.title}}</h2>
    <youtube :video-id="form.contentDetails.videoId" ref="youtube" class="youtube"></youtube>
  </div>
</template>

<script>
export default {
  name: "Vedio",
  data() {
    return {
      form: "",
    };
  },
  created() {
    this.form = JSON.parse(localStorage["vedio"]);
  },
  computed: {
    player() {
      return this.$refs.youtube.player
    }
  },
  methods: {
    async playVideo() {
      await this.player.playVideo()
      // Do something after the playVideo command
    }
  }
};
</script>

<style>
.youtube{
  margin-left: 15px;
    width:calc(100vw - 300px);
  height:calc((100vw - 300px)/2);
}

</style>