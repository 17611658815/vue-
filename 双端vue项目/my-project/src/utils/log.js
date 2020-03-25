export default  {
  let isDebug = true;

   jsonLog(data) {
      if (this.isDebug) {
          var parse = JSON.stringify(data);
          console.log(parse)
      }
  }

   log(str) {
      if (this.isDebug) {
          console.log(str)
      }
  }
}