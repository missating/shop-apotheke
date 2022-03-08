import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import RepositoryDetails from './index';

const mockProps = {
  handleStarredRepository: jest.fn(),
  renderButtonText: jest.fn(),
  repository: {
    full_name: 'test name',
    description: 'a test description',
    html_url: 'https://github.com/public-apis/public-apis',
    stargazers_count: 100,
  }
};

describe('RepositoryDetails Component', () => {
  it('should mount the repository details component correctly', () => {
    render(<RepositoryDetails {...mockProps} />);

    expect(screen.getByText(/test name/i)).toBeInTheDocument();
    expect(screen.getByText(/100/i)).toBeInTheDocument();
  });

  it('should open github page when github link is clicked', () => {
    render(<RepositoryDetails {...mockProps} />);

    const link = screen.getByRole('link');
    expect(link).toHaveTextContent('Read More on Github');

    userEvent.click(link);
    expect(link).toHaveAttribute('href', 'https://github.com/public-apis/public-apis')
  });

  it('should call function to star repostory', () => {
    render(<RepositoryDetails {...mockProps} />);

    userEvent.click(screen.getByRole('button'));
    expect(mockProps.handleStarredRepository).toHaveBeenCalledTimes(1);
    expect(mockProps.renderButtonText).toHaveBeenCalledTimes(1);
  });
});
