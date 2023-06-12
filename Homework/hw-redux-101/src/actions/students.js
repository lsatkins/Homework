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
export const sortStudents = (students) => {
    return {
        type: "DELETE_STUDENT_BY_NAME",
        data: {
            students
        }
    }
}