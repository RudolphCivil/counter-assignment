// import necessary react testing library helpers here
// import the Counter component here
import { render, fireEvent } from '@testing-library/react';
import Counter from '../components/Counter';

beforeEach(() => {
  // Render the Counter component here
})

test('renders counter message', () => {
const { getByText } = render(<Counter />);
  
  // Act
  const counterMessage = getByText('Counter');
  
  // Assert
  expect(counterMessage).toBeInTheDocument();
  // Complete the unit test below based on the objective in the line above
});

test('should render initial count with value of 0', () => {
 const { getByTestId } = render(<Counter />);
  
  // Act
  const countElement = getByTestId('count');
  
  // Assert
  expect(countElement).toHaveTextContent('0');
  // Complete the unit test below based on the objective in the line above
});

test('clicking + increments the count', () => {
const {  getByText, getByTestId } = render(<Counter />);
  const incrementButton = getByText('+');
  const countElement = getByTestId('count');
  
  // Act
  fireEvent.click(incrementButton);
  
  // Assert
  expect(countElement).toHaveTextContent('1');
  // Complete the unit test below based on the objective in the line above
});

test('clicking - decrements the count', () => {
const { getByText, getByTestId } = render(<Counter />);
  const decrementButton = getByText('-');
  const countElement = getByTestId('count');
  
  // Act
  fireEvent.click(decrementButton);
  
  // Assert
  expect(countElement).toHaveTextContent('-1');
  // Complete the unit test below based on the objective in the line above
});
