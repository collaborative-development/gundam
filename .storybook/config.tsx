import React from 'react'
import { addDecorator, addParameters } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
const styles: React.CSSProperties = {
    padding: '20px 40px'
}

const CenterDecorator = (storyFn: any) => 
    <div style={styles}>
        <h3>组件演示</h3>
        {storyFn()}
    </div>
addDecorator(CenterDecorator)
addDecorator(withInfo)
addParameters({info: { inline: true, header: false }})