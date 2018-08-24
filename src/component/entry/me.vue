<template>
	<main>
		<div id="header" class="clearfix">
			
			<ul style="height: 39px;">
				<li style="float: left;"><img src="static/img/return.png" @click="back" style="width: 30px;padding-top: 5px;" alt="" /></li>
				<li style="height: 29px;"><p>我的信息</p></li>
				<li><router-link to="/shezi"><img src="static/img/shezi.png" style="width: 30px;padding-top: 5px;" /></router-link></li>
			</ul>
			<div id="toux">
				<div id="head_img" @click.stop="uploadHeadImg">
					  <img :src="list.src"/>
					  <h3>天罚</h3>
					  <p>匆忙人生</p>
				</div>
				   <div id="setting_right" @click.stop="uploadHeadImg">
                   <mt-progress :value="20" :bar-height="5"></mt-progress>
	             </div>
	               <input type="file" accept="img/*" @change="handleFile" class="hiddenInput"/>

             </div>
		    
		</div>
		 <div id="center2">
				<mt-cell title="我的余额">
				  <span>充值</span>
				  <img slot="icon" src="static/img/me.png" width="24" height="24">
				</mt-cell>
				<mt-cell title="我的包月">
				  <span>开通</span>
				  <img slot="icon" src="static/img/center_55.png" width="24" height="24">
				</mt-cell>
				<mt-cell title="我的购买">
				 
				   <img slot="icon" src="static/img/biji.png" width="24" height="24">
				</mt-cell>
				<mt-cell title="消费记录">
				 
				  <img slot="icon" src="static/img/biji.png" width="24" height="24">
				</mt-cell>
				<mt-cell title="我的笔记">
				
				 <img slot="icon" src="static/img/biji.png" width="24" height="24">
				</mt-cell>
				<mt-cell >
				
			
				</mt-cell>
		    </div>
		<div id="footer">
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
	data(){
	return{
    list:{
      src:'static/img/me2.png'
    }
   }
  },
	methods:{
			back(){
				this.$router.go(-1)
			},
    
		    uploadHeadImg: function () {
		      this.$el.querySelector('.hiddenInput').click()
		    }, 
		    handleFile: function (e) {
      let $target = e.target || e.srcElement
      let file = $target.files[0]
      var reader = new FileReader()
      reader.onload = (data) => {
        let res = data.target || data.srcElement
        this.list.src = res.result
      }
      reader.readAsDataURL(file)
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
		background:url(/static/img/bighead.jpg);
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
	#toux{
		left:50%;
	 	right:50%;
	}
 #head_img{
  height: 90px;
 	margin-top:20px;
   padding:20px 0;

 }
#head_img img{
  width:62px;
  height:62px;
  border-radius:100%;
  margin:0 auto;
  display:block;
}
#head_img h3{
	padding:5px auto;
	text-align: center;
}
#head_img p{
	padding:5px auto;
	text-align: center;
	color:#ffe;
}

#setting_right{
  display: flex;
  height: 32px;
  justify-content: flex-end;
  align-items: center;
}

.hiddenInput{
  display: none;
}
#center2{
		left: 0;
		bottom: 0;
		width: 100%;
		background-color:#ffffff ;

	}
#center2 span{
	width:100%;
	margin-right:15px;
	border:1px solid orange;
	color:orange;
	text-align:center;

}
#footer{
		position: fixed;
		left: 0;
		bottom: 0;
		z-index: 10;
		width: 100%;
		background-color:#dbdbdb ;
	}
	#footer ul {
		width: 100%;
		height: 57px;
		margin: 0 auto;
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
</style>