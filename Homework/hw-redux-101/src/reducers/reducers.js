import studentsArr from '../data/students'

const reducer = (state, action) => {

    if(state === undefined){

        state = {
            count: studentsArr.length,
            students: studentsArr
        }
    }

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

        case "SORT_STUDENTS":

            console.log(state.students)

            return {
                ...state,
                students: state.students.sort()
                
            }
          

        default:
            return state
    }
  
}

export default reducer
