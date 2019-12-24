<template>
  <div class="baby">
    <div class="banner">
      <img class="banner-img" src="https://img.zuoyebang.cc/zyb-image/020d8b8a-985b-4ae3-87e2-f0b2083ced66.jpeg" alt="">
      <div class="babyRegisterBtn" @click="babyRegister">
        参加比赛
      </div>
      <div class="ruleBtn" @click="seeRule">
        查看规则
      </div>
    </div>
    <div class="summary">
      <div class="tabs lh1 flex-spaceBwtween">
        <div class="tab participants">
          <div>参赛人数</div>
          <div class="num pt5">{{activeData.pothunterNum}}</div>
        </div>
        <div class="tab votes bl1">
          <div>投票人数</div>
          <div class="num pt5">{{activeData.voteNum}}</div>
        </div>
        <div class="tab visits bl1">
          <div>访问量</div>
          <div class="num pt5">{{activeData.visitNum}}</div>
        </div>
      </div>
    </div>
    <div class="ranking mt5">
      <div class="tabs lh1 flex-spaceBwtween">
        <div :class="{'bb3': $route.path === '/baby/all' }" class="tab participants flex0" @click="handleGo('/baby/all')">
          <div>参与人员</div>
        </div>
        <div :class="{'bb3': $route.path === '/baby/rank' }"  class="tab votes flex0" @click="handleGo('/baby/rank')">
          <div>排名榜</div>
        </div>
      </div>
    </div>
    <div class="view">
      <router-view></router-view>
    </div>
    <babyRegister ref="babyRegister" @ok="handleJoin"/>
    <activeRule ref="activeRule"/>
  </div>
</template>

<script>
import request from '@/common/request'
import wxShare from '@/common/wxShare'
import babyRegister from "./components/register";
import activeRule from "./components/activeRule";
export default {
    name: 'baby',
    components: {
      babyRegister,
      activeRule,
    },
    data() {
        return {
          activeData: {}
        };
    },
    methods: {
      // 获取活动数据
      async getActiveData() {
        const data = await request({
          url: '/babyService/activeData/get',
          method: 'get'
        })
        this.activeData = data || {}
      },
      // 更新访问数据
      async updateVisitNum() {
        await request({
          url: '/babyService/activeData/update',
          method: 'post',
          params: {
            type: 'visitNum'
          }
        })
      },
      handleGo(path) {
        this.$router.push({
          path
        })
      },
      // 报名
      babyRegister() {
        this.$refs.babyRegister.show()
      },
      // 查看规则
      seeRule() {
        this.$refs.activeRule.show()
      },
      async handleJoin(data) {
        const res = await request({
          url: '/babyService/pothunter/save',
          method: 'post',
          params: data
        })
        if(res) {
          alert(res)
          this.getActiveData()
          this.$refs.babyRegister.hide()
          this.$root.myEvent.$emit('childRefresh')
        }
      },
      monitor() {
        this.$root.myEvent.$on('rootRefresh', () => {
          this.getActiveData()
        })
      }
    },
    created() {
      this.getActiveData()
      this.updateVisitNum()
      this.monitor()
    },
    async mounted() {
      await wxShare({
        title: '萌宝计划',
        desc: '前端技术分享',
        imgUrl: 'https://i.niupic.com/images/2019/12/24/6aI9.png'
      })
    }
};
</script>

<style scoped lang="stylus">
.baby
  min-height 100%
.banner
  position relative
.banner-img
  width 100%
.babyRegisterBtn
  position absolute
  top 20px
  right 10px
  font-size 13px
  padding 7px
  background-color rgba(0,0,0,0.3)
  border-radius 4px
  color rgba(255,255,255,0.8)
.registerUser
  position absolute
  bottom 20px
  left 10px
  font-size 13px
  padding 7px
  background-color rgba(0,0,0,0.3)
  border-radius 4px
  color rgba(255,255,255,0.8)
.ruleBtn
  position absolute
  top 20px
  left 10px
  font-size 13px
  padding 7px
  background-color rgba(0,0,0,0.3)
  border-radius 4px
  color rgba(255,255,255,0.8)
.summary
  background-color #fff
  padding 10px 30px
  text-align center
  font-size 15px
.ranking
  background-color #fff
  padding 0 50px
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
.view
  padding 10px 20px
.join-modal
  position fixed
  top 0
  left 0
  width 100%
  height 100%
  background-color rgba(0,0,0,0.3)
</style>