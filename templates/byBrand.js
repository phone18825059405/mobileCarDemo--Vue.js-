
define(['vue','brandData','totalData','lazyload'], function(Vue,brandData,totalData,lazyload){
	var byBrand = Vue.extend({
		template:"#by-brand",
		data:function(){
			return {
				iscrollTop:0,
				targetBrand:false,
				lists:[],
				tgbrandTit:'',
				data:brandData.brandData,
				totalData:totalData.data
			}
		},
		methods:{
			loadTargetBrand:function(){
				this.targetBrand = true;
				this.lists = [];
				this.tgbrandTit = '';

				var li = event.currentTarget;
				var tit = li.querySelector('strong').innerText;
				var that = this;

				this.tgbrandTit = tit;
				this.totalData.forEach(function(item,index){
					if(item.BrandId == li.getAttribute('data-brandid')){
						that.lists.push(item);
					}								
				})

				//console.log(this.lists)
			},
			hideTargetBrand:function(){
				this.targetBrand = false;
			},
			jumpto:function(){
				console.log(event.currentTarget.innerText)
				document.body.scrollTop = document.getElementById('classify').querySelector('[data-group="'+event.currentTarget.innerText+'"]').offsetTop;
			},
			//sayhi:function(){console.log(e.currentTarget)}
		},
		ready:function(){
			/*if(handler){
				window.removeEventListener("scroll", handler, false)
			}*/
			
			//console.log(this.$route)
			var that = this;
			window.addEventListener('scroll', function(){
				that.iscrollTop = document.body.scrollTop;
				//console.log(document.querySelector('#classify').offsetTop)
			})

			this.$els.jump.style.display ='block';
			console.log(this.$els.jump.offsetHeight)
			this.$els.jump.style.marginTop = ((this.$els.jump.offsetHeight) / -2) + 'px'
			this.$els.jump.style.display ='none';

		    lazyload({       
				id:"classify",
				lazyTime:200,
				lazyRange:100
		    });
			//document.querySelector('#classify').addEventListener()
		},
	})

	return{
		byBrand:byBrand
	}
})