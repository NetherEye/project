<template>

	<div class="five">

		<img src="../../static/img/500.png" alt="" class="fiveImg" />
		<div class="fiveText">
			<img src="../../static/img/accessError.png" class="accessError" />
			<div class="reason">
				<span class="reason_1">可能原因是：</span>
				<div class="reason_2">
					<span class="reason_3"><p></p><span>您还未登录或已超时</span></span>
					<span class="reason_3"><p></p><span>您没有访问改页面的权限</span></span>
				</div>
			</div>
			<el-button @click="quitLogin()" type="primary">返回</el-button>

		</div>

	</div>
</template>

<script>
	export default {
		methods: {
			//退出登录
			quitLogin() {
				sessionStorage.clear();
				window.location.href="/logout"
			},
		}
	}
</script>

<style>
	html {
		width: 100%;
		height: 100%;
	}
	
	.five {
		border-radius: 20px;
		width: 616px;
		height: 314px;
		margin: auto;
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
	}
	
	.fiveImg {
		width: 194px;
		height: 195px;
		position: absolute;
		top: 30px;
		left: 0px;
	}
	
	.fiveText {
		width: 422px;
		height: 314px;
		position: absolute;
		top: 0px;
		left: 210px;
	}
	
	.accessError {
		width: 274px;
		height: 56px;
		background: url(../../static/img/accessError.png);
		margin-left: 74px;
	}
	
	.reason {
		width: 415px;
		height: 102px;
		margin-top: 50px;
		font-size: 20px;
		color: #b5b5b5;
	}
	
	.reason_1 {
		width: 122px;
		height: 26px;
		float: left;
	}
	
	.reason_2 {
		width: 293px;
		height: 100%;
		float: left;
	}
	
	.reason_3 {
		width: 100%;
		height: 25px;
		line-height: 25px;
		float: left;
	}
	
	.reason_3 p {
		width: 13px;
		height: 13px;
		background: #c1c1c1;
		border-radius: 7.5px;
		margin: 6px;
		float: left;
	}
</style>