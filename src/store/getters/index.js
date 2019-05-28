export default {
    confirmToken(state){
        if(!state.token){
            return null
        }
        return state.token
    }
}