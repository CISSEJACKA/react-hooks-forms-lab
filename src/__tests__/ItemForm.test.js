test('calls the onItemFormSubmit callback prop when the form is submitted', () => {
  const onItemFormSubmit = jest.fn();
  render(<ItemForm onItemFormSubmit={onItemFormSubmit} />);
  
  // Simulate user input by changing the input field value
  fireEvent.change(screen.getByPlaceholderText('Item Name'), {
    target: { value: 'Ice Cream' },
  });

  // Simulate form submission by clicking the submit button
  fireEvent.click(screen.getByRole('button', { name: 'Add Item' }));

  // Assert that the onItemFormSubmit callback prop is called with the correct parameters
  expect(onItemFormSubmit).toHaveBeenCalledWith({
    id: expect.any(String), // Assuming you're generating a unique ID for the item
    name: 'Ice Cream',
    category: 'Produce', // Assuming the default category is 'Produce'
  });
});
import { render, fireEvent, screen } from '@testing-library/react'; // Import render function
import '@testing-library/jest-dom/extend-expect'; // Ensure to import the extend-expect module
import ItemForm from '../components/ItemForm';

test('calls the onItemFormSubmit callback prop when the form is submitted', () => {
  const onItemFormSubmit = jest.fn();
  render(<ItemForm onItemFormSubmit={onItemFormSubmit} />); // Use the render function here
  
  // Simulate user input by changing the input field value
  fireEvent.change(screen.getByPlaceholderText('Item Name'), {
    target: { value: 'Ice Cream' },
  });

  // Simulate form submission
  fireEvent.submit(screen.getByRole('button', { name: /Add Item/ })); // Adjust this line based on your form structure
  
  // Assert that the onItemFormSubmit callback prop is called with the correct parameters
  expect(onItemFormSubmit).toHaveBeenCalledWith({
    id: expect.any(String), // Assuming you're generating a unique ID for the item
    name: 'Ice Cream',
    category: 'Produce', // Assuming the default category is 'Produce'
  });
});




