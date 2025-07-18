import React from 'react'

const page = (params) => {
    const courseId = params.courseId
  return (
    <div><h1>Details of courses{courseId}</h1>
    </div>
  )
}

export default page
