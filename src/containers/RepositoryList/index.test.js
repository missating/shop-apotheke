import React from 'react';
import { render, screen, act } from '@testing-library/react';

import RepositoryList from './index';

function sleep(milliseconds) {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
};

describe('RepositoryList Component', () => {
  it('should mount the repository list component correctly', async() => {
    render(<RepositoryList />);

    await act(() => sleep(2000));
    expect(screen.getByText(/Discover Trending Repositories on Github/i)).toBeInTheDocument();
  });
});
