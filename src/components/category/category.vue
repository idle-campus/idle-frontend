<template>
	<div class="page">
		<message ref="message"></message>
		<headers tabname="分类"></headers>
		<transition :name="slidename">

			<div class="container flex" id="container" v-show="mainarea" v-cloak>
				<div class="leftbar">
					<div class="barItem" v-for="(menuItem,menuIndex) in menuList" :key="menuItem.id">
						<p :class="{active:menuIndex === $store.state.tabindex}" class="menu-text" @click="onBar(menuIndex)">
							{{menuItem.cat_name}}
						</p>
					</div>
				</div>
				<div class="rightContent">
					<div class="rightItem" v-for="categoryItem in categoryContent.cart" :key="categoryItem.id" @click="onDetail(categoryItem )">
						<div class="category-item flex">
							<div class="item flex detail-item">
								<div class="goods-img">
									<img v-lazy="categoryItem.GoodsImage" />
								</div>
								<div class="goods-textBox">
									<p class="goods-name">{{categoryItem.GoodsName}}</p>
									<p class="goods-coach">¥{{categoryItem.GoodsPrice}}</p>
								</div>
							</div>

						</div>

					</div>
				</div>
			</div>

		</transition>

		<footers :urlRouter="$route.path" :cartnum='cartLength' ref="footer" />
	</div>

</template>

<script>
import Headers from '../base/Header.vue'
import Footers from '../base/Footer.vue'
import Message from '../base/message.vue'
import { mapGetters, mapMutations } from 'vuex'
export default {
  data () {
    return {
      menuList: [],
      categoryList: [],
      categoryContent: [],
      cartLength: 0,
      slidename: 'slide-back',
      mainarea: false
    }

  },
  components: {
    Headers,
    Footers,
    Message
  },
  computed: {
    ...mapGetters([
      'carts',
      'this.$store.state.tabindex',
      'this.$store.state.comname'
    ])
  },
  mounted () {
    this.mainarea = true
    if (this.$store.state.tabindex == undefined) {
      this.setTabindex(0)
    }
    this.getMenuList()
    this.getCategoryList()
    /*判断动画是进还是出*/
    if (this.$store.state.comname == 'index') {
      this.slidename = 'slide-go'
    } else {
      this.slidename = 'slide-back'
    }
    this.setComname('category')
  },
  methods: {
    // 获取分类栏目
    getMenuList: function () {
      const that = this
      this.$http.get('/api/menudata', {}).then(function (res) {
        that.menuList = res.data.data
      })
        .catch(function (error) {
          console.log(error)
        })
    },

    // 获取分类列表
    getCategoryList: function () {
      const that = this
      this.$http.post('/api/categorydata', {}).then(function (res) {
        that.categoryList = res.data.data
        that.categoryContent = that.categoryList[0]
      })

        .catch(function (error) {
          console.log(error)
        })
    },

    // 切换分类
    onBar (index) {
      const that = this
      this.setTabindex(index)
      that.categoryContent = that.categoryList[this.$store.state.tabindex]
    },

    // 进入商品详情
    onDetail (item) {
      this.$router.push('/detail')
      this.setGoods(item)
    },

    ...mapMutations({
      setGoods: 'SET_GOODS',
      setCarts: 'SET_CARTS',
      setTabindex: 'SET_TABINDEX',
      setComname: 'SET_COMNAME'
    })
  }
}
</script>

<style lang="less" scoped>
@import '../../../static/less/variable.less';
.category {
  padding-top: 0.8rem;
  padding-bottom: 0.88rem;
}

.leftbar {
  position: fixed;
  left: 0;
  width: 1.8rem;
  font-size: 0.28rem;
  text-align: center;
  height: 88%;
  border-right: 1px solid #ccc;
}

.barItem {
  height: 0.8rem;
  line-height: 0.8rem;
  border-bottom: 1px solid #ccc;
}

.rightContent {
  flex: 1;
  margin-left: 1.8rem;
}

.rightItem:nth-last-child(1) {
  padding-bottom: 0.9rem;
}

.active.menu-text {
  background: @theme_background;
  color: @base_color;
}

.category-item {
  padding: 0.2rem 0;
  border-bottom: 1px solid #ccc;
}

.detail-item {
  width: 100%;
}

.goods-textBox {
  width: 100%;
}

.goods-img {
  margin-right: 0.2rem;
  width: 4rem;
  height: 2rem;
  img {
    width: 100%;
    height: 100%;
  }
}

.goods-name {
  font-size: 0.28rem;
}

.goods-coach {
  font-size: 0.26rem;
  color: red;
  margin: 0.2rem 0;
}

.goods-cartBox {
  margin-right: 0.4rem;
  width: 0.4rem;
  height: 0.4rem;
  img {
    width: 100%;
    height: 100%;
  }
}
</style>
