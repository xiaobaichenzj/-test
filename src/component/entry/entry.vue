<template>
	<main>
		<div id="header" class="clearfix">
			<ul style="height: 39px;">
			<li style="float: left;"><router-link to="/loadnext"><img src="static/img/return.png" style="width: 30px;padding-top: 5px;" /></router-link></li>
				<li style="height: 29px;"><p>书城</p></li>
				<li><router-link to="/shujia"><img src="static/img/center_08.png" style="width: 30px;padding-top: 5px;" /></router-link></li>
			</ul>

			<div id="lunbo" style="height: 130px;">
				<ul id="banner">
					<mt-swipe :auto="3500">
					  <mt-swipe-item>
					  	<router-link to="/novel01">
						  	<li><img src="static/img/lunbo1.png" style="width: 100%;"/></li>

							<li>
								<h4 style="width: 100%;">独家首发</h4>
								<p style="line-height:2rem;font-size: 12px;">一部言情之中最有韵味</p>
								<hr />
								<p style="line-height:2rem;">《不念，不忘》</p>
							</li>
							</router-link>
					  </mt-swipe-item>
					  <mt-swipe-item>
					    <router-link to="/novel01">
						  	<li><img src="static/img/lunbo2.png" style="width: 100%;"/></li>
							<li>
								<h4 style="width: 100%;">独家首发</h4>
								<p style="line-height:2rem;font-size: 12px;">一部言情之中最有韵味</p>
								<hr />
								<p style="line-height:2rem;">《你的水桶有多满？》</p>
							</li>
							</router-link>
					  </mt-swipe-item>
					  <mt-swipe-item>
					  <router-link to="/novel01">
						  	<li><img src="static/img/lunbo3.png" style="width: 100%;"/></li>
							<li>
								<h4 style="width: 100%;">独家首发</h4>
								<p style="line-height:2rem;font-size: 12px;">一部言情之中最有韵味</p>
								<hr />
								<p style="line-height:2rem;">《你的诺言我的沧海》</p>
							</li>
							</router-link>
					  </mt-swipe-item>
					  <mt-swipe-item>
					     <router-link to="/novel01">
						  	<li>
						  	<img src="static/img/lunbo4.png" style="width: 100%;"/></li>
							<li>
								<h4 style="width: 100%;">独家首发</h4>
								<p style="line-height:2rem;font-size: 12px;">一部言情之中最有韵味</p>
								<hr />
								<p style="line-height:2rem;">《要多坚强才敢念念不忘》</p>
							</li>	
							</router-link>
					  </mt-swipe-item>
					  <mt-swipe-item>
					  <router-link to="/novel01">
						  	<li><img src="static/img/lunbo5.png" style="width: 100%;"/></li>
							<li>
								<h4 style="width: 100%;">独家首发</h4>
								<p style="line-height:2rem;font-size: 12px;">一部言情之中最有韵味</p>
								<hr />
								<p style="line-height:2rem;">《谁的青春不怒放》</p>
							</li>
							</router-link>
					  </mt-swipe-item>
					</mt-swipe>
				</ul>
			</div>

			<div id="center1">
				<span>
					<h4>猜你喜欢</h4>
					<img src="static/img/love.png" style="width: 15px; margin-left: 2%;"/>
					<a href="javascript:;">更多</a>
				</span>
				<ul id="books" style="border-bottom:1px solid #b8dcb7;">
					<li v-for="v in list1"><router-link :to="v.target">
						<img :src="v.src"/>
						<p>{{v.title}}</p></router-link>
					</li>
				</ul>
				<span style="margin-top:8px;">
					<h4>猜你喜欢</h4>
					<img src="static/img/love.png" style="width: 15px; margin-left: 2%;"/>
					<a href="javascript:;">更多</a>
				</span>
				<ul id="books">
					<li v-for="v in list2">
					<router-link :to="v.target">
						<img :src="v.src"/>
						<p>{{v.title}}</p></router-link>
					</li>
				</ul>
				<span style="margin-top:8px;">
					<h4>猜你喜欢</h4>
					<img src="static/img/love.png" style="width: 15px; margin-left: 2%;"/>
					<a href="javascript:;">更多</a>
				</span>
				<ul id="books">
					<li v-for="v in list2">
						<img :src="v.src"/>
						<router-link :to="v.target"><p>{{v.title}}</p></router-link>
					</li>
				</ul>
			</div>
		</div>
		<div id="center2">
				<ul>
					<li>
						<router-link to="/entry"><img src="static/img/center_117.png" alt="" /></router-link>
						<p>推荐</p>
					</li>
					<li>
						<router-link to="/list"><img src="static/img/center_128.png" alt="" /></router-link>
						<p>排行榜</p>
					</li>
					<li>
						<router-link to="/classify"><img src="static/img/center_120.png" alt="" /></router-link>
						<p>分类</p>
					</li>
					<li>
						<router-link to="/special"><img src="static/img/center_123.png" alt="" /></router-link>
						
						<p>专题</p>
					</li>
					<li>
						<router-link to="/search"><img src="static/img/center_123.png" alt="" /></router-link>
						<p>搜索</p>
					</li>
				</ul>
		</div>
		<div id="footer">
				<ul>
					<li>
						<router-link to="/shujia"><img src="static/img/shujia.png" alt="" /></router-link>
						<p>书架</p>
					</li>
					<li>
						<router-link to="/entry"><img src="static/img/shuc.png" alt="" /></router-link>
						<p>书城</p>
					</li>
					<li>
						<router-link to="/me"><img src="static/img/me.png" alt="" /></router-link>
						
						<p>我的</p>
					</li>
					
				</ul>
		</div>
	</main>
