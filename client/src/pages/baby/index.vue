<template>
  <div class="baby">
    <div class="banner">
      <img class="banner-img" src="https://img.zuoyebang.cc/zyb-image/020d8b8a-985b-4ae3-87e2-f0b2083ced66.jpeg" alt="">
    </div>
    <div class="summary">
      <div class="tabs lh1 flex-spaceBwtween">
        <div class="tab participants">
          <div>参赛人数</div>
          <div class="num pt5">159</div>
        </div>
        <div class="tab votes bl1">
          <div>投票人数</div>
          <div class="num pt5">10</div>
        </div>
        <div class="tab visits bl1">
          <div>访问量</div>
          <div class="num pt5">1000</div>
        </div>
      </div>
    </div>
    <div class="ranking mt10">
      <div class="tabs lh1 flex-spaceBwtween">
        <div class="tab participants bb3 flex0">
          <div>参赛人数</div>
        </div>
        <div class="tab votes bb3 flex0">
          <div>投票人数</div>
        </div>
        <div class="tab visits bb3 flex0">
          <div>访问量</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>


export default {
    name: 'baby',
    components: {
    },
    data() {
        return {
        };
    },
    methods: {
    },
    created() {
    }
};
</script>

<style scoped lang="stylus">
.baby
  min-height 100%
.banner-img
  width 100%
.summary
  background-color #fff
  padding 10px 30px
  text-align center
  font-size 15px
.ranking
  background-color #fff
  padding 0 30px
  text-align center
  font-size 13px
  .tab
    flex none
    padding 7px 5px
.tab
  flex 1
.num
  font-size 13px
  color rgba(0,0,0,0.6)
.bl1
  border-left 1px solid rgba(0,0,0,0.05)
.bb3
  border-bottom 3px solid red
</style>