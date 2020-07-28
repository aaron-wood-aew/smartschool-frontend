const addUser = (userObject) => {
  return fetch('http://localhost:8000/school_api/user/create/', {
    headers: {
      'Content-type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify(userObject)
  })
}

const fetchTeacherByID = (teacher_id) => {
  return fetch(`localhost:8000/teachers/${teacher_id}`)
  .then((response) => response.json())
}

const fetchStudents = () => {
  return fetch(`https://localhost:8000/students`)
  .then((response) => response.json())
}

const addStudent = (studentObject) => {
  return fetch('https://localhost:8000/students/add-student', {
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify(studentObject)
  })
}

const fetchClasses = () => {
  return fetch('https://localhost:8000/classes')
  .then((response) => response.json())
}


export default {
  addUser,
  fetchTeacherByID,
  fetchStudents,
  addStudent,
  fetchClasses,
}