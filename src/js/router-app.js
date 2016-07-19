var Vue = require('vue');
var VueResource = require('vue-resource');
var VueRouter = require('vue-router');

// Components
var Main = require('./components/router/main.vue');
var Index = require('./components/router/index.vue');
var About = require('./components/router/about.vue');
var List = require('./components/router/list.vue');
var Notfound = require('./components/router/not_found.vue');

var App = Vue.extend(Main);

Vue.use(VueResource);
Vue.use(VueRouter);

var router = new VueRouter({
  history: true,
  saveScrollPosition: true
});

router.map({
    '/vue-js/router/index': { component: Index },
    '/vue-js/router/epilogue': { component: About },
    '/vue-js/router/tools/:category': { component: List },
    '*': { component: Notfound },
});

// router.on('/router/tools/:category', {
//     component: List 
// });

// redirect
router.redirect({
    '/vue-js/router/': '/vue-js/router/index'
});

router.beforeEach(function(transition) {
    if (transition.to.path === '/forbidden') {
        router.app.authenticating = true;
        setTimeout(function() {
            router.app.authenticating = false;
            alert('this route is forbidden by a global before hook');
            transition.abort();
        }, 3000)
    } else {
        transition.next()
    }
});

router.start(App, '#router');

// just for debugging
window.router = router;
