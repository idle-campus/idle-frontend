<template>
	<footer class="flex flex-align-center">

		<div class="footer-item" :class="{active:urlRouter == '/index' || urlRouter == '/'}">
			<router-link to='./index'>
				<i class="icon footerIcon footerHomeIcon"></i>
				<p class="footer-title">首页</p>
			</router-link>
		</div>

		<div class="footer-item" :class="{active:urlRouter == '/category'}">
			<router-link to='./category'>
				<i class="icon footerIcon footerCategoryIcon"></i>
				<p class="footer-title">分类</p>
			</router-link>
		</div>

		<div class="footer-item" :class="{active:urlRouter == '/member'}">
			<router-link to='./member'>
				<i class="icon footerIcon footerMemberIcon"></i>
				<p class="footer-title">我的</p>
			</router-link>
		</div>
	</footer>
</template>

<script>
export default {
  props: ['urlRouter', 'cartnum'],
  data () {
    return {
      showNum: false
    }
  },
  watch: {
    showNum () {
      if (this.showNum) {
        setTimeout(() => {
          this.showNum = false;
        }, 800)
      }
    }
  }
}
</script>
<style lang="less" scoped>
@import '../../../static/less/variable.less';
footer {
  bottom: 0;
  position: fixed;
  display: flex;
  justify-content: space-around;
  width: 100%;
  height: 0.88rem;
  background: @base_color;
  box-shadow: 0 -2px 9px rgba(0, 0, 0, 0.1);
}
.footer-item {
  text-align: center;
  position: relative;
}

.cart-num {
  position: absolute;
  background: @theme_background;
  color: @base_color;
  text-align: center;
  top: -0.2rem;
  right: 0.3rem;
  width: 0.5rem;
  height: 0.4rem;
  line-height: 0.4rem;
  border-radius: 0.8rem;
  margin: auto;
}

.icon {
  width: 0.4rem;
  height: 0.4rem;
  display: block;
  margin: 0 auto;
  margin-bottom: 0.1rem;
  text-align: center;
}

.footer-title {
  color: @base_textColor;
}

.footerIcon {
  background-size: 100% 100% !important;
}

.footerHomeIcon {
  background: url('../../../static/img/icon/tab_home.png');
}

.footerCategoryIcon {
  background: url('../../../static/img/icon/tab_category.png');
}

.footerCartIcon {
  background: url('../../../static/img/icon/tab_activity.png');
}

.footerMemberIcon {
  background: url('../../../static/img/icon/tab_member.png');
}

.active .footer-title {
  color: @theme_color;
}

.active .footerHomeIcon {
  background: url('../../../static/img/icon/tab_home_select.png');
}

.active .footerCategoryIcon {
  background: url('../../../static/img/icon/tab_category_select.png');
}

.active .footerCartIcon {
  background: url('../../../static/img/icon/tab_activity_select.png');
}

.active .footerMemberIcon {
  background: url('../../../static/img/icon/tab_member_select.png');
}
</style>
