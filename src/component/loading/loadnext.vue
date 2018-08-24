<template>
	<main>
		<img src="static/img/loadnext.jpg"/>
		<div id="inputs">
			<ul id="uls">
				<li>
					<img src="static/img/renbiao.jpg" style="width:22px;margin-left:5px;">
					<input type="text" name="" id="" value="" placeholder="用户名" v-model="msg"/>
					<img src="static/img/Xbiao.jpg" @click="vanish1">
				</li>
				<li>
					<img src="static/img/suobiao.jpg" style="width:22px;margin-left:5px;">
					<input type="password" name="" id="" value="" placeholder="请输入密码" v-model="mag"/>
					<img src="static/img/Xbiao.jpg" @click="vanish2"/>
				</li>

			</ul>
			<!--<router-link><p>忘记密码？</p></router-link>-->
			<p>忘记密码？</p>
			
			<ul id="handle">
				
				<li style="margin-bottom:0.5rem;"><router-link to="/entry">登录</router-link></li>
				<li><router-link to="/register">注册</router-link></li>
				
			</ul>
			
			<div id="deg">
				<hr />
				<span>第三方登录</span>
				<hr />
				<ul>
					<li><router-link to="/entry"><img src="static/img/sina.jpg"/></router-link></li>
					<li><router-link to="/entry"><img src="static/img/weixin.jpg"/></router-link></li>
					<li><router-link to="/entry"><img src="static/img/QQ.jpg"/></router-link></li>
				</ul>
			</div>
		</div>
		
	</main>

</template>

<script>
	export default {
		data(){
			return{
				msg:'',
				mag:''
			}
		},
		methods:{
			vanish1(){
				this.msg = "";
				this.mag = "";
			},
			vanish2(){
				this.mag = "";
			},
			loading(){
				
			}
		}

	}
</script>

<style scoped="" lang="less">
	*{
		margin: 0;
		padding: 0;
		list-style: none;
	}
	p{
		text-align: right;
		line-height: 40px;
		font-size:0.9rem;
		color: white;
		width: 100%;
	}
	.back{
		font-size: 25px;
		color: white;
		position: absolute;
		left: 20px;
		top: 50px;
	}
	main>img{
		width: 100%;
	}
	input{
		border:none;
		outline: none;
		background-color: transparent;
		width: 75%;
		margin:0 3px;
		margin-top: 2rem;
		font-size: 20px;
		color: white;
	}
	#inputs{
		position:absolute;
		width: 80%;
		margin: 0 auto;
		top:35%;
		left:10%;
		/*border: 1px solid white;*/
	}
	#uls>li{
		border-bottom:1px solid white ;
	}
	#handle{
		width: 161px;
		margin: 0 auto;
	}
	
	#handle li a{
		display: block;
		width:100%;
		height: 40px;
		color: #146638;
		text-decoration: none;
	}
	
	#handle li{
		width:100%;
		height: 42px;
		text-align: center;
		border-radius: 21px;
		border: 1px solid white;
		margin: 0 auto;
		line-height: 42px;
	}
	#deg{
		width: 220px;
		margin: 0 auto;
		margin-top:26px ;
	}
	#deg hr{
		border: none;
		border-bottom:1px solid white ;
	}
	#deg hr:nth-of-type(1){
		width: 60px;
		float: left;
		margin-top:10px;
	}
	#deg hr:nth-of-type(2){
		width: 60px;
		margin-top:10px;
		float: right;
	}
	#deg>span{
		margin-left:5.5%;
		color: white;
	}
	#deg>ul{
		margin-top: 20px;
		width: 100%;
	}
	#deg>ul li{
		width: 25%;
		float: left;
		margin-left: 17px;
	}
	#deg>ul li img{
		width: 30px;
	}
</style>