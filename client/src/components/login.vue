<template>
    <div class="join-modal" v-if="visible">
      <div class="modal" @click="hide"></div>
      <div class="join-register">
        <div class="input-item">
          <span class="input-name">登录人姓名:</span><input v-model="data.name" type="text">
        </div>
        <div class="input-item">
          <span class="input-name">登录人密码:</span><input v-model="data.password" type="text">
        </div>
        <div class="button">
          <div class="button-text" @click="handleLogin">
            登录
          </div>
          <div class="button-text top" @click="handleRegister">
            注册
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'login',
  props: {
    onLogin: {
        type: Function,
        default: () => {}
    },
    onRegister: {
        type: Function,
        default: () => {}
    },
  },
  data() {
    return {
      type: 'register',
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
    },
    handleRegister() {
      const { data } = this
      const rule = /^[A-Za-z0-9]+$/
      const ishz = rule.test(data.name) && rule.test(data.password)
      if(!ishz) {
        alert('只能输入英文和汉字')
        return
      }
      if(!data.name || !data.password) {
        alert('请填写姓名和密码')
      } else {
          this._props.onRegister(data)
      }
    },
    handleLogin() {
      const { data } = this
      const rule = /^[A-Za-z0-9]+$/
      const ishz = rule.test(data.name) && rule.test(data.password)
      if(!ishz) {
        alert('只能输入英文和汉字')
        return
      }
      if(!data.name || !data.password) {
        alert('请填写姓名和密码')
      } else {
          this._props.onLogin(data)
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
.join-modal
  position fixed
  width 100%
  height 100%
  top 0
  left 0
  z-index 98
  background-color rgba(0,0,0,0.3)
.join-register
  width 300px
  margin 0 auto
  background-color #fff
  position absolute
  top 50%
  left 50%
  transform translate(-50%, -50%)
  padding 20px
  border-radius: 10px;
  z-index 99
.input-item
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  align-items: center;
  font-size: 14px;
  line-height: 3;
  background-color: #fff;
  position: relative;
  margin-left 20px
  border-bottom 1px solid rgba(0,0,0,0.3)
  overflow hidden
  > input
    display: block;
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    flex: 1;
    width: 100%;
    min-width: 0;
    padding: 10px;
    box-sizing: border-box;
    color: #666;
    line-height: inherit;
    background-color: inherit;
    border-radius: 2px;
    outline: none;
    line-height 1
.input-name
  font-size 15px
.button
  margin-top 10px
.button-text
  display: block;
  margin: 0;
  padding: 17px 16px;
  width: 100%;
  text-align: center;
  white-space: nowrap;
  cursor: pointer;
  font-size: 16px;
  line-height: 1;
  color: #fff;
  background: #4a4c5b;
  outline: none;
  border: none;
  border-radius: 2px;
  box-sizing: border-box;
  -webkit-tap-highlight-color: transparent;
.modal
  position absolute
  top 0
  left 0
  width 100%
  height 100%
.upload
  height 50px
  overflow hidden
  display flex
  align-items center
  margin-left: 20px
  position relative
  margin-top 10px
.file
  position absolute
  padding 100px
  top 0
  left 0
.upload-img
  width 75px
  height 60px
  margin 10px 0 0 10px
.top
  margin-top 10px
</style>
