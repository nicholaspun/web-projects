<template>
  <div class="news-list">
    <div class="container">
      <ul class="media-list">
        <li class="media" v-for="article in articles">
          <div class="media-left">
            <a v-bind:href="article.url" target="_blank">
              <img class="media-object" v-bind:src="article.urlToImage" />
            </a>
          </div>
          <div class="media-body">
            <h4 class="media-heading">
              <a v-bind:href="article.url" target="_blank">
                {{article.title}}
              </a>
            </h4>
            <h5><i>by {{article.author}}</i></h5>
            <p>{{article.description}}</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'newslist',
  props: ["source"],
  data () {
    return {
      articles: [],
    }
  },
  watch: {
    source: function(newVal) {
      this.updateSource(newVal);
    }
  },
  created: function () {
    this.updateSource(this.source);
  },
  methods: {
    updateSource: function(source) {
      if (source === "") return;
      this.$http.get("https://newsapi.org/v1/articles?source=" + source + "&apiKey=a5f2e2382e144b78a7ffad03d836cb94")
        .then(function(response) {
          this.articles = response.data.articles;
        });
    },
  }
}
</script>

<style scoped>
.media-object {
  width: 128px;
  padding: 10px;
}

.media {
  border-top: 1px solid lightgrey;
  padding: 20px;
}
</style>
