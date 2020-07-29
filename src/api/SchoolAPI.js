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
  return fetch('http//localhost:8000/school_api/token/obtain/', {
    headers: {
    'Authorization': "JWT " + localStorage.getItem('access_token'),
    'Content-type': 'application/json'
  },
    method: 'POST',
    body: JSON.stringify(userObject)
  })
}

const fetchUserByID = (user_id) => {
  return fetch(`http://localhost:8000/school_api/users/${user_id}/`)
  .then((response) => response.json())
}

const fetchTeacherByID = (teacher_id) => {
  return fetch(`http://localhost:8000/school_api/teachers/${teacher_id}/`)
  .then((response) => response.json())
}

const fetchStudents = () => {
  return fetch(`http://localhost:8000/school_api/students/`)
  .then((response) => response.json())
}

const addStudent = (studentObject) => {
  return fetch('http://localhost:8000/school_api/students/add-student/', {
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify(studentObject)
  })
}

const fetchClasses = () => {
  return fetch('http://localhost:8000/school_api/classes/')
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
}