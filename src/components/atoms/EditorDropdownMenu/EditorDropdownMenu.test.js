import { render, screen, act } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import * as stories from './EditorDropDownMenu.stories';
import { rgba2hex } from '../../testUtils';

const { Default, WithIcons } = composeStories(stories);

describe('Default', () => {
    describe('Select button', () => {
        it("should have correct collors", async () => {
            render(<Default />);
            const element = screen.getByRole('button');
            const style = window.getComputedStyle(element);
            expect(rgba2hex(style['color'])).toBe('#233749');
        })

        it("should have correct padding", () => {
            render(<Default />);
            const element = screen.getByRole('button');
            const style = window.getComputedStyle(element);
            expect(style['padding']).toBe('6px');
        })

        it("should have carret with 0 margin", () => {
            render(<Default />);
            const element = screen.getByRole('button');
            const carret = element.querySelector('.MuiButton-endIcon > .MuiSvgIcon-root');
            const style = window.getComputedStyle(carret);
            expect(style['margin']).toBe('0px');
        })
    });
    describe('Menu', () => {
        it('should open when select button is clicked', () => {
            render(<Default />);
            const element = screen.getByRole('button');
            act(() => element.click())
            screen.getByRole('menu')
        });
        it("should create a divider", () => {
            render(<Default />);
            const element = screen.getByRole('button');
            act(() => element.click())
            const menu = screen.getByRole('menu');
            const menuItems = menu.querySelectorAll('.MuiMenuItem-divider');
            expect(menuItems.length).toBeGreaterThan(0);
        });
        it("Should have option 3 that is disabled", () => {
            render(<Default />);
            const element = screen.getByRole('button');
            act(() => element.click())
            const menu = screen.getByRole('menu');
            const menuItems = menu.querySelectorAll('.Mui-disabled');
            expect(menuItems.length).toBeGreaterThan(0);
            expect(menuItems[0].textContent).toBe('Option 3');
        })

    })
});

describe("WithIcons", () => {
    it("should have correct size", () => {
        render(<WithIcons />);
        const button = screen.getByRole('button');
        act(() => button.click())
        const menu = screen.getByRole('menu');
        const menuItemIcon = menu.querySelector('.MuiListItemIcon-root > .MuiSvgIcon-root');
        const style = window.getComputedStyle(menuItemIcon);
        expect(style['height']).toBe('12px');
        expect(style['width']).toBe('12px');
    })
})
