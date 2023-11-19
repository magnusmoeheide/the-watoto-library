// src/sharedRoutes.js

import { Home, Article, Articles, GetInTouch, Donate, About, Kibera, Founder, Store, TermsOfSale } from './container';
import { WhatWeDo, Wwd } from './container';

export const sharedRoutes = [
    { path: '/', component: Home },
    { path: '/article/:articleId', component: Article, isAdmin: false },
    { path: '/articles', component: Articles, isAdmin: false },
    { path: '/programs', component: WhatWeDo, isAdmin: false },
    { path: '/programs/:wwdUrl', component: Wwd, isAdmin: false },
    { path: '/getintouch', component: GetInTouch, isAdmin: false },
    { path: '/about', component: About, isAdmin: false },
    { path: '/about/kibera', component: Kibera, isAdmin: false },
    { path: '/about/founder', component: Founder, isAdmin: false },
    { path: '/donate', component: Donate, isAdmin: false },
    { path: '/donate/store', component: Store, isAdmin: false },
    { path: '/donate/termsofsale', component: TermsOfSale, isAdmin: false }
];
