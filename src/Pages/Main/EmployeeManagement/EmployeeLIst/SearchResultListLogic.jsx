import { connect } from 'react-redux'
import SearchResultList from './SearchResultList'

//State
function mapStateToProps(state){
    return{
        state_loading: state.store_loading,
        employee_list: state.store_employee_list,
    }
}

function mapDispatchToProps(dispatch){
    return{
        
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(SearchResultList);