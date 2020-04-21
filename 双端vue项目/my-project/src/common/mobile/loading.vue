<!--  -->
<template>
  <div class="loading">
    <div class="loading-box">
      <div class="loading">
        <div class="loading-item" v-for="item in 3" :key="item"></div>
      </div>
      <!-- <view class="loading-text"></view> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "LOADING",
  data() {
    return {};
  },
  //生命周期 - 创建完成（访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {}
};
</script>
<style scoped>
/* @import url(); 引入css类 */
/* .loading{
      position:fixed;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
  }
  .loading-layout{
    width: 2rem;
    height: 2rem;
    font-size: 0.28rem;
    color: #ffffff;
    border-radius: 0.1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: rgb(0, 0,0,.4);

  }
  .loading-layout img{
    width: 0.6rem;
    height: 0.6rem;
    margin-top: 0.2rem;
  } */
.loading-box {
  display: flex;
  width: 100%;
  padding: 0.2rem 0;
  align-items: center;
  justify-content: center;
  background: #ffffff;
}

.loading-box .loading-text {
  margin-left: 0.15rem;
  font-size: 0.3rem;
  color: #999;
}

.loading {
  font-size: 0;
}

.loading .loading-item {
  display: inline-block;
  width: 0.15rem;
  height: 0.15rem;
  margin-right: 0.1rem;
  border-radius: 50%;
  background: #f26b3a;
  -webkit-animation: load 0.65s ease infinite;
}

.loading .loading-item:last-child {
  margin-right: 0rpx;
}

@-webkit-keyframes load {
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
}

.loading .loading-item:nth-of-type(1) {
  -webkit-animation-delay: 0.13s;
}

.loading .loading-item:nth-of-type(2) {
  -webkit-animation-delay: 0.26s;
}

.loading .loading-item:nth-of-type(3) {
  -webkit-animation-delay: 0.39s;
}
</style>