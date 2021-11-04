function dataShow() {
	// this.dataListUrl = 'https://www.fastmock.site/mock/09fd901fe9fdce69a3d6531873b86fb0/test/login'
}
// 定义一个深拷贝函数  接收目标target参数
function deepClone(target) {
  // 定义一个变量
  let result;
  // 如果当前需要深拷贝的是一个对象的话
  if (typeof target === 'object') {
    // 如果是一个数组的话
    if (Array.isArray(target)) {
      result = []; // 将result赋值为一个数组，并且执行遍历
      for (let i in target) {
        // 递归克隆数组中的每一项
        result.push(deepClone(target[i]))
      }
      // 判断如果当前的值是null的话；直接赋值为null
    } else if(target===null) {
      result = null;
      // 判断如果当前的值是一个RegExp对象的话，直接赋值
    } else if(target.constructor===RegExp){
      result = target;
    }else {
      // 否则是普通对象，直接for in循环，递归赋值对象的所有值
      result = {};
      for (let i in target) {
        result[i] = deepClone(target[i]);
      }
    }
    // 如果不是对象的话，就是基本数据类型，那么直接赋值
  } else {
    result = target;
  }
  // 返回最终结果
  return result;
}
dataShow.prototype.initDiv = function () {
  let avr = ($(window).height() - 50);
  $('.pase').height(avr);
  $('.pqa').height(avr);
  let pqaHeight = (avr - 47)/4;
  $('.illegalInfo').height(pqaHeight*3);
	$('.bottom').height(pqaHeight);
}

dataShow.prototype.setData = function () {
  this.listData();
  // this.tableListData();
}
dataShow.prototype.listData = function () {
  $.ajax({
    url: this.dataListUrl,
    type: 'POST',
    dataType: 'json',
    contentType: 'application/json;charset=utf-8',
    data: JSON.stringify(),
    success: function (response) {
      if (response.code == 0 && response.message == "success") {
       vm.ruleForm = response.data
      } else {
        alert('系统错误');
        return false;
      }
    },
    error: function (response) {
      alert('系统错误');
      return false;
    }
  })
}

dataShow.prototype.init = function () {
  let _this = this;
  _this.initDiv();
  // _this.setData();
  $(window).resize(function () {
    _this.initDiv();
  })
}
$(document).ready(function () {
  var initdataShow = new dataShow();
  initdataShow.init();
})
var vm = new Vue({
  el: '#app',
  data() {
    return {
			isApeal: false,
			disabled: false,
			checkValue2:[],
      ruleForm: {
        result: 'A',
        resource: '是',
				pqabeizhu: '京东方实际付款时间快递费',
				fuyibeizhu: '',
				fyresult: '',
				formData: [{
					leixing: '',
				  dengji: '',
				  jianyi: '一二三四五六七八九十aasf',
				  beizhu: '一二三四五'
				},{
					leixing: '',
				  dengji: 'B',
				  jianyi: '',
				  beizhu: ''
				}]
      },
      rules: {
        result: [
          { required: true, message: '请选择质检结果', trigger: 'change' }
        ],
        resource: [
          { required: true, message: '请选择是否应该核保', trigger: 'change' }
        ]
      },
			options: [{
				value: 'zhinan',
				label: '指南',
				children: [{
					value: 'shejiyuanze',
					label: '设计原则',
					children: [{
						value: 'yizhi',
						label: '一致',
					}, {
						value: 'fankui',
						label: '反馈',
					}, {
						value: 'xiaolv',
						label: '效率',
					}, {
						value: 'kekong',
						label: '可控',
					}]
				}, {
					value: 'daohang',
					label: '导航',
					children: [{
						value: 'cexiangdaohang',
						label: '侧向导航',
					}, {
						value: 'dingbudaohang',
						label: '顶部导航',
					}]
				}]
			}],
			qaResult:[{
				label:"A",value:"yizhi"
			},{
				label:"B",value:"fankui"
			},{
				label:"C",value:"xiaolv"
		  },{
				label:"D",value:"kekong"
			},{
        label:"E",value:"dingbudaohang"
      },{
				label:"通过",value:"cexiangdaohang"
			}]
    };
  },
  mounted() {},

  methods: {
		changeVal(val) {
      console.log(val, 'OOOO');
      this.checkValue2 = []
      this.ruleForm.formData.forEach(item => {
        if (item.leixing) {
          item.dengji = item.leixing
          this.checkValue2.push(item.leixing)
        }
      })
      this.ruleForm = deepClone(this.ruleForm)
      this.options = this.getLeafKeys()
    },
		// 给子节点加disabled
		getLeafKeys() {
      let temp = deepClone(this.options)
      const loop = (node) => {
        node.forEach((item,index) => {
          if (item.children) {
            loop(item.children)
          } else {
            if (this.checkValue2.includes(item.value)) {
              item.disabled = true
            } else {
              item.disabled = false
            }
          }
        });
      }
      loop(temp)
      return temp
		},
		visibleChange() {

		},
		addFormData() {
			if (this.ruleForm.formData.length > 50 ) {
				this.$message({
          message: '人工最多添加50个质检违规项',
          type: 'warning'
        });
			} else {
				this.ruleForm.formData = [...this.ruleForm.formData, {
					leixing: '',
					dengji: '',
					jianyi: '',
					beizhu: ''
				}]
		  }
		},
		submitForm(formName) {
			this.$refs[formName].validate((valid) => {
				if (valid) {
					console.log(this.ruleForm,'ruleForm')
				} else {
					console.log('error submit!!');
					return false;
				}
			});
		},
		// resetForm(formName) {
		// 	this.$refs[formName].resetFields();
		// }
	},
});