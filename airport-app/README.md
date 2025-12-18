# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


## Passenger User Stories
## Flight Information & Tracking

1. As a passenger, I want to check flight arrivals by selecting an airport, so that I can see when flights are landing at my destination.

I navigate to the "Flight Arrivals" page from the main navigation header
I click on the "Select Airport" dropdown menu
I choose my desired airport from the list
The system displays a table showing all arriving flights with flight number, origin airport, scheduled time, and current status


2. As a passenger, I want to quickly scan the flight arrivals table to find my flight, so that I can immediately see if it's on time or delayed.

After selecting an airport, I view the "Flights at" table
I scan through the columns: Flight Number, From, Scheduled Time, and Status
I locate my specific flight number in the list
I check the status column to see if the flight is On Time, Delayed, Cancelled, or Landed


3. As a passenger, I want to see a clear message when no flights are scheduled, so that I know the airport has no current arrivals rather than thinking the system is broken.

I select an airport from the dropdown
If no flights exist, I see "No flights found for this airport" displayed in the table area
This confirms the airport currently has no scheduled arrivals


4. As a passenger, I want to access the flight tracker from the homepage, so that I can immediately start checking flight information without navigating through multiple pages.

I see "Flight Arrivals" prominently displayed in the top navigation header
I click on "Flight Arrivals" to access the flight tracking page
The page loads with a large hero image of an airplane and the flight selection interface


5. As a passenger, I want to see flight information organized in clearly labeled columns, so that I don't have to guess what each piece of information represents.

The table header shows: "FLIGHT NUMBER", "FROM", "SCHEDULED TIME", and "STATUS"
Each column is clearly separated and easy to read
Information is aligned consistently for easy scanning

## Admin User Stories
## Navigation & Access

1. As an admin, I want to access the admin panel from the main navigation, so that I can manage all system data in one centralized location.

I click on "Admin" in the top right corner of the navigation header
The system takes me to the admin dashboard
I see tabs for Flights, Airports, Aircraft, Gates, and Cities



## Flight Management

2. As an admin, I want to add a new flight to the system, so that passengers can track this flight and staff can manage its operations.

I click "Admin" in the header to enter the admin section
I'm on the "Flights" tab by default (or I click the "Flights" tab)
I see the "Add New Flight" form at the top of the page
I enter the flight number in the "Flight Number" field (e.g., AC123)
I select the departure airport from the "From Airport" dropdown (labeled "Select Departure Airport")
I select the arrival airport from the "To Airport" dropdown (labeled "Select Arrival Airport")
I click on the "Scheduled Time" datetime picker and select the date and time
I select the flight status from the "Status" dropdown (default shows "On Time")
I click the blue "Add Flight" button
The flight appears in the "Existing Flights" table below


3. As an admin, I want to view all existing flights in a comprehensive table, so that I can see the complete flight schedule at a glance.

I navigate to Admin > Flights tab
Below the "Add New Flight" form, I see the "Existing Flights" section
The table displays columns: Flight Number, From Airport, To Airport, Scheduled Time, Status, and Actions
If no flights exist, I see "No flights found" in the table area


4. As an admin, I want to edit or delete existing flights, so that I can update flight information or remove cancelled flights.

I navigate to Admin > Flights tab
I scroll down to the "Existing Flights" table
I locate the flight I want to modify
I click on the action buttons in the "ACTIONS" column (Edit or Delete)
For delete: I confirm the deletion and the flight is removed from the table
For edit: I update the flight details and save changes


5. As an admin, I want to use dropdown menus when selecting airports for flights, so that I don't make typos and all data is standardized.

When adding a flight, I click the "From Airport" dropdown
I see a list of all available airports that have been added to the system
I select the departure airport from this list
I repeat the process for the "To Airport" dropdown
This ensures consistency in airport naming across all flights



## Airport Management

6. As an admin, I want to add a new airport to the system, so that flights can be scheduled to and from this location.

I click "Admin" in the navigation header
I click on the "Airports" tab
I see the "Add New Airport" form at the top
I enter the full airport name in the "Airport Name" field (e.g., Toronto Pearson International)
I enter the three-letter airport code in the "Airport Code" field (e.g., YYZ)
I select the associated city from the "City" dropdown menu
I click the blue "Add Airport" button
The new airport appears in the "Existing Airports" table below


