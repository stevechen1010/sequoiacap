<template>
  <div class="home" :style="{'height': '100%'}">
    <div class="content">
      <ul class="banner mainItem col-12" :class="{'action-active': actionActive, 'action-nactive': actionNactive}">
        <li v-for="(item, key) in viewArr" :key="key" class="content-item" :id="'pic'+ item"></li>
      </ul>
      <ul class="banner asideItem col-12" :class="{'action-active': actionActive, 'action-nactive': actionNactive}">
        <li v-for="(item, key) in bannerArr" :key="key" class="aside-item" :id="'color'+ item.number">
          <div class="circle">
            <div class="container"></div>
          </div>
          <div class="article">
            <h2>{{item.title}}</h2>
            <p>{{item.content}}</p>
            <!-- <div class="arrow" @mousemove="clearAnimate()" @click="changeScroll()">
              <font-awesome-icon icon="angle-double-down" class="fontSize" />
            </div> -->
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
  },
  data () {
    return {
      titlePositon: 'static',
      titleColor: 'transparent',
      titleBorder: '0',
      scrollTop: '0',
      actionActive: false,
      actionNactive: false,
      bannerArr: [
        { title: '饿了么', content: '饿了么为用户提供在线订餐与线下配送服务', number: 2 },
        { title: '大疆创新', content: '大疆创新致力于成为全球飞行影像系统先驱', number: 1 },
        { title: '贝达药业', content: '贝达药业为中国百姓做更多吃的起的好药', number: 5 },
        { title: '360', content: '360 是中国领先的互联网和手机安全产品及服务供应商', number: 4 },
        { title: '新浪', content: '新浪是一家具有全球影响力的中文门户网站与社交网络平台', number: 3 }
      ], // [2, 1, 5, 4, 3]
      viewArr: [1, 2, 3, 4, 5],
      current: 1,
      bannerInterval: '',
      removeItemInterval: '', // 刪除項目動作的延遲
      direct: 'forward',
      stopEvent: false // 爲了避免scroll重複觸發事件（setTimeout尚未結束）做判斷
    }
  },
  mounted () {
    window.addEventListener('mousewheel', (e) => this.changeScroll(e))
    this.bannerInterval = setInterval(this.handleScroll, 5000)
  },
  methods: {
    scrollDirect (state) {
      if (state === 'forward') {
        let left = this.bannerArr.pop()
        let right = this.viewArr.shift()
        this.viewArr.push(right)
        this.bannerArr.unshift(left)
      } else if (state === 'reverse') {
        let left = this.bannerArr.shift()
        let right = this.viewArr.pop()
        this.viewArr.unshift(right)
        this.bannerArr.push(left)
      }
    },
    changeScroll (e) {
      this.clearAnimate()
      e ? this.handleScroll(e.wheelDelta, 1000) : this.handleScroll(-1, 1000)
    },
    handleScroll (direct = -1, s = 4000) {
      if (direct < 0) {
        this.actionActive = true
        this.actionNactive = false
      } else {
        this.actionActive = false
        this.actionNactive = true
      }
      if (this.current >= 5) this.current = 1
      else this.current++
      this.delay(s).then(() => {
        this.actionActive = false
        this.actionNactive = false
        direct < 0 ? this.scrollDirect('forward') : this.scrollDirect('reverse')
      })
      // let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      // console.log(scrollTop)
      // this.scrollTop = parseInt(scrollTop / 100) * 100
      // console.log(this.scrollTop)
      // this.positionY1 = this.Y1 - scrollTop * this.ratio // 原始高度-滾動距離*視差係數
      // this.positionY2 = this.Y2 - scrollTop * this.ratio
      // this.positionY3 = this.Y3 - scrollTop * this.ratio
      // if (scrollTop > 900) {
      //   this.titlePositon = 'fixed'
      //   this.titleColor = '#fff'
      //   this.titleBorder = '1px solid #e5e5e5'
      // } else {
      //   this.titlePositon = 'static'
      //   this.titleColor = 'transparent'
      //   this.titleBorder = '0'
      // }
    },
    clearAnimate () {
      clearInterval(this.bannerInterval)
      clearTimeout(this.removeItemInterval)
    },
    delay (s) {
      return new Promise((resolve, reject) => {
        this.removeItemInterval = setTimeout(resolve, s)
      })
    }
  }
}
</script>
<style lang="scss" scoped>
@import "./style.scss";
</style>
