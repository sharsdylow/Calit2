import React from 'react'
import RegisterDevice from '../features/device/RegisterDevice'
import DeleteDevice from '../features/device/DeleteDevice'

export default function Setting() {
  return (
    <div>
      <h3>Register New Device</h3>
      <RegisterDevice />
      <h3>Delete Device</h3>
      <DeleteDevice />
    </div>
  )
}
