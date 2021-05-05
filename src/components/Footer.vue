<template>
  <div class="footer">
    <div class="footer-inner">
      <ul class="footer-list">
        <li class="footer-item">
          <dl class="footer-boxList">
            <dt class="footer-boxItem_ttl"><a href="/about/" class="footer-itemLink">合伙团队</a></dt>
            <dd class="footer-boxItem">
              <a href="/about#one" class="footer-boxItemLink">> 管理团队</a>
            </dd>
            <dd class="footer-boxItem">
              <a href="/about#two" class="footer-boxItemLink">> 红杉中国</a>
            </dd>
          </dl>
        </li>
        <li class="footer-item">
          <dl class="footer-boxList">
            <dt class="footer-boxItem_ttl"><a href="#" class="footer-itemLink">发展曲线</a></dt>
          </dl>
        </li>
        <li class="footer-item">
          <dl class="footer-boxList">
            <dt class="footer-boxItem_ttl"><a href="#" class="footer-itemLink">被投企业</a></dt>
          </dl>
        </li>
      </ul>
      <!-- <div class="footer_logo">
        <a href="https://ryohin-keikaku.jp/" target="_blank" class="footer_logoLink">
          <img src="/jp/wp-content/themes/careers_jp/recruit/assets/images/logo02.png" class="footer_logoImg">
        </a>
      </div> -->
      <p class="footer_copyright">Copyright ©Jetfuel information company, Ltd.</p>
    </div>
  </div>
</template>
<style lang="scss">
p {
  margin: 0;
  padding: 0;
}
.footer-list {
  width: 100%;
  padding-bottom: 20px;
  display: inline-flex;
  justify-content: center;
  .footer-item {
    width: 25%;
    max-width: 200px;
    dt, dd {
      > a {
        transition: .2s;
        text-decoration: none;
        cursor: pointer;
        color: #666;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
      }
    }
    dt {
      font-size: 1rem;
      margin-bottom: 10px;
    }
    dd {
      font-size: 0.8rem
    }
  }
}
</style>>
