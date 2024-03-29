import { Icon } from '@iconify/react'
import React from 'react'

function GithubProfileBtn({className}) {
  return (
    <a
    href="https://github.com/TayfunCandan"
    title="Github Profile"
    className={`headerButtons ${className}`}
  >
    <Icon icon="akar-icons:github-fill" width="24" height="24" />
  </a>
  )
}

export default GithubProfileBtn