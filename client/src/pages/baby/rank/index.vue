<template>
  <div class="rank">
    <div :key="key" v-for="(pothunter, key) in pothunterList">
      <babyPerson :data="pothunter"  @vote="handleVote" :votes='votes'/>
    </div>
  </div>
</template>

<script>
import request from '@/common/request'
import babyPerson from "../components/baby-person";
import storage from '@/common/storage'
export default {
    name: 'babyRank',
    components: {
      babyPerson
    },
    data() {
        return {
          pothunterList: [],
          votes: []
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
        const auth = storage.get('auth')
        const userInfo = storage.get('userInfo')
        if(!auth || !userInfo) {
          this.checkLogin()
          return
        }
        const res = await request({
          url: `/babyService/pothunter/vote?auth=${auth}`,
          method: 'post',
          params: {
            ...pothunter,
            userName: userInfo.name
          }
        })
        if(res && res.errno === 401) {
          this.checkLogin()
        } else {
          storage.set('userInfo', {
            ...userInfo,
            votes: res.votes
          })
          if(res && res.votes) {
            this.votes = res.votes
          }
          this.init()
          this.$root.myEvent.$emit('rootRefresh')
        }
      },
      checkLogin() {
        const instance = this.$login({
          propsData: {
              onLogin: async (data) => {
                  const res = await request({
                    url: `/babyService/user/login`,
                    method: 'post',
                    params: data
                  })
                  if(res && res.auth) {
                    storage.set('auth', res.auth)
                    storage.set('userInfo', res)
                    instance.hide();
                  }
              },
              onRegister: async (data) => {
                  const res = await request({
                    url: `/babyService/user/register`,
                    method: 'post',
                    params: data
                  })
                  if(res && !res.errno) {
                    instance.hide();
                    alert(res)
                  }
              }
          },
        })
        instance.show()
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
      const userInfo = storage.get('userInfo')
      if(userInfo) {
        this.votes = userInfo.votes
      }
    }
};
</script>

<style scoped lang="stylus">

</style>