<template>
    <!-- 底部导航 -->
    <div class="tabs">
        <ul>
            <router-link :to="{name:'home'}" tag="li" exact>
                <div>
                    <i class="iconfont icon-zhuye"></i>
                </div>
                <div>主页</div>
            </router-link>
            <router-link :to="{name:'may'}" tag="li">
                <div>
                    <i class="iconfont icon-wodedangxuan"></i>
                </div>
                <div>我的</div>
            </router-link>
        </ul>
    </div>
</template>
<script type="text/ecmascript-6">
    export default {}
</script>
<style lang="less" type="text/less">
  .tabs {
        position: fixed;
        bottom: 0;
        left: 0;
        background-color: #fff;
        box-shadow: 0 0.02rem 0.04rem #dcdcdc;
        color: gray;
        width: 100%;
        & > ul, & > ul > li {
        margin: 0;
        padding: 0;
    }
    ul {
        width: 100%;
        height: 1rem;
        display: flex;
        align-items: center;
        & > li {
            display: flex;
            flex: 1;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            &.router-link-active{
                 color: #6ea8f7;
                }
                & > div {
                    font-size: 0.3rem;
                    & > i {
                        font-size: 0.5rem;
                    }
                }
            }
        }
  }
</style>