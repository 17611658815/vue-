<template>
  <div id="app">
    <loading v-show="LOADING"></loading>
    <tebs v-show="$route.name == 'home' || $route.name == 'may'"></tebs>
    <!-- 阻止页面重载 -->
    <transition name="router-fade" mode="out-in">
      <keep-alive>
        <router-view v-if="$route.meta.keepAlive"></router-view>
      </keep-alive>
    </transition>
    <transition name="router-fade" mode="out-in">
      <router-view v-if="!$route.meta.keepAlive"></router-view>
    </transition>
  </div>
</template>

<style src='../../assets/css/common.css'></style>
<script>
import { mapState } from "vuex";
import Loading from "../../common/mobile/loading.vue";
import tebs from "../../common/mobile/tabber.vue";
export default {
  name: "App",
  computed: {
    ...mapState(["LOADING"])
  },
  components: {
    Loading,tebs
  }
};
</script>

<style scoped>
	.router-fade-enter-active, .router-fade-leave-active {
	  	transition: opacity .3s;
	}
	.router-fade-enter, .router-fade-leave-active {
	  	opacity: 0;
	}
</style>
