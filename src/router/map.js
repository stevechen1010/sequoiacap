const routes = [
  {
    path: '/',
    redirect: { name: 'welcome' },
    component: () => import('@/views'),
    // 往後的page頁面都在此children添加
    children: [
      {
        path: '/',
        name: 'welcome',
        component: () => import('@/views/templates/Welcome')
      },
      {
        path: '/home',
        name: 'home',
        component: () => import('@/views/templates/Home'),
        meta: {
          breadcrumbName: '首頁'
        }
      },
      {
        path: '/about',
        name: 'about',
        component: () => import('@/views/templates/About'),
        meta: {
          breadcrumbName: '合伙团队'
        }
      },
      {
        path: '/company',
        name: 'company',
        component: () => import('@/views/templates/Company'),
        meta: {
          breadcrumbName: '被投企业'
        }
      },
      {
        path: '/develop',
        name: 'develop',
        component: () => import('@/views/templates/Develop'),
        meta: {
          breadcrumbName: '发展曲线'
        }
      }
    ]
  }
]

export default routes
