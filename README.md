# Reactivities

## Web Application

## Tools
* ASP.Net Core
* React
* Entity Framework
* Sqlite
* Visual Studio
  * Extensions: SQLite/SQL Server Compact Toolbox
* Windows Powershell
* Postman
* Axios 
* MobX
* SignalR
* C#
* Typescript
---

## Versions
* .Net Core SKD & runtime - V 3.1.7
* netstandard - V 2.0
---
## Useful dotnet commands
* `dotnet -h` - list of all available dotnet commands 
* `dotnet ef migrations add <name> -p <path> -s <path>` - adds new migrations to one or more projects
* `dotnet watch run` - command works inside context of the startup project; creates database and runs application 
## Projects

### Web API
* **API** - receives and responds to http requests
  * *reference* - Application

### Libraries
* **Application** - processess the business logic
  * *references* - Domain & Persistence
* **Persistence** - provides access to database
  * *reference* - Domain
* **Domain** - contains the business entities
  * *reference* - None
---

## Getting Started

Clone this repository to your local machine.

```
$ git clone https://github.com/JCode1986/Reactivities.git
```
Once downloaded, you can either use the dotnet CLI utilities or Visual Studio 2017 (or greater) to build the web application. The solution file is located in the Reactivities subdirectory at the root of the repository.
```
cd YourRepo/YourProject
dotnet build
```
The dotnet tools will automatically restore any NuGet dependencies. Before running the application, the provided code-first migration will need to be applied to the SQL server of your choice configured in the /Reactivities/API/appsettings.json file. This requires the Microsoft.EntityFrameworkCore.Tools NuGet package and can be run from the NuGet Package Manager Console:
```
Update-Database
```
Once the database has been created, the application can be run. Options for running and debugging the application using IIS Express or Kestrel are provided within Visual Studio. From the command line, the following will start an instance of the Kestrel server to host the application:
```
cd YourRepo/YourProject
dotnet run
```
---
## Pages


## Change Log
#### Client Skeleton
* 1.7
#### API Skeleton
* 1.6 *Succesfully queried from database utilizing postman* - 08/23/2020
* 1.5 *Upgraded EF Core Tools Version from 3.1.2 to 3.1.7, and succesfully seeded data* - 08/22/2020
* 1.4 *Database created; SQLite/SQL Server Compact Toolbox extension installed to view database* - 08/22/2020
* 1.3 *Initial migration success* - 08/22/2020
* 1.2 *Local host routes operable, and getting back data* - 08/22/2020
* 1.1 *Created projects (API, Application, Persistence, and Domain); projects added to sln.file, and references added* - 08/22/2020
---
### Resources
* Udemy
