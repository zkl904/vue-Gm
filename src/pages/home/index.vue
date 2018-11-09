<template>
<div class="contain">
	<div class="header flex flex-center items-center flex-col">
		<div class="mb-30 fz-30">我是home页面</div>
		<div class="router fc-third fz-20" @click="goLogin">点我去login页面11</div>
	</div>
</div>
</template>

<script>
export default {
  data() {
    return{

    }
  },
	created() {

	},
	methods: {
    goLogin() {
      this.$router.push('/login')
    }
	}
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.header
	width 100vw
	height 300px
	.router
		text-decoration underline
	/*sksk*/
</style>
