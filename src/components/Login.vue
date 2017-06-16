<template>
	<div class="wrapper">
		<div class="content">
			<div class="logo-box">
				<p class="logo-box-nav">
					<router-link to="/">
					<span class="close iconfont icon-guanbi1" @click="sendData">
					</span>
					</router-link>
					<span class="toregister" @click="sendData">
						<router-link to="/register">注册</router-link>
					</span>
				</p>
				<ul class="loginway">
					<li class="password-login">账号密码登录</li>
					<li class="phone-login">手机号快捷登录</li>
				</ul>
			</div>
			<div class="form-box">               
				<form>
					<div class="num-box">
						<span>手机号码</span>
						<input type="text" id="num" v-model="username"/>
					</div>
					<div class="password-box">
						<span>密码</span>
						<input type="password" id="password" v-model="password"/>
					</div>
					<div id="submit" @click="loginData">
						即刻登录 坐享花样美妆
					</div>
				
					<p class="forget">
						忘记密码？
					</p>
				</form>
				<!--<form>
					<div class="num-box">
						<span>手机号码</span>
						<input type="text" id="num" />
					</div>
					<div class="validate-box">
						<span>验证码</span>
						<input type="text" id="" />
						<b class="validate-btn">
							获取验证码
						</b>
					</div>
					<div class="invite-box">
						<input type="checkbox" />
						<span>我是被邀请来的</span>
					</div>
					<div id="submit" style="margin: 0;" @click="loginData">
						即刻登录 坐享花样美妆
					</div>
					
					<p class="tip">
						登录即表示您已同意<b class="note">美美箱用户协议</b>
					</p>
				</form>-->
				
			</div>
		</div>              
		    
		<div class="cooperation">
			<div class="title-box">
				<div class="left-side">
					
				</div>
				<div class="middle">
					使用以下账号登录
				</div>
				<div class="right-side">
					
				</div>
			</div>
			<div class="img-box">
				<div class="weibo">
					<img class="weibo-icon" src="http://m.cn.memebox.com/images/app/account/include/css-weibo.jpg"/>
					<p class="icon-name" style="margin: 0;">微博</p>
				</div>
				<div class="WeChat">
					<img class="QQ-icon" src="http://m.cn.memebox.com/images/app/account/include/css-qq.jpg"/>
					<p class="icon-name" style="margin: 0;">QQ</p>
				</div>
			</div>
		</div>
	</div>
</template>   

<script>
export default {
	
  name: 'Login',
  
  data () {
  	
    return {
      
      username:'',
      
      password:''
      
    }
    
  },
  
  methods:{
			
		sendData(){
			
			this.$emit("loginevent",false)
			
			
		},
		
		loginData(){
			
			if(this.username==localStorage.username&&this.password==localStorage.password){
				
				alert("登录成功");
				
				this.$router.push('/');
				
				this.$emit("loginevent",false)
				
			}else{
				
				alert("您输入的用户名或密码不正确，请重新输入");
				
				this.username="";
				
				this.password="";
				
			}
			
		}
		  
  }
    
  
 
}
</script>

