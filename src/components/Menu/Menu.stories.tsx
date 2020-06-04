import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import Menu from './Menu'
import MenuItem from './MenuItem'
import SubMenu from './SubMenu'

export const defaultMenu = () => (
    <Menu defaultIndex='0' onSelect={(index) => { action(`clicked ${index} item`) }} >
        <MenuItem>
            cool link
    </MenuItem>
        <MenuItem disabled>
            disabled
    </MenuItem>
        <MenuItem>
            cool link 2
    </MenuItem>
    </Menu>
)

export const directionMenu = () => (
    <Menu defaultIndex='0' onSelect={(index) => { action(`clicked ${index} item`) }} mode="vertical" >
        <MenuItem>
            cool link
    </MenuItem>
        <MenuItem disabled>
            disabled
    </MenuItem>
        <MenuItem>
            cool link 2
    </MenuItem>
    </Menu>
)

export const subMenu = () => (
    <Menu defaultIndex='0' onSelect={(index) => { action(`clicked ${index} item`) }} >
        <MenuItem>
            cool link
    </MenuItem>
        <MenuItem disabled>
            disabled
    </MenuItem>
        <SubMenu title="submenu">
            <MenuItem>sub 1</MenuItem>
            <MenuItem>sub 2</MenuItem>
            <MenuItem>sub 3</MenuItem>
        </SubMenu>
        <MenuItem>
            cool link 2
    </MenuItem>
    </Menu>
)

storiesOf('Menu Component', module)
    .add('Menu', defaultMenu)
    .add('不同模式的 Menu', directionMenu)
    .add('带子列表的 Menu', subMenu)
