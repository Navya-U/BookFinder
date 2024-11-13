# BookFinder
Created with CodeSandbox


**Book Finder** is a React-based application designed to help users search for books by author name, title, or genre. The app provides an organized browsing experience with genre-based filtering and an easy-to-navigate interface.

## Table of Contents

1. [Project Overview](#project-overview)
2. [Features](#features)
3. [Installation and Setup](#installation-and-setup)
4. [Components](#components)
5. [Data Structure](#data-structure)
6. [Error Handling](#error-handling)
7. [Styling](#styling)
8. [Future Improvements](#future-improvements)
9. [Contact Information](#contact-information)

---

### Project Overview

The **Book Finder** app allows users to discover and explore books across various genres. Users can search by book title, author name, or genre, and view book information by clicking through categories. This project was created for a take-home exercise and is focused on a user-friendly browsing experience without any purchasing or borrowing options.

### Features

- **Genre Selection**: Browse books by selecting a genre from the dropdown menu.
- **Search Functionality**: Search by title, author, or genre.
- **Responsive Design**: Adapts to different screen sizes for a seamless user experience.
- **Error Handling**: Displays user-friendly error messages when data is unavailable or searches fail.

### Installation and Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Navya-U/BookFinder.git
   ```
2. **Navigate to the project directory**:
   ```bash
   cd book-finder
   ```
3. **Install dependencies**:
   ```bash
   npm install
   ```
4. **Start the development server**:
   ```bash
   npm start
   ```
   The app will be running at [http://localhost:3000](http://localhost:3000).

### Components

#### 1. `Home`
   - Contains a navigation bar with links to the `Genres`, `Search`, `About`, and `Contact` pages.
   - Displays the main interface with introductory content and options to get started.

#### 2. `Genres`
   - Allows users to browse and filter books by genre.
   - Uses a dropdown menu with 21 genre categories, each containing relevant sub-genres for more refined filtering.

#### 3. `Search`
   - Provides a search bar to filter books by author name, title, or genre.
   - Implements the search logic separately and imports it into the `Genres` component for seamless interaction.

#### 4. `About`
   - Includes details about the app’s purpose and functionality.
   - Located above the `Contact` section within the same component file.

#### 5. `Contact`
   - Displays contact details at the bottom of the app's footer.

### Data Structure

- `genres.json`: This file contains predefined genres as no direct API for genres is available. The structure supports dynamic fetching of genre data for the dropdown.

### Error Handling

The app provides graceful error handling by displaying messages when search results are unavailable or if there are issues with genre loading. This ensures a smooth user experience even when data issues arise.

### Styling

- The app uses **Reactstrap** for the dropdown menu and general styling.
- CSS has been implemented to make the app visually appealing and easy to navigate.

### Future Improvements

- **Enhance Search Functionality**: Add more detailed filtering options.
- **User Authentication**: Implement login and personalization features.
- **Centralized state**: Implement state management redux.
- **Recommendations**: Add book recommendations based on user preferences.
- **Style and Responsive**: Add more visually appealing styles and make the application responive for all devices.

### Contact Information

If you have any questions or suggestions, feel free to reach out:

- **Developer**: Navya
- **GitHub Profile**: [Navya-U](https://github.com/Navya-U)

