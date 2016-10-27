
define(['vue','brandData','totalData'], function(Vue,brandData,totalData){

	var byOptions = Vue.extend({
		template:"#by-options",
		data:function(){
			return {
				hotBrand:[
					{brandName:"大众",brandID:1},
					{brandName:"丰田",brandID:3},
					{brandName:"福特",brandID:8},
					{brandName:"现代",brandID:12},
					{brandName:"标志",brandID:13},
					{brandName:"本田",brandID:14},
					{brandName:"宝马",brandID:15},
					{brandName:"吉利汽车",brandID:25},
					{brandName:"奇瑞",brandID:26},
					{brandName:"奥迪",brandID:33},
					{brandName:"奔驰",brandID:36},
					{brandName:"别克",brandID:38},
				],
				BrandBar:false,
				data:brandData.brandData
			}
		},
		methods:{
			active:function(){
				if(event.currentTarget.parentNode.id == 'on-brand' || event.currentTarget.parentNode.id == 'lbb'){
					var val = event.currentTarget.getAttribute('data-value');
					console.log(val)
					if(event.currentTarget.classList.contains('active')){
						event.currentTarget.classList.remove('active');
						if(event.currentTarget.parentNode.id == 'on-brand'){
							document.querySelector('#loadBrand').querySelector('[data-value="'+val+'"]').classList.remove('active');
						}else{
							document.querySelector('#on-brand').querySelector('[data-value="'+val+'"]').classList.remove('active');
						}
						
					}else{
						event.currentTarget.classList.add('active');
						if(event.currentTarget.parentNode.id == 'on-brand'){
							document.querySelector('#loadBrand').querySelector('[data-value="'+val+'"]').classList.add('active');
						}else{
							document.querySelector('#on-brand').querySelector('[data-value="'+val+'"]').classList.add('active');
						}
					}
					
				}
				else{
					if(event.currentTarget.parentNode.parentNode.className == 'spec'){
						if(event.currentTarget.getAttribute('data-value') == '102'){
							var cancelObj = document.querySelector('.spec').querySelectorAll('.active');
							for(var i=0; i<cancelObj.length; i++){
								cancelObj[i].classList.remove('active')
														
							}
							event.currentTarget.classList.add('active');
						}else{
							if(document.querySelector('.spec').children[0].children[0].classList.contains('active')){
								document.querySelector('.spec').children[0].children[0].classList.remove('active')
							}
							if(event.currentTarget.classList.contains('active')){
								event.currentTarget.classList.remove('active')
							}else{
								event.currentTarget.classList.add('active');
							}
						}
						
					
					}else{
						if(event.currentTarget.classList.contains('active')){
							event.currentTarget.classList.remove('active')
						}else{
							event.currentTarget.classList.add('active');
						}
					}					
				}

					
			},
			clearAllactive:function(){
				var actives = document.querySelector('#loadBrand .scroll').querySelectorAll('.active');
				Array.prototype.forEach.call(actives,function(item, index){
					item.classList.remove('active');
				})
			},
			jumpto:function(){
				var value = event.currentTarget.innerText.toLowerCase();console.log(value)
				document.querySelector('#loadBrand .scroll').scrollTop = document.querySelector('[data-group="'+value+'"]').offsetTop - (window.innerHeight-document.querySelector('#loadBrand .scroll').offsetHeight);
			},
			toggleBrandBar:function(){
				this.BrandBar = !this.BrandBar;
			},
			postFilter:function(){
				var filterData = {};
				var group = document.querySelectorAll('[data-title]');
				Array.prototype.forEach.call(group,function(item,index){
				 	var dataTitle = item.getAttribute('data-title');
				 	var activeArr = item.querySelectorAll('.active');
				 	if(activeArr.length == 0)return;
				 	filterData[dataTitle] = [];
					for(var i=0; i<activeArr.length; i++){
						filterData[dataTitle].push(activeArr[i].getAttribute('data-value'))
					}
				})


				var str = '?';
				for(var item in filterData){
					var s = filterData[item].join('|');
					str += item +'='+ s +'&&'
				}
				
				//str.slice(0,str.length-2);
				//str += '123'
				console.log(str)
				event.currentTarget.href += str;
				 
			}
		},
		ready:function(){
			//console.log(this.$router)
		}
	})
	return{
		byOptions:byOptions
	}
})