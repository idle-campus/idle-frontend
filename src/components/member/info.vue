<template>

	<div class="page">
		<headersec tabname="个人信息"></headersec>
		<transition name="slide-go">
			<div class="container" v-show="mainarea">
				<img src="../../../static/img/logo.png" alt="" />
				<p>wechat:374139613</p>
			</div>
		</transition>
	</div>

</template>

<script>
import Headersec from '../base/header-sec.vue'
export default {
  data () {
    return {
      mainarea: false,
    }
  },
  components: {
    Headersec,
  },
  mounted () {
    this.mainarea = true
  },

}
</script>

<style lang="less" scoped>
.container {
  text-align: center;
  img {
    margin-top: 0.3rem;
  }
  p {
    margin-top: 0.3rem;
    font-size: 0.28rem;
  }
}
</style>
