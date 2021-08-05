// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.
import React from 'react'
import Select, {components} from 'react-select'

import ChevronDown from '../../widgets/icons/chevronDown'

import {Option, Options, styles} from './options'

type Props = {
    value: string
    menuOpen?: boolean
    onMenuClose: () => void
}

const DropdownIndicator = (props: any) => {
    return (
        <components.DropdownIndicator {...props}>
            <ChevronDown/>
        </components.DropdownIndicator>
    )
}

const BoardOptions = (props: Props): JSX.Element => {
    console.log(props.menuOpen)

    return (
        <Select
            styles={styles}
            value={Options[props.value]}
            isMulti={false}
            isClearable={true}
            name={'boardCalculationOptions'}
            className={'boardCalculationOptions'}
            options={[Options.none, Options.average]} // TODO
            menuPlacement={'bottom'}
            isSearchable={false}
            components={{DropdownIndicator}}
            defaultMenuIsOpen={props.menuOpen}
            autoFocus={true}
            formatOptionLabel={(option: Option, meta) => {
                return meta.context === 'menu' ? option.label : option.displayName
            }}
            onMenuClose={() => {
                console.log('menu clsoed')
                props.onMenuClose()
            }}
            onChange={(item) => {
                console.log('changed')
                console.log(item)
            }}
        />
    )
}

export default BoardOptions
