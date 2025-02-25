/** @jest-environment jsdom */
import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, fireEvent, getByText, waitFor } from '@testing-library/react';
import { App } from './App';

/**
 * Verify something should render
 */
test('App should render', () => {
  render(<App />);

  expect(screen.getByText('Welcome, party people!')).toBeInTheDocument();
});

test('it renders the theme toggle button', () => {
  const {getByText} = render(<App />);
  expect(getByText('Current theme: light')).toBeInTheDocument();
});

/**
 * Verify clicking button should change theme
 * hint: use fireEvent.click(element) to trigger a click event on an element
 */
test('theme button should update button text', async() => {
  const {getByText} = render(<App />);
  const themeButtonToggle = getByText('Current theme: light');
  expect(getByText('Current theme: light')).toBeInTheDocument();
  fireEvent.click(themeButtonToggle);
  await waitFor(()=>expect(getByText('Current theme: dark')).toBeInTheDocument());
});

// BONUS
// hint: there is a `.toHaveStyle` method.
// e.g.: expect(element).toHaveStyle('color: #FFF');
test('theme button should toggle styles', async() => {
  const { getByText } = render(<App />);
  const themeButtonToggle = getByText('Current theme: light');
  const containerElement = getByText('Welcome, party people!').closest('div');
  expect(containerElement).toHaveStyle('background-color: rgb(255, 255, 255)');
  fireEvent.click(themeButtonToggle);
  await waitFor(()=>expect(containerElement).toHaveStyle('background-color: #333'));
  await waitFor(()=>expect(containerElement).toHaveStyle('color: rgb(255, 255, 255)'));
  fireEvent.click(themeButtonToggle);
  await waitFor(()=>expect(containerElement).toHaveStyle('background-color: rgb(255, 255, 255)'));
  await waitFor(()=>expect(containerElement).toHaveStyle('color: #333'));
});

/**
 * Verify clicking button should toggle hidden content
 *
 * hint: you can check if something does not exist by using .not
 * e.g. expect(element).not.toBeInTheDocument()
 *
 * hint: use `queryByText` instead of `getByText` to check if something is _not_ rendered
 * (getByText will throw an error if it is not rendered)
 */
test('hidden button should toggle hidden content', () => {
  
  expect('no test written').toBe('tested');
});


/**
 * Want more? Try these:
 *   - check for the presence of a specific element, like the paragraph containing the text "Click the button to toggle the theme"
 *   - check the for the class name .container on the surrounding div
 *   - after clicking the toggle hidden content button, check for the button text to update to "hide" instead of "show"
 */
