import { createRouter, createWebHistory } from 'vue-router'
import authentication from "@/store/authentication";

const routes =
[
    // User protected routes
    { path: '/login', name: 'Login', component: () => import( '../components/Dashboard/Login/login' ), beforeEnter:(to, from, next ) => { if ( authentication.isAuthenticated() ) { next({ name: 'Profile' }); } else { next() } } },
    { path: '/overview', name: 'Overview', component: () => import( '../components/Dashboard/Overview/Overview' ), beforeEnter:(to, from, next ) => { if ( !authentication.isAuthenticated() ) { next({ name: 'Login' }); } else { next() } } },
    { path: '/profile', name: 'Profile', component: () => import( '../components/Dashboard/Profile/Profile' ), beforeEnter:(to, from, next ) => { if ( !authentication.isAuthenticated() ) { next({ name: 'Login' }); } else { next() } } },
    { path: '/cart', name: 'Cart', component: () => import( '../components/Dashboard/Cart/Cart' ), beforeEnter:(to, from, next ) => { if ( !authentication.isAuthenticated() ) { next({ name: 'Login' }); } else { next() } } },
    { path: '/wishlist', name: 'Wishlist', component: () => import( '../components/Dashboard/Wishlist/Wishlist' ), beforeEnter:(to, from, next ) => { if ( !authentication.isAuthenticated() ) { next({ name: 'Login' }); } else { next() } } },
    { path: '/orders', name: 'Orders', component: () => import( '../components/Dashboard/Orders/Orders' ), beforeEnter:(to, from, next ) => { if ( !authentication.isAuthenticated() ) { next({ name: 'Login' }); } else { next() } } },
    { path: '/coupons', name: 'Coupons', component: () => import( '../components/Dashboard/Coupons/Coupons' ), beforeEnter:(to, from, next ) => { if ( !authentication.isAuthenticated() ) { next({ name: 'Login' }); } else { next() } } },
    { path: '/messages', name: 'Messages', component: () => import( '../components/Dashboard/Messages/Messages' ), beforeEnter:(to, from, next ) => { if ( !authentication.isAuthenticated() ) { next({ name: 'Login' }); } else { next() } } },
    { path: '/mystores', name: 'MyStores', component: () => import( '../components/Dashboard/MyStores/MyStores' ), beforeEnter:(to, from, next ) => { if ( !authentication.isAuthenticated() ) { next({ name: 'Login' }); } else { next() } } },

    { path: '/register', name: 'Register', component: () => import( '../components/Dashboard/Register/Register' ) },
    { path: '/code/resend', name: 'Resend', component: () => import( '../components/Dashboard/Resend/Resend' ) },
    { path: '/forgot-password', name: 'ForgotPassword', component: () => import( '../components/Dashboard/ForgotPassword/ForgotPassword' ), beforeEnter:(to, from, next ) => { if ( authentication.isAuthenticated() ) { next({ name: 'Account' }); } else { next() } } },

    // Buyers routes
    { path: '/order/:order_id/confirmation', name: 'OrderConfirmation', component: () => import( '../components/Site/Order/OrderConfirmation/OrderConfirmation' ), beforeEnter:( to, from, next ) => { if ( !authentication.isAuthenticated() ) { next({ name: 'Login' }); } else { next() } } },
    // { path: '/orders/confirmation', name: 'OrdersConfirmation', component: () => import( '../components/Site/OrderConfirmation/OrdersConfirmation' ) }, beforeEnter:(to, from, next ) => { if ( !authentication.isAuthenticated() ) { next({ name: 'Login' }); } else { next() } } },

    // Public routes
    { path: '/', name: 'Home', component: () => import( '../components/Site/Home/Home' ) },
    { path: '/categories', name: 'Categories', component: () => import( '../components/Site/Categories/Categories' ) },
    { path: '/category/:category/:slug', name: 'Category', component: () => import( '../components/Site/Category/Category' )},
    { path: '/item/:item', name: 'Item', component: () => import( '../components/Site/Item/Item' ) },
    { path: '/stores', name: 'Stores', component: () => import( '../components/Site/Stores/Stores' ) },
    { path: '/store/:store', name: 'Store', component: () => import( '../components/Site/Store/Store' ) },
    { path: '/brand/:brand', name: 'Brand', component: () => import( '../components/Site/Brand/Brand' ) },
    { path: '/buyer-protection', name: 'BuyerProtection', component: () => import( '../components/Site/BuyerProtection/BuyerProtection' ) },
    { path: '/help', name: 'Help', component: () => import( '../components/Site/Help/Help' ) },
    { path: '/customer-service', name: 'CustomerService', component: () => import( '../components/Site/CustomerService/CustomerService' ) },
    { path: '/seller-information', name: 'SellerInformation', component: () => import( '../components/Site/SellerInformation/SellerInformation' ) },
    { path: '/product-recalls', name: 'ProductRecalls', component: () => import( '../components/Site/ProductRecalls/ProductRecalls' ) },
    { path: '/404', name: '404', component: () => import( '../components/Site/404/404' ) },
    { path: '/faq', name: 'Faq', component: () => import( '../components/Site/Faq/Faq' ) },
    { path: '/contacts', name: 'Contacts', component: () => import( '../components/Site/Contacts/Contacts' ) },
    { path: '/user-agreement', name: 'UserAgreement', component: () => import( '../components/Site/UserAgreement/UserAgreement' ) },
    { path: '/privacy-policy', name: 'PrivacyPolicy', component: () => import( '../components/Site/PrivacyPolicy/PrivacyPolicy' ) },
    { path: '/terms-and-conditions', name: 'TermsAndConditions', component: () => import( '../components/Site/TermsAndConditions/TermsAndConditions' ) },
    { path: '/disputes-and-reports', name: 'DisputesAndReports', component: () => import( '../components/Site/DisputesAndReports/DisputesAndReports' ) },
    { path: '/orders-returns', name: 'OrdersReturns', component: () => import( '../components/Site/OrdersReturns/OrdersReturns' ) },
    { path: '/shipping', name: 'Shipping', component: () => import( '../components/Site/Shipping/Shipping' ) },
    { path: '/payment-policies', name: 'PaymentPolicies', component: () => import( '../components/Site/PaymentPolicies/PaymentPolicies' ) },
    { path: '/about-juasoonline', name: 'AboutJuasoonline', component: () => import( '../components/Site/AboutJuasoonline/AboutJuasoonline' ) },
    { path: '/career', name: 'Career', component: () => import( '../components/Site/Career/Career' ) },
    { path: '/sell-on-juasoonline', name: 'SellOnJuasoonline', component: () => import( '../components/Site/SellOnJuasoonline/SellOnJuasoonline' ) },
    { path: '/blog', name: 'Blog', component: () => import( '../components/Site/Blog/Blog' ) },
    { path: '/invest-relation', name: 'InvestRelation', component: () => import( '../components/Site/InvestRelation/InvestRelation' ) },
    { path: '/mission-and-vision', name: 'MissionAndVision', component: () => import( '../components/Site/MissionAndVision/MissionAndVision' ) },
]

const router = createRouter({
    scrollBehavior() { return { top: 0 } },
    routes,
    history: createWebHistory(),
})
export default router