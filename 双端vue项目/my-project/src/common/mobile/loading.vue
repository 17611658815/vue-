<!--  -->
<template>
  <div class="loading">
      <div class="loading-layout">
        <img src="../../assets/images/loading.gif" alt="">
        <div>加载中</div>
      </div>
    <!-- <van-loading size="24px" vertical>加载中...</van-loading> -->
  </div>
</template>

<script>
export default {
  name:'LOADING',
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
  .loading{
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
  }
</style>