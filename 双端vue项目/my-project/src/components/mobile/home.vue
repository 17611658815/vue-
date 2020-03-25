<template>
  <div class="home">
    <div class="swiper-box">
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item>
          <img src="../../assets/images/banner.jpg" alt />
        </van-swipe-item>
        <van-swipe-item>
          <img src="../../assets/images/banner2.png" alt />
        </van-swipe-item>
      </van-swipe>
    </div>
    <div class="type-list">
      <div class="type-list-item">
        <div>
          <img style="height:0.6rem;width:0.6rem" src="../../assets/images/sp.png" alt />
        </div>
        <div>科普视频</div>
      </div>
      <div class="type-list-item">
        <div>
          <img style="height:0.6rem;width:0.6rem" src="../../assets/images/wd.png" alt />
        </div>
        <div>名医问答</div>
      </div>
      <div class="type-list-item">
        <div>
          <img style="height:0.6rem;width:0.55rem" src="../../assets/images/wz.png" alt />
        </div>
        <div>专家文章</div>
      </div>
      <div class="type-list-item">
        <div>
          <img style="height:0.6rem;width:0.50rem" src="../../assets/images/yp.png" alt />
        </div>
        <div>专家音频</div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { mapState, mapActions, mapMutations } from "vuex";
export default {
  name: "home",
  data() {
    return {};
  },
  created() {
    this.$Toast.showToast("错误");
    this.getHomeList();
  },
  methods: {
    // 引入mutations同步方法
    ...mapActions(["getHomeList"]),
    ...mapMutations(["SHOW_LOADING", "HIDE_LOADING"]),
    //调用vuex方法
    getHomeList() {
      let params = new Object();
      params.pageNo = 3;
      params.pageSize = 15;
      // this.$LoadingUtils.showLoading('加载中',true)
      this.$store.dispatch("getHomeList", params); //调用mapActions方法
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.swiper-box {
  width: 100%;
  height: 3.6rem;
  font-size: 0.32rem;
}
.my-swipe {
  height: 100%;
}
.my-swipe img {
  width: 100%;
  height: 100%;
}
.type-list {
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0.3rem 0;
  background: #ffffff;
}
.type-list > div {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 0.28rem;
}
.type-list-item>div{
  height: 0.7rem;
  display: flex;
  align-items: center;
  justify-content: center;
}
.type-list-item img{
  width: 0.6rem;
  height: 0.7rem;
}
</style>