<style>
	body{
		overflow-y: hidden;
	
	}
	
	html{
		font-size: 31.25vw!important;
		font-family: "微软雅黑";
	}
	
	ul li{
		
		list-style: none;
	}
	
	.wrapper{
		width: 100vw;height: 100vh;
		margin: 0;padding: 0;
	  /*  background: #42B983;*/
	}

	.wrapper .content{
		width: 100%;
		height: 4.41rem;
	/*	background: #dedede;*/
		position: static;
	} 
	
	.wrapper .content .logo-box{
		width: 100%;
		height:1.505rem;
		background: url(http://m.cn.memebox.com/images/app/my/include/css-user-bg.jpg) no-repeat center center;
    	background-size: 100% 100%;
		position: relative;
	}
	
	.wrapper .content .logo-box .logo-box-nav{
		width: 100%;
		height: 0.335rem;
		line-height:0.335rem;
		margin: 0;
		font-family: "微软雅黑";
		font-size: 0.15rem;
		color: #fff;
		
	}
	
	.wrapper .content .logo-box .logo-box-nav .close{
	
		float: left;
		margin-left: 0.2rem;
		color: #fff;
		
	}
	
	.wrapper .content .logo-box .logo-box-nav .toregister{
	
		float: right;
		margin-right: 0.2rem;
		
	}
	
	.wrapper .content .logo-box .logo-box-nav .toregister a{
		
		color: #fff;
	}
	
	.wrapper .content .logo-box .loginway{
		width: 100%;
		height: 0.515rem;
		position: absolute;
		bottom: 0;
		color: #fff;
		font-size: 0.125rem;
	}
	
	.wrapper .content .logo-box .loginway li{
		height: 0.515rem;
		line-height: 0.515rem;
	}
	
	.wrapper .content .logo-box .loginway .password-login{
		float: left;
		margin-left: 0.395rem;
	}
	
	.wrapper .content .logo-box .loginway .phone-login{
		float: right;
		margin-right: 0.395rem;
	}
	
	.wrapper .content .form-box{
		width: 2.515rem;
		height: 2.905rem;
		margin: 0 auto;
		background: #fff;
		overflow: hidden;	
	}
	
	.wrapper .content .form-box .num-box{
		width: 100%;
		height: 0.465rem;
		border-bottom:1px solid #e8e8e8;
		margin-top: 0.085rem;
	}
	
	.wrapper .content .form-box .num-box span{
		display: inline-block;
		float: left;
		height: 0.465rem;
		line-height: 0.465rem;	
		color: #d0d0d4;
	}
	
	.wrapper .content .form-box .num-box #num{
		float: left;
		margin-top: 0.145rem;
		margin-left: 0.135rem;
	}
	
	.wrapper .content .form-box .password-box{
		width: 100%;
		height: 0.465rem;
		border-bottom:1px solid #e8e8e8;
		
	}
	
	.wrapper .content .form-box .password-box span{
		display: inline-block;
		float: left;
		height: 0.465rem;
		line-height: 0.465rem;	
		color: #d0d0d4;

	}
	
	.wrapper .content .form-box .password-box #password{
		float: left;
		margin-top: 0.145rem;
		margin-left: 0.37rem;
	}
	
	.wrapper .content .form-box .validate-box{
		width:100%;
		height: 0.47rem;
		margin-top: 0.08rem;
		border-bottom:1px solid #e8e8e8;
	/*	background: #DEDEDE;*/
	}
	
	.wrapper .content .form-box .validate-box span{
		display: inline-block;
		float:left;
		height: 0.47rem;
		line-height:  0.47rem;
		color: #d0d0d4; ;
	}
	
	.wrapper .content .form-box .validate-box input{
		float: left;
		width: 0.8rem;
		margin-top: 0.16rem;
		margin-left: 0.25rem;
	}
		
	.wrapper .content .form-box .validate-box .validate-btn{
		float: right;
		display: inline-block;
		width: 0.82rem;
		height: 0.24rem;
		margin-top: 0.11rem;
		line-height:0.24rem ;
		text-align: center;
		border: 1px solid #ff4a6e;
		border-radius: 0.04rem;
		color: #ff4a6e;
	}
	
	.wrapper .content .form-box .invite-box{
		
		width: 100%;
		height: 0.49rem;
		line-height: 0.49rem;
	}
	
	.wrapper .content .form-box .invite-box input,.wrapper .content .form-box .invite-box span{
		float: left;
		
	}
	
	.wrapper .content .form-box .invite-box input{

		position: relative;
		top:0.18rem;
	}
	
	.wrapper .content .form-box .invite-box span{
		
		margin-left: 0.02rem;
	}
	
	.wrapper .content .form-box .tip{
		margin-top: 0.1rem;
		color: #afafaf;
	}
	
	.wrapper .content .form-box .tip .note{
		font-style: normal;
		color: #ff5376;
		
	}
	
	.wrapper .content .form-box #submit{
		width:  2.515rem;
		height: 0.39rem;
		background: #e0e0e0;
		border-radius: 0.04rem;
		margin-top:0.215rem;
		color: #9e9e9e;
		font-size: 0.12rem;
		text-align: center;
		line-height: 0.39rem;
	}
	
	.wrapper .content .form-box .forget{
		float: right;
		margin-top: 0.1rem;
		color: #ff5779;
	}
	
	.wrapper .cooperation{
		width: 2.515rem;
		height: 1.07rem;
		margin: 0 auto;
	/*	background: yellow;*/
		position: relative;
	}
	
	.wrapper .cooperation .title-box .left-side,.wrapper .cooperation .title-box .right-side{
		width:0.745rem ;
		height: 0.01rem;
		margin-top: 0.055rem;
		background: #afafaf;
	}
	
	.wrapper .cooperation .title-box .left-side,.wrapper .cooperation .title-box .right-side,.wrapper .cooperation .title-box .middle{
		float: left;
	}
	
	.wrapper .cooperation .title-box .middle{
		
		margin-left:0.025rem!important;
		margin-right:0.025rem!important;
		color: #9d9d9d;
	}
	
	.wrapper .cooperation .img-box{
		width: 100%;
		height:0.96rem ;
		/*background: #DEDEDE;*/
		position: absolute;
		bottom: 0;
		display: flex;
		justify-content: space-around;
		align-items: center;
	}
	
	.wrapper .cooperation .img-box .weibo,.wrapper .cooperation .img-box .WeChat{
		float: left;
		width: 0.39rem;
		height: 0.595rem;
	}
	
	.wrapper .cooperation .img-box img{
		width:0.39rem ;
		height:0.39rem;
		margin-bottom: 0.11rem;
	}
	
	.wrapper .cooperation .img-box .icon-name{
		color: #a5a5a5;
	}
	
	
</style>