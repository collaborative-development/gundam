import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import Menu from './components/Menu/Menu';
import MenuItem from './components/Menu/MenuItem';
import SubMenu from './components/Menu/SubMenu';
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas)

function App(): JSX.Element {
  return (
    <div className="App">
      <Menu defaultIndex={'0'} defaultOpenSubMenu={['2']}>
        <MenuItem>
          cool link
        </MenuItem>
        <MenuItem disabled>
          cool link 1
        </MenuItem>
        <SubMenu title="dropdown">
          <MenuItem>
            dropdown 1
          </MenuItem>
          <MenuItem>
            dropdown 2
          </MenuItem>
        </SubMenu>
        <MenuItem>
          cool link 2
        </MenuItem>
      </Menu>
      
    </div>
  );
}

export default App;