</template>
 <script>
	export default{
	
		data(){
			return{
				list1:[
					{
						src:'static/img/center_26.png',
						title:'侯门新妇',
						target:'/novel'
					},{
						src:'static/img/center_41.png',
						title:'情牵久伴',
						target:'/novel01'
					},{
						src:'static/img/center_43.png',
						title:'你和我的倾城时光',
						target:'/novel02'
					},{
						src:'static/img/center_45.png',
						title:'余爱绕梁',
						target:'/novel03'
					},
				],
				list2:[
					{
						src:'static/img/center_57.png',
						title:'心有所慕',
						target:'/novel04'
					},{
						src:'static/img/center_71.png',
						title:'你的谎言我的沧海',
						target:'/novel05'
					},{
						src:'static/img/center_72.png',
						title:'要有多坚强才敢念念不忘',
						target:'/novel01'
					},{
						src:'static/img/center_74.png',
						title:'少年博物馆',
						target:'/novel07'
					},
				],
				
			}
		}
		}
</script>
<style scoped="" lang="less">
	* {
		margin: 0;
		padding: 0;
		list-style: none;
	}
	
	.clearfix:after {
		content: "";
		display: block;
		clear: both;
	}
	
	.clearfix {
		*zoom: 1;
		/*兼容IE*/
	}
	
	#header {
		width: 100%;
		background: url(/static/img/smallhead.jpg);
		background-repeat: no-repeat;
		background-size: 100%;
		background-position: top;
		position: relative;
		background-color: #e8e1e6;
		padding-bottom: 1rem;
	}
	
	#header>ul:nth-of-type(1) {
		padding-top: 9%;
		width:100%;
		text-align: center;
	}
	#header>ul:nth-of-type(1)>span{
		display: block;
		width: 10%;
		height: 58px;
	}
	#header>ul:nth-of-type(1) li {
		float: left;
		width: 33%;
		text-align: center;
	}
	#header>ul:nth-of-type(1) li:nth-of-type(1) img{
		float: left;
		margin-left: 10%;
	}
	#header>ul:nth-of-type(1) li:nth-of-type(3) img{
		float:right;
		margin-right: 10%;
	}
	#header>ul:nth-of-type(1) p {
		font-size: 25px;
		margin-top: 4%;
		/*float: right;*/
		color: #f1fff1;
		font-family: "楷体";
	}
	
	#lunbo {
		width: 97%;
		margin-left: 1.5%;
		position: relative;
	}
	#lunbo hr {
		border: none;
		border-bottom: 1px solid #b8dcb7;
	}
	
	#banner {
		position: absolute;
		width: 95%;
		left: 10px;
		height: 130px;
		border-bottom: 1px solid #b8dcb7;
		box-sizing: border-box;
	}
	#banner li{
		float: left;
	}
	#banner li:nth-of-type(1) {
		width: 43%;
	}
	#banner li img {
		padding-top: 0.5rem;
		width: 130px;
		height: 105px;
	}
	
	#banner li h4,
	#banner li p {
		color: #a2a3a3;
		font-family:"楷体";
	}
	
	#banner li:nth-of-type(2) {
		text-align: center;
		margin-top: 5%;
		width: 54%;
	}
	
	#dot {
		width: 30%;
		position: absolute;
		left: 33%;
		bottom: 0;
	}
	
	#dot li {
		float: left;
		width: 5px;
		height: 5px;
		background-color: #bcbaba;
		border-radius: 50%;
		margin: 5px;
	}
	
	#center1 {
		margin-top:5%;
		margin-left:1rem;
		width: 96%;
	}
	#center1>span{
		display: block;
		width: 96%;
	}
	#center1>span h4{
		color: #a9a9a9;
		font-family:"楷体" ;
		float: left;
	}
	#center1>span a{
		text-decoration: none;
		float: right;
		color: #b4b4b4;
	}
	#books{
		margin-top:0.5rem;
		width: 96%;
		height:175px;
	}
	#books li{
		width:23%;
		float: left;
		text-align: center;
		margin: 0 2px;
	}
	#books li img{
		width:96%;
	}
	#books li p{
		color: #b4b4b4;
		font-size:13px ;
	}
	#center2{
		position: absolute;
		left: 0;
		bottom: 0;
		z-index: 10;
		width: 100%;
		background-color:#dbdbdb ;
	}
	#center2 ul {
		width: 100%;
		height: 57px;
		margin: 0 auto;
	}
	
	#center2 ul li {
		margin-top: 5px;
		float: left;
		width: 20%;
		text-align: center;
	}
	#center2 ul li img{
		width:25%;
		height:20px;
	}
	#footer{
		position: fixed;
		left:0;
		bottom: 0;
		z-index:11;
		width: 100%;
		background-color:#dbdbdb ;

	}
	#footer ul {
		width: 100%;
		height: 57px;
        margin-left:20%;
	}
	
	#footer ul li {
		margin-top: 5px;
		float: left;
		width: 20%;
		text-align: center;
		
	}
	#footer ul li img{
		width:25%;
		height:20px;
		
	}
	
	
	
	/*#show{
		position: absolute;
		z-index: 1000;
	}
	
	main {
		width: 100%;
	}
	
	h3 {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%);
	}
	
	#show1 {
		position: absolute;
		left: 20%;
		bottom: 25%;
		border: 1px solid white;
		width: 60%;
		margin: auto;
	}
	
	#show1 li {
		width: 10px;
		height: 10px;
		border: 1px solid white;
	}
	
	#show1 li:nth-of-type(2n-1) {
		animation: move1 2s linear infinite;
		float: left;
	}
	
	#show1 li:nth-of-type(2n) {
		float: right;
		animation: move2 2s linear infinite;
	}
	
	@keyframes move1 {
		0% {
			transform: translateX(0) scale(1);
		}
		50% {
			transform: translateX(195px) scale(2);
		}
		100% {
			transform: translateX(0) scale(1);
		}
	}
	
	@keyframes move2 {
		0% {
			transform: translateX(0) scale(1);
		}
		50% {
			transform: translateX(-195px) scale(2);
		}
		100% {
			transform: translateX(0) scale(1);
		}
	}*/
</style>