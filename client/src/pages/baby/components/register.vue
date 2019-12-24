<template>
    <div class="join-modal" v-if="visible">
      <div class="modal" @click="hide"></div>
      <div class="join-register">
        <div class="input-item">
          <span class="input-name">姓名:</span><input v-model="data.name" type="text">
        </div>
        <div class="input-item">
          <span class="input-name">电话:</span><input v-model="data.phone" type="text">
        </div>
        <div class="upload">
          <span class="input-name">上传照片:</span>
          <img v-if="!data.photo" class="upload-img" src="https://files.jb51.net/file_images/article/201808/2018080615594711.png" alt="">
          <img v-if="data.photo" class="upload-img" :src="data.photo" alt="">
          <input class="file" type="file" accept="image/*" @change="onChange">
        </div>
        <div class="button">
          <div class="button-text" @click="handleJoin">
            参加比赛
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'baby-register',
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
    },
    onChange(event) {
      let file = event.target.files[0]
      this.uploadImg(file)
    },
    async uploadImg(file) {
        let formdata = new FormData();
        let config = {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        };
        formdata.append('file', file);
        const res = await axios.post(`${process.env.VUE_APP_BASE_API}/babyService/pothunter/upload`, formdata, config);
        if (res.errno === 0) {
            let copyData = JSON.parse(JSON.stringify(this.data))
            copyData.photo = res.data.url
            this.data = copyData
        }
    },
    handleJoin() {
      const { data } = this
      if(!data.name || !data.phone) {
        alert('请填写姓名和电话')
      } else {
        this.$emit('ok', data)
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
</style>
