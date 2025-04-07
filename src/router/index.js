import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import firstcompontents from '@/components/firstcompontents'
// import secondpage from '@/components/secondpage'
import about from '@/components/about'
import partyStudy from '@/components/partyStudy'
import InformationCenter from '@/components/InformationCenter'
import InformationDisclosure from '@/components/InformationDisclosure'
import LovePublicity from '@/components/LovePublicity'
import Volunteering from '@/components/Volunteering'
import Certificate from '@/components/certificate'

import solution from '@/components/solution'
import customercase from '@/components/customercase'
import newsandinformation from '@/components/newsandinformation'
import contactus from '@/components/contactus'
import detail from '@/components/detail'
import certidetail from '@/components/certidetail'

/*  */
import three from '@/components/three'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
    },
    {
      path: '/about',
      name: 'about',
      component: about,
    },
    // 党建中心
    {
      path: '/partyStudy',
      name: 'partyStudy',
      component: partyStudy,
    },
    // 资讯中心
    {
      path: '/InformationCenter',
      name: 'InformationCenter',
      component: InformationCenter,
    },
    // {
    //   path: '/solution',
    //   name: 'solution',
    //   component: solution,
    // },

    // 基金会活动
    {
      path: '/customercase',
      name: 'customercase',
      component: customercase,
    },
    /* 慈善项目 */
    {
      path: '/newsandinformation',
      name: 'newsandinformation',
      component: newsandinformation,
    },
    /* 信息公开 */
    {
      path: '/InformationDisclosure',
      name: 'InformationDisclosure',
      component: InformationDisclosure,
    },
    /* 爱心公示 */
    {
      path: '/LovePublicity',
      name: 'LovePublicity',
      component: LovePublicity,
    },
    /* 志愿服务 */
    {
      path: '/Volunteering',
      name: 'Volunteering',
      component: Volunteering,
    },
    /* 电子证书查询 */
    {
      path: '/Certificate',
      name: 'Certificate',
      component: Certificate,
    },
    /* 联系我们 */
    {
      path: '/contactus',
      name: 'contactus',
      component: contactus,
    },
    /* 详情页 */
    {
      path: '/detail',
      name: 'detail',
      component: detail,
    },
    /* 证书详情页 */
    {
      path: '/certidetail',
      name: 'certidetail',
      component: certidetail,
    }
    // {
    //   path: '/three',
    //   name: 'three',
    //   component: three,
    // },
  ],
})
