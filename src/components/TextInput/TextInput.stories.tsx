import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import TextInput, { TextInputProps } from "./TextInput";


export default {
    title: "Components/TextInput",
    component: TextInput,
} as Meta;

const Template: Story<TextInputProps> = (args) => <TextInput {...args} />;

export const Default = Template.bind({});
Default.args = {
    errorText: "",
    label: "Some kind of label",
};
export const WithAnError = Template.bind({});
WithAnError.args = {
    errorText: "Some kind of error",
    label: "Some kind of label",
};

// export const StoryTemplate = Template.bind({});
// StoryTemplate.args = {iconType: "", color: ""};

