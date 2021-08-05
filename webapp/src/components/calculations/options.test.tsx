// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import {render} from '@testing-library/react'
import React from 'react'

import {IPropertyTemplate} from '../../blocks/board'

import {TableCalculationOptions} from './options'

describe('components/calculations/Options', () => {
    test('should match snapshot', () => {
        const property = {
            type: 'number',
        } as IPropertyTemplate

        const component = (
            <TableCalculationOptions
                value={'none'}
                onChange={() => {}}
                property={property}
            />
        )

        const {container} = render(component)
        expect(container).toMatchSnapshot()
    })

    test('should match snapshot menu open', () => {
        const property = {
            type: 'number',
        } as IPropertyTemplate

        const component = (
            <TableCalculationOptions
                value={'none'}
                menuOpen={true}
                onChange={() => {}}
                property={property}
            />
        )

        const {container} = render(component)
        expect(container).toMatchSnapshot()
    })
})
