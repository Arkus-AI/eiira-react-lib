import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import IconWithTooltip, { IconWithTooltipProps } from "./IconWithTooltip";

export default {
    title: "Molecules/IconWithTooltip",
    component: IconWithTooltip,
} as Meta;

// Create a master template for mapping args to render the Button component
const Template: Story<IconWithTooltipProps> = (args) => <IconWithTooltip {...args} />;

// Reuse that template for creating different stories
export const OnBottom = Template.bind({});
OnBottom.args = { tooltipType: "help", tooltipText: "This is a tooltip" };

export const OnTop = Template.bind({});
OnTop.args = { tooltipType: "help", tooltipText: "This is a tooltip", placement: "top" };

export const OnRight = Template.bind({});
OnRight.args = { tooltipType: "help", tooltipText: "This is a tooltip", placement: "right" };

export const OnLeft = Template.bind({});
OnLeft.args = { tooltipType: "help", tooltipText: "This is a tooltip", placement: "left" };