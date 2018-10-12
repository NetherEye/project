import axios from 'axios'
import qs from 'qs'

class Fetch {
	//表单序列化
	packageParamBase(param) {
		let _param = param || {}
		let _requestParam = param
		return qs.stringify(_requestParam)
	}
	//设置token值
	setToken(token) {
		sessionStorage.setItem('token', token);
	}
	//获取token值
	getToken() {
		let token = sessionStorage.getItem('token')
		if(token) {
			token = token
		} else {
			token = ""
		}
		return token
	}
	clearToken() {
		sessionStorage.removeItem("access-user");
	}
	getUserId() { //获取角色类别
		let token = JSON.parse(sessionStorage.getItem('access-user'));
		if(token) {
			token = token.data.userId
		} else {
			token = ""
		}
		return token
	}
	// POST
	httpPostRequest(url, data, callback) {
		let _requestParam = this.packageParamBase(data);
		axios({
				method: 'post',
				url: url,
				data: _requestParam,
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
					'token': this.getToken()
				}
			})
			.then(function(response) {
				let rescode = response.status;
				if(rescode == 200) {
					callback(response)
				} else if(rescode == "201" || rescode == "202") {
					alert("客官，系统出问题啦！稍后再试");
				} else if(rescode == "401") {
					alert("您的登录已过期，请再次登录");
				} else if(rescode == "500") {
					alert("您还没有权限访问这个页面！");
				} else {
					alert("客官，系统出问题啦！稍后再试");
				}
			})
			.catch(function(error) {
				if(error && error.response) {
					callback(error.response)
				}
			})
	}
	// GET(查全部数据时传months = false;查当月数据时传months = true)
	httpGetRequest(url, months, data, callback) {
		if(months){
			months = "?";
		}else {
			months = "/";
		}
		data = this.dataEncode(data);
		axios({
				method: 'get',
				url: url+months+data,
				data: data,
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
					'token': this.getToken()
				}
			})
			.then(function(response) {
				let rescode = response.status;
				if(rescode == "200") {
					callback(response)
				} else if(rescode == "201" || rescode == "202") {
					alert("客官，系统出问题啦！稍后再试");
				} else if(rescode == "401") {
					alert("您的登录已过期，请再次登录");
					this.clearToken();
				} else if(rescode == "500") {
					alert("您还没有权限访问这个页面！");
				} else {
					alert("客官，系统出问题啦！稍后再试");
				}

			})
			.catch(function(error) {
				if(error && error.response) {
					callback(error.response)
				}
			})
	}
	
	// xGet
	httpGetR(url, data, callback) {
		axios.get(url, {
				params: data,
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
					'token': this.getToken()
				}
			})
			.then(function(response) {
				let rescode = response.status;
				if(rescode == "200") {
					callback(response)
				} else if(rescode == "201" || rescode == "202") {
					alert("客官，系统出问题啦！稍后再试");
				} else if(rescode == "401") {
					alert("您的登录已过期，请再次登录");
					this.clearToken();
				} else if(rescode == "500") {
					alert("您还没有权限访问这个页面！");
				} else {
					alert("客官，系统出问题啦！稍后再试");
				}

			})
			.catch(function(error) {
				if(error && error.response) {
					callback(error.response)
				}
			})
	}
	
	// put
	httpPutRequest(url, data, callback) {
		let _requestParam = this.packageParamBase(data);
		console.log(_requestParam);
		axios({
				method: 'put',
				url: url+'?'+_requestParam,
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
					'token': this.getToken()
				}
			})
			.then(function(response) {
				
				let rescode = response.status;
				if(rescode == "200") {
					callback(response)
				} else if(rescode == "201" || rescode == "202") {
					alert("客官，系统出问题啦！稍后再试");
				} else if(rescode == "401") {
					alert("您的登录已过期，请再次登录");
				} else if(rescode == "500") {
					alert("您还没有权限访问这个页面！");
				} else {
					alert("客官，系统出问题啦！稍后再试");
				}

			})
			.catch(function(error) {
				if(error && error.response) {
					callback(error.response)
				}
			})
	}
	
	//delete
	httpDeleteRequest(url, data, callback) {
		axios({
				method: 'delete',
				url: url+'?id='+data,
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
					'token': this.getToken()
				}
			})
			.then(function(response) {
				let rescode = response.status;
				if(rescode == 200) {
					callback(response)
				} else if(rescode == "201" || rescode == "202") {
					alert("客官，系统出问题啦！稍后再试");
				} else if(rescode == "401") {
					alert("您的登录已过期，请再次登录");
				} else if(rescode == "500") {
					alert("您还没有权限访问这个页面！");
				} else {
					alert("客官，系统出问题啦！稍后再试");
				}
			})
			.catch(function(error) {
				if(error && error.response) {
					callback(error.response)
				}
			})
	}
	
	httpDeleteU(url, data, callback) {
		axios({
				method: 'delete',
				url: url+'?unionId='+data,
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
					'token': this.getToken()
				}
			})
			.then(function(response) {
				let rescode = response.status;
				if(rescode == 200) {
					callback(response)
				} else if(rescode == "201" || rescode == "202") {
					alert("客官，系统出问题啦！稍后再试");
				} else if(rescode == "401") {
					alert("您的登录已过期，请再次登录");
				} else if(rescode == "500") {
					alert("您还没有权限访问这个页面！");
				} else {
					alert("客官，系统出问题啦！稍后再试");
				}
			})
			.catch(function(error) {
				if(error && error.response) {
					callback(error.response)
				}
			})
	}
	
	// ---------------XSS--------------//
	htmlEncode(str) {
		let s = ''
		if(str.length === 0) return ''
		s = str.replace(/</g, '%26lt%3B')
		s = s.replace(/%3C/g, '%26lt%3B')
		s = s.replace(/%3c/g, '%26lt%3B')
		s = s.replace(/>/g, '%26gt%3B')
		s = s.replace(/%3E/g, '%26gt%3B')
		s = s.replace(/%3e/g, '%26gt%3B')
		return s
	}
	dataEncode(data) {
		// Encode

		let rel = data
		let source = ''
		if(typeof rel === 'object') {
			source = this.htmlEncode(JSON.stringify(rel))
			source = JSON.parse(source)
			rel = source
		} else if(typeof rel === 'string') {
			source = this.htmlEncode(rel)
			rel = source
		}
		return rel
	}
}
export default new Fetch()