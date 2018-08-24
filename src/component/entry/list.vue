<template>
	<main>
		<div id="header" class="clearfix">
			<ul style="height: 39px;">
				<li style="float: left;"><img src="static/img/center_08.png" @click="add" style="width: 30px;padding-top: 5px;" /></li>
				<li style="height: 29px;"><p>排行榜</p></li>
				<li><router-link to="/shujia"><img src="static/img/xiaowu.png" style="width: 30px;padding-top: 5px;" /></router-link></li>
			</ul>
		</div>
		<div id="lunbo">
				<mt-navbar v-model="selected" id="sele">
				  <mt-tab-item id="1" class="mt">年度榜单</mt-tab-item>
				  <mt-tab-item id="2" class="mt">季月榜单</mt-tab-item>
				  <mt-tab-item id="3" class="mt">每周榜单</mt-tab-item>
				</mt-navbar>
				
				<mt-tab-container v-model="selected" swipeable class="contents">
				  <mt-tab-container-item id="1">
				    <ul>
				    	<li v-for="(v,i) in arr1">
				    	<router-link to="/shujia">
				    		<img :src="v.src"/>
				    		<p>排名：{{v.rank}}</p>
				    		<p>{{v.title}}</p>
				    		</router-link>
				    	</li>
				    </ul>
				  </mt-tab-container-item>
				  <mt-tab-container-item id="2">
				  	<ul>
				    	<li v-for="(v,i) in arr2">
				    		<img :src="v.src"/>
				    		<p>排名：{{v.rank}}</p>
				    		<p>{{v.title}}</p>
				    	</li>
				    </ul>
				  </mt-tab-container-item>
				  <mt-tab-container-item id="3">
				  		<ul>
				    	<li v-for="(v,i) in arr3">
				    		<img :src="v.src"/>
				    		<p>排名：{{v.rank}}</p>
				    		<p>{{v.title}}</p>
				    	</li>
				    </ul>
				  </mt-tab-container-item>
				</mt-tab-container>
			</div>
		<div id="center1">
				<span>
					<h4>猜你喜欢</h4>
					<img src="static/img/love.png" style="width: 15px; margin-left: 2%;"/>
					<a href="javascript:;">更多></a>
				</span>
				<ul id="books" style="border-bottom:1px solid #b8dcb7;">
					<li v-for="v in arr4">
						<img :src="v.src"/>
						<router-link :to="v.target"><p>{{v.title}}</p></router-link>
					</li>
				</ul>
				<span style="margin-top:8px;">
					<h4>猜你喜欢</h4>
					<img src="static/img/love.png" style="width: 15px; margin-left: 2%;"/>
					<a href="javascript:;">更多></a>
				</span>
				<ul id="books">
					<li v-for="v in arr5">
						<img :src="v.src"/>
						<router-link :to="v.target"><p>{{v.title}}</p></router-link>
					</li>
				</ul>
			</div>
		<div id="foot">
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
	</main>
</template>

<script>
	export default{
		methods:{
			add(){
				this.$router.go(-1)
			}
		},
		data(){
			return{
				value:1,
				selected:"1",
				swipeable:true,
				arr1:[],
				arr2:[],
				arr3:[],
				arr4:[],
				arr5:[]
				
			}
		},
		mounted(){
			this.$http.get('static/json/data.json').then(function(res) {
				console.log(res);
				this.arr1 = res.body.lists.list1;
				this.arr2 = res.body.lists.list2;
				this.arr3 = res.body.lists.list3;
				this.arr4 = res.body.lists.more;
				this.arr5 = res.body.lists.love;
			})
			
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
	#sele{
		background-color: transparent;
	}
	#sele a>div:nth-of-type(2){
		font-size: 15px !important;
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
	#lunbo {
		width: 97%;
		margin-left: 1.5%;
		position: relative;
	}
	
	.mint-tab-item.is-selected{
		border-bottom: 1px solid #a7c6b6;
	}
	.contents{
		max-height: 180px;
		
	}
	.mint-tab-container-item{
		transition: all 1s; 
	}
	.contents a{
		min-height: 33px;
		
	}
	.contents ul {
		width: 100%;
		text-align: center;
	}
	.contents ul li {
		width: 23%;
		float: left;
		margin:5%;
		font-family: "楷体";
		line-height: 20px;
		color: #74b08f;
	}
	.contents ul li img{
		width: 100%;
	}
	
	
	
	#lunbo hr {
		border: none;
		border-bottom: 1px solid #b8dcb7;
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
		margin-left:15px;
		width: 96%;
		height: 435px;
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
		height:185px;
	}
	#books li{
		width:23%;
		float: left;
		text-align: center;
		margin: 0 2px;
	}
	#books li img{
		width:100%;
	}
	#books li p{
		color: #b4b4b4;
		font-size:13px ;
	}
	#foot{
		position:fixed;
		left: 0;
		bottom: 0;
		z-index: 10;
		width: 100%;
		background-color:#dbdbdb ;
	}
	#foot ul {
		width: 100%;
		height: 57px;
		margin: 0 auto;
	}
	
	#foot ul li {
		margin-top: 5px;
		float: left;
		width: 20%;
		text-align: center;
	}
	#foot ul li img{
		width:25%;
		height:20px;
	}

</style>

