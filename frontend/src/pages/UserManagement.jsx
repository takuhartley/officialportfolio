import React, { useState } from 'react'
import users from '../users'

const UserManagement = () => {
  const [localUsers, setLocalUsers] = useState(users)
  const [editingUserId, setEditingUserId] = useState(null)
  const [tempValue, setTempValue] = useState('')

  const handleEditClick = (userId, value) => {
    setEditingUserId(userId)
    setTempValue(value)
  }

  const handleInputChange = event => {
    setTempValue(event.target.value)
  }

  const handleSave = userId => {
    setLocalUsers(prevUsers =>
      prevUsers.map(user =>
        user.userId === userId ? { ...user, firstName: tempValue } : user
      )
    )
    setEditingUserId(null)
    setTempValue('')
  }

  return (
    <div>
      <h2>User Management</h2>
      <table border='1'>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Location</th>
            <th>User Type</th>
          </tr>
        </thead>
        <tbody>
          {localUsers.map(user => (
            <tr key={user.userId}>
              <td>
                {editingUserId === user.userId ? (
                  <>
                    <input value={tempValue} onChange={handleInputChange} />
                    <button onClick={() => handleSave(user.userId)}>
                      Save
                    </button>
                  </>
                ) : (
                  <span
                    onClick={() => handleEditClick(user.userId, user.firstName)}
                  >
                    {user.firstName}
                  </span>
                )}
              </td>
              <td>{user.lastName}</td>
              <td>{user.email}</td>
              <td>{user.location}</td>
              <td>{user.admin ? 'Admin' : 'User'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default UserManagement
