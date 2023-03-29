import React, { useState } from "react"

const Form = () => {
  const [user, setUser] = useState({ firstName: "", lastName: "", email: "" })
  const [users, setUsers] = useState([])

  const formChange = (e) => {
    const name = e.target.name
    const value = e.target.value

    setUser({ ...user, [name]: value })
  }

  const formSubmit = (e) => {
    e.preventDefault()
    if (user.firstName && user.lastName && user.email) {
      const newUser = {
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
      }
      setUsers((users) => {
        return [...users, newUser]
      })
      setUser({ firstName: "", lastName: "", email: "" })
    } else {
      console.log("Missing field!")
    }
  }

  return (
    <>
      <form className="form" onSubmit={formSubmit}>
        <input
          className="form__user form__user--firstName"
          type="text"
          placeholder="First Name"
          value={user.firstName}
          onChange={formChange}
          name="firstName"
        />
        <input
          className="form__user form__user--lastName"
          type="text"
          placeholder="Last Name"
          value={user.lastName}
          onChange={formChange}
          name="lastName"
        />
        <input
          className="form__user form__user--email"
          type="email"
          placeholder="Email"
          value={user.email}
          onChange={formChange}
          name="email"
        />
        <input className="form__submit" type="submit" value="Submit" />
      </form>
    </>
  )
}

export default Form
