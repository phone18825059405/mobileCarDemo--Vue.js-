require.config({
　　　　baseUrl: "js",
　　　　paths: {
　　　　　　"brandData": "brandData",
　　　　　　"totalData": "data",
　　　　　　"hammerjs": "hammer",
　　　　　　"vue": "vue.min",
			"router":"vue-router",
			"touch":"vue-touch",
			"byBrand":"../templates/byBrand",
			"byOptions":"../templates/byOptions",
			"lazyload":"lazyload",
　　　　},
		shim:{
			lazyload:{
				exports:'lazyload'
			},
		}
　　});

require(['vue','router','hammerjs','touch','byBrand','byOptions','brandData','totalData'],function(Vue,VueRouter,hammerjs,VueTouch,qwe,asd,brandData,totalData){
	Vue.use(VueRouter);
	//console.log(hammerjs)
	window.hammerjs = hammerjs;
	Vue.use(VueTouch);
	//Vue.use(vueLazyload);
	

console.log(VueTouch)
	var router = new VueRouter()
		router.redirect({
			'/': '/about'
		})
		router.map({
			'/home': {
				component: qwe.byBrand,
				fuck:"afe"
			},
			'/about': {
				component: asd.byOptions,
				fuck:"qwe"
			}
		})

		router.beforeEach(function(transition) {
			//console.log(transition.from.path)
			//console.log(transition.to.path )
			transition.next()
		})

		var App = Vue.extend({})
		router.start(App, '#app')

})