# Kitchen Express Web App 

## Introduction
Welcome to the "Kitchen Express" web app project! This document provides an overview of the project and its purpose, as well as the way I complete the remaining tasks to launch the product successfully. 

## Project Overview
"Kitchen Express" is a web application designed to assist restaurants in tracking customer orders efficiently. It facilitates the entire order management process, from order creation by waiters to serving the customer's table. Additionally, the app records crucial information such as the table number and the exact time when an order is placed.

## Project Status
ALL the HTML, CSS, and JavaScript files have been created. However, due to unforeseen circumstances, the developer has fallen ill and cannot continue working on the project. The responsibility has now shifted to me to complete the remaining sections of the code so that the product can still be launched within the week.

Fortunately, the existing codebase has received approval from the team, meaning that I only needed to focus on modifying the scripts.js file. This file contains most of the event-specific behavior and event handlers. While the first handleDragOver handler's logic has been written and documented, my task was to add logic to all remaining event handlers. I also made use of the data.js and view.js file exports to ensure that the project meets the following user stories:

## User Stories
- The "Add Order" button should start as focused, allowing the user to press space/enter immediately to add an order.
- Clicking the "?" icon should open a "Help" overlay that provides instructions on how to use the app.
- If the "Help" overlay is open, clicking the "Close" button should remove the overlay.
- When any overlay is closed, the focus should be returned to the "Add Order" button.
- Clicking "Add Order" should open an "Add Order" overlay that allows the entry of order text and an associated table.
- Clicking "Cancel" in the "Add Order" overlay should remove the overlay without adding the information as an order.
- Clicking the "Add" button in the "Add Order" overlay should remove the overlay and add a new order to the "Ordered" column.
- If the "Add Order" overlay is closed (either with "Cancel" or "Add") and it is opened again, it should be blank (not have information from the last time it was opened).
- If an order has been added and it is clicked, the "Edit Order" overlay should appear.
- If the "Delete" button is pressed in the "Edit Order" overlay, the overlay should be closed, and the order should be removed entirely.
- If the "Cancel" button is pressed in the "Edit Order" overlay, it should close the overlay without applying the changes entered into the overlay inputs.
- If the "Update" button is pressed in the "Edit Order" overlay, it should close the overlay and apply the changes entered to the relevant order.
- If the "Status" value is changed and "Update" is pressed in the "Edit Order" overlay, then the order should be moved to the column selected in the dropdown.

## Technologies Used
The "Kitchen Express" web app is built using the following technologies:

- HTML: The structure and content of the app's web pages are defined using HTML.
- CSS: Styling and layout are achieved through CSS to ensure an appealing user interface.
- JavaScript: The core functionality and interactivity of the app are powered by JavaScript.
- data.js: This module is used for managing and storing data related to orders and their status.
- view.js: The view.js module handles the rendering and display of orders and overlays.

![IWA_18-1](https://github.com/chemonique/IWA_Projects/assets/122254404/74960b06-2742-4e79-bc19-81682f156d88)

