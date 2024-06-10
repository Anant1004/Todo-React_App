# Taskly - ToDo App

Taskly is a simple ToDo application built with React. It allows you to manage your tasks by adding, editing, deleting, and marking them as completed.

## Features

- Add new tasks
- Edit existing tasks
- Delete tasks
- Mark tasks as completed
- Filter to show/hide completed tasks
- Persistent storage using `localStorage`

## Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or later)
- [npm](https://www.npmjs.com/) (v6 or later) or [yarn](https://yarnpkg.com/)

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/yourusername/taskly.git
    cd taskly
    ```

2. Install the dependencies:

    ```bash
    npm install
    # or
    yarn install
    ```

3. Start the development server:

    ```bash
    npm start
    # or
    yarn start
    ```

4. Open your browser and navigate to `http://localhost:3000`.

## Usage

### Adding a Task

1. Enter your task in the input field under "Add a Task".
2. Click the "save" button to add the task to your list. The button will be disabled if the input is empty or less than 4 characters.

### Editing a Task

1. Click the edit icon (✎) next to the task you want to edit.
2. The task will appear in the input field. Make your changes and click "save" to update the task.

### Deleting a Task

1. Click the delete icon (🗑️) next to the task you want to delete.
2. The task will be removed from your list.

### Marking a Task as Completed

1. Check the checkbox next to the task to mark it as completed.
2. Uncheck the checkbox to mark it as not completed.

### Filtering Completed Tasks

1. Use the "Completed Tasks" checkbox to show or hide completed tasks.

## Components

### App Component

- Main component managing the state and logic for the application.

### Navbar Component

- A simple navigation bar (can be extended for more functionality).

## State Management

The application uses React's `useState` and `useEffect` hooks for managing the state and persisting tasks to `localStorage`.

### State Variables

- `todo`: The current task being typed by the user.
- `todos`: The list of all tasks.
- `showFinished`: A boolean to toggle the visibility of completed tasks.

### Methods

- `handleChange`: Updates the `todo` state when the input value changes.
- `handleSave`: Saves a new task to the `todos` list and `localStorage`.
- `handleEdit`: Edits an existing task.
- `handleDelete`: Deletes a task from the `todos` list and `localStorage`.
- `handleCheckbox`: Toggles the completed state of a task.
- `toogleFinished`: Toggles the visibility of completed tasks.
- `saveToLS`: Saves the current `todos` list to `localStorage`.

## Contributing

Feel free to submit issues and enhancement requests.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
