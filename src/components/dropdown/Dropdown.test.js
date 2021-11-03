import React from 'react';
import {fireEvent, render, getAllByRole} from '@testing-library/react';
import {Dropdown} from './Dropdown';

describe ('Test Dropdown component', () => {
  const mockedOptions = [
    {text: 'Mocked option 1', value: 'mocked-option-1'},
    {text: 'Mocked option 2', value: 'mocked-option-2'},
    {text: 'Mocked option 3', value: 'mocked-option-3'}   
  ];

  it('should display correct label', () => {
    const {getByText} = render(<Dropdown label="Employee" options={[]} />);    
    const label = getByText('Employee');
    expect(label).toBeTruthy();
  });

  it('should display correct value when option is selected', async () => {
    const mockedOnChange = jest.fn();
    const { queryByTestId } = render(<Dropdown 
        options={mockedOptions} 
        onChange={mockedOnChange} />);

    const dropdown = queryByTestId('select-component');
    let display = dropdown.children[0];
    expect(display.textContent).toBe(mockedOptions[0].text);    

    fireEvent.click(dropdown);
    const dropdownOptions = getAllByRole(dropdown, 'option');
    display = dropdown.children[2];
    fireEvent.click(dropdownOptions[2]);

    expect(display.textContent).toBe(mockedOptions[2].text);
  });
})