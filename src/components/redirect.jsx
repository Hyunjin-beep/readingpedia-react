import React, { useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

const Redirect = () => {
  const navigateState = useLocation().state
  const navigate = useNavigate()

  useEffect(() => {
    if (navigateState.link) {
      window.open(navigateState.link)
    } else {
      alert('No Link for this book')
    }

    navigate(-1)
  })

  return (
    <section>
      <span>Redirecting...</span>
    </section>
  )
}

export default Redirect
