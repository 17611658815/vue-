<!--  -->
<template>
  <div class="illnessTag">
    <div class="illnessTag-title">
      <div>{{title}}</div>
      <div>更多 ></div>
    </div>
    <div class="illnessTag-content">
      <span v-for="(item,index) in illness" :key="item.id">{{item.name}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "illnessTag",
  data() {
    return {};
  },
  props: {
    loadMore: {
      type: Function
    },
    title: {
      type: String
    },
    illness: {
      type: Array
    }
  },
  //生命周期 - 创建完成（访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {}
};
</script>
<style lang="less" scoped>
.illnessTag {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #ffffff;
  .illnessTag-title {
    width: 95%;
    padding: 0 2.5% 0.3rem 2.5%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    > div:nth-child(1) {
      font-weight: 600;
      font-size: 0.36rem;
    }
    > div:nth-child(2) {
      font-size: 0.24rem;
      color: #999999;
    }
  }
  .illnessTag-content {
    width: 90%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    & > span {
      width: 23%;
      padding: 0.1rem 0.2rem;
      background: #f8f8f8;
      font-size: 0.28rem;
      color: #333333;
      margin-bottom: 0.3rem;
      text-align: center;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
}
</style>