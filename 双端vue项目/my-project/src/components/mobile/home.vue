<template>
  <div class="home" ref="imageWrapper">
    <button @click="toImage()">保存图片</button>
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
    <illness-tag :illness="illness" :title="title"></illness-tag>
    <video-module
      :getHomeList="getHomeList"
      :loading="loading"
      :finished="finished"
      :videoList="videoList"
    ></video-module>
  </div>
</template>

<script>
import axios from "axios";
import illnessTag from "../../common/mobile/illnessTag.vue";
import videoModule from "../../common/mobile/videoList.vue";
import { mapState, mapActions, mapMutations } from "vuex";
import html2canvas from 'html2canvas'
export default {
  name: "home",
  data() {
    return {
      page: 1,
      title: "热门疾病",
      illness: [],
      videoList: [],
      loading: false,
      finished: false
    };
  },
  created() {
    this.getHotIllness();
    // this.getHomeList();
  },
  mounted() {},
  computed: {
    ...mapState(["hot_illness"])
  },
  methods: {
    // 引入mutations同步方法
    ...mapActions(["getHomeList"]),
    ...mapMutations(["SET_HOT_ILLNESS"]),
    //调用vuex方法
    /*  getHomeList() {
      let params = new Object();
      params.pageNo = 3;
      params.pageSize = 15;
      this.$Toast.showToast("错误");
      this.$LoadingUtils.showLoading('加载中',true)
      this.$util.router_push(this,'home') 路由跳转
      this.$store.dispatch("getHomeList", params); //调用mapActions方法
    }, */
    toImage() {
      // html2canvas(this.$refs.imageWrapper, {
      //   backgroundColor: null
      // }).then(canvas => {
      //   console.log(canvas)
      //   let dataURL = canvas.toDataURL("image/png");
      //   this.dataURL = dataURL;
      // });
       html2canvas(this.$refs.imageWrapper).then(canvas => {
        // this.$refs.addImage.append(canvas);//在下面添加canvas节点
        let link = document.createElement("a");
        link.href = canvas.toDataURL();//下载链接
        link.setAttribute("download","home.png");
        link.style.display = "none";//a标签隐藏
        document.body.appendChild(link);
        link.click();
      });
    },
    getHotIllness() {
      this.$Api.getHotIllness().then(data => {
        this.illness = data.illness;
        this.SET_HOT_ILLNESS(data.illness);
      });
    },
    getHomeList() {
      let params = new Object();
      params.type = "home_list";
      params.page = this.page++;
      this.loading = true;
      this.$Api.getHomeList(params).then(data => {
        this.loading = false;
        if (data.list.length > 0) {
          this.videoList = this.videoList.concat(data.list);
        } else {
          this.finished = true;
        }
      });
    }
  },
  components: {
    illnessTag,
    videoModule
  }
};
</script>

<style scoped>
.home {
  height: 100%;
  padding-bottom: 1rem;
}
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
.type-list-item > div {
  height: 0.7rem;
  display: flex;
  align-items: center;
  justify-content: center;
}
.type-list-item img {
  width: 0.6rem;
  height: 0.7rem;
}
</style>
