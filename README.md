# Intro

This repo contains a basic express app & react app to help you build Google Keep!
Rules:

- You are allowed to use any npm package you want.
- You are allowed to use any css framework you want.
- You shouldn't touch the server initialization (index.ts).
- To remove all data, delete database/data folder

## Starting the apps:

1. Clone this repository.
2. Install vscode
3. Open the project in vscode
4. create 2 new terminals, one for front and one for back.
5. run npm i in both terminals
6. use npm run dev in terminals to run both front and back

## Guidelines:
1. [Go to google keep for reference](https://keep.google.com/)
2. The app should look like google keep, containing only the features listed below. (don't waste time on logos and stuff).
3. The app should be responsive, and as fast as possible.
4. The app typs should be as strict as possible.
5. The code should be as clean & readable as possible. 
6. Assume the auth is implemented. you have the Auth/getCurrentUser function that returns current user id.

## Assignments (parts of Google Keep):
1. Create an application that lists all the notes in the database, using pagination.
   Edit the collections schema
   Feel free to add collections / change them / not use some of them.
   Bonus - add the option to drag and drop notes (and save the order).
2. Add the ability to create a new note (reminder - as close to google keep as possible).
3. Add the search bar.
4. Add the ability to edit a note title & body. keep in mind that the expirience need to be fast and smooth.
5. Add the ability to switch between checkboxes & normal mode:
   * With the ability to check/uncheck a checkbox.
   * When switching back from checkbox to normal mode, the checkbox state should be saved. not need to delete lines that are checked.
   * Bonus: Add the ability to drag and drop a line in checkbox mode.
6. Add the option to Pin a note. Pinned note needs to be shown first in the list.
7. Add collaborators to a note. Collaborators rights are the same as creators.