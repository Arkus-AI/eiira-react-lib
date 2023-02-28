import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import * as stories from './EditorTextTypeSelector.stories';
import { rgba2hex } from '../../testUtils';

// const { Default, Disabled, Selected } = composeStories(stories);
const { Default, Disabled } = composeStories(stories);

describe('Default', () => {
    describe("Select button", () => {
        it("should have correct collors", async () => {
            render(<Default />);
            const element = screen.getByText('Normal text');
            const style = window.getComputedStyle(element);
            expect(rgba2hex(style['color'])).toBe('#233749');
        })

        it("should have correct padding", () => {
            render(<Default />);
            const element = screen.getByText('Normal text');
            const style = window.getComputedStyle(element);
            expect(style['padding']).toBe('4px 8px');
        })

        it('should have a carret icon wiht 12px in height and width', () => {
            render(<Default />);
            const element = screen.getByText('Normal text');
            const carret = element.getElementsByClassName('MuiSvgIcon-root')[0]
            const style = window.getComputedStyle(carret);
            expect(style['height']).toBe('12px');
            expect(style['width']).toBe('12px');
        })
    })
});

describe('Disabled', () => {
    it('should have correct collors', async () => {
        render(<Disabled />);
        const element = screen.getByText('Normal text');
        const style = window.getComputedStyle(element);
        expect(style['color']).toBe('rgba(35, 55, 73, 0.35)');
    });
})

