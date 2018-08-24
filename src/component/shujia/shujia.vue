<template>
	<main>
		<div id="center" class="clearfix">
			<ul style="height: 39px;">
				<!--<li style="float: left;"><router-link><img src="static/img/center_08.png"/></router-link></li>-->
				<li style="float: left;"><router-link to="/shezi"><img src="static/img/shezi.png" style="width: 30px;padding-top: 5px;" /></router-link></li>
				<li style="height: 29px;">
					<p>书架</p>
				</li>
				<li><router-link to="/entry"><img src="static/img/xiaowu.png" style="width: 30px;padding-top: 5px;" /></router-link></li>
			</ul>	

			<div id="box">
				<ul>
					<li v-for="a in list">
						<img :src="a.src"/>
						<router-link :to="a.target"></router-link>
					</li>
					<li class="add">+</li>
				</ul>
			</div>

			<div id="foot">
			<ul>
				<li>
					<router-link to="/entry"><img src="static/img/center_08.png" alt="" /></router-link>
					<p>书城</p>
				</li>
				<li>
				<router-link to="/special">
					<img src="static/img/center_128.png" alt="" />
					<p>精选</p>
					</router-link>
				</li>
				<li>
				<router-link to="/classify">
					<img src="static/img/center_120.png" alt="" />
					<p>分类</p>
					</router-link>
				</li>
				<li>
					<router-link to="/me"><img src="static/img/center_123.png" alt="" /></router-link>
					<p>我</p>
				</li>
			</ul>

		</div>

		</div>
	</main>
</template>

<script>
	export default {
		data() {
			return {
				msg:'',
				list: [{
					src: 'static/img/center_26.png',
					target:'/novel'
				}, {
					src: 'static/img/center_41.png'
				}, {
					src: 'static/img/center_43.png'
				}, {
					src: 'static/img/center_45.png'
				}]

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
	
	#center {
		width: 100%;
		background: url(/static/img/smallhead.jpg);
		background-repeat: no-repeat;
		background-size: 100%;
		background-position: top;
		position: relative;
	}
	
	#center>ul:nth-of-type(1) {
		padding-top: 9%;
		width: 100%;
		text-align: center;
	}
	
	#center>ul:nth-of-type(1)>span {
		display: block;
		width: 10%;
		height: 58px;
	}
	
	#center>ul:nth-of-type(1) li {
		float: left;
		width: 33%;
		text-align: center;
	}
	
	#center>ul:nth-of-type(1) li:nth-of-type(1) img {
		float: left;
		margin-left: 10%;
	}
	
	#center>ul:nth-of-type(1) li:nth-of-type(3) img {
		float: right;
		margin-right: 10%;
	}
	
	#center>ul:nth-of-type(1) p {
		font-size: 25px;
		margin-top: 4%;
		color: #f1fff1;
		font-family: "楷体";
	}
	
	#box{
		width: 100%;
		background-color: #e5e5e5;
        
	}
	#box ul{
		width: 100%;
		margin: 0 auto;
		overflow: hidden;
		text-align: center;
		padding-bottom:1rem;
		background-color: #e5e5e5;
		
	}
	#box ul li{
		width: 20%;
		list-style: none;
		float: left;
		text-align: center;
		margin:2.5%;
		margin-top: 5%;

	}
	#box ul li img{
		height: 100px;
		width:100%;
		
	}
	#box ul .add{
				width:20%;
	            
	             background:#f5fffa;
	             font-size:56px;
	             color:#e5e5e5;
	             text-align:center;
	             }
	#foot {
		position:fixed;
		left: 0;
		bottom: 0;
		z-index: 10;
		width: 100%;
		background-color: #dbdbdb;
	}
	
	#foot ul {
		width: 100%;
		height: 57px;
		margin: 0 auto;
	}
	
	#foot ul li {
		margin-top: 5px;
		float: left;
		width: 25%;
		text-align: center;
	}
	
	#foot ul li img {
		width: 25%;
		height: 20px;
	}
</style>