import React from 'react'

interface User {
  id: number,
  name: string
}

const UsersPage =  async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users')
  const users = await response.json()
  return (
    <div>UsersPage</div>
  )
}

export default UsersPage