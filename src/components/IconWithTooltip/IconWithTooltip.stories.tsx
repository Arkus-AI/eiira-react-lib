import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import IconWithTooltip, { IconWithTooltipProps } from "./IconWithTooltip";

export default {
    title: "Components/IconWithTooltip",
    component: IconWithTooltip,
} as Meta;

// Create a master template for mapping args to render the Button component
const Template: Story<IconWithTooltipProps> = (args) => <IconWithTooltip {...args} />;

// Reuse that template for creating different stories
export const Default = Template.bind({});
Default.args = { tooltipType: "help", tooltipText: "This is a tooltip" };
