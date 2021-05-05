<template>
  <div class="develop">
    <div class="concept" :style="{'display': isShow ? 'none' : 'block'}">
      <div class="header-nav g-img head-img">
        <div>
          <h1>新闻&活动</h1>
          <p>红杉平台: 在此可定期阅览最新的消息与动态新闻</p>
        </div>
      </div>
      <section class="g-word list">
        <div class="team-holder row">
          <div v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="10">
            <div v-for="(item, key) in listData" :key="key" :name="item.name" class="team-member">
              <span class="item">{{item.title}}</span>
              <h1 class="item">{{item.content}}</h1>
              <div class="item" @click="isShow = true">
                <span>了解更多</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <transition name="fade">
        <div class="loading" v-show="busy">
          <div class="spinner-grow text-primary" role="status">
            <span class="sr-only">Loading...</span>
          </div>
        </div>
      </transition>
      <Footer class="footer-info g-img"></Footer>
    </div>
    <div class="more" :class="{'showDetail': isShow}">
      <div class="header-nav fix">
        <img class="icon" @click="isShow = false" src="@/assets/icons/x-circle-fill.svg" alt="" width="30" height="30" title="Bootstrap">
        <!-- <font-awesome-icon class="icon" icon="chevron-down" @click="isShow = false" /> -->
        <div>
          <h1>红杉创始人Don Valentine逝世 | 传奇终将永存</h1>
        </div>
      </div>
      <div class="more-content">
        <p class="image" style="opacity: 1;">
          <img src="https://d33wubrfki0l68.cloudfront.net/b0b63a16ef62d208f38bd7deefb0a4ce4ea35f99/a8390/img/c/don-valentine-4.png" width="300">
        </p>
        <ul>
          <li>今天，红杉资本创始人、铸就硅谷传奇的领袖之一Don Valentine（唐•瓦伦丁）在加州伍德赛德的家中去世，享年87岁。作为红杉的创始人，他在他的家人、朋友和同事心中留下了深刻的印记，他的精神将长存于众多投资红杉的慈善公益机构、20世纪后半叶伟大科技公司的领袖和创始人心中。我们向他的夫人——风雨同舟58年的妻子瑞秋，他的三个孩子克里斯蒂安、马克和希拉里，和七个孙辈致以最深切的慰问。</li>
          <li>Don的一生与硅谷的发展交织在一起。他1932年出生于纽约，在福特汉姆大学学习化学，20世纪50年代中期搬到南加州，加入了蓬勃发展的航空航天业，成为雷神公司的销售工程师。他意识到当时年轻的半导体行业中心在更北的地方，于是搬到旧金山半岛加入仙童半导体公司，这里后来也是英特尔、AMD和美国国家半导体公司的发祥地，孕育了蓬勃发展的小型计算机、个人电脑和互联网产业。</li>
          <li>在仙童半导体工作的7年间，他建立了行业最具竞争力的销售团队。之后，他加入了美国国家半导体公司，担任销售和市场副总裁。在这段时间，美国国家半导体公司以强大的销售和运营能力蜚声业内，并成为领先的模拟电路供应商。</li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import Footer from '@/components/Footer'
