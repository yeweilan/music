/**
  * search模块接口列表
  */

 import base from "./base"
 import axios from "../utils/http.js"
 
 const search = {
     // 搜索列表
     searchList(params){
         return axios.get((base.host+base.bdm),{
             params:params
         })
     }
 }
 
 export default search