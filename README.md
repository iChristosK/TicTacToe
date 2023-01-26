# TicTacToe
This is a repository for a new On Air Branded Tic Tac Toe React Application

   # Install/Clone Project from Github:
    • Open your terminal or command prompt
    • Paste this command -> gh repo clone iChristosK/TicTacToe
    • Now you have the project. Follow below instructions to run it.

  # Run instructions for Android:
    • Have an Android emulator running (quickest way to get started), or a device connected.
    • cd TicTacToeApp/
    • npm install
    • npx react-native run-android
  
  # Run instructions for iOS:
    • cd TicTacToeApp/ 
    • npm install
    • npx react-native run-ios
    - or -
    • Open TicTacToeApp/ios/TicTacToeApp.xcworkspace in Xcode or run "xed -b ios"
    • Hit the Run button
    
  # Run instructions for macOS:
    • See https://aka.ms/ReactNativeGuideMacOS for the latest up-to-date instructions.
    

# Steps & Duration 

# Step 1 - Create Project - 1m
Created a new React Native project: 
Using the command
 `npx react-native init TicTacToeApp --template react-native-template-typescript` 
 to create a new React Native project with TypeScript. 

This command will create a new directory with the name projectName and initialize it with a basic React Native project structure. This command also includes the TypeScript template, so it will automatically set up the TypeScript configuration for the project.


# Step 2 - Install dependencies - 1m
Then, I installed the required packages such as redux, react-redux, and @reduxjs/toolkit using the command
 `npm install --save redux react-redux @reduxjs/toolkit`


# Step 3 - Creation of the store and game state - 1h
Then I create the store and TicTacToeReducer using the createSlice method from the @reduxjs/toolkit. The game state includes the current player, the game board, and the winner.


# Step 4 - Creation of game components - 2h
In this step I created the game board component and the individual buttons component. The game board component renders the individual buttons component, and uses the game state to determine the status of each button.


# Step 5 - Game Logic of the winner - 2.5h 
This logic checks a 3x3 board (as a 2D array) to determine if there is a winner. It checks the rows, columns, and diagonals of the board for three consecutive matching symbols. If there is a winner, it returns the symbol of the winning player. If there are no matches, it checks for any empty spaces on the board and returns an empty string if there are any. If all spaces are filled and there is no winner, it returns "TIE".


# Step 6 - Game Style - 1h
In this step I took the time to make sure that every component is well-polished, I have separated every style configuration into a separate file to be able to have a better view of each styling of each component. I have create assets for images and icons inside the app. I have added the app icon and launch screen icons for both platforms.


# Step 7 - Dark Mode - System Wide - 30m
I have added a dark mode functional component in utils that wraps any children or object or screen. This is a component which I have developed throughout the years of my experience, in order to be able to have a system wide dark mode, for status bar, background color of the screens inside the app, components etc. I made sure to add dark mode customization in each component as well.


# Step 8 - Unit Tests / Snapshot testing - 1h 
I have tested the game using react-native-testing-library and jest. The most important test is inside the logic/gameLogic.test.ts which checks the function for the winner of the game! I have added a few test cases for some components and snapshot testing!

# Step 9 - Emulator/Physical Device Testing the game - 30m
I always like to run my applications on as many android and iOS emulator to make sure that both platforms are consistent when it comes to the interface as well as the functionalities. So I have tested the game on an emulator and on my personal device to ensure that it is working as expected.

# TOTAL HOURS : 8.52

# TODO: 

test the below code with react-native-testing-library without using enzyme only jest

Delete unused elements 
(especially from styles)