export default {
  name: 'develop-page',
  components: {
    Footer
  },
  data () {
    return {
      isShow: false,
      scrollTop: '0',
      count: 0,
      busy: false,
      listData: [
        { title: '新闻', content: '红杉创始人Don Valentine逝世 | 传奇终将永存' },
        { title: '观点', content: '全棉时代李建全：创业是一场没有终点的马拉松 | 红杉七问之谈' },
        { title: '观点', content: '红杉苏凯：“名词”背后的创新与趋势 | 投资人说' },
        { title: '观点', content: '红杉资本顾翠萍：死磕、不纠结和百分百投入 | 红杉七问之谈' }
      ],
      images: [
        { title: '观点', content: '红杉资本迈克尔·莫里茨和他的创投智慧 | 投资人说' },
        { title: '观点', content: '红杉资本孙谦：Follow your heart不是一句正确的废话 | 红杉七问之谈' },
        { title: '观点', content: '红杉资本翟佳：那些顶级创业者的共同特质 | 红杉七问之谈' },
        { title: '观点', content: '燃石汉雨生：创业始于兴趣，成于管理，壮大于敬畏生命 | 红杉七问之谈' },
        { title: '观点', content: '周逵：投资创新和投资增长，助力中国新经济产业发展 | 投资人说' },
        { title: '观点', content: '红杉资本曹曦：投资是用“想赢”的心态，对自己的认知“下注” | 投资人说' },
        { title: '观点', content: '红杉中国郭山汕：投资最难的是，投对了且投资逻辑也是对的 | 投资人说' },
        { title: '观点', content: '祝贺蘑菇街、腾讯音乐成功登陆美股，红杉中国一周内喜迎两家被投企业上市' },
        { title: '观点', content: '同行，会更有力量 | 2017-2018“耶鲁-红杉领导力中心”项目圆满结业' }
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
    },
    loadMore () {
      if (this.count >= this.images.length) return
      this.busy = true
      setTimeout(() => {
        for (var i = 0, j = 1; i < j; i++) {
          this.listData.push(this.images[this.count])
          this.count++
        }
        console.log(this.data)
        this.busy = false
      }, 1000)
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

.develop {
  overflow: auto; //这里overflow:scroll也可以
  min-height: 480px;
  min-width: 320px;
  width: 100%;
}

.more {
  overflow: scroll;
  z-index: 99;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 100%;
  // transform: scale(1,1);
  transition: all  0.3s ease-in-out;
  .image {
    padding: 50px 20px;
    img {
      max-width: 768px;
      width: 100%;
    }
  }
  .more-content {
    ul {
      padding: 10px;
      max-width: 768px;
      text-align: center;
      margin: 0 auto;
    }
    li {
      margin: 40px 0;
    }
  }
}

.showDetail {
  background-color: #fff;
  top: 0 !important;
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
  &.fix {
    .icon {
      opacity: 0.6;
      position: absolute;
      top: 10px;
      right: 10px;
    }
    div {
      padding: 0 10px;
    }
    h1 {
      font-size: 2rem;
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
  width: 100%;

  margin: 0 auto;
  // padding-bottom: 10px;
  // overflow: auto;
  min-height: 100%;
  line-height: 0;
  .team-member {
    vertical-align: top;
    height: 400px;
    width: 100%;
    padding: 30px 0;
    // border-bottom: 1px solid #2d292a;
    box-sizing: border-box;
    text-align: left;
    position: relative;
    display: inline-block;
    box-sizing: border-box;
    &:nth-child(odd) {
      background: url(https://www.sequoiacap.com/img/Sequoia-Build-Textures_Black-rough.jpg);
      background-size: cover;
      div {
        &:hover {
          // border: 1px solid #646864;
          color: #2d292a;
          background-color: #fff;
        }
      }
    }
    &:nth-child(even) {
      background: url(https://www.sequoiacap.com/img/Sequoia-Build-Textures_Green-Dot.jpg);
      background-size: cover;
      div {
        &:hover {
          color: #50b748;
          background-color: #fff;
        }
      }
    }
    .item {
      display: block;
      text-align: center;
      margin: 0 auto;
      color: #fff;
    }
    > span {
      height: 20px;
      padding: 50px 0;
    }
    > h1 {
      padding: 50px 0;
      font-size: 2rem;
    }
    div {
      cursor: pointer;
      width: 100px;
      height: 40px;
      border: 1px solid #fff;
      transition: all 0.5s;
      // &:hover {
      //   // border: 1px solid #646864;
      //   color: #169948;
      //   background-color: #fff;
      // }
      > span {
        height: 40px;
        line-height: 40px;
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
