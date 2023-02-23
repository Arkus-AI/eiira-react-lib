import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import * as stories from './EditorMenuButton.stories';

const { Default, Disabled, Selected } = composeStories(stories);

const rgba2hex = (rgba) => `#${rgba.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+\.{0,1}\d*))?\)$/).slice(1).map((n, i) => (i === 3 ? Math.round(parseFloat(n) * 255) : parseFloat(n)).toString(16).padStart(2, '0').replace('NaN', '')).join('')}`

describe('Default', () => {
    it('should have correct collors', async () => {
        render(<Default />);
        const element = document.getElementsByClassName('editor-menu-button')[0];
        const style = window.getComputedStyle(element);
        expect(rgba2hex(style['color'])).toBe('#233749');
    });

    it('should have padding of 4px and border-radius of 4px', () => {
        render(<Default />);
        const element = document.getElementsByClassName('editor-menu-button')[0];
        const style = window.getComputedStyle(element);
        expect(style['padding']).toBe('4px');
        expect(style['border-radius']).toBe('4px');
    })

    it('should have height of 32px', () => {
        render(<Default />);
        const element = document.getElementsByClassName('editor-menu-button')[0];
        const style = window.getComputedStyle(element);
        expect(style['height']).toBe('32px');
    })
})

describe('Disabled', () => {
    it('should have correct collors', async () => {
        render(<Disabled />);
        const element = document.getElementsByClassName('editor-menu-button')[0];
        const style = window.getComputedStyle(element);
        expect(style['color']).toBe('rgba(35, 55, 73, 0.35)');
    });
})

describe("Selected", () => {
    it('should have correct collors', async () => {
        render(<Selected />);
        const element = document.getElementsByClassName('editor-menu-button')[0];
        const style = window.getComputedStyle(element);
        expect(rgba2hex(style['color'])).toBe('#0070f7');
    })
})
