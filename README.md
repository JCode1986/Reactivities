# Reactivities

## Web Application

## Tools
* ASP.Net Core
* React
* Entity Framework
* Sqlite
* Visual Studio
  * Extensions: SQLite/SQL Server Compact Toolbox
* Axios 
* MobX
* SignalR
* C#
* Typescript
* Windows Powershell
* Postman
* React Developer Tools
---

## Versions
* .Net Core SKD & runtime - V 3.1.7
* netstandard - V 2.0
---
## Useful dotnet commands
* `dotnet -h` - list of all available dotnet commands 
* `dotnet ef migrations add <name> -p <path> -s <path>` - adds new migrations to one or more projects
* `dotnet watch run` - command works inside context of the startup project; creates database and runs application

## Useful react commands
 * `npm start` - starts react app
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

### React
* **client-app** - Client side
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

<details>
<summary>Client Skeleton</summary>

* 2107: 08/23/2020 *Installed semantic ui react*
* 2041: 08/23/2020 *Installed axios; added CORS in `startup.cs`; Client side successfully fetches data from API*
* 1307: 08/23/2020 *React set up complete*

</details>

<details>
<summary>API Skeleton</summary>

* 0203: 08/23/2020 *Succesfully queried from database utilizing postman*
* 2302: 08/22/2020 *Upgraded EF Core Tools Version from 3.1.2 to 3.1.7, and succesfully seeded data*
* 2128: 08/22/2020 *Database created; SQLite/SQL Server Compact Toolbox extension installed to view database*
* 2034: 08/22/2020 *Initial migration success*
* 1837: 08/22/2020 *Local host routes operable, and getting back data*
* 1421: 08/22/2020 *Created projects (API, Application, Persistence, and Domain); projects added to sln.file, and references added*

</details>

---
### Resources
* Udemy
* [Semantic UI React](https://react.semantic-ui.com/)
