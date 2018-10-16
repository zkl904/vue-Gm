const state = {
  loginData: null
}

const mutations = {
  setLoginData(state, payload) {
    state.loginData = payload
  }
}

const actions = {
  doLogin({commit, dispatch, rootState}, payload) {
    return new Promise(async (resolve, reject) => {
      try {
        let params = {
          data: {
            mobileNo: payload.mobileNo,
            loginPwd: payload.loginPwd,
          }
        }
        /*let actionLogin = Object.assign(params.data , {source: '这是从action返回的数据'})
        let mutationsLogin =  Object.assign(params.data , {source: '这是从getters返回的数据'})*/   // 两个输出的都是这是这是从getters返回的数据 , Object.assign会改变第一个对象 , 这里的params.data已经被改变了 , 所以要在前面加一个{}
        let actionLogin = Object.assign({},params.data , {source: '这是从action返回的数据'})
        let mutationsLogin =  Object.assign({},params.data , {source: '这是从getters返回的数据'})
        console.log(actionLogin , mutationsLogin, 'xxxx')
        commit('setLoginData', mutationsLogin)
        resolve(actionLogin)
      } catch (e) {
        reject(e)
      }
    })
  },
  getContractFlexible({commit, dispatch, rootState}, payload) {
    return new Promise(async (resolve, reject) => {
      try {
        let params = {
          tag: 'getContractFlexible',
          url: '/wth/tranCode/QueryFloatProductContractService',
          type: 'post',
          data: {
            productId: payload.productId,
            contractType: payload.contractType
          }
        }
        let {data} = await dispatch('gmNetwork', params)
        if (data.errorCode === rootState.code.CODE_XHR_SUCCESS) {
          resolve(data)
        } else {
          reject(data)
        }
      } catch (e) {
        reject(e)
      }
    })
  },
}

const getters = {
  loginData: (state) => state.loginData
}

export default {
  state,
  mutations,
  actions,
  getters
}
