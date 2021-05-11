## Step 1 - From User stories to Domain Model

A User Story describe one thing a program is expected to do, from the prospective of somebody using that program. (Agile Approach)

As developer we have to translate those user stories into a functional system. In OOP the functional system is made up of Objects and Messages (Classes and Methods that are used to interact between them) and form the DOMAIN MODEL (an abstraction of an area of interest).

### User Stories
```
As a person,
So that I can use a bike,
I'd like a docking station to release a bike.

As a person,
So that I can use a good bike,
I'd like to see if a bike is working
```

### Domain model
| Objects | Messages|
| :--:    | :--:    |
| Person    |       |
| DockingStation  | releaseABike() |
| Bike            | isWorking()

Diagram: https://lucid.app/lucidchart/cef3b1af-fa7f-4d23-9819-9f1b9e4128ab/edit?page=0_0#

## Step 2 - From Domain Model to Feature Test (REPL)

A Domain Model is an abstract representation of the Objects within a system, and the Messages they use to communicate with one another.

Classes and Methods need to be managed in order to work together, this is called Feature Test.

We start with declaring a new variable and set it egual a new Dockinstation object.

> let dockingStationStratford = new DockingStation()
Uncaught ReferenceError: DockingStation is not defined

## Step 3  - From Feature Test to Unit Test (In the Testing Framework)

Set the testing framework and run a test, will be failed and we have to understand if we are receiving back a JavaScript Failure or a Jest failure. The primary skill in debugging is to read and understand error messages and test failures.

```
    ReferenceError: DockingStation is not defined

      3 | describe("Docking Station", ()=> {
      4 |     test("Docking station object", () => {
    > 5 |         expect(DockingStation).toBe({})
        |                ^
      6 |     })
      7 |     
      8 | })
```
Now we create a ne file .js where we create a new DockingStation class and we link those 2 file. (Module.eports and Require)



Require a file in node REPL = **let newDockingStation =  require ('./src/dockingStation')**
Require a file a run Node REPL with the code loaded = **node -i -e "$(< src/dockingStation.js)"**

## Step 4  - Back to the feature

> let station = new DockingStation()
undefined
> station.releaseABike()
Uncaught TypeError: station.releaseABike is not a function

Now we go back (for the unit test) in the test file and we create a test for this new method: 

```
 test("Check if a new istance of DockinsgStation accepts a releaseABike() method", () => {
        let newDockingStation =  new DockingStation()
        expect(newDockingStation.releaseABike()).toBe(true)
    })
```
We now fail again and we add more functionality inside the code file in order to pass the test.

