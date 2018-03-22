<template>
  <div>
    <v-container fluid>
      <div class="video-grid-container">
        <v-card v-for="video in visibleVideos" :key="video.url" class="video-grid__card">
          <v-card-row class="orange lighten-1">
            <v-card-title>
              <span class="white--text">{{video.title}}</span>
            </v-card-title>
          </v-card-row>
          <v-spacer></v-spacer>
          <v-card-text>
            <v-card-row>
              <v-progress-circular v-show="!video.loaded" indeterminate class="amber--text" />
              <iframe id="ytplayer" type="text/html" width="100%"
                      height="360" v-bind:src="video.url" frameborder="0"
                      @load="load(video.url)" v-show="video.loaded">
              </iframe>
            </v-card-row>
          </v-card-text>
        </v-card>
      </div>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'videogrid',
  data() {
    return {
      allVideos: [],
      visibleVideos: [],
    }
  },
  created: function () {
    this.axios.get("https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UCSG7PgjHJFcaMhii3XxVC9A&maxResults=50&key=AIzaSyDndRC8y0qOyXS9oyU_K1xvxYstd9hNMCk")
      .then((response) => {
        this.allVideos = response.data.items.map((obj, index) => {
          var newVideoDataItem = {};
          newVideoDataItem.url = "https://www.youtube.com/embed/" + obj.id.videoId;
          newVideoDataItem.title = obj.snippet.title;
          newVideoDataItem.loaded = false;
          return newVideoDataItem;
        })
      })
      .then(() => {
        this.allVideos = this.allVideos.filter((item) => {
          return item.title.includes("aterloo");
        })
        this.visibleVideos = this.allVideos
      })
      .catch((err) => console.log(err))
   },
    methods: {
      load: function(url) {
        var index = this.visibleVideos.findIndex((obj) => obj.url === url);
        this.visibleVideos[index].loaded = true;
        this.$nextTick(function(){});
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.video-grid-container {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  margin: 0;
}

.video-grid__card {
  width: 45%;
  margin-right: 10px;
  margin-bottom: 10px;
}
</style>
