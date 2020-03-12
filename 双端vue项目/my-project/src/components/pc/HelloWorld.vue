<template>
  <div class="pc">
    <h1>{{ msg }}</h1>
    <button @click="go">跳转到第二个页面</button>
    <!-- <div v-for='{{}}}'></div> -->
  </div>
</template>

<script>
import { mapState, mapActions ,mapMutations} from "vuex";
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "HelloWorld,I am PC"
    };
  },
  created() {
      this.getHomeList()
  },
  methods: {
      // 引入mutations同步方法
      ...mapMutations([
           'SET_NUM',
      ]),
    //调用vuex方法
    getHomeList() {
      let params = new Object();
          params.pageNo = 3;
          params.pageSize = 15;
          this.$store.dispatch('getHomeList', params);  //调用mapActions方法
    },


    go() {
        this.SET_NUM(1)  //调用mutations方法
      // let data = { name: "张三" };
      // this.$util.router_push(this, "secondPage", data);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
