<style>
.view {
  transition: all .5s ease;
}
.test-enter, .test-leave {
  opacity: 0;
  transform: translate3d(10px, 0, 0);
}
.collection a.collection-item.v-link-active {
  background-color: #26a69a;
  color: #eafaf9;
}
[v-cloak] {
  display: none;
}
</style>

<template>
    <p v-show="authenticating" style="color:red">Authenticating...</p>
    <div class="row section">
      <div class="col s12 m3">
        <div class="collection">
          <a v-link="{ path: '/vue-js/router/index' }" class="collection-item">Home</a>
          <a v-link="{ path: '/vue-js/router/tools/design' }" class="collection-item">Design</a>
          <a v-link="{ path: '/vue-js/router/tools/frontend' }" class="collection-item">Frontend</a>
          <a v-link="{ path: '/vue-js/router/tools/backend' }" class="collection-item">Backend</a>
          <a v-link="{ path: '/vue-js/router/epilogue' }" class="collection-item">Epilogue</a>
        </div>
      </div>
      <div class="col s12 m9">
        <router-view class="view" transition="test" transition-mode="out-in" keep-alive></router-view>
      </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                authenticating: false
            }
        }
    }
</script>
