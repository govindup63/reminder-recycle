# Recycling Reminder Project

This project provides a simple reminder system for recycling. Users can sign up to receive email reminders based on their chosen frequency (daily, weekly, or monthly).

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the Project](#running-the-project)
- [Usage](#usage)
- [Folder Structure](#folder-structure)


## Features

- User can sign up for recycling reminders.
- Email reminders are sent based on user-selected frequency.
- Simple and clean user interface.

## Technologies Used

- HTML
- CSS (Bootstrap)
- JavaScript
- Node.js
- Express
- Nodemailer

## Prerequisites

Before you begin, ensure you have the following installed on your local machine:

- Node.js (v14 or above)
- Git
- Visual Studio Code (VS Code)
- Live Preview Extension for VS Code

### Node.js Installation

1. Go to the [Node.js official website](https://nodejs.org/).
2. Download the LTS version for your operating system.
3. Follow the installation instructions on the website to install Node.js.

### Live Preview Extension Installation

1. Open Visual Studio Code.
2. Go to the Extensions view by clicking on the Extensions icon in the Activity Bar on the side of the window or by pressing `Ctrl+Shift+X` (or `Cmd+Shift+X` on Mac).
3. In the Extensions view search box, type `Live Preview`.
4. Click `Install` on the Live Preview extension by Microsoft.

## Installation

1. **Clone the repository**

   Open your terminal and run the following command:

   ```sh
   git clone https://github.com/govindup63/reminder-recycle.git
   ```

   Navigate into the cloned project directory:

   ```sh
   cd Recycling-Reminder
   ```

2. **Install server dependencies**

   In the terminal, run the following command:

   ```sh
   npm install
   ```

## Running the Project

1. **Open the project in VS Code**

   In the terminal, run the following command:

   ```sh
   code .
   ```

2. **Start the server**

   In VS Code terminal, run the following command:

   ```sh
   node server.js
   ```

   The server will run on `http://localhost:3000`.

3. **Use Live Preview to open `index.html`**

   - Make sure the Live Preview extension is installed.
   - Go to the `index.html` file in the `client` directory.
   - Right-click on the file and select `Open with Live Preview` or use the Live Preview command from the Command Palette:
     - Press `Ctrl+Shift+P` (or `Cmd+Shift+P` on Mac) to open the Command Palette.
     - Type `Live Preview: Show Preview (Internal)` and select it.
     - This will open a new browser window with your `index.html` file.

## Usage

1. Open `index.html` in your web browser using the Live Preview extension in VS Code.
2. Fill in your email and select the reminder frequency.
3. Click "Sign Up" to receive reminders.

## Folder Structure

```plaintext
Recycling-Reminder/
├── node_modules/
├── .gitattributes
├── eg.css
├── eg.html
├── index.html
├── package-lock.json
├── package.json
├── picture1.png
├── picture2.png
├── picture3.png
├── README.md
├── remind.css
├── reminder.html
├── Screenshot 2024-07-01 0856...
├── script.js
├── server.js
├── style.css
├── tips.css
├── tips.html

```
