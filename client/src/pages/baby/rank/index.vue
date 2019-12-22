<template>
  <div class="rank">
    <div :key="key" v-for="(pothunter, key) in pothunterList">
      <babyPerson :data="pothunter"  @vote="handleVote"/>
    </div>
  </div>
</template>

<script>
import request from '@/common/request'
import babyPerson from "../components/baby-person";
export default {
    name: 'babyRank',
    components: {
      babyPerson
    },
    data() {
        return {
          pothunterList: []
        };
    },
    methods: {
      // 获取参赛者排名
      async getPothunterList() {
        const data = await request({
          url: '/babyService/pothunter/get',
          method: 'get',
          params: {
            rank: -1
          }
        })
        this.pothunterList = data || []
      },
      // 开始投票
      async handleVote(pothunter) {
        await request({
          url: '/babyService/pothunter/vote',
          method: 'post',
          params: pothunter
        })
        this.init()
        this.$root.myEvent.$emit('rootRefresh')
      },
      init() {
        this.getPothunterList()
      },
      monitor() {
        this.$root.myEvent.$on('childRefresh', () => {
          this.init()
        })
      }
    },
    created() {
      this.getPothunterList()
      this.monitor()
    }
};
</script>

<style scoped lang="stylus">

</style>