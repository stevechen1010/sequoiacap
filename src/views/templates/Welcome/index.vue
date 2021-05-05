<template>
  <div class="welcome">
    <div id="bar-container"></div>
    <div class="main-container" :class="{ active: isActive }">
      <ul class="welcome-image img-fluid">
      </ul>
      <div class="headline">
        <div class="logo-icon">
          <img src="@/assets/image/logo-icon.png" alt="Logo" height="60" width="60">
        </div>
        <span class="font-small">创业者背后的创业者红杉中国致力于发掘和培育产业界的「参天大树」</span>
      </div>
    </div>
    <div class="footer container-fluid">
      <div class="footer-bottom">
        <div class="arrawline">
          <div class="tel">
            <a class="button button-lg button-block invert">
              <span class="font-content">Tel: 1234-567891</span>
            </a>
          </div>
          <div class="link">
            <a @click="$router.push({name: 'home'})" class="button button-lg button-block invert">
              <span class="font-content">继续 >></span>
            </a>
          </div>
        </div>
        <div class="arrawline no-mobile">
          <div class="news">
            <a @click="$router.push({name: 'home'})" class="button button-lg button-block invert">
              <span class="font-title">NEWS</span>
              <span class="font-date">2020/01/07</span>
              <span class="font-content">新成員:富欣 Caroline Fu，红杉资本中国基金合伙人。進駐</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'welcome',
  data () {
    return {
      isActive: false
    }
  },
  mounted () {
    setTimeout(() => {
      this.isActive = true
    }, 1000)
  }
}
</script>
<style lang="scss" scoped>
.button {
  cursor: pointer;
  display: block;
  width: 100%;
  height: 100%;
  line-height: 100%;
  &.invert {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    transition: color .25s ease-out;
    text-transform: uppercase;
    &:hover {
      background-color: #000;
      color: #fff;
      z-index: 1;
    }
    span {
      font-size: 1rem;
      margin: 0 10px;
      display: block;
      .font-title {
        font-weight: bold;
      }
    }
  }

}

.font-small {
  font-size: 1.8rem
}

ul, li {
  margin: 0;
  padding: 0;
}
.welcome {
  font-size: 18px;
  min-height: 700px;
  height: 100%;
  display: block;
  position: relative;
  overflow: hidden;
  top: 0px;
  .footer {
    width: 100%;
    max-width: 854px;
    display: flex;
    justify-content: center;
  }
  .footer-bottom {
    width: 100%;
    height: 20%;
    min-height: 160px;
    max-width: 854px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    position: absolute;
    bottom: 0;
    .arrawline {
      height: 50%;
      width: 100%;
      max-width: 854px;
      margin-top: 20px;
      font-family: sans-serif;
      font-size: 1rem;
      box-sizing: border-box;
      text-align: center;
      display: flex;
      justify-content: center;
      cursor: pointer;
      div {
        // border: 1px solid #464646;
        color: #fff;
        background-color: rgba(0,0,0, .5);
        height: 100%;
      }
      .news {
        width: 90%;
      }
      .tel {
        margin-right: 2%;
        width: 58%;
        display: inline-block;
      }
      .link {
        width: 30%;
        display: inline-block;
      }
    }
  }

}

#bar-container {
  margin: 20px;
  width: 400px;
  height: 8px;
}

.main-container {
  width: 100%;
  position: relative;
  height: 100%;
  opacity: 1;
  transform: scale(1,1);
  transition: all  6s linear;
  &.active {
    opacity: 1;
    transform:scale(1.1,1.1)
  }
  .headline {
    padding: 10%;
    height: 100%;
    width: 80%;
    position: fixed;
    top: 20%;
    left: 10%;
    color: white;
    z-index: 2;
    letter-spacing: .4rem;
    span {
      margin-top: 20%;
    }
    .logo-icon {
      margin-bottom: 20px;
    }
  }
}

ul {
  &.welcome-image {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    height: 100%;
    background-size: cover;
    background: #fff url('https://info.sanwacompany.co.jp/assets/images/pages/index/mv01_md.jpg') center center fixed no-repeat;
  }
}
</style>
