import Vue from 'vue'
import Router from 'vue-router'

import Layout from '../pages/Layout/Layout'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      redirect: '/Login',
      hidden: false,
      meta: {
        name: '主页'
      },
    }, 
    {
      path: '/Login',
      name: 'Login',
      hidden: false,
      meta: {
        name: '登录'
      },
      component: () => import('../pages/Login/Login'),
    },
    {
      path: '/console',
      name: 'Console',
      redirect: "/home",
      hidden: true,
      meta: {
        name: '主页',
        icon: 'home'
      },
      component: Layout,
      children: [
        {
          path: "/home",
          name: "Home",
          hidden: true,
          meta: {
            name: '人脸后台管理系统'
          },
          component: () => import("../pages/Home/Home")
        }
      ]
    },
    {
      path: '/RealTM',
      name: 'RealTimeMonitoring',
      hidden: true,
      meta: {
        name: '实时监控',
        icon: 'camera'
      },
      component: Layout,
      children: [
        {
          path: "/Cameralist",
          name: "Cameralist",
          hidden: true,
          meta: {
            name: '摄像头列表'
          },
          component: () => import("../pages/RealTimeMonitoring/Components/CameraList")
        },
        {
          path: "/AreaView",
          name: "AreaView",
          hidden: true,
          meta: {
            name: '区域查看'
          },
          component: () => import("../pages/RealTimeMonitoring/Components/AreaView")
        },
        {
          path: "/HighPoint",
          name: "HighPoint",
          hidden: true,
          meta: {
            name: '高点动态识别'
          },
          component: () => import("../pages/RealTimeMonitoring/Components/HighPoint")
        },
        {
          path: "/FaceRecognition",
          name: "FaceRecognition",
          hidden: true,
          meta: {
            name: '终端人脸识别'
          },
          component: () => import("../pages/RealTimeMonitoring/Components/FaceRecognition")
        }
      ]
    },
    {
      path: '/GateView',
      name: 'GateView',
      hidden: true,
      meta: {
        name: '闸机查看',
        icon: 'robot'
      },
      component: Layout,
      children: [
        {
          path: "/GateViewing",
          name: "GateViewing",
          hidden: true,
          meta: {
            name: '闸机查看'
          },
          component: () => import("../pages/GateView/Components/GateViewing")
        }
      ]
    },
    {
      path: '/TravalView',
      name: 'TravalView',
      hidden: true,
      meta: {
        name: '轨迹查看',
        icon: 'travel'
      },
      component: Layout,
      children: [
        {
          path: "/TravalViewing",
          name: "TravalViewing",
          hidden: true,
          meta: {
            name: '轨迹查看'
          },
          component: () => import("../pages/TravelView/Components/TravalViewing")
        }
      ]
    },
    {
      path: '/HeatMapView',
      name: 'HeatMapView',
      hidden: true,
      meta: {
        name: '热力图查看',
        icon: 'heatmap'
      },
      component: Layout,
      children: [
        {
          path: "/HeatMapViewing",
          name: "HeatMapViewing",
          hidden: true,
          meta: {
            name: '热力图查看'
          },
          component: () => import("../pages/HeatMapView/Components/HeatMapViewing")
        }
      ]
    },
    {
      path: '/BusinessDraw',
      name: 'BusinessDraw',
      hidden: true,
      meta: {
        name: '企业画像',
        icon: 'business'
      },
      component: Layout,
      children: [
        {
          path: "/BusinessDrawViewing",
          name: "BusinessDrawViewing",
          hidden: true,
          meta: {
            name: '企业画像查看'
          },
          component: () => import("../pages/BusinessDraw/Components/BusinessDrawViewing")
        }
      ]
    },
    {
      path: '/FaceSearch',
      name: 'FaceSearch',
      hidden: true,
      meta: {
        name: '人脸检索',
        icon: 'face'
      },
      component: Layout,
      children: [
        {
          path: "/FaceSearching",
          name: "FaceSearching",
          hidden: true,
          meta: {
            name: '人脸检索'
          },
          component: () => import("../pages/FaceSearch/Components/FaceSearching")
        }
      ]
    }

  ]
})
