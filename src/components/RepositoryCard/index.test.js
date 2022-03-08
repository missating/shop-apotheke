import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import RepositoryCard from './index';

const mockProps = {
  handleStarredRepository: jest.fn(),
  renderButtonText: jest.fn(),
  handleChange: jest.fn(),
  repositories: [{
    full_name: 'test name',
    description: 'a test description',
    html_url: 'https://github.com/public-apis/public-apis',
    stargazers_count: 100,
  }],
  starredRepositories: [{
    full_name: 'star test name',
    description: 'star test description',
    html_url: 'https://github.com/public-apis/public-apis',
    stargazers_count: 200,
  }]
};

describe('RepositoryCard Component', () => {
  it('should mount the repository card component correctly', () => {
    render(<RepositoryCard {...mockProps} />);

    expect(screen.getByText(/All Repositories/i)).toBeInTheDocument();
    expect(screen.getByText(/Starred Repositories/i)).toBeInTheDocument();
  });

  it('should not show LanguageSelect component when starred repository tab is active', () => {
    render(<RepositoryCard {...mockProps} />);

    const tab = screen.getByRole('tab', {name: /Starred Repositories/i});

    userEvent.click(tab);
    expect(screen.queryByRole('combobox')).not.toBeInTheDocument();
  });
});