7. As an admin, I want to view all airports in the system with their codes and IDs, so that I can verify airport information and identify records.

I navigate to Admin > Airports tab
I scroll to the "Existing Airports" section
I see a table with columns: Code, Name, ID, and Actions
Each row shows a complete airport record
If no airports exist, I see "No airports found"


8. As an admin, I want to edit or delete airport records, so that I can correct mistakes or remove airports that are no longer served.

I navigate to Admin > Airports tab
I find the airport in the "Existing Airports" table
I click the appropriate action button (Edit or Delete) in the Actions column
For delete: I confirm and the airport is removed (only if no flights are using it)
For edit: I update the information and save


9. As an admin, I want to associate each airport with a city from a dropdown, so that geographic data is consistent and flights can be organized by region.

When adding or editing an airport, I click the "City" dropdown
I see all cities that have been added to the Cities section
I select the appropriate city from the list
This creates a relationship between the airport and its location



## Aircraft Management

10. As an admin, I want to add aircraft to the system with detailed specifications, so that operations can plan for each aircraft's specific needs.

I click "Admin" in the header
I click on the "Aircraft" tab
I see the "Add New Aircraft" form
I enter the aircraft type in the "Aircraft Type" field (e.g., Boeing 737)
I enter the airline name in the "Airline Name" field (e.g., Air Canada)
I enter the passenger capacity in the "Number of Passengers" field (e.g., 180)
I click the blue "Add Aircraft" button
The aircraft appears in the "Existing Aircraft" table with an auto-generated ID


11. As an admin, I want to view all aircraft in a table showing type, airline, and capacity, so that I can manage the fleet and plan operations accordingly.

I navigate to Admin > Aircraft tab
I scroll to the "Existing Aircraft" section
I see columns: ID, Type, Airline Name, Number of Passengers, and Actions
Each row represents one aircraft in the system
In your example, I can see two Boeing 737-800 aircraft from WestJet with 189 passenger capacity


12. As an admin, I want to delete aircraft records that are no longer in service, so that the system only shows active aircraft.

I navigate to Admin > Aircraft tab
I locate the aircraft to remove in the "Existing Aircraft" table
I click the red "Delete" button in the Actions column
I confirm the deletion
The aircraft is removed from the table


13. As an admin, I want to see each aircraft's passenger capacity clearly displayed, so that I can assign appropriate aircraft to flights based on expected passenger loads.

In the "Existing Aircraft" table, I look at the "NUMBER OF PASSENGERS" column
I can see the exact capacity for each aircraft (e.g., 189 passengers)
This helps me make informed decisions about aircraft assignments



## Gate Management

14. As an admin, I want to add new gates to airports with specific details, so that flights can be assigned to physical gate locations.

I click "Admin" in the header
I click on the "Gates" tab
I see the "Add New Gate" form
I select an airport from the "Airport" dropdown (labeled "Select Airport")
I enter the terminal identifier in the "Terminal" field (e.g., A, B, 1, 2)
I enter the gate number in the "Gate Number" field (e.g., A12)
I select the gate status from the "Status" dropdown (showing "Available" as default)
I click the blue "Add Gate" button
The gate is added to the "Existing Gates" section


15. As an admin, I want to view all gates organized by airport and terminal, so that I can see the complete gate inventory and availability.

I navigate to Admin > Gates tab
I scroll to the "Existing Gates" section
I see a table with gate information for all airports
I can see which terminals and gates belong to each airport
I can see the current status of each gate (Available, Occupied, Under Maintenance)


16. As an admin, I want to change gate status between Available, Occupied, and Under Maintenance, so that the system reflects real-time gate availability.

I navigate to Admin > Gates tab
I find the gate I need to update in the table
I click the Edit action button
I change the status in the dropdown menu
I save the changes
The updated status is reflected in the table


17. As an admin, I want to select airports from a dropdown when adding gates, so that gates are properly associated with their physical locations.

When adding a new gate, I click the "Airport" dropdown
I see all airports that have been added to the system
I select the airport where this gate is located
This ensures the gate is linked to the correct airport



## City Management

18. As an admin, I want to add cities with detailed geographic and demographic information, so that airports can be properly categorized by location.

I click "Admin" in the header
I click on the "Cities" tab
I see the "Add New City" form
I enter the city name in the "City Name" field (e.g., Toronto)
I enter the state or province in the "State/Province" field (e.g., Ontario)
I enter the population in the "Population" field (e.g., 2930000)
I click the blue "Add City" button
The city appears in the "Existing Cities" table below


19. As an admin, I want to view all cities with their state/province and population data, so that I can manage location information effectively.

I navigate to Admin > Cities tab
I scroll to the "Existing Cities" section
I see a table with columns: ID, Name, State/Province, Population, and Actions
Each row displays complete city information
If no cities exist, I see "No cities found"


20. As an admin, I want to edit or delete city records, so that location data remains accurate and up-to-date.

I navigate to Admin > Cities tab
I locate the city in the "Existing Cities" table
I click the appropriate action button in the Actions column
For edit: I update the information and save changes
For delete: I confirm deletion (only if no airports are using this city)



## System Navigation & Interface

21. As an admin, I want to easily switch between different management sections using clear tabs, so that I can efficiently manage all aspects of the system without getting lost.

After clicking "Admin" in the header, I see five tabs: Flights, Airports, Aircraft, Gates, and Cities
The active tab is highlighted 
I click on any tab to switch to that management section
Each section maintains a consistent layout: Add New form at top, Existing items table below
I can quickly navigate between sections to manage different data types


22. As an admin, I want to see consistent form layouts across all sections, so that I don't have to relearn the interface for each data type.

Every admin section (Flights, Airports, Aircraft, Gates, Cities) follows the same pattern
Forms are at the top with input fields in a grid layout
The blue action button is prominently displayed below the form
The "Existing [items]" table is always below the form
This consistency makes the admin panel intuitive to use


23. As an admin, I want to have the admin section separate from the public flight tracker, so that passengers don't accidentally access administrative functions.

The "Admin" link is in the header but separate from "Flight Arrivals"
Only users with admin privileges can access the admin panel
The admin interface has a different visual design (lighter background, form-focused)
Public users only see the "Flight Arrivals" page with its clean, passenger-focused design

## Staff User Stories
## Operational Management

24. As airport staff, I want to quickly access the admin panel to update flight statuses, so that I can keep passengers informed in real-time.

I click "Admin" in the header
I go to the "Flights" tab (default view)
I scroll to the "Existing Flights" table
I click the Edit button for the flight I need to update
I change the status dropdown to Delayed, Cancelled, Boarding, or Landed
I save the changes
The updated status is immediately visible to passengers checking flight arrivals


25. As airport staff, I want to view today's complete flight schedule, so that I can coordinate ground operations and gate assignments.

I navigate to Admin > Flights tab
I see the complete list of flights in the "Existing Flights" table
I can see flight numbers, departure/arrival airports, scheduled times, and current statuses
I use this information to plan staffing and equipment needs


26. As airport staff, I want to quickly see which gates are available, so that I can make rapid decisions during delays or schedule changes.

I click "Admin" in the header
I click on the "Gates" tab
I scan the "Existing Gates" table to see the Status column
I can immediately identify which gates show "Available"
I can then assign these gates to arriving or departing flights


27. As airport staff, I want to check aircraft capacity information, so that I can plan for appropriate ground crew and services.

I navigate to Admin > Aircraft tab
I view the "Existing Aircraft" table
I look at the "NUMBER OF PASSENGERS" column to see each aircraft's capacity
For a 189-passenger Boeing 737, I know I need appropriate staffing for boarding and deplaning


28. As airport staff, I want to add last-minute or emergency flights to the system, so that all arriving aircraft are properly tracked and managed.

I click "Admin" in the header
I'm automatically on the "Flights" tab
I quickly fill out the "Add New Flight" form with the emergency flight details
I enter the flight number, select airports from dropdowns, set the time, and choose status
I click "Add Flight"
The flight immediately appears in the system and is visible to passengers


29. As airport staff, I want to use dropdown menus rather than typing airport names, so that I can enter data quickly and accurately during busy periods.

When adding or updating flights, I click the airport dropdowns
I see a standardized list of all airports in the system
I select the correct airport without worrying about spelling or formatting
This reduces errors and speeds up data entry during peak operational times.