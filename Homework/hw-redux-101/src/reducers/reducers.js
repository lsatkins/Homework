import studentsArr from '../data/students'

const initialState = {
    count: studentsArr.length,
    students: studentsArr,
    searchHistory: []
};

const reducer = (state = initialState, action) => {

    switch(action.type){

        case "INCREMENT":
            return {
                ...state,
                count: state.count + action.data
            }

        case "ADD_STUDENT":
            return {
                ...state,
                students: state.students.concat(action.data),
                count: state.count + 1
            }

        case "REMOVE_STUDENT":
            return {
                ...state,
                students: state.students.filter(student=>{
                    return student.id !== action.data.id
                }),
                count: state.count -1
            }

        case "DELETE_STUDENT_BY_NAME":

            let didDelete = state.students.some(student => student.fName === action.data.fName)

            if(didDelete){
                return {
                    ...state,
                    students: state.students.filter(student=>{
                       return student.fName !== action.data.fName
                    }),
                    count: state.count -1
                }
            }else{
                console.log("That name was not found")
            }
            break;

        case "SORT_STUDENT_BY_NAME":

            let sortedByName = [...state.students].sort((a, b)=>{
                if(a.fName < b.fName){
                    return -1
                }
                if(a.fName > b.fName){
                    return 1;
                }
                return 0;
            })

            return {
                ...state,
                sortedByName
                
            };
        case "SORT_STUDENT_BY_CITY":

            let sortedByCity = [...state.students].sort((a, b)=>{
                if(a.city < b.city){
                    return -1
                }
                if(a.city > b.city){
                    return 1;
                }
                return 0;
            })

            return {
                ...state,
                sortedByCity
                
            };
        case "SEARCH_STUDENT":

            let findStudent = [...state.students].some(student => student.fName === action.data.input)
            let foundStudent = {}
            if(findStudent){
                [...state.students].forEach(student => {
                    if (student.fName === action.data.input){
                        foundStudent = student
                    }
                })
            }
            if(findStudent && state.searchHistory.length < 3){
                return{
                    ...state,
                    searchHistory: state.searchHistory.concat(foundStudent)
                }
            } else if (findStudent && state.searchHistory.length >= 3){ 

                let newHistory = [...state.searchHistory].splice(1,2).concat(foundStudent)
                return{
                    ...state,
                    searchHistory: newHistory

                }
            } else{
                alert("No user by that name exists.")
                return{
                    ...state
                }
            }

            return {
                ...state,
                searchHistory: state.searchHistory.concat(action.data.input)
                
            };
          

        default:
            return state
    }
  
}

export default reducer
