import React from 'react'
import { storiesOf } from '@storybook/react-native'
import { action } from '@storybook/addon-actions'

import { Button } from '../components/Button'

storiesOf("Button", module)
    .add("default", () => {
        <Button onPress={action("tapped")}>Press me</Button>
})