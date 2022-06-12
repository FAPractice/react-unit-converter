import React, { useState } from 'react'
import Temperatures from '../../Model/Temperature';
import _ from "lodash"

const TemperaturePage = () => {
    const [text, setText] = useState(0.0);

    const controller = new Temperatures();

    return (
        <Page tite="Temperature">
            <ListItem>
                <Picker type="dropdown" items={controller.units} />
                <TextField alignment="left" setter={setText}>{text}</TextField>
            </ListItem>
            {controller.units.map(e, idx => {
                <ListItem id={idx}>
                    <Text type="primary">{_.replace(_.startCase(e), "-", " ")}</Text>
                    <Text type="secondary">{controller.getValue(e)}.</Text>
                </ListItem>
            })}
        </Page>
    )
}

export default TemperaturePage