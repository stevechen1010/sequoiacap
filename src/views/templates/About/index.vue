<template>
  <div class="about">
    <div class="content-detail">
      <div class="team" :class="{'active': isActive}">
        <div class="header-nav g-img head-img">
          <ul>
            <li>
              <a href="#one" @click="scrollTop = 64">管理团队</a>
            </li>
            <li>
              <a href="#two" @click="scrollTop = 64">红杉中国</a>
            </li>
          </ul>
        </div>
        <section class="g-word word">
          <p>我们从早期就与创业企业成为合作伙伴。面对创业企业在初创阶段中的坎坷与波折，我们感同身受、悉心相伴，帮助创始团队从零起步，逐渐形成自身独有的企业 DNA。我们是那些探索资深发展道路的初创期企业和寻求长足发展的成长型企业的合作伙伴，助力他们发展成为产业界的「参天大树」。</p>
        </section>
        <section class="g-img img-a"></section>
        <section class="g-word list" id="one">
          <div class="team-holder row">
            <div v-for="(item, key) in images" :key="key" :name="item.name" class="team-member px-0 col-12 col-sm-6 col-lg-4 col-xl-3">
              <img :src="item.url">
            </div>
          </div>
        </section>
        <section class="g-word word" id="two">
          <p>
            <p>红杉资本始终致力于帮助创业者成就基业长青的伟大公司，为成员企业带来丰富的全球资源和宝贵的历史经验。47 年来，红杉资本投资了众多创新企业和产业潮流的领导者。</p>
            <p>红杉资本中国基金作为「创业者背后的创业者」，专注于科技/传媒、医疗健康、消费品/服务、工业科技四个方向的投资机遇。</p>
            <p>十四年来，红杉资本中国基金投资了超过 500 家具有鲜明技术特征、创新商业模式、具备高成长性和高发展潜力的企业。</p>
            <p>欢迎您关注红杉资本微信订阅号，请搜索「红杉汇」或 Sequoiacap</p>
            <p>如有融资计划，请将您的信件和商业计划书发送至 bpchina@sequoiacap.com 我们会悉心阅读并尽快予以回复。</p>
            <div class="qr-container" style="visibility: visible; ">
              <img class="qr-image" src="https://d33wubrfki0l68.cloudfront.net/efc23d87cdd1b95eda5c14655d58d484cbc93852/9d475/img/c/sequoia-china-wechat-qrcode-1024x1024.jpg">
            </div>
        </section>
        <Footer class="footer-info g-img"></Footer>
        <!-- <section class="footer-info g-img"></section> -->
      </div>
      <div class="article" :class="{'active': !isActive}"></div>
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
      isActive: true,
      scrollTop: '0',
      images: [
        { url: require('@/assets/image/team/p1.jpg'), name: '曹曦' },
        { url: require('@/assets/image/team/p2.jpg'), name: '富欣' },
        { url: require('@/assets/image/team/p3.jpg'), name: '郭山汕' },
        { url: require('@/assets/image/team/p4.jpg'), name: '计越' },
        { url: require('@/assets/image/team/p5.jpg'), name: '刘星' },
        { url: require('@/assets/image/team/p6.jpg'), name: '陆潇波' },
        { url: require('@/assets/image/team/p7.jpg'), name: '浦晓燕' },
        { url: require('@/assets/image/team/p8.jpg'), name: '沈南鹏' },
        { url: require('@/assets/image/team/p9.jpg'), name: '孙谦' },
        { url: require('@/assets/image/team/p10.jpg'), name: '王恺' },
        { url: require('@/assets/image/team/p11.jpg'), name: '杨云霞' },
        { url: require('@/assets/image/team/p12.jpg'), name: '叶小慧' },
        { url: require('@/assets/image/team/p13.jpg'), name: '郑庆生' },
        { url: require('@/assets/image/team/p14.jpg'), name: '周逵' },
        { url: require('@/assets/image/team/p15.jpg'), name: '邹家佳' },
        { url: require('@/assets/image/team/p16.jpg'), name: '顾翠萍' },
        { url: require('@/assets/image/team/p17.jpg'), name: '翟佳' },
        { url: require('@/assets/image/team/p18.jpg'), name: '曹弋博' },
        { url: require('@/assets/image/team/p19.jpg'), name: '冯馨' },
        { url: require('@/assets/image/team/p20.jpg'), name: '张联庆' }
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
    console.log(this.scrollTop)
  },
  methods: {
    handleScroll () {
      this.scrollTop = window.scrollY || window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0
      console.log(this.scrollTop) // 页面滚动距离
    }
  }
}
</script>
<style lang="scss" scoped>
ul, li, p {
  letter-spacing: 2px;
}
.header-nav {
  position: relative;
  z-index: 6;
  opacity: 1;
  background-image: url(https://d33wubrfki0l68.cloudfront.net/img/97a76c037453e9facc0b0dd856c6755264a2a1bb/grid-bg-1.jpg);
  background-size: cover;
  padding: 160px 0 110px 0;
  width: 100%;
  ul {
    width: 100%;
    display: flex;
    justify-content: center;
    position: relative;
    cursor: pointer;
    li {
      cursor: pointer;
      padding: 0 40px;
      &:hover {
        color: #0d7e5c;
      }
      a {
        font-family: "Gotham SSm A","Gotham SSm B",Helvetica,Arial,"Microsoft Yahei",SimSun;
        font-weight: bold;
        color: #2d292a;
        text-decoration: none;
      }
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
  padding: 70px 0;
  max-width: 1680px;
  // height: 300px;
  margin: 0 auto;
  // padding-bottom: 10px;
  // overflow: auto;
  min-height: 100%;
  line-height: 0;
  .team-member {
    position: relative;
    cursor: pointer;
    display: inline-block;
    // background-image: url(../../../assets/image/team/p1.jpg);
    box-sizing: border-box;
    &:hover::after {
      opacity: 0.7;
    }
    &::after {
      display: block;
      content: attr(name);
      color: #fff;
      position: absolute;
      bottom: 0px;
      width: 100%;
      background-color: #2d292a;
      // color: #2d292a;
      padding: 30px;
      font-size: 2rem;
      opacity: 0;
      z-index: 1;
      -webkit-transition: opacity .3s;
      -moz-transition: opacity .3s;
      transition: opacity .3s;
    }
    img {
      width: 100%;
      opacity: 1;
      -webkit-transition: opacity .3s;
      -moz-transition: opacity .3s;
      transition: opacity .3s;
      &:hover {
        opacity: 0.8;
      }
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
    z-index: 2;
    padding: 80px 20px;
    max-width: 700px;
    text-align: left;
    .qr-container {
      text-align: center;
      margin: 20px 0;
    }
    .qr-image {
      max-width: 180px;
    }
  }
  &.list {
    width: 100%;
    z-index: 2;
  }
}

ul, li {
  margin: 0px;
  padding: 0px;
  list-style: none;
}
#one , #two {
  z-index: 6;
}
.about {
  overflow: auto; //这里overflow:scroll也可以
  min-height: 480px;
  min-width: 320px;
  width: 100%;
}

.content-detail {
  min-height: 480px;
  .team {
    width: 100%;
    display: none;
    &.active {
      display: block;
    }
    // .team-concept {

    // }
  }
  .article {
    width: 100%;
    display: none;
    &.active {
      display: block;
    }
  }
}
</style>
