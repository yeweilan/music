/**
  * lrc模块接口列表
  */
 import base from './base'
 import axios from '@/utils/http'

 const lrc = {
     getLrc(params){
         return axios.get((base.host+base.bdm),{
             params:params
         })
     }
 }
 export default lrc