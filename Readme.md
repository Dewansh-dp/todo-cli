# Todo CLI

A simple command-line interface (CLI) for managing todos using Node.js. This CLI allows you to add, delete, update, mark todos as done, and list all todos. Data is stored in a todos.json file.

## Features

-  Add a new todo: Add a new task to your todo list.
-  Delete a todo: Remove a todo by its ID.
-  Update a todo: Modify the task description of an existing todo.
-  Mark a todo as done: Mark a todo as completed.
-  List all todos: Display all todos in a table format.
-  Prevent duplicate entries: Ensure no duplicate tasks are added by using timestamp.

## Installation

1. Clone the repository

   ```bash
   git clone https://github.com/dewansh1503/todo-cli.git
   ```

2. Navigate to the project directory

   ```bash
   cd todo-cli
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

4. Link the CLI globally:

   ```bash
   npm link
   ```

## How to use

### Add a new todo

```bash
todo add "Your task description"
```

Example:

```bash
todo add "Buy groceries"
```

### Delete a todo by ID

```bash
todo delete <id>
```

Example:

```bash
todo delete 1
```

### Mark a todo as done by ID

```bash
todo done <id>
```

Example:

```bash
todo done 1
```

### Update a todo's task description by ID

```bash
todo update <id> <newTask>
```

Example:

```bash
todo update 1 "Buy groceries and milk"
```

### List all todos

```bash
todo list
```
