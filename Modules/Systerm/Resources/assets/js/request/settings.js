//异步请求地址，错误处理的设置
//全局设置
	const gbs =  {
		host: 'http://localhost:3000/service/',

		// host: 'http://sunshine.app/service/', //接口根地址
		db_prefix: 'sunshine_', //本地存储的key前缀，防止与其他项目冲突
	};

	//回调
	const cbs =  {
		/**
		 * ajax请求成功，返回的状态码不是200时调用
		 * @param  {object} err 返回的对象，包含错误码和错误信息
		 */
		statusError(err) {
			if (err.status !== 404) {
				this.$message({
					showClose: true,
					message: '返回错误：' + err.data.msg+";状态码："+err.data.code,
					type: 'error'
				});
			} else {
				this.$store.dispatch('remove_userinfo').then(() => {
					this.$alert(err.status + ',' + err.msg + '！', '登录错误', {
						confirmButtonText: '确定',
						callback: action => {
							this.$router.push('/login');
						}
					});
				});
			}
		},

		/**
		 * ajax请求网络出错时调用
		 */
		requestError(err) {
			this.$message({
				showClose: true,
				// message: '请求错误：' + err.status + ',' + err.statusText,
				message: '请求错误：' + err,
				type: 'error'
			});
		}
	}


export {
	gbs,
	cbs,
}