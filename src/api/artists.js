/**
  * artists模块接口列表
  */

 import base from "./base"
 import axios from "../utils/http.js"
 
 const artists = {
     // 搜索列表
     artistsList(params){
         return axios.get((base.host+base.bdm),{
             params:params
         })
     }
 }
 
 export default artists