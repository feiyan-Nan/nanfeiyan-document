function dataShow() {
	// this.dataListUrl = 'https://www.fastmock.site/mock/09fd901fe9fdce69a3d6531873b86fb0/test/login'
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
					leixing: 'fankui',
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
						dengji: 'A'
					}, {
						value: 'fankui',
						label: '反馈',
						dengji: 'B'
					}, {
						value: 'xiaolv',
						label: '效率',
						dengji: 'C'
					}, {
						value: 'kekong',
						label: '可控',
						dengji: 'D'
					}]
				}, {
					value: 'daohang',
					label: '导航',
					children: [{
						value: 'cexiangdaohang',
						label: '侧向导航',
						dengji: 'A'
					}, {
						value: 'dingbudaohang',
						label: '顶部导航',
						dengji: 'B'
					}]
				}]
			}],
			qaResult:[{
				label:"A",value:"A"
			},{
				label:"B",value:"B"
			},{
				label:"C",value:"C"
		  },{
				label:"D",value:"D"
			},{
				label:"通过",value:"通过"
			}]
    };
  },
  mounted() {},

  methods: {
		changeVal(val) {
			
		},
		// 给子节点加disabled
		getLeafKeys(node) {
			node.forEach((item,index) => {
				if (item.children) {
					this.getLeafKeys(item.children)
				} else {
					if (this.checkValue2.includes(item.value)) {
					  item.disabled = true
				  } else {
						item.disabled = false
					}
		    }
			});
		},
		visibleChange() {
			this.checkValue2 = []
			this.ruleForm.formData.forEach(item => {
				if (item.leixing) {
					this.checkValue2.push(item.leixing) 
				}
			})
			console.log(this.checkValue2,'1')
			this.getLeafKeys(this.options)
			console.log(this.options)
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