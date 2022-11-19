import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import TextInput, { TextInputProps } from "./TextInput";


export default {
    title: "Molecules/TextInput",
    component: TextInput,
} as Meta;

const Template: Story<TextInputProps> = (args) => <TextInput {...args} />;

export const Default = Template.bind({});
Default.args = {
    label: "Some kind of label",
};

export const WithAnError = Template.bind({});
WithAnError.args = {
    errorText: "Some kind of error",
    label: "Some kind of label",
};


export const WithATooltip = Template.bind({});
WithATooltip.args = {
    tooltipText: "Some kind of tooltip text here",
    label: "Some kind of label",
};

export const Required = Template.bind({});
Required.args = {
    label: "Some kind of label",
    required: true,
};

export const WithATooltipAndRequired = Template.bind({});
WithATooltipAndRequired.args = {
    tooltipText: "Some kind of tooltip text here",
    label: "Some kind of label",
    required: true,
};

export const WithAPlaceholder = Template.bind({});
WithAPlaceholder.args = { label: "Some kind of label", placeholder: "Some kind of placeholder" };

export const WithAHelper = Template.bind({});
WithAHelper.args = { label: "Some kind of label", helperText: "Some kind of helper text here" };

export const WithAHelperAndAnError = Template.bind({});
WithAHelperAndAnError.args = { label: "Some kind of label", helperText: "Some kind of helper text here", errorText: "Some kind of error" };
// export const StoryTemplate = Template.bind({});
// StoryTemplate.args = {iconType: "", color: ""};