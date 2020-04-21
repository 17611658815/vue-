<template>
  <div class="videoPage">
    <van-list :finished="finished" finished-text="没有更多了" @load="getHomeList">
      <div
        class="videoContainer"
        v-for="(item,index) in videoList"
        :key="index+item.id"
        @click="goVideoDetails(item.id,item.title)">
        <!-- <div class="recommendation" v-if="isSelf && index==0">相关视频</div> -->
        <div class="video_cover">
          <img :src="item.thumb" v-lazy="item.thumb" alt />
        </div>
        <div class="video_title">
          <span>{{item.title}}</span>
        </div>
        <div class="doctorInfo" v-if="item.doctor">
          <span class="doctor_Pic">
            <img :src="item.doctor.avatar" alt />
          </span>
          <span class="doctor_name">{{item.doctor.name}}</span>
          <span class="doctor_position">{{item.doctor.position}}</span>
          <span class="doctor_hospital">{{item.doctor.hospital}}</span>
        </div>
      </div>
      <loa-ding v-if='loading'></loa-ding>
    </van-list>
  </div>
</template>

<script>
import loaDing from "./loading.vue";
export default {
  data() {
    return {};
  },
  watch: {},
  props: {
    //视频列表
    videoList: {
      type: Array
    },
    //下拉开关
    on_off: {
      type: Boolean
    },
    loading: {
      type: Boolean
    },
    finished: {
      type: Boolean
    },
    getHomeList: {
      type: Function
    }
  },
  methods: {
    changeId(param) {
      this.$emit("changeIds", param);
    },
    goVideoDetails(id, title) {
      let param = new Object();
      param.id = id;
      param.title = title;
      if (this.isSelf) {
        this.changeId(param);
      } else {
        this.$util.router_push(this, "videoDetails", param);
      }
    },
    get() {
      console.log("触发了");
      eventBus.$emit("eventBusName", "hellokugou");
    }
  },
  components: {
    loaDing
  }
};
</script>

<style scoped>
.doctorInfo {
  display: flex;
  align-items: center;
}
.doctorInfo span {
  margin-right: 0.1rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.doctor_Pic img {
  width: 0.4rem;
  height: 0.4rem;
  border-radius: 50%;
  vertical-align: middle;
}
.doctor_name {
  font-size: 0.3rem;
}
.doctor_hospital,
.doctor_position {
  font-size: 0.28rem;
  color: #666666;
}
.recommendation {
  font-size: 0.35rem;
  margin-bottom: 0.2rem;
  font-weight: 500;
}
.videoContainer {
  width: 100%;
  padding: 0.2rem 0;
  background: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 0.2rem;
}
.videoContainer div {
  width: 95%;
}
.video_cover img {
  width: 100%;
  height: 3.9rem;
}
.video_title {
  margin: 0.2rem 0;
  font-size: 0.32rem;
}
</style>

