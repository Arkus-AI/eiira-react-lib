import { ClickAwayListener, IconButton, Box } from '@mui/material';
import { Stack } from '@mui/system';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import Icon from '../../atoms/Icon/Icon';
import FamilyMemberCard from '../FamilyMemberCard/FamilyMemberCard';

import AddMemberMenu from './AddMemberMenu';

const MemberCardWithAddMenu = ({ menuArgs }: { menuArgs: any }) => {
    const [addBtnRef, setAddBtnRef] = React.useState<HTMLButtonElement | null>(null);
    const [isSelected, setIsSelected] = React.useState<boolean>(false);
    const handleClick = (event: any) => setAddBtnRef(event.currentTarget);
    return (
        <ClickAwayListener onClickAway={() => {
            setAddBtnRef(null);
            setIsSelected(false);
        }}>
            <div>
                <FamilyMemberCard sex="female" relation="Mother's sister" name="Jane Doe" infoIsAdded={true}
                    onAddClick={handleClick} isSelected={isSelected} hasErrors={false}
                    onCardClick={() => {
                        setIsSelected(true)
                    }} />
                <AddMemberMenu {...menuArgs} anchorEl={addBtnRef} open={addBtnRef !== null} placement="right"
                    onOptionClick={(optionValue) => { console.log(`Option ${optionValue} is clicked`) }} />
            </div>
        </ClickAwayListener>
    )
}


export default {
    title: 'Templates/AddMemberMenu',
    component: AddMemberMenu,
    args: {
        options: [
            { label: 'Parents', iconType: 'plus', value: 'parents' },
            { label: "Partner", iconType: 'plus', value: 'partner' },
            { label: "Sister", iconType: 'plus', value: 'sister' },
            { label: "Brother", iconType: 'plus', value: 'brother' },
            { label: "Daughter", iconType: 'plus', value: 'daughter' },
            { label: "Son", iconType: 'plus', value: 'son' },
            { label: "Delete", iconType: 'waste-basket', value: 'delete' }
        ],
        onOptionClick: '(option: IAddMemberMenuOption) => void' as unknown as any
    },
} as ComponentMeta<typeof AddMemberMenu>;

const Template: ComponentStory<typeof AddMemberMenu> = (args) => {

    return (<Stack direction="row" gap={5}>
        <MemberCardWithAddMenu menuArgs={args} />
        <MemberCardWithAddMenu menuArgs={args} />
    </Stack>
    )
}

export const Story = Template.bind({});
Story.args = {};
