# Intro to C#

Welcome to C# Workshop, C# is an object oriented programming language (OOP). This introduction will cover the basics of setting up and making your first MVC project!

In this workshow you will learn

- What is C#
- What Object oriented programming is.
- What MVC is.

### What is C#

C# Is a strongly typed language, Meaning all variables require a type (Int, String, Bool. ect). C# is an object oriented progrmming language, this means code is organised into classes, methods and objects. A class is a blueprint that defines the properties (attributes) and behaviors (methods) of an object. Attributes are things that the class has, for example, a car woud have attributes of 'Colour', 'Speed' and 'NumberOfSeats'. This class would have methods such as 'SpeedUp', 'SlowDown' or 'MinusOnePassanger'.

### What is OOP

Object oriented programming consists of 4 main pillars.

#### Encapsulation

- This is restricting the access of an objects properties.
- This can be done by editing the access modifier of the class.

- for example, In your mug and glasses cupboard, you have 4 mugs and 4 glasses in specific places, you don't really want someone coming in to your cupboard and changing where things are or the number of mugs and glasses you have, so you would say 'the only way to get to the mugs and glasses is through me' (I.e the method) and then your mugs and glasses are encpasulated behind you!

#### Abstraction

- This is only showing the parts of the objects that need to be shown.
- This is done by editing the access modifier of the properties in the class.

- For example, in your cupboard, you have mugs and glasses, but you only want people to use mugs, Therfore, you know you have mugs and glasses, but your going to hide the glasses. (I.e, editing your access modifier) so to the method, you only have mugs, but in your class, you have glasses and mugs.

#### Inheritance

- This is using a base class that share properties with other classes.
- This is modeling your class from your base class so you can use the same properites.

- For example, In your cupoard, you have glasses and mugs. Rather than having repeated properties such as 'CanHoldLiquid', 'MadeOutOf' or 'ForHotDrinks', you would make a base class of Cups, this would contain these properties and both glasses and mugs would be able to reference these properties as well as having their own properties such as 'HasHandle' or 'HasStraw'.

#### Polymorphism

- This is a similar concept to inheritance but would allow for a larger variety of objects to be grouped together.
- This works on the premis of having one shared base class that is less specific to the types being worked with but it is the base class for lost of different object

- For example, If you were to scale back from the specificness of glasses and mugs and cups, we would have a base class of kitchen. The kitchen base class may have properties such as 'UsedForPreparingMeals', 'UsedForCooking', 'UsedForEating'or 'UsedForDrinking'. From this: Cups, cutlery, pots and pans, chopping boards would all be able to inherit from the base class which means if you needed to store a variety of different items such as a fork, a frying pan and a mug together, you could do so under the kitchen class.

### What is MVC

MVC is an acronym for Model, View, Controller.

#### Model

- The model file is an class. This class represents a type of object that contains properties that are are shared by a group of the same objects.

- For Example, you have an class called mugs, this object class contain the properties such as 'HasHandle', 'ForHotDrinks' and 'Size'. This class would be used to define the type of object that is being used.

#### View

- The view file is where you create the UI of the document, this will hold the code for client side logic, this woud be the rendering of features on the screen.

- For example, if you were trying to show how many mugs you had, you could just count them and hard code that many mugs, but that would mean you would have to go through and change the number everytime you broke or brought a mug, so instead we would use the models, to count the number of mugs we have and code the model to directly into the view to show a live number of the amount of mugs we have, this would be done client side instead of server side.

#### Controller

- The controller file handels all of the Server side logic, this would include database calls, manipulations to the model and accessing and changing the data.

- For example, When working out the number of mugs, if they are stored in a database rather than a quantity in the model, we would use the controller to access the database and retrieve the data to populate our variable.

## Getting started

### Set Up the Project:

- Open Visual Studio Code.
- Create a new directory for your project.
- Open a terminal in this directory and run the following command to create a new MVC project:

dotnet new mvc -n CarMVC

- Navigate to the project directory:

cd CarMVC

- To ensure your setup is working, run the following command in the terminal:

dotnet run

Which should open your browser and run the project

### Ticket 1 : Creating the car model

#### 1a - Creating The car class.

- In the project, Open the 'Models' Folder and create a new file called Car.cs
- In that file we will now make the model.

- Starting off with the first line, we create our namespace object

namespace CarMVC.Models
{

}

- Within our name space object we are now going to make our class, we will use the access modifier public so it is avaliable throughout the project.

namespace CarMVC.Models
{
public class Car
{

    }

}

- Now we will give our class attributes, these attributs have methods attached to them called get and set to get the value of the attribut and to set the value of the attribute.

namespace CarMVC.Models
{
public class Car
{
public string Make { get; set; }
public string Model { get; set; }
public int Year { get; set; }
public string Color { get; set; }
}
}

#### 1b - Creating the constructor

- Now we have our class, we need to give it some values, this is done by using a constructor.
- To creat a constructor we use the access modifier public and then give the class of Car and then instansiate a function()
- This follow the last attribute before the closing bracket of the class.

namespace CarMVC.Models
{
public class Car
{
public string Make { get; set; }
public string Model { get; set; }
public int Year { get; set; }
public string Color { get; set; }

        // Default constructor with initial values
        public Car()
        {
            Make = "Toyota";
            Model = "Corolla";
            Year = 2020;
            Color = "Red";
        }
    }

}

- This completes our model.

### Ticket 2: Creating the car controller

#### 2a - Creating the controller

- In the project, Open the 'Controllers' Folder and create a new file called CarController.cs
- In that file we will now make the contoller methods.

#### 2b Creating the controller method

- We start out similarly to the model making our namespace for the file.

namespace CarMVC.Controllers
{

}

- Now following this we again use the public access modifier then the class and name of Car contoller, but we will inherit the attributes from the contoller class.

namespace CarMVC.Controllers
{
public class CarController : Controller
{
}
}

- We now create our first method. This will be called index as it is the first method we want to run when the file is run.
- The purpose of this method is to create a new variable with the type of car and populate it with the values stored in our class by calling our car constructor.

namespace CarMVC.Controllers
{
public class CarController : Controller
{
public IActionResult Index()
{
var car = new Car();
return View(car);
}
}
}+

### Ticket 3 : Creating the View

#### 3a Creating the view file

- In the project, Open the 'View' Folder and create a new folder called Car and create a file called Index.cshtml
- In that file we will now make the View.

#### 3b creating the view

- In this file, currently we are just going to show the values of the car variable.
- To do this at the top of the Index.cshtml file we are going to call our model file so we can access its values.

@model CarMVC.Models.Car

- Follwing that we will use Html tags to show the elements we want and using razor syntax, razor syntax is similar to dot notation, but it uses a model.
- All uses of this will start with @Model. then the attribute we want is what will follow.

<h1>Car Details</h1>
<p>Make: @Model.Make</p>
<p>Model: @Model.Model</p>
<p>Year: @Model.Year</p>
<p>Color: @Model.Color</p>

## Running the project

- For ease, when we run the project, we will give the terminal the port number we want it to run on so we can garuntee access.
- once in the correct file in the terminal, copy and paste the following.

dotnet run --urls "http://localhost:5001"

- Once this is running, and you can see the 'content route path', go to your selected browser if it has not automatically opened and run this url.

http://localhost:5001

### Congratulations

You have sucessfully created your first MVC project in C#, to follow this it will now be worth taking a look into some possibilities, like being able to change the colour of the car, or add in another vehichle.
