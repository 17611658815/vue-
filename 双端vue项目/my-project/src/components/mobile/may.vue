<!--  -->
<template>
<div>
  <span  v-for='(index,item) in hot_illness'>may</span> 
</div>
</template>

<script>
import { mapState, mapActions, mapMutations } from "vuex";
export default {
  name:'may',
data() {
return {

}
},
computed: {
    ...mapState(["hot_illness"])
  },
//生命周期 - 创建完成（访问当前this实例）
created() {
  console.log(this.hot_illness)
  
},
//生命周期 - 挂载完成（访问DOM元素）
mounted() {

}
}
</script>
<style scoped>
/* @import url(); 引入css类 */

</style>