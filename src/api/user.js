
let tokenApi = process.env.TOKENAPI;
//let tokenApi = "http://172.16.2.188:8090";
//let tokenApi = "http://172.16.4.248:8090";
 console.log(tokenApi);
//tokenApi = "";//*********************上线时候打开注释打包发给后台*******************************

let allApi = {
	"userinfo": tokenApi + "/api/information",
	'tokeninfo': tokenApi,
	"food": tokenApi + '/api/food', //食材api
	"foodMenu": tokenApi + '/api/foodMenu', //食谱api
	"mealInfo": tokenApi + '/api/mealInfo', //就餐信息api
	"expenditure": tokenApi + '/api/expenditure', //支出信息api
	"inStorage": tokenApi + '/api/inStorage/count', //入库汇总api
	"outStorage": tokenApi + '/api/outStorage/count', //出库汇总api
	"storage": tokenApi + '/api/storage/count', //库存汇总api
	"storages": tokenApi + '/api/storage', //入库
	"outbound": tokenApi + '/api/outbound', //出库
	"foodStock": tokenApi + '/api/food/stock', //获取库存的食材信息(添加食材出库时调用)
	"imgUrl": tokenApi + '/api/upload/file', //图片上传
	
	//教育局
	"eduOrgOutbound": tokenApi + '/api/eduOrg/outbound', //教育局食材出库
	"eduOrgOutboundDetail": tokenApi + '/api/eduOrg/outbound/detail', //教育局出库详情
	"eduOrgStorageCount": tokenApi + '/api/eduOrg/storageCount', //教育局库存汇总
	"eduOrgStorageCountDetail": tokenApi + '/api/eduOrg/storageCount/detail', //教育局库存汇总详情
	"eduOrgMealInfo": tokenApi + '/api/eduOrg/mealInfo', //教育局就餐信息统计
	"eduOrgMealInfoDetail": tokenApi + '/api/eduOrg/mealInfo/detail', //教育局就餐信息统计详情
	"eduOrgInStorage": tokenApi + '/api/eduOrg/inStorage', //教育局入库汇总
	"eduOrgInStorageDetail": tokenApi + "/api/eduOrg/inStorage/detail", //教育局入库汇总详情
	"eduOrgInfoCount": tokenApi +'/api/eduOrg/infoCount',//教育局本月汇总
	"eduOrgInfoOutbound":tokenApi + '/api/eduOrg/info/outbound',//教育局本月汇总出库信息
	"eduOrgExpense":tokenApi + '/api/eduOrg/expense',//教育局支出信息
	"eduLogIn":tokenApi + '/api/log/in',//教育局首页入库信息
	"eduLogOut":tokenApi + '/api/log/out',//教育局首页出库信息
	"eduMealInfo":tokenApi + '/api/eduOrg/mealInfo/log',//教育局首页出库信息
	//学校
	"mealEnv":tokenApi + '/api/mealEnv',//学校获取就餐环境
	"expenditureSchool":tokenApi + '/api/expenditure/school',//学校营养餐界面——保障性支出情况
	"storageSchool":tokenApi + '/api/storage/school',//学校营养餐界面——食材入库信息
	"foodMenuWeek":tokenApi + '/api/foodMenu/week',//学校营养餐界面——本周菜谱
	"mealEnvRecent":tokenApi + '/api/mealEnv/recent',//学校营养餐界面——用餐环境
	"logout":tokenApi + "/logout",	//退出
	"expenseCount":tokenApi + "/api/expense/count",	//汇总表--支出信息
	"boeSchool":tokenApi + "/api/boe/school",	//学校名称
	
	/****** v2 *******/
	"addSup": tokenApi + "/api/boe/supplier", // 教育局端添加供应商 post
	"getSupList": tokenApi + "/api/boe/supplier", // 教育局端获取供应商 get
	"delSup": tokenApi + "/api/boe/supplier", // 教育局删除供应商 delete
	"rePhone": tokenApi + "/api/supplier", // 供应商修改供应商电话 post
	"rePwd": tokenApi + "/api/updatePwd", // 教育局、 学校 、 供应商修改密码 post
	
	// 供应商
	"getFoodList": tokenApi + "/api/distributorFood", // 供应商获取食材信息 get
	"addFoodList": tokenApi + "/api/distributorFood", // 供应商添加食材信息 post
	"delFoodList": tokenApi + "/api/distributorFood", // 供应商删除食材 delete
	"getFoodDetail": tokenApi + "/api/distributorFood", // 供应商获取详细信息 get
	"reFoodDetail": tokenApi + "/api/distributorFood/", // 供应商修改food信息 put
	"getMessage": tokenApi + "/api/message", // 供应商、学校端 get message get
	"isRead": tokenApi + "/api/message", // 点击已读 put
	"acceptOrder": tokenApi + "/api/orderInfoState2", // 供应商接单 put
	"refusedOrder": tokenApi + "/api/orderInfoState6", // 供应商拒单
	
	
	// 学校
	"schoolGetFoodList": tokenApi + "/api/distributorFoodSchool", // 学校端获取食材列表 get
	"placeOrder": tokenApi + "/api/placeAnOrder", // 下单 post
	"cancelOrder": tokenApi + "/api/orderInfoState5", // 取消订单 put
	"allSign": tokenApi + "/api/orderInfoState4", // 全部签收 put
	"bufenSign": tokenApi + "/api/orderInfoState3", // 部分签收 put
	"getRuku": tokenApi + "/api/storage", // 获取入库列表 get
	"getRukuDetail": tokenApi + "/api/storage", // 获取入库列表 get
	"getChuku": tokenApi + "/api/outbound", // 获取出库 get
	"getIndexInto": tokenApi + "/api/storage/school", // 首页学校入库
	"getSchoolIndex": tokenApi + "/api/getStorageToEcharts/school", // 首页数据
	
	
	// 学校出库
	"getfoodAll": tokenApi + "/api/foodAll", // 获取所有食材列表 get
	"getRukuTime": tokenApi + "/api/queryFoodStorageByfoodId", // 根据id获取入库时间列表 get
	"getOrderList": tokenApi + "/api/queryFoodStorageByfoodIdAndTime" , // 根据id和入库时间获取订单号 get
	"foodDetail": tokenApi + "/api/queryStockByOrderIdAndFoodId", // 获取食材信息 get
	"addOut": tokenApi + "/api/getfoodInfoByChuku", // 添加出库获取食材信息 get
	"outBound": tokenApi + "/api/chukunew", // 食材出库 post
	
	
	// 购物车
	"addCart": tokenApi + "/api/car", // 添加到购物车 post
	"delCart": tokenApi + "/api/car", // 删除购物车 delete
	"getCart": tokenApi + "/api/car", //获取购物车 get
	"reCartCount": tokenApi + "/api/car", // 修改数量
	
	// 公共
	"getOrder": tokenApi + "/api/getOrder", // 供应商、学校 获取订单信息 get 
	"orderBase": tokenApi + "/api/getOrder/base", // 供应商、学校 获取订单详情 get  // 两个接口。。。  上 基础 下 表格
	"orderDetail": tokenApi + "/api/getOrder/detail", // 供应商、学校 获取订单详情 get
	"queryEvaluation": tokenApi + "/api/getOrder/comment", // 供应商、学校 查询评价 get
	
	// 教育局
	"getSchoolLsit": tokenApi + "/api/boe/orgSchool", // 获取学校列表 get
	"intoSummary": tokenApi + "/api/edu/inKufangCount", // 入库汇总
	"outSummary": tokenApi + "/api/edu/outKufangCount", // 出库汇总
	"diningSummary": tokenApi + "/api/edu/mealInfoDetail", // 就餐信息汇总
	"storageCount": tokenApi + "/api/edu/storage/count", // 库存信息汇总
	"intoSummaryMonth": tokenApi + "/api/eduOrg/inStorage/detailnew", // 入库月度信息汇总
	"outSummaryMonth": tokenApi + "/api/eduOrg/info/outboundnew", // 出库月度信息汇总
	"getCommonly": tokenApi + "/api/eduOrg/info/farmProducts", // 常用农产品
	"getEvaluate": tokenApi + "/api/edu/getOrderevaluate", // 评价信息
	"eduGetSupFoodList": tokenApi + "/api/distributorFood_jiaoyuju", // 教育局端获取
	
	
}

export default allApi;

