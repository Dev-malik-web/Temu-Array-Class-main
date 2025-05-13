# Temu Array Class Project

This project is a simple web application that demonstrates user sign-up, sign-in, and item management functionality. It uses HTML, CSS, and JavaScript to create an interactive user interface.

## Project Structure

The project directory contains the following files:

## Features

### 1. Sign-Up Page (`index.html` and `index.js`)
- Allows users to sign up by providing their first name, last name, email, and password.
- Validates input fields to ensure no field is left empty.
- Displays success or error messages using the `Toastify` library.
- Stores user data in an array (`allUsers`).

### 2. Sign-In Page (`signin.html` and `signin.js`)
- Placeholder for sign-in functionality.
- Includes input fields for email and password.

### 3. Dashboard Page (`dashboard.html` and `script.js`)
- Allows users to add items to a cart.
- Displays the list of items dynamically.
- Enables users to delete specific items from the cart.

## Key Functions

### `index.js`
- **`toast(text, background, color, position)`**: Displays toast notifications.
- **`signUp()`**: Handles user sign-up, validates input fields, and stores user data.
- **`validForm()`**: Validates the form and redirects to the sign-in page if valid.

### `script.js`
- **`addItem()`**: Adds an item to the cart and updates the UI.
- **`deleteAnyItem()`**: Deletes a specific item from the cart based on user input.
- **`displayItem()`**: Dynamically displays the list of items in the cart.

## How to Run the Project

1. Clone the repository to your local machine.
2. Open the project in Visual Studio Code.
3. Use the Live Server extension to serve the project.
4. Navigate to `index.html` to start with the sign-up page.

## Dependencies

- [Toastify.js](https://github.com/apvarun/toastify-js): Used for displaying toast notifications.
- [Bootstrap](https://getbootstrap.com/): Used for styling the UI.
- [Animate.css](https://animate.style/): Used for animations.

## Notes

- The `signin.js` file is currently empty and can be implemented to handle user authentication.
- The project uses inline styles and external libraries for simplicity.

## Future Improvements

- Implement user authentication in `signin.js`.
- Add persistent storage for user data (e.g., localStorage or a backend server).
- Improve error handling and form validation.

## License

This project is open-source and available for educational purposes.
