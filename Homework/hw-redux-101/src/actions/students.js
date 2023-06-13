export const addStudent = (id, fName, city) => {
    return {
        type: "ADD_STUDENT",
        data: {
            id,
            fName,
            city
        }
    }
}
export const removeStudent = (id) => {
    return {
        type: "REMOVE_STUDENT",
        data: {
            id
        }
    }
}
export const deleteStudentByName = (fName) => {
    return {
        type: "DELETE_STUDENT_BY_NAME",
        data: {
            fName
        }
    }
}
export const sortByName = (students) => {
    return {
        type: "SORT_STUDENT_BY_NAME",
        data: {
            students
        }
    }
}
export const sortByCity = (students) => {
    return {
        type: "SORT_STUDENT_BY_CITY",
        data: {
            students
        }
    }
}
export const searchStudent = (input) => {
    return {
        type: "SEARCH_STUDENT",
        data: {
            input
        }
    }
}