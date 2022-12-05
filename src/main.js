import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";
// composants
import MyCptAlti from "./components/MyCptAlti";
import MyCptGetConfig from "./components/MyCptGetConfig";
import MyCptGeocode from "./components/MyCptGeocode";
import MyCptAutoComplete from "./components/MyCptAutoComplete";
import MyCptRoute from "./components/MyCptRoute";
import MyCptIsoCurve from "./components/MyCptIsoCurve";
import MyCptReverseGeocode from "./components/MyCptReverseGeocode";
// lib
// import Gp from "geoportal-access-lib";

Vue.use(VueRouter);

Vue.config.productionTip = false;

const router = new VueRouter({
    mode: 'history',
    base: __dirname,
    routes : [
        { path: '/geoportal-access-lib-samples/geocode', component: MyCptGeocode },
        { path: '/geoportal-access-lib-samples/autocomplete', component: MyCptAutoComplete },
        { path: '/geoportal-access-lib-samples/reversegeocode', component: MyCptReverseGeocode },
        { path: '/geoportal-access-lib-samples/alti', component: MyCptAlti },
        { path: '/geoportal-access-lib-samples/route', component: MyCptRoute },
        { path: '/geoportal-access-lib-samples/isocurve', component: MyCptIsoCurve },
        { path: '/geoportal-access-lib-samples/getconfig', component: MyCptGetConfig }
    ]
});

new Vue({
    router,
    render: h => h(App)
}).$mount("#app");
