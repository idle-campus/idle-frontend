<template>
	<div class="page">
		<message ref="message" />

		<headers tabname="idle-campus" />

		<transition :name="slidename">
			<div class="container" v-show="mainarea">
				<!-- Swiper -->
				<div class="swiper-container">
					<div class="swiper-wrapper">
						<div class="swiper-slide" v-for="item in bannerList" :key="item.id">
							<img :src="item.img" />
						</div>
					</div>
					<div v-if="bannerList.length>1" class="swiper-pagination"></div>
				</div>

				<div class="content" v-cloak>
					<div v-for="(productItem,productIndex) in productList" class="floorItem" :key="productItem.id">
						<div class="productTop flex-between" @click="onCategory(productIndex)">
							<p class="productTop-text">{{productItem.Category.TopText}}</p>
							<div class="flex-align-center">
								<p class="productTop-text">{{productIndex+1}}F</p>
								<img src="../../static/img/icon/arrowBack.png" class="arrowImg" />
							</div>
						</div>

						<div class="productContent">
							<div class="productBox flex" ref='div'>
								<div class="productItem" v-for="goodsItem in productItem.SalesProduct" :key="goodsItem.id">
									<div class="itemBox">
										<div @click="onGoodsDetail(goodsItem,goodsItem.CategoryId)">
											<img v-lazy="goodsItem.GoodsImage" class="itemImg" />
											<div>
												<p class="goods-name text-ellipsis">{{goodsItem.GoodsName}}</p>
											</div>
										</div>

										<div class="addCartBox flex-between">
											<p><span class="goods-price">¥ {{goodsItem.GoodsPrice}}</span></p>
										</div>
									</div>

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
import Headers from './base/Header.vue'
import Footers from './base/Footer.vue'
import Message from './base/message.vue'
import '../../static/css/swiper.min.css'
import Swiper from '../../static/js/swiper.min'
import { mapGetters, mapMutations } from 'vuex'

export default {

  data () {
    return {
      bannerList: [],
      productList: [],
      cartLength: 0,
      slidename: 'slide-back',
      mainarea: false,
    }
  },
  components: {
    Headers,
    Footers,
    Message
  },
  computed: {
    ...mapGetters([
      'this.$store.state.carts',
      'this.$store.state.comname'
    ])
  },
  mounted () {
    this.mainarea = true
    setTimeout(() => {
      new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        spaceBetween: 30,
        autoplay: 1500,
        effect: 'fade',
      })

    }, 200)
    this.getGoodsList()
    this.getBannerList()
    /*判断动画是进还是出*/
    if (['category', 'cart', 'member'].includes(this.$store.state.comname)) {
      this.slidename = 'slide-back'
    } else {
      this.slidename = 'slide-go'
    }
    this.setComname('index')
  },
  methods: {
    // 获取商品列表
    getGoodsList () {
      const that = this
      this.$http.get('/api/homedata').then(function (res) {
        that.productList = res.data.data
      })
        .catch(function (error) {
          console.log(error)
        })
    },

    // 获取轮播列表
    getBannerList () {
      const that = this
      this.$http.get('/api/bannerdata').then(function (res) {
        that.bannerList = res.data.data
      })
        .catch(function (error) {
          console.log(error)
        })
    },

    // 进入商品详情
    onGoodsDetail (item, id) {
      this.$router.push({
        path: '/detail',
        query: {
          id: id
        }
      })
      this.setGoods(item)
    },

    // 前往分类页面
    onCategory (index) {
      this.setTabindex(index)
      this.$router.push('./category')
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
@import '../../static/less/variable.less';
.swiper-slide img {
  width: 100%;
  height: 100%;
}
.container {
  padding-bottom: 0;
}
.productTop {
  padding: 0 0.2rem;
  height: 0.6rem;
  line-height: 0.6rem;
  border-bottom: @base_boder;
  border-top: @base_boder;
  margin-bottom: 0.2rem;
}

.productTop-text {
  font-size: 0.28rem;
}

.arrowImg {
  width: 0.4rem;
  height: 0.4rem;
}
.floorItem:nth-last-child(1) {
  margin-bottom: 0.88rem;
}
.productItem {
  width: 3.8rem;
  box-sizing: border-box;
  margin-bottom: 0.2rem;
  padding: 0 0.2rem;
  flex: 1;
  &:nth-child(odd) {
    margin-right: 2%;
    border-right: 1px solid #ccc;
  }
}

.itemImg {
  width: 100%;
  height: 100%;
}

.addCartBox {
  img {
    width: 0.4rem;
    height: 0.4rem;
    padding-right: 0.2rem;
  }
}
</style>
