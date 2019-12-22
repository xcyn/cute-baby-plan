<template>
  <div>
    <div class="baby-person gline1">
      <img class="phone" :src="data.photo" alt="">
      <div class="info">
        <div class="number">{{data.name}}</div>
        <div class="name pt5">手机号: {{data.phone}}</div>
        <div class="votes pt5">{{data.voteNum}}票</div>
        <div class="vote-btn" @click="handleVote">
            <div :class="{'notVote': !data.voteNum}" class="heart"></div> <span class="vote-text">投他一票</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'baby-person',
  props: {
    data: {
      type: Object,
      default: () => {
        return {}
      }
    },
  },
  methods: {
    handleVote() {
      this.$emit('vote', this.data)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
.baby-person
  display flex
  background-color #fff
  padding 20px
  border-radius 10px
.phone
  width 50%
.info
  flex none
  font-size 15px
  padding-left 20px
.number
  font-weight 700
.name
  color rgba(0,0,0,0.87)
  width 150px
.votes
  color rgba(0,0,0,0.6)
.vote-btn
  border 1px solid red
  padding 7px 15px
  border-radius 5px
  color red
  margin-top 10px
  font-size 13px
  display flex
  align-items center
  width 120px
.loveicon
  width 20px
  height 20px
  margin-right 5px
.pt5
  padding-top 5px
.heart
  width 10px
  height 15px
  margin 5px auto
  position relative
.heart::before,.heart::after
  content ""
  width 100%
  height 100%
  position absolute
  background-color red
  left 0
  top 0
  border-radius 5px 5px 0 0
  transform rotate(-45deg)
.heart.notVote::before,.heart.notVote::after
    background-color #fff
    border 1px solid red
.heart::after
  left 3.5 px
  background-color red
  transform rotate(45deg)
.heart.notVote::after
    background-color #fff
    border-left none
.vote-text
  padding-left 10px
  
</style>
