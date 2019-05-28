/**
  * tablist模块接口列表
  */

 import base from "./base"
 import axios from "../utils/http.js"
 
 const tablist = {
     // 搜索列表
     getTabList(params){
         return axios.get((base.host+base.bdm),{
             params:params
         })
     }
 }
 
 export default tablist