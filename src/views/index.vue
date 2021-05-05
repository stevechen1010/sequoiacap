<template>
  <div id="app-container">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <button class="hamburger-menu smallMenu" @click="isShow = !isShow">
      <span class="icon-bar" :class="{'one': isShow}"></span>
      <span class="icon-bar" :class="{'two': isShow}"></span>
      <span class="icon-bar" :class="{'three': isShow}"></span>
    </button>
    <div class=" header container-fluid">
      <div class="title" v-bind:style="{'position':titlePositon,'background-color': titleColor,'border-bottom':titleBorder }">
        <router-link :to="{name: 'welcome'}" class="logoLink"></router-link>
        <ul class="largeMenu">
          <li class="item">
            <a href="/about" class="link">合伙团队</a>
            <!-- <router-link :to="{name: 'about'}" class="link">合伙团队</router-link> -->
          </li>
          <li class="item">
            <a href="/develop" class="link">发展曲線</a>
          </li>
          <li class="item">
            <a href="/company" class="link">被投企业</a>
            <!-- <router-link :to="{name: 'company'}" class="link">被投企业</router-link> -->
          </li>
          <li class="item" @click="isActive = !isActive">
            <font-awesome-icon icon="ellipsis-h" />
          </li>
        </ul>
        <!-- <ul class="smallMenu">
          <li class="item" @click="isShow = !isShow">
            <font-awesome-icon icon="align-justify" />
          </li>
        </ul> -->
      </div>
      <div class="large-header-nav" :class="{'active': isActive}">
        <div class="header-image"></div>
        <ul>
          <li>
            <a>工作机会</a>
          </li>
          <li>
            <a>联系我们</a>
          </li>
          <li>
            <a>法律</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="dialog-nav smallMenu" :class="{'left-show': isShow}"></div>
    <div class="mobile-nav smallMenu" :class="{'right-show': isShow}">
      <ul @click="isShow = false">
        <li>
          <a href="/about#">
            <p class="cn">合伙团队</p>
            <p class="en">Partnership team</p>
          </a>
        </li>
        <li>
          <a href="/develop#">
            <p class="cn">发展曲线</p>
            <p class="en">Development curve</p>
          </a>
        </li>
        <li>
          <a href="/company#">
            <p class="cn">被投企业</p>
            <p class="en">Investee</p>
          </a>
        </li>
        <li>
          <p class="cn">工作机会</p>
          <p class="en">Career Opportunities</p>
        </li>
        <li>
          <p class="cn">联系我们</p>
          <p class="en">contact us</p>
        </li>
        <li>
          <p class="cn">法律</p>
          <p class="en">law</p>
        </li>
      </ul>
    </div>
    <transition name="fade" mode="out-in">
      <router-view/>
    </transition>
  </div>
</template>
<script>
export default {
  data () {
    return {
      titlePositon: 'static',
      titleColor: 'transparent',
      titleBorder: '0',
      isActive: false, // 電腦板extra nav 是否呈現
      isShow: false // 手机版nav是否呈现
    }
  },
  destroyed () {
    this.isShow = false
  }
}
</script>
<style lang="scss">
@import 'node_modules/bootstrap/scss/bootstrap';
@import 'node_modules/bootstrap-vue/src/index.scss';

.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.5s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0
}

ul, li, p {
  margin: 0px;
  padding: 0px;
  list-style: none
}
body {
  font-family: "Gotham SSm A","Gotham SSm B",Helvetica,Arial,"Microsoft Yahei",SimSun;
  width: 100%;
  height: 100vh;
}

.hamburger-menu {
  position: fixed;
  top: 28px;
  right: 28px;
  z-index: 20;
  background: none;
  border: none;
  display: inline-block;
  .icon-bar{
    transition: transform .25s ease-in-out;
    // transition: opacity .5s ease-in-out;
    background-color: #2d292a;
    display: block;
    height: 2px;
    margin: 0 auto 6px;
    width: 24px;
    transform-origin: left;
    opacity: 1;
  }
  .one {
    transform-origin: left;
    transform: rotate(42deg);
  }
  .two {
    opacity: 0;
  }
  .three {
    transform-origin: left;
    transform: rotate(-42deg);
  }
}

.left-show {
  transform: translateX(100%);
}
.right-show {
  transform: translateX(-100%);
}

.dialog-nav {
  z-index: 18;
  position: fixed;
  top: 0;
  left: -100%;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  padding: 75px 0 0 25px;
  width: 80%;
  max-width: 768px;
  height: 100%;
  background-color: #000;
  opacity: 0.5;
  transition: transform .5s ease-in-out;
}
.mobile-nav {
  z-index: 19;
  position: fixed;
  top: 0;
  left: 100%;
  display: flex;
  align-items: top;
  box-sizing: border-box;
  padding: 65px 35px 0 35px;
  width: 80%;
  max-width: 480px;
  height: 100%;
  background-color: #fff;
  transition: transform .5s ease-in-out;
  > ul {
    width: 100%;
    text-align: left;
  }
  li {
    letter-spacing: 3px;
    border-bottom: 1px solid #eee;
    padding: 20px 0;
    > a {
      color: #241913;
    }
    .en {
      margin-top: 5px;
      font-size: 0.6rem;
      text-transform: uppercase;
      font-family: "Noto Sans CJK JP","Noto Sans JP",sans-serif;
    }
  }
}
.active {
  opacity: 1 !important;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #666;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.largeMenu {
  display: block;
}

.smallMenu {
  display: none;
}

#app-container {
  height: 100vh;
  width: auto;
}

.header {
  margin: 0px;
  padding: 0px;
  background-color: white;
  position: fixed;
  top: 0px;
  z-index: 7;
  min-height: 70px;
  height: 9%;
}

.title {
  display: flex;
  align-items: center;
  height: 100%;
  line-height: 100%;
  padding: 20px 0px;
  width: 100%;
  position: fixed;

  display: inline-flex;
  justify-content:space-between;
  ul {
    font-weight: 500;
    font-size: 1.2rem;
    list-style: none;
    li {
      color: #666;
      cursor: pointer;
      display: inline;
      padding-right: 2em;
      &:hover {
        color: #0d7e5c;
        transition-property: color;
        transition-duration: 0.1s;
        transition-timing-function: linear;
        text-decoration: underline;
      }
      &:active {
        text-decoration: underline
      }
    }
  }
  .logoLink {
    background-image: url(../assets/image/logo.png);
    background-size: 70%;
    background-repeat: no-repeat;
    margin-left: 1em;
    height: 70%;
    width: 200px;
    // height: 100%;
    &:hover {
      cursor: pointer;
    }
  }
}

.large-header-nav {
  font-weight: 500;
  font-size: 1.2rem;
  color: #666;
  transition: all 1s cubic-bezier(.19,1,.22,1);
  opacity: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  line-height: 100%;
  height: 252px;
  width: 100%;
  position: fixed;
  background-color: #f3f4f5;
  padding: 0 0 0 20px;;
  &.active {
    transition: all 1s cubic-bezier(.19,1,.22,1);
  }
  .header-image {
    max-width: 320px;
    width: 25%;
    height: 200px;
    // padding: 20px;
    margin: 20px 40px;
    background-image: url('../assets/image/extra-img.jpg');
    background-size: cover;
  }
  ul {
    height: 200px;
    // min-width: 320px;
    max-width: 480px;
    // padding: 0 20px;
    width: 60%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    li {
      box-sizing: border-box;
      // border-right: 1px solid #666;
      width: 100%;
      // max-width: 140px;
      padding: 0 10px;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #fff;
      // line-height: 50px;
      height: 30%;
      line-height: 30%;
      margin: 5px 0;
      // &::after {
      //   margin: 20px 0;
      //   content: '';
      //   display: block;
      //   width: 80%;
      //   border-bottom: 1px solid #2d292a;
      // }
      // &:first-child {
      //   border-left: 0px solid #2d292a;
      // }
      &:hover {
        color: #0d7e5c;
        transition-property: color;
        transition-duration: 0.1s;
        transition-timing-function: linear;
        text-decoration: underline;
      }
      &:active {
        text-decoration: underline
      }
      cursor: pointer;
      // &:last-child {
      //   border-right: 0px solid #666;
      // }
    }
  }
}

.link {
  color: #666;
  &:hover {
    color: #42b983;
    font-weight: bold;
  }
}

@include media-breakpoint-down(sm) {
  .welcome {
    .font-small {
      font-size: 1rem !important;
    }
    .no-mobile {
      display: none !important;
    }
  }
  .company {
    .header-nav {
      p {
        display: none;
      }
    }
  }
  .develop {
    .more {
      overflow: scroll;
      .header-nav {
        &.fix {
          padding: 90px 0 20px 0 !important;
          h1 {
            font-size: 1.4rem !important;
          }
        }
      }
    }
    .team-holder {
      .team-member {
        h1 {
          font-size: 1.5rem !important;
        }
      }
    }
  }
  .largeMenu {
    display: none;
  }
  .smallMenu {
    display: block;
  }
  .large-header-nav {
    display: none;
  }
}

@include media-breakpoint-down(lg) {
  .banner {
    .aside-item {
      width: 100% !important;
    }
  }
}
</style>
