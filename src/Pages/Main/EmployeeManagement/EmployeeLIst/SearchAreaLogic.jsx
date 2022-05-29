import { connect } from  'react-redux'
import SearchArea from './SearchArea'
import { 
    action_loading, 
    action_onChange_employeeId,
    action_onChange_employeeNameKanji,
    action_onChange_employeeNameKatakana,
    action_onChange_subdivistion,
    action_set_empoloyee_info_list,
} from '../../../../redux/actions/employeeLIst'
import axios from "axios";
import qs from 'qs';



function mapStateToProps(state){
    return { 
        state_loading : state.store_loading,
        state_employeeId: state.store_employeeId,
        state_employeeNameKanji: state.store_employeeNameKanji,
        state_employeeNameKatakana: state.store_employeeNameKatakana,
        state_subdivision: state.store_subdivision,
    };
}

function mapDispatchToProps(dispatch){
    return { 
        onClick_search : (btnStatus, id, nameKanji,nameKatakana,subdivision)=>{ fn_Search(btnStatus, id, nameKanji,nameKatakana,subdivision) },
        onChange_employeeId : (data) => { fn_EmployeeId(data.target.value) },
        onChange_employeeNameKanji : (data) => { fn_EmployeeNameKanji(data.target.value) },
        onChange_employeeNameKatakana : (data) => { fn_employeeNameKatakana(data.target.value) },
        onChange_subdivision: (data) => { fn_subdivision(data) }

    }

    function fn_subdivision(data){
        console.log(data);
        dispatch(action_onChange_subdivistion(data));
    };

    function fn_employeeNameKatakana(data){
        console.log(data);
        dispatch(action_onChange_employeeNameKatakana(data));
    }

    function fn_EmployeeNameKanji(data){
        console.log(data);
        dispatch(action_onChange_employeeNameKanji(data));
    }

    function fn_EmployeeId(data){
        console.log(data);
        dispatch(action_onChange_employeeId(data));
    }

    function fn_Search(btnStatus,id,nameKanji,nameKatakana,subdivision){

        dispatch(action_loading(btnStatus)) 
        axios.get('http://localhost:3000/management/employee/search',{
            params: {
                employee_Id:id,
                employee_name_kanji: nameKanji,
                employee_Name_Katakana: nameKatakana,
                employee_subdivision: qs.stringify({"subdivision":subdivision}, { indices: false })
            }
        }).then(
            //请求成功
            response => {
                if (response.data) {
                    dispatch(action_set_empoloyee_info_list(response.data))
                }
            },
            //请求失败
            error => {
                console.log("请求失败")
            }
        ).finally(() => {
            dispatch(action_loading(false)) 
        })
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(SearchArea)
