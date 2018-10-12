class Publics {
	//学校名称
	nickename() {
		let token = JSON.parse(sessionStorage.getItem('access-user'));
		let nickename = token.data.nickename;
		return nickename;
	}
	//当前登录类型
	nicke() {
		let token = JSON.parse(sessionStorage.getItem('access-user'));
		let nicke = token.data.type;
		return nicke;
	}
	//清空回显表单
	delForm(rule) {
		let key1;
		if(rule.id != "") {
			for(key1 in rule) {
				rule[key1] = '';
			}
		}
	}
	//判断一个元素是否存在于这个数组中
	isInArray(arr, value) {
		for(var i = 0; i < arr.length; i++) {
			if(value === arr[i]) {
				return true;
			}
		}
		return false;
	}
	//替换key
	toChsKeys(data, keyMap) {
		return Object.keys(data).reduce((newData, key) => {
			let newKey = keyMap[key] || key
			newData[newKey] = data[key]
			return newData
		}, {})
	}
	//提示信息
	sMessages(_this,message,type) {
		_this.$message({
			showClose: true,
			duration: '2000',
			message: message,
			type: type
		});
	}
	//数组截取
	split_array(arr,len){ //拆分原数组，len小数组包含多少个元素
		let a_len = arr.length;
		let result = []; //结果数组
		let i;
		for(i=0;i<a_len;i+=len){
			result.push(arr.slice(i,i+len));//循环取原数组N个元素，每次从上次取
		}
		return result; //里面的元素就是已拆分的小数组
	}
	
	feedBack(res, _this){
		console.log(res.data.code)
		if(res.data.code === 201){
			_this.$message({message: res.data.message, type: "warning"})
		}
		if(res.data.code === 202){
			_this.$message({message: res.data.message, type: "warning"})
		}
	}
	
}
export default new Publics()