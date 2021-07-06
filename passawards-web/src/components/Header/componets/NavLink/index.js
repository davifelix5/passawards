import ActiveLink from '../ActiveLink'

import {
  LinkItem
} from './styles'

export default function NavLink({children, href}) {
  return (
    <LinkItem>
      <ActiveLink activeClassName="active" href={href}>
        <a>{children}</a>
      </ActiveLink>
      <img src="/img/left-bar.png" alt="Left bars"/>
      <img src="/img/right-bar.png" alt="Right Bars" />
    </LinkItem>
  )
}