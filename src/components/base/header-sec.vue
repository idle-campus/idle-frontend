<template>
	<header id="headerTab" class="flex flex-align-center">
		<img src="../../../static/img/icon/arrowBack.png" @click="onBack" />
		<p>{{tabname}}</p>
	</header>

</template>

<script>
export default {
  props: ['tabname'],
  data () {
    return {
      isBack: true,
    }
  },
  methods: {
    onBack () {
      if (this.isBack) {
        this.$router.back()
      } else {
        this.$router.push('./member')
      }

    }
  }
}
</script>

<style lang="less" scoped>
@import '../../../static/less/base.less';
header {
  height: 0.8rem;
  text-align: center;
  background: @theme_background;
  color: @base_color;
  font-size: 0.26rem;
  line-height: 0.8rem;
  width: 100%;
  z-index: 10;
  position: fixed;
  top: 0;
}

img {
  width: 0.4rem;
  height: 0.4rem;
  margin-left: 0.2rem;
}

p {
  text-align: center;
  width: 100%;
  margin-right: 0.6rem;
}
</style>
