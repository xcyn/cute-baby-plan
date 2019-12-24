<template>
  <div class="all">
    <div :key="key" v-for="(pothunter, key) in pothunterList">
      <babyPerson :data="pothunter" @vote="handleVote"/>
    </div>
  </div>
</template>

<script>
import request from '@/common/request'
import babyPerson from "../components/baby-person";
export default {
    name: 'babyAll',
    components: {
      babyPerson
    },
    data() {
        return {
          pothunterList: []
        };
    },
    methods: {
      // 获取全部参赛者数据
      async getPothunterList() {
        const data = await request({
          url: '/babyService/pothunter/get',
          method: 'get'
        })
        this.pothunterList = data || []
      },
      // 开始投票
      async handleVote(pothunter) {
        const res = await request({
          url: '/babyService/pothunter/vote',
          method: 'post',
          params: pothunter
        })
        if(res && res.errno === 401) {
          this.checkLogin()
        } else {
          this.init()
          this.$root.myEvent.$emit('rootRefresh')
        }
      },
      checkLogin() {
        const instance = this.$login({
          propsData: {
              onLogin: async (data) => {
                  const res = await request({
                    url: '/babyService/user/login',
                    method: 'post',
                    params: data
                  })
                  if(!res) {
                    instance.hide();
                  }
              },
              onRegister: async (data) => {
                  console.log('register', data)
                  instance.hide();
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
      this.init()
      this.monitor()
    }
};
</script>

<style scoped lang="stylus">

</style>