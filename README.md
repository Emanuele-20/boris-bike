# Boris Bikes Challenges

'Santander Cycles' project. 
Anyone can hire out a bike and ride it around London.

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

### Initial Domain model
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

Now we create a ne file .js where we create a new DockingStation class and we link those 2 file. (Module.eports and Require)


Require a file in node REPL = **let newDockingStation =  require ('./src/dockingStation')**
Require a file a run Node REPL with the code loaded = **node -i -e "$(< src/dockingStation.js)"**
or = **> const DockingStation = require('./dockingStation')**

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


BDD Cycle = https://github.com/makersacademy/course/blob/master/pills/bdd_cycle.md 

OOP easly explained = https://www.reddit.com/r/explainlikeimfive/comments/1pyhng/eli5_objected_oriented_programming/

---------------------------
```
As a member of the public
So I can return bikes I've hired
I want to dock my bike at the docking station

As a member of the public
So I can decide whether to use the docking station
I want to see a bike that has been docked
```
| Objects | Messages|
| :--:    | :--:    |
| Person    |       |
| DockingStation  | releaseABike() |
| Bike            | isWorking() |
| DockingStation  | dock(bike)  |
| Bike            | hasBeenDocked(bike)|
| DockingStation | throw error if no bike available|
| DockingStation | throw error if the dock limit ir reached|
| DockingStation | has a default capacity|


```
As a member of the public,
So that I am not confused and charged unnecessarily,
I'd like docking stations not to release bikes when there are none available
```

```
As a maintainer of the system,
So that I can control the distribution of bikes,
I'd like docking stations not to accept more bikes than their capacity.
```

```
As a system maintainer,
So that I can plan the distribution of bikes,
I want a docking station to have a default capacity of 20 bikes.
```

Our program is working, but it's getting complex. We need to refactor it into a better shape. We will do so using the first of several design principles: the Single Responsibility Principle ('SRP').


```
As a system maintainer,
So that busy areas can be served more effectively,
I want to be able to specify a larger capacity when necessary.
```

```
As a member of the public,
So that I reduce the chance of getting a broken bike in future,
I'd like to report a bike as broken when I return it.
```
```
As a maintainer of the system,
So that I can manage broken bikes and not disappoint users,
I'd like docking stations not to release broken bikes.
