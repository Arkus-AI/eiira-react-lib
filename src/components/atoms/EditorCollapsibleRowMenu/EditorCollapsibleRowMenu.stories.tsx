import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import { useArgs } from '@storybook/client-api';

import EditorCollapsibleRowMenu from './EditorCollapsibleRowMenu';
import { Button, ClickAwayListener } from '@mui/material';

export default {
    title: 'Atoms/EditorCollapsibleRowMenu',
    component: EditorCollapsibleRowMenu,
    args: {
        menuOpen: false,
        menuItems: [
            { label: 'Item 1', value: 'item1', },
            { label: 'Item 2', value: 'item2', },
            { label: 'Item 3', value: 'item3', }
        ],
        selectedItem: '',
        onMenuItemClick: (value: string) => { }
    },
} as ComponentMeta<typeof EditorCollapsibleRowMenu>;

const Template: ComponentStory<typeof EditorCollapsibleRowMenu> = (args) => {
    const [{ }, updateArgs] = useArgs();

    const openMenu = () => {
        updateArgs({ menuOpen: true });
    }

    const closeMenu = () => {
        console.log("clicked away")
        updateArgs({ menuOpen: false });
    }

    const onMenuItemClick = (value: string) => {
        updateArgs({ selectedItem: value });
    }

    return (
        <ClickAwayListener onClickAway={closeMenu}>
            <>
                <Button onClick={openMenu}>Click me</Button>
                <EditorCollapsibleRowMenu {...args} onMenuItemClick={onMenuItemClick} />
            </>
        </ClickAwayListener>
    )
}

export const Default = Template.bind({});
Default.args = {};
