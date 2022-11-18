import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import Icon, { IconProps } from "./Icon";

export default {
    title: "Components/Icon",
    component: Icon,
} as Meta;

const Template: Story<IconProps> = (args) => <Icon {...args} />;

export const PrimaryHelp = Template.bind({});
PrimaryHelp.args = { iconType: "help", color: "primary" };

export const SecondaryExclamationTriangle = Template.bind({});
SecondaryExclamationTriangle.args = { iconType: "exclamation-triangle", color: "secondary" };

export const SecondaryMale = Template.bind({});
SecondaryMale.args = { iconType: "male", color: "secondary" };

// export const StoryTemplate = Template.bind({});
// StoryTemplate.args = {iconType: "", color: ""};

