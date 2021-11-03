import { store } from 'app/store';
import AccordionCard from 'components/layout/cards/AccordionCard';
import { defaultTheme } from 'styles/themes';
import { render, screen, fireEvent } from 'test-utils';
import React from 'react';

describe('AccordionCard', () => {
  it('should render', () => {
    const { container } = render(<AccordionCard />, {
      theme: defaultTheme,
      store: store,
    });

    expect(container.firstChild).toMatchSnapshot();
  });

  it('renders a button with text equal to the heading prop', () => {
    render(<AccordionCard heading='test' />, {
      theme: defaultTheme,
      store: store,
    });
    expect(screen.getByRole('button')).toHaveTextContent(/test/);
  });

  it('when the button is clicked it toggles the text content', () => {
    render(<AccordionCard heading='test' />, {
      theme: defaultTheme,
      store: store,
    });
    const button = screen.getByRole('button');
    expect(button).toHaveTextContent(/add/);
    fireEvent.click(button);
    expect(button).toHaveTextContent(/remove/);
  });

  it('when the button is clicked toggles the max-height of the element with className body and textcontent equal to the body prop', () => {
    render(<AccordionCard heading='test' body='body' />, {
      theme: defaultTheme,
      store: store,
    });
    const button = screen.getByRole('button');
    expect(document.querySelector('.body')).toHaveStyle('max-height: 0');
    fireEvent.click(button);
    expect(document.querySelector('.body')).toHaveStyle('max-height: 120rem');
  });

  it('renders a list if the isArray prop is true', () => {
    render(<AccordionCard isArray body={['test', 'test', 'test']} />, {
      theme: defaultTheme,
      store: store,
    });
    expect(screen.getByRole('list')).toBeTruthy();
  });

  it('renders a list item for eachitem in the body prop if the isArray prop is true', () => {
    render(<AccordionCard isArray body={['test', 'test', 'test']} />, {
      theme: defaultTheme,
      store: store,
    });
    expect(screen.getAllByRole('listitem')).toHaveLength(3);
  });

  it('renders a dialog with text content equal to the body prop the isArray prop is false', () => {
    render(<AccordionCard body='test' />, {
      theme: defaultTheme,
      store: store,
    });
    expect(screen.getByRole('dialog')).toHaveTextContent(/test/);
  });
});
