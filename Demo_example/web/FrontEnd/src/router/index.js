import Vue from 'vue'
import Router from 'vue-router'
import homepage from '@/pages/homepage'
import login from '@/pages/login'
import enterLoan from '@/pages/enterLoan'
import checkMyLoan from '@/pages/checkMyLoan'
import loan from '@/pages/loan'
import largeLoan from '@/pages/largeLoan'
import repay from '@/pages/repay'
import checkInvest from '@/pages/checkInvest'
import signup from '@/pages/signup'
import UserSpace from '@/pages/UserSpace'
import NormalCheck from '@/pages/NormalCheck'
import AdvancedCheck from '@/pages/AdvancedCheck'
import FinancialStanding from '@/pages/FinancialStanding'
import BasicInformation from '@/pages/BasicInformation'
import usermanage from '@/pages/usermanage'
import userdetail from '@/pages/userdetail'
import invest from '@/pages/invest'
import DoInvesting from '@/pages/DoInvesting'
import AlumniCheck from '@/pages/AlumniCheck'
import CrossCheck from '@/pages/CrossCheck'
import LoanInformation from '@/pages/LoanInformation'
import ProjectFavorite from '@/pages/ProjectFavorite'
import InvestInformation from '@/pages/InvestInformation'
import InvestEarnings from '@/pages/InvestEarnings'
import LoanStatistics from '@/pages/LoanStatistics'
import SchoolPerformance from '@/pages/SchoolPerformance'
import EnterVerify from '@/pages/EnterVerify'
import userverify from '@/pages/userverify'
import targetverify from '@/pages/targetverify'
import smalltargetcheck from '@/pages/smalltargetcheck'
import largetargetcheck from '@/pages/largetargetcheck'
import enterInvest from '@/pages/enterInvest'
import largeInvest from '@/pages/largeInvest'
import notice from '@/pages/notice'
import recommend from '@/pages/recommend'
import mesunderway from '@/pages/mesunderway'
import mesdone from '@/pages/mesdone'
import lost from '@/pages/lost'
import found from '@/pages/found'
import trade from '@/pages/trade'
import tradeMine from '@/pages/tradeMine'
import tradeGoing from '@/pages/tradeGoing'
import tradeFinished from '@/pages/tradeFinished'
import backAdminData from '@/pages/backAdminData'
import test from '@/pages/test'
import subjectManage from '@/pages/subjectManage'
import subjectManageDetail from '@/pages/subjectManageDetail'
import findPassword from '@/pages/findPassword'
import resetPassword from '@/pages/resetPassword'
import messageList from '@/pages/messageList'
import guide from '@/pages/guide'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '',
      component: homepage
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/enterLoan',
      name: 'enterLoan',
      component: enterLoan
    },
    {
      path: '/checkMyLoan',
      name: '/checkMyloan',
      component: checkMyLoan
    },
    {
      path: '/loan',
      name: 'loan',
      component: loan
    },
    {
      path: '/largeloan',
      name: 'largeLoan',
      component: largeLoan
    },
    {
      path: '/signup',
      name: 'signup',
      component: signup
    },
    {
      path: '/UserSpace',
      name: 'UserSpace',
      component: UserSpace
    },
    {
      path: '/UserSpace/repay',
      name: 'repay',
      component: repay
    },
    {
      path: '/UserSpace/checkInvest',
      name: 'checkInvest',
      component: checkInvest
    },
    {
      path: '/UserSpace/SchoolPerformance',
      name: 'SchoolPerformance',
      component: SchoolPerformance
    },
    {
      path: '/UserSpace/BasicInformation',
      name: 'BasicInformation',
      component: BasicInformation
    },
    {
      path: '/UserSpace/NormalCheck',
      name: 'NormalCheck',
      component: NormalCheck
    },
    {
      path: '/UserSpace/AdvancedCheck',
      name: 'AdvancedCheck',
      component: AdvancedCheck
    },
    {
      path: '/UserSpace/FinancialStanding',
      name: 'FinancialStanding',
      component: FinancialStanding
    },
    {
      path: '/UserSpace/AlumniCheck',
      name: 'AlumniCheck',
      component: AlumniCheck
    },
    {
      path: '/UserSpace/CrossCheck',
      name: 'CrossCheck',
      component: CrossCheck
    },
    {
      path: '/UserSpace/LoanInformation',
      name: 'LoanInformation',
      component: LoanInformation
    },
    {
      path: '/UserSpace/ProjectFavorite',
      name: 'ProjectFavorite',
      component: ProjectFavorite
    },
    {
      path: '/UserSpace/InvestInformation',
      name: 'InvestInformation',
      component: InvestInformation
    },
    {
      path: '/UserSpace/InvestEarnings',
      name: 'InvestEarnings',
      component: InvestEarnings
    },
    {
      path: '/UserSpace/LoanStatistics',
      name: 'LoanStatistics',
      component: LoanStatistics
    },
    {
      path: '/usermanage',
      name: 'usermanage',
      component: usermanage
    },
    {
      path: '/userdetail',
      name: 'userdetail',
      component: userdetail
    },
    {
      path:'/invest',
      name:'invest',
      component:invest
    },
    {
      path:'/DoInvesting',
      name:'DoInvesting',
      component:DoInvesting
    },
    {
      path:'/EnterVerify',
      name:'EnterVerify',
      component:EnterVerify
    },
    {
      path:'/userverify',
      name:'userverify',
      component:userverify
    },
    {
      path:'/targetverify',
      name:'tergetverify',
      component:targetverify
    },{
      path:'/smalltargetcheck',
      name:'smalltargetcheck',
      component:smalltargetcheck
    },
    {
      path:'/largetargetcheck',
      name:'largetargetcheck',
      component:largetargetcheck
    },
    {
      path:'/enterInvest',
      name:'enterInvest',
      component:enterInvest
    },
    {
      path:'/largeInvest',
      name:'largeInvest',
      component:largeInvest
    },{
      path:'/notice',
      name:'notice',
      component:notice
    },
    {
      path:'/recommend',
      name:'recommend',
      component:recommend
    },
    {
      path:'/notice/mesunderway',
      name:'mesunderway',
      component:mesunderway
    },
    {
      path:'/notice/mesdone',
      name:'mesdone',
      component:mesdone
    },
    {
      path:'/notice/lost',
      name:'lost',
      component:lost
    },
    {
      path:'/notice/found',
      name:'found',
      component:found
    },
    {
      path:'/trade',
      name:'trade',
      component: trade
    },
    {
      path:'/trade/mine',
      name:'tradeMine',
      component:tradeMine
    },
    {
      path:'/trade/going',
      name:'tradeGoing',
      component:tradeGoing
    },
    {
      path:"/trade/finished",
      name:'tradeFinished',
      component:tradeFinished
    },
    {
      path:'/backAdminData',
      name:'backAdminData',
      component:backAdminData
    },
    {
      path:'/test',
      name:'test',
      component:test
    },
    {
      path:'/subjectManage',
      name:'subjectManage',
      component:subjectManage
    },
    {
      path:'/subjectManageDetail',
      name:'subjectManageDetail',
      component:subjectManageDetail
    },
    {
      path:'/findPassword',
      name:'findPassword',
      component:findPassword
    },
    {
      path:'/resetPassword',
      name:'resetPassword',
      component:resetPassword
    },
    {
      path:'/messageList',
      name:'messageList',
      component:messageList
    },
    {
      path:'/guide',
      name:'guide',
      component:guide
    },


  ],
  mode:"history"
})
