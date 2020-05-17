import React from 'react';
import Button, { ButtonType, ButtonSize } from './components/Button/Button'

function App(): JSX.Element {
  return (
    <div className="App">
      <Button onClick={(e): void => {e.preventDefault(); alert(123)}}>按钮</Button>
      <Button btnType={ButtonType.Primary} size={ButtonSize.Large}>按钮</Button>
      <Button btnType={ButtonType.Danger} size={ButtonSize.Large}>按钮</Button>
      <Button btnType={ButtonType.Link} size={ButtonSize.Small} href="https://www.baidu.com" disabled>按钮</Button>
    </div>
  );
}

export default App;
