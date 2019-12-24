<template>
    <div class="rule-modal" v-if="visible">
      <div class="modal" @click="hide"></div>
      <div class="rule-c">
        <div class="tilte">活动规则</div>
        <div class="rule-item">
          1、本次活动为网络评选活动, 每个人只能给每个参赛者投一张票
        </div>
        <div class="rule-item">
          2、登录后的用户才可以投票
        </div>
        <div class="rule-item">
          3、最终解释权归我所有～
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'active-rule',
  data() {
    return {
      data: {},
      visible: false
    }
  },
  methods: {
    show() {
      this.visible = true
    },
    hide() {
      this.visible = false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
.rule-modal
  position fixed
  width 100%
  height 100%
  top 0
  left 0
  z-index 98
  background-color: rgba(0,0,0,0.3)
.rule-c
  width 90%
  margin 0 auto
  background-color #fff
  position absolute
  top 50%
  left 50%
  transform translate(-50%, -50%)
  padding 20px
  border-radius: 10px;
  z-index 99
.modal
  position absolute
  top 0
  left 0
  width 100%
  height 100%
.tilte
  font-weight 700
  font-size 15px
  padding-bottom 10px
.rule-item
  font-size 13px
  padding-top 10px
</style>
