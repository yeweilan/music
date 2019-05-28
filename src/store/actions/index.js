export default {
    setTokenAction({commit},token){
        commit('setToken',token)
    },
    updateTokenAction({commit},token){
        commit('updateToken',token)
    }
}