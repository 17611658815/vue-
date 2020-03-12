<template>
  <div>这是第二个页面</div>
</template>

<script>
export default {
  name:"secondPage",
  data(){
      return{

      }
  },
  created(){
    console.log(this.$route.query.data)
  },
  methods:{
      
  }
};
</script>

