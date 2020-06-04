import React, {useState} from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import Button from './components/Button/Button';
import Menu from './components/Menu/Menu';
import MenuItem from './components/Menu/MenuItem';
import SubMenu from './components/Menu/SubMenu';
import Transition from './components/Transition/Transition'
library.add(fas)

function App(): JSX.Element {
  const [show, setShow] = useState(false)

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
      <Button size="sm" onClick={() => setShow(!show)}>toggle</Button>
      <Transition
        in={show}
        timeout={300}
        animation="zoom-in-bottom"
      >
        <Button size="lg">show</Button>
      </Transition>
    </div>
  );
}

export default App;
