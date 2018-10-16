<template>
<div class="Login">
	<div class="header flex flex-center items-center">
		<router-link to="/"><img src="./images/logo@3x.png" class="icon"></router-link>
	</div>
	<div class="mb-20 ph-30">
		<span class="button button-secondary button-full button-radius" @click="goDemo">点我去demo页面</span>
	</div>
	<input-box v-model="mobileNo" placeholder="请输入您的手机号" class="loginInputBox no-margin-top" type="tel" :attr="{maxLength: 13}">
		<img src="./images/denglu_icon_geren@3x.png" width="16" height="19" class="icon">
	</input-box>
	<input-box v-model="loginPwd" placeholder="请输入登录密码" class="loginInputBox" type="password">
		<img src="./images/denglu_icon_mima@3x.png" width="16" height="19" class="icon">
	</input-box>
	<div class="fc-white">
		过滤器的应用
	</div>
	<div class="fc-white">{{testName | getSensitiveName}}</div>
	<div class="fc-white">{{testMobiileNo | getSensitivePhone}}</div>
	<div class="mt-30 flex flex-between ph-15" >
		<span class="button button-secondary button-full button-radius " @click="addCookie">点我添加cookie</span>
		<span class="button button-secondary button-full button-radius " @click="removeCookie">点我删除cookie</span>
	</div>
	<div class="mt-10 flex flex-between ph-15">
			<span class="button button-secondary button-full button-radius "  @click="getMapActions">发送action请求</span>
		  <span class="button button-secondary button-full button-radius "  @click="getGetters">获取getters请求</span>
	</div>
	<div class='fc-white text-left' v-if="userInfo">
		手机号: {{userInfo.mobileNo}}<br>
		密码: {{userInfo.loginPwd}} <br>
		来源: {{userInfo.source}}
	</div>
</div>
</template>

<script type="text/ecmascript-6">
  import InputBox from '@/components/InputBox'
  import { Field, Button, Toast } from 'mint-ui'
  import {mapActions, mapGetters} from 'vuex'
  export default {
    data() {
      return {
        mobileNo: '15757855240',
        loginPwd: 'abc123',
	      testName: '王小明',
	      testMobiileNo: '15757855240',
	      userInfo: null
      }
    },
	  methods: {
      ...mapActions(['doLogin']),
      addCookie() {
        window.cookieStore.write('token', 'ssssss')
        Toast({
          message: "token添加成功",
          duration: 1000,
          position: 'middle'
        })
      },
      removeCookie() {
        window.cookieStore.remove('token')
        Toast({
          message: "token删除成功",
          duration: 1000,
          position: 'middle'
        })
      },
      goDemo() {
        let token = window.cookieStore.read('token')
	      if (token == 'null' || token == null) {
          Toast({
            message: '请先添加cookie token',
            duration: 1000,
            position: 'middle'
          })
	      }
        this.$router.push('/demo')
      },
      async getMapActions() {
        // 要是数据在各个页面不复用的话 , 在action中就不需要去请求mutations了, 直接action去请求数据 ,然后resolve返回给前端即可, 要是这个数据好多个页面复用的话 , 倒是可以把数据放到getters中 , 减少请求时间, 提高性能, 要是想直接操作state中的数据 , 可以直接调用mutations中的方法对state中的数据进行更改
        let data = await this.doLogin({
          mobileNo: this.mobileNo,
          loginPwd: this.loginPwd
        })
	      this.userInfo = data
	      // console.log(data, '3333')
      },
      getGetters() {

	      if (!this.loginData) {
          Toast({
            message: "state数据为空, 请先action请求数据",
            duration: 1000,
            position: 'middle'
          })
	      } else {
          this.userInfo = this.loginData
	      }
      }
	  },
	  computed: {
      ...mapGetters(['loginData'])
	  },
	  components: {
      [InputBox.name]: InputBox,
		  [Toast.name]: Toast
	  }
  }

</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
	.Login
		width 100%
		height 100vh
		background-color #242c46
		background-image url('./images/bg@3x.jpg')
		background-size 100vw
		background-repeat no-repeat
		background-position top left
	.mint-button
		background linear-gradient(90deg, #455693, #4a5b97)
	.header
		width 100%
		line-height 200px
		font-size 28px
		font-weight 300
		color #fff
		& img
			width 19.8vw
			height 24.1vw
	.loginInputBox
		width 305px
		margin 20px auto
		height 45px
		border-radius 45px
		color #fff
		text-align left
		background rgba(255,255,255,0.2)
		& .icon
			margin-right 10px
	.register
		display inline-block
		color #d1d1d1
		font-size 14px
	.forget
		display inline-block
		float right
		color #d1d1d1
		font-size 14px
	.login
		width 305px
		height 45px
		margin 20px auto
		font-size 16px
		border-radius 45px!important
</style>
