/**
  * homelist模块接口列表
  */

 import base from "./base"
 import axios from "../utils/http.js"
 
 const homelist = {
     // 搜索列表
     getHomeList(params){
         return axios.get((base.host+base.bdm),{
             params:params
         })
     }
 }
 
 export default homelist