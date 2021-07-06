import Image from 'next/image'
import ActiveLink from '../ActiveLink'

import leftBars from '../../../../../public/img/left-bar.png'
import rightBars from '../../../../../public/img/right-bar.png'

import {
  LinkItem
} from './styles'

export default function NavLink({children, href}) {
  return (
    <LinkItem>
      <ActiveLink activeClassName="active" href={href}>
        <a>{children}</a>
      </ActiveLink>
      <div>
        <Image src={leftBars} alt="Left bars"/>
      </div>
      <div>
        <Image src={rightBars} alt="Right Bars" />
      </div>
    </LinkItem>
  )
}