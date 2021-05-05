<template>
  <div class="company">
    <div class="concept">
      <div class="header-nav g-img head-img">
        <div>
          <h1>你们改变了世界, 世界也改变了你</h1>
          <p>红杉无时无刻不以被投企业大家庭为豪，因为这里生命力极其旺盛。希望将有更多人漫步在参天高耸的红杉林中，感受红杉大家庭的枝繁叶茂与五彩斑斓！</p>
        </div>
      </div>
      <!-- <section class="g-word word">
        <p>我们从早期就与创业企业成为合作伙伴。面对创业企业在初创阶段中的坎坷与波折，我们感同身受、悉心相伴，帮助创始团队从零起步，逐渐形成自身独有的企业 DNA。我们是那些探索资深发展道路的初创期企业和寻求长足发展的成长型企业的合作伙伴，助力他们发展成为产业界的「参天大树」。</p>
      </section> -->
      <!-- <section class="g-img img-a"></section> -->
      <section class="g-word list">
        <div class="team-holder row">
          <div v-for="(item, key) in images" :key="key" :name="item.name" class="team-member px-0 col-12 col-sm-6 col-lg-4 col-xl-3">
            <h5>{{item.name}}</h5>
          </div>
        </div>
      </section>
      <Footer class="footer-info g-img"></Footer>
      <!-- <section class="footer-info g-img"></section> -->
    </div>
  </div>
</template>
<script>
import Footer from '@/components/Footer'
export default {
  name: 'about-page',
  components: {
    Footer
  },
  data () {
    return {
      isHide: false,
      scrollTop: '0',
      images: [
        { url: require('@/assets/image/team/p1.jpg'), name: '360' },
        { url: require('@/assets/image/team/p2.jpg'), name: 'Airwallex' },
        { url: require('@/assets/image/team/p3.jpg'), name: 'ARMO' },
        { url: require('@/assets/image/team/p4.jpg'), name: 'Canva' },
        { url: require('@/assets/image/team/p5.jpg'), name: 'LOHO眼鏡生活' },
        { url: require('@/assets/image/team/p6.jpg'), name: 'PatPat' },
        { url: require('@/assets/image/team/p7.jpg'), name: 'URBANREVIVO' },
        { url: require('@/assets/image/team/p8.jpg'), name: 'VIPKID' },
        { url: require('@/assets/image/team/p9.jpg'), name: 'WME IMG China' },
        { name: '万和天宜' },
        { name: '万达电影' },
        { name: '东鹏瓷砖' },
        { name: '中和农信' },
        { name: '中持环保' },
        { name: '中曼石油' },
        { name: '中通快递' },
        { name: '乐凯撒比萨' },
        { name: '乡村基' },
        { name: '乾照光电' },
        { name: '乡村基' },
        { name: '云米' },
        { name: '亚缇克兰' },
        { name: '京东' },
        { name: '京东物流' },
        { name: '京东金融' },
        { name: '亿腾' },
        { name: '今天便利店' },
        { name: '优客工场' },
        { name: '体素科技' }
      ],
      positionX: '0px',
      positionY1: '0',
      positionY2: '400',
      positionY3: '800'
    }
  },
  mounted () {
    window.addEventListener('mousewheel', this.handleScroll)
    this.handleScroll()
  },
  methods: {
    handleScroll () {
      this.scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      console.log(this.scrollTop) // 页面滚动距离
    }
  }
}
</script>
<style lang="scss" scoped>
ul, li, h5 {
  margin: 0px;
  padding: 0px;
  list-style: none;
}

.company {
  overflow: auto; //这里overflow:scroll也可以
  min-height: 480px;
  min-width: 320px;
  width: 100%;
}
.header-nav {
  position: relative;
  z-index: 6;
  opacity: 1;
  background-image: url(https://d33wubrfki0l68.cloudfront.net/img/97a76c037453e9facc0b0dd856c6755264a2a1bb/grid-bg-1.jpg);
  background-size: cover;
  padding: 160px 0 40px 0;
  width: 100%;
  > div {
    width: 100%;
    display: flex;
    justify-content: center;
    position: relative;
    flex-direction: column;
    h1 {
      margin-bottom: 50px;
      color: #50b748;
    }
    p {
      padding: 0 20px;
    }
  }
}

.footer-info {
  background: #f3f3f3;
  padding: 55px 0 45px;
  max-height: 300px;
}

section {
  height: 50vh;
}

.team-holder {
  padding: 50px 50px;
  max-width: 1680px;
  // height: 300px;
  margin: 0 auto;
  // padding-bottom: 10px;
  // overflow: auto;
  min-height: 100%;
  line-height: 0;
  .team-member {
    // padding: 30px 0;
    // border-bottom: 1px solid #2d292a;
    box-sizing: border-box;
    text-align: left;
    position: relative;
    cursor: pointer;
    display: inline-block;
    box-sizing: border-box;
    &::after {
      margin: 20px 0;
      content: '';
      display: block;
      width: 80%;
      border-bottom: 1px solid #2d292a;
    }
    &:first-child {
      border-left: 0px solid #2d292a;
    }
  }
}

.g-img {
  background-attachment: fixed;
  background-size: cover;
  background-position: center center;
  &.head-img {
    background-image: url(https://d33wubrfki0l68.cloudfront.net/img/97a76c037453e9facc0b0dd856c6755264a2a1bb/grid-bg-1.jpg);
  }
  &.img-a {
    background-image: url(https://www.ameba-adpress.com/wp-content/uploads/2018/03/kv-02.jpg)
  }
  &.img-b {
    background-image: url(https://www.ameba-adpress.com/wp-content/uploads/2018/03/kv-01.jpg)
  }
}

.g-word {
  height: 100%;
  font-size: 15px;
  text-align: center;
  margin: 0 auto;
  display: block;
  font-family: "Gotham SSm A","Gotham SSm B",Helvetica,Arial,"Microsoft Yahei",SimSun;
  font-weight: 400;
  color: #2d292a;
  &.word {
    padding: 100px 20px;
    max-width: 700px;
    text-align: left;
  }
  &.list {
    width: 100%;
    z-index: 2;
  }
}
</style>
