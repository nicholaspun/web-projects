<template>
  <div class="source-selection">
    <div class="jumbotron">
      <h2>
        <span class="glyphicon glyphicon-list-alt"></span>
        News List
      </h2>
      <h4>Select News Source:</h4>
      <select class="form-control" v-on:change="sourceChanged">
        <option v-bind:value="source.id"
                v-for="source in sources">
                  {{source.name}}
        </option>
      </select>
      <div v-if="currentSource">
        <h6>{{currentSource.description}}</h6>
        <a v-bind:href="currentSource.url" class="btn btn-primary" target="_blank">
          Go To {{currentSource.name}} Website
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'sourceselection',
  data () {
    return {
      sources: [],
      currentSource: ""
    }
  },
  created: function () {
    this.$http.get("https://newsapi.org/v1/sources?language=en")
      .then(function(response) {
        this.sources = response.data.sources;
        this.currentSource = this.sources[0];
        this.$emit('sourceChanged', this.currentSource.id);
      })
  },
  methods: {
    sourceChanged: function (e) {
      var sourcesLen = this.sources.length;
      for (var i = 0; i < sourcesLen; i++) {
        if(this.sources[i].id == e.target.value) {
          this.currentSource = this.sources[i];
        }
      }
      this.$emit('sourceChanged', e.target.value);
    }
  }
}
</script>

<style scoped>

</style>
