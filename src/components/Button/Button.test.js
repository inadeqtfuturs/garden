import React from 'react';
import { Button } from '@components';
import { ThemeRender } from '@utils';

describe('Button', () => {
  it('renders correctly', () => {
    const tree = ThemeRender(<Button>Test</Button>);
    expect(tree).toMatchSnapshot();
  });

  it('takes props', () => {
    const tree = ThemeRender(
      <Button color="secondary" size="lg">
        Secondary Button
      </Button>
    );
    expect(tree).toMatchSnapshot();
  });

  it('can be disabled', () => {
    const tree = ThemeRender(<Button disabled>disabled button</Button>);
    expect(tree).toMatchSnapshot();
  });
});
