import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';

import LanguageSelect from './index';

const mockProps = {
    handleChange: jest.fn(),
};

describe('RecipeCard Component', () => {
  it('should mount the language select component correctly', () => {
    render(<LanguageSelect {...mockProps} />);

    expect(screen.getByText(/Filter By:/i)).toBeInTheDocument();
  });

  it('should call onChange', async () => {
    render(<LanguageSelect {...mockProps} />);
    
    await waitFor(() => {
      expect(screen.queryByText("JavaScript")).not.toBeInTheDocument();
    });

    fireEvent.keyDown(screen.getByRole('combobox'), { key: 'ArrowDown', code: 40 });
    fireEvent.click(screen.getByText('javascript'));

    await waitFor(() => {
      expect(screen.getByText("JavaScript")).toBeInTheDocument();
    });
  });
});
