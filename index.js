"use client"

import React from 'react'
import MenuList from './menu-list'

export default function TreeView({menus = []}) {
  return (

    <div>
      <MenuList list={menus}/>
    </div>
  )
}
