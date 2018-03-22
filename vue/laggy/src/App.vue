<template>
  <div id="app">
    <TopBar></TopBar>
    <VideoGrid></VideoGrid>
  </div>
</template>

<script>
import TopBar from './components/TopBar';
import VideoGrid from './components/VideoGrid';

export default {
  name: 'app',
  components: {
    TopBar,
    VideoGrid,
  }
}
</script>

<style scoped>
</style>
