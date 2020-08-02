const addUser = (userObject) => {
  return fetch('http://localhost:8000/school_api/user/create/', {
    headers: {
      'Content-type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify(userObject)
    
  })
}

const loginUser = (userObject) => {
  return fetch(`http://localhost:8000/school_api/login/`, {
    headers: {
    'Content-type': 'application/json'
  },
    method: 'POST',
    body: JSON.stringify(userObject)
  })
}

const fetchUserByID = (user_id) => {
  return fetch(`http://localhost:8000/school_api/user/${user_id}/`)
  .then((response) => response.json())
}

const fetchTeacherByID = (teacher_id) => {
  return fetch(`http://localhost:8000/school_api/teachers/${teacher_id}/`)
  .then((response) => response.json())
}

const fetchStudents = (user_id) => {
  return fetch(`http://localhost:8000/school_api/user/${user_id}/students/`)
  .then((response) => response.json())
  .then(data => {

  })
}

const addStudent = (user_id, studentObject) => {
  return fetch(`http://localhost:8000/school_api/user/${user_id}/students/create/`, {
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify(studentObject)
  })
}

// const updateStudent = (user_id, student_id, studentObject) => {
//   fetch(`http://localhost:8000/school_api/user/${user_id}/students/${student_id}/`, {
//     method: 'PUT',
//     headers: {
//       'Content-type': 'application/json',
//     },
//     body: JSON.stringify(studentObject),
//   }).then(response => response.json())
//   .then(studentObject => {
//     const students = this.state.students.map(student => {
//       if(student.id === students.id) {
//         return Object.assign({}, studentObject)
//       } else {
//         return student;
//       }
//     });
//     this.state({students: newStudent});
//   })
// }

const addClass = (classObject) => {
  return fetch(`http://localhost:8000/school_api/classes/`, {
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify(classObject)
  })
}

const editClass = (id, classObject) => {
  return fetch(`http://localhost:8000/school_api/classes/${id}/`, {
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'PUT',
    body: JSON.stringify(classObject)
  })
}

const deleteClass = (id) => {
  return fetch(`http://localhost:8000/school_api/classes/${id}/`, {
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'DELETE',
    // body: JSON.stringify(classObject)
  })
}

const fetchClasses = () => {
  return fetch(`http://localhost:8000/school_api/classes/`)
  .then((response) => response.json())
}

const fetchClassByID = (id) => {
  return fetch(`http://localhost:8000/school_api/classes/${id}/`)
  .then((response) => response.json())
}

export default {
  loginUser,
  addUser,
  fetchUserByID,
  fetchTeacherByID,
  fetchStudents,
  addStudent,
  fetchClasses,
  addClass,
  fetchClassByID,
  editClass,
  deleteClass,
  // updateStudent,
}