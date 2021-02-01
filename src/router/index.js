import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../components/Home/Home.vue'

const routes =
[
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/categories',
        name: 'Categories',
        component: () => import( /* webpackChunkName: "about" */ '../components/Categories/Categories' )
    },
    {
        path: '/category/:category',
        name: 'Category',
        component: () => import( '../components/Category/Category' )
    },
    {
        path: '/item/:item',
        name: 'Item',
        component: () => import( '../components/Item/Item' )
    },
    {
        path: '/store/:store',
        name: 'Store',
        component: () => import( '../components/Store/Store' )
    },

    {
        path: '/register',
        name: 'Register',
        component: () => import( '../components/Register/register' )
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import( '../components/Login/login' )
    },
    {
        path: '/account',
        name: 'Account',
        component: () => import( '../components/Account/Account' )
    },
    {
        path: '/cart',
        name: 'Cart',
        component: () => import( '../components/Cart/Cart' )
    },
    {
        path: '/wishlist',
        name: 'Wishlist',
        component: () => import( '../components/Wishlist/Wishlist' )
    },
    {
        path: '/orders',
        name: 'Orders',
        component: () => import( '../components/Orders/Orders' )
    },
    {
        path: '/order-history',
        name: 'OrderHistory',
        component: () => import( '../components/OrderHistory/OrderHistory' )
    },
    {
        path: '/messages',
        name: 'Messages',
        component: () => import( '../components/Messages/Messages' )
    },
    {
        path: '/stores',
        name: 'Stores',
        component: () => import( '../components/Stores/Stores' )
    },
    {
        path: '/coupons',
        name: 'Coupons',
        component: () => import( '../components/Coupons/Coupons' )
    },
    {
        path: '/buyer-protection',
        name: 'BuyerProtection',
        component: () => import( '../components/BuyerProtection/BuyerProtection' )
    },
    {
        path: '/help',
        name: 'Help',
        component: () => import( '../components/Help/Help' )
    },

    {
        path: '/customer-service',
        name: 'CustomerService',
        component: () => import( '../components/CustomerService/CustomerService' )
    },
    {
        path: '/seller-information',
        name: 'SellerInformation',
        component: () => import( '../components/SellerInformation/SellerInformation' )
    },
    {
        path: '/product-recalls',
        name: 'ProductRecalls',
        component: () => import( '../components/ProductRecalls/ProductRecalls' )
    },
    {
        path: '/faq',
        name: 'Faq',
        component: () => import( '../components/Faq/Faq' )
    },
    {
        path: '/contacts',
        name: 'Contacts',
        component: () => import( '../components/Contacts/Contacts' )
    },
    {
        path: '/user-agreement',
        name: 'UserAgreement',
        component: () => import( '../components/UserAgreement/UserAgreement' )
    },
    {
        path: '/privacy-policy',
        name: 'PrivacyPolicy',
        component: () => import( '../components/PrivacyPolicy/PrivacyPolicy' )
    },
    {
        path: '/terms-and-conditions',
        name: 'TermsAndConditions',
        component: () => import( '../components/TermsAndConditions/TermsAndConditions' )
    },
    {
        path: '/disputes-and-reports',
        name: 'DisputesAndReports',
        component: () => import( '../components/DisputesAndReports/DisputesAndReports' )
    },
    {
        path: '/orders-returns',
        name: 'OrdersReturns',
        component: () => import( '../components/OrdersReturns/OrdersReturns' )
    },
    {
        path: '/shipping',
        name: 'Shipping',
        component: () => import( '../components/Shipping/Shipping' )
    },
    {
        path: '/payment-policies',
        name: 'PaymentPolicies',
        component: () => import( '../components/PaymentPolicies/PaymentPolicies' )
    },

    {
        path: '/about-juasoonline',
        name: 'AboutJuasoonline',
        component: () => import( '../components/AboutJuasoonline/AboutJuasoonline' )
    },
    {
        path: '/career',
        name: 'Career',
        component: () => import( '../components/Career/Career' )
    },
    {
        path: '/sell-on-juasoonline',
        name: 'SellOnJuasoonline',
        component: () => import( '../components/SellOnJuasoonline/SellOnJuasoonline' )
    },
    {
        path: '/blog',
        name: 'Blog',
        component: () => import( '../components/Blog/Blog' )
    },
    {
        path: '/invest-relation',
        name: 'InvestRelation',
        component: () => import( '../components/InvestRelation/InvestRelation' )
    },
    {
        path: '/mission-and-vision',
        name: 'MissionAndVision',
        component: () => import( '../components/MissionAndVision/MissionAndVision' )
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router