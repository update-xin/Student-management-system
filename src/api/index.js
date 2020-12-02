import URLs from './URLs';
import Axios from 'axios';
const appkey = 'zgx666_1585656106078';
// 
const instance = Axios.create({
    baseURL:URLs.baseURL,
    params:{
        appkey
    }
})
instance.interceptors.response.use(data=>{
    if(data.data.data){
        return data.data.data
    }
    return data.data;
})
const findByPage = (page,size)=>{
    return instance.get(URLs.findByPage,{
        params:{
            page,
            size
        }
    })
}
const updateStu = options =>{
    return instance.get(URLs.updateStu,{
        params:{
            ...options
        }
    })
}
const addStu = options => {
    return instance.get(URLs.addStu,{
        params:{
            ...options
        }
    })
}
const delStu = sNo => {
    return instance.get(URLs.delStu,{
        params:{
            sNo
        }
    })
}
const searchStu = options => {
    return instance.get(URLs.searchStu,{
        params:{
            sex:-1,
            ...options
        }
    })
}

export default {
    findByPage,
    updateStu,
    addStu,
    delStu,
    searchStu
}