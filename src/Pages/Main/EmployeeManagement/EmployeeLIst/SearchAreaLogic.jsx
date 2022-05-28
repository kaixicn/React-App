import { connect } from  'react-redux'
import SearchArea from './SearchArea'
import { setLoading } from '../../../../redux/actions/employeeLIst'
import axios from "axios";

function mapStateToProps(state){
    return { 
        loading: state.loadingFlg
    }
}

function mapDispatchToProps(dispatch){
    return { 
        search : (data)=>{ clickSearch(data) }
    }

    function clickSearch(data,v1,v2,v3,v4){
        console.log("v1;",v1)
        console.log("v2;",v2)
        console.log("v3;",v3)
        console.log("v4;",v4)
        
        dispatch(setLoading(data)) 
            axios.get('http://localhost:3000/management/employee/search').then(
                //请求成功
                response => {
                    if (response.data) {
                        console.log(response.data)
                        //TODO dispatch
                    }
                },
                //请求失败
                error => {
                    console.log("请求失败")
                }
            ).finally(() => {
                dispatch(setLoading(false)) 
            })
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(SearchArea)
