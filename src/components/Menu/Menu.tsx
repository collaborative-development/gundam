/* eslint-disable @typescript-eslint/interface-name-prefix */
import React, { useState, createContext, FC } from 'react';
import classNames from 'classnames';
import { MenuItemProps } from './MenuItem';

type MenuMode = 'horizontal' | 'vertical'
type SelectCallback = (selectedIndex: string) => void;

export interface MenuProps {
  /** 默认选中的索引 */
  defaultIndex?: string;
  className?: string;
  /** 设置横竖模式 */
  mode?: MenuMode;
  style?: React.CSSProperties;
  onSelect?: SelectCallback;
  /** 竖向模式默认展开子列 */
  defaultOpenSubMenu?: string[];
}

interface IMenuContext {
  index: string;
  onSelect?: SelectCallback;
  mode: MenuMode;
  defaultOpenSubMenu?: string[];
}

export const MenuContext = createContext<IMenuContext>({ index: '0', mode: 'horizontal', defaultOpenSubMenu: [] })
/**
 * 页面中常用的菜单栏元素
 * ### 引用方法
 * 
 * ~~~js
 * import { Menu } from 'gundam'
 * ~~~
 */
const Menu: FC<MenuProps> = (props) => {
  const {
    className,
    mode,
    style,
    children,
    defaultIndex,
    onSelect,
    defaultOpenSubMenu
  } = props;
  const handleClick = (index: string): void => {
    setActive(index)
    if (onSelect) {
      onSelect(index)
    }
  }
  const [currentActive, setActive] = useState(defaultIndex);
  const passedContext: IMenuContext = {
    index: currentActive!,
    onSelect: handleClick,
    mode: mode!,
    defaultOpenSubMenu: defaultOpenSubMenu!
  }
  const classes = classNames('gundam-menu', className, {
    'menu-vertical': mode === 'vertical',
    'menu-horizontal': mode !== 'vertical'
  })

  const renderChildren = () => {
    return React.Children.map(children, (child, index) => {
      const childElement = child as React.FunctionComponentElement<MenuItemProps>
      const { displayName } = childElement.type
      if (displayName === 'MenuItem' || displayName === 'SubMenu') {
        return React.cloneElement(childElement, {
          index: index.toString()
        })
      } else {
        console.error("Warning: Menu has a child which is not a MenuItem component.")
      }
    })
  }
  return (
    <ul className={classes} style={style} data-testid="test-menu">
      <MenuContext.Provider value={passedContext}>
        {renderChildren()}
      </MenuContext.Provider>
    </ul>
  )
}

Menu.defaultProps = {
  defaultIndex: '0',
  mode: 'horizontal',
  defaultOpenSubMenu: []
}

export default Menu;