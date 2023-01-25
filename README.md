# TicTacToe
This is a repository for a new On Air Branded Tic Tac Toe React Application

  # Run instructions for Android:
    • Have an Android emulator running (quickest way to get started), or a device connected.
    • cd TicTacToeApp/ && npx react-native run-android
  
  # Run instructions for iOS:
    • cd TicTacToeApp/ && npx react-native run-ios
    - or -
    • Open TicTacToeApp/ios/TicTacToeApp.xcworkspace in Xcode or run "xed -b ios"
    • Hit the Run button
    
  # Run instructions for macOS:
    • See https://aka.ms/ReactNativeGuideMacOS for the latest up-to-date instructions.
    



# Steps && Duration 

# Step 1 - Create Project - 1m
Created a new React Native project: 
Using the command `npx react-native init TicTacToeApp --template react-native-template-typescript` to create a new React Native project with TypeScript. 

This command will create a new directory with the name projectName and initialize it with a basic React Native project structure. This command also includes the TypeScript template, so it will automatically set up the TypeScript configuration for the project.


# Step 2 - Install dependencies - 1m
Then, I installed the required packages such as redux, react-redux, and @reduxjs/toolkit using the command `npm install --save redux react-redux @reduxjs/toolkit`


# Step 3 - Creation of the store and game state - 1h
Then I create the store and TicTacToeReducer using the createSlice method from the @reduxjs/toolkit. The game state should include the current player, the game board, and the winner.


# Step 4 - Creation of game components - 1h
In this step I created the game board component and the individual buttons component. The game board component should render the individual buttons component, and should use the game state to determine the status of each button.

# Step 5 - Game Logic of the winner - 2.5h 
This logic checks a 3x3 board (as a 2D array) to determine if there is a winner. It checks the rows, columns, and diagonals of the board for three consecutive matching symbols. If there is a winner, it returns the symbol of the winning player. If there are no matches, it checks for any empty spaces on the board and returns an empty string if there are any. If all spaces are filled and there is no winner, it returns "TIE".