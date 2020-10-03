# Reactivities

## Web Application

## Tools
* [Visual Studio](https://visualstudio.microsoft.com/downloads/)
  * [Extensions: SQLite/SQL Server Compact Toolbox](https://marketplace.visualstudio.com/items?itemName=ErikEJ.SQLServerCompactSQLiteToolbox)
* [C#](https://docs.microsoft.com/en-us/dotnet/csharp/)
* [Typescript](https://www.typescriptlang.org/docs/)
* [Windows Powershell](https://docs.microsoft.com/en-us/powershell/)
* [Git](https://git-scm.com/doc)
* [Github](https://github.com/JCode1986)
* [ASP.Net Core](https://dotnet.microsoft.com/learn/aspnet/what-is-aspnet-core)
* [React](https://reactjs.org/docs/hello-world.html)
    * [Semantic UI React](https://react.semantic-ui.com/)
    * [React Router](https://reactrouter.com/web/guides/quick-start)
* [Entity Framework](https://docs.microsoft.com/en-us/ef/)
* [Axios](https://www.npmjs.com/package/axios)
* [MediatR](https://github.com/jbogard/MediatR/wiki)
* [CQRS](https://docs.microsoft.com/en-us/azure/architecture/patterns/cqrs)
* [MobX](https://mobx.js.org/README.html)
* [SignalR](https://docs.microsoft.com/en-us/aspnet/signalr/overview/getting-started/introduction-to-signalr)
* [Postman](https://www.postman.com/api-documentation-tool/)
* [React Developer Tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en)
---

## Versions
* .Net Core SKD & runtime - V 3.1.7
* netstandard - V 2.0
---
## Useful dotnet commands
* `dotnet -h` - list of all available dotnet commands 
* `dotnet ef migrations add <name> -p <project> -s <project>` - adds new migrations to one or more projects; `-p` for projects, and `-s` for startup project
* `Update-Database` - updates the database
* `dotnet watch run` - command works inside context of the startup project; creates database and runs application
* `dotnet ef database drop -p <project name (Persistence)> -s <start up project (API)>` - delete database from API

## Useful react commands
 * `npm start` - starts react app
 
## Projects

### Web API (C#)
* **API** (start up project) - receives and responds to http requests
  * *reference* - Application

### Libraries (C#)
* **Application** - processess the business logic
  * *references* - Domain & Persistence
* **Persistence** - provides access to database
  * *reference* - Domain
* **Domain** - contains the business entities
  * *reference* - None

### React (Typescript)
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


## Log

<details>
<summary>Styling</summary>

* 2312: 10/02/2020 *Created function to sort dates and group the same dates together*
* 2246: 10/02/2020 *Created `ActivityListItem.tsx` in `src` -> `features` -> `activities` -> `dashboard` and removed Item from `AcitivityList.tsx` to `ActivityListItem.tsx`*

</details>

<details>
<summary>React Router</summary>

* 2230: 10/02/2020 *Removed unused code*
* 2214: 09/11/2020 *Scroll to top functionality added in `ScrollToTop.tsx` in `src`->`app`->`layout`; wrapped in `app.tsx`*
* 2155: 09/11/2020 *Moved home page outside of navigation routes*
* 0011: 09/10/2020 *Navigation after submissions now working*
* 2336: 09/09/2020 *Utilized fully uncontrolled component with key to reset component state when creating or updating activity*
* 0152: 09/09/2020 *Routing to edit form complete*
* 0124: 09/09/2020 *Added route parameters in `ActivityDetails.tsx`*
* 2114: 09/08/2020 *Viewing detail and routing to a different page successful*
* 2344: 09/07/2020 *Links added in `NavBar.tsx`*
* 2335: 09/07/2020 *Routes setup in `App.tsx`*
* 2322: 09/07/2020 *Installed `react-router-dom`, and imported in `index.tsx` file in `src`*

</details>

<details>
<summary>MobX refactor</summary>

* 2205: 09/07/2020 *Enabled MobX strict mode; utilizing `runInActions()` fot state changes after awaiting*
* 1651: 09/05/2020 *Removed unused code*
* 1644: 09/04/2020 *Delete functionality from store working*
* 1635: 09/04/2020 *Edit funcionality and cancel button working (from store)*
* 1611: 09/04/2020 *Utlizing observable map for activities instead of array*
* 2326: 09/02/2020 *Added sort by date functionality for activities in store*
* 2152: 09/02/2020 *Refactored create functionality to use store instead of passing props*
* 2133: 09/02/2020 *Renders list of activites through store*
* 0105: 09/02/2020 *Components requiring store access with observables converted to observers*
* 0043: 09/02/2020 *Mobx setup complete `src` -> `app` -> `stores` -> `activityStore.ts`*
* 0026: 09/02/2020 *`npm install mobx mobx-react-lite` for state management (functional components)*

</details>


<details>
<summary>Data Persistence - Axios</summary>

* 2151: 09/01/2020 *Isolated loading indicator for delete button*
* 2132: 09/01/2020 *Added loading indicator for submitting data*
* 2114: 09/01/2020 *Added `LoadingComponent.tsx` in `src` -> `app` -> `layout`*
* 2104: 09/01/2020 *Added delay to API methods to simulate production stage*
* 2058: 09/01/2020 *client side can now use CRUD successfully with API*
* 2050: 09/01/2020 *listing activities from API successful*
* 2041: 09/01/2020 *`agent.ts` file setup in `app` -> `api` folder*

</details>

<details>
<summary>CRUD React</summary>

* 2219: 08/31/2020 *Delete functionality for client side added*
* 2140: 08/31/2020 *Fixed issues with the dates in the form*
* 2320: 08/30/2020 *Create and update functionality added; still need to work on minor fixes*
* 2220: 08/30/2020 *Added functions to handle creates, edits and cancels*
* 2020: 08/30/2020 *Can now view details of specific activity*
* 1943: 08/30/2020 *Added `activites folder` with folders - `dashboard`, `details`, & `form`; components added in folders to retrieve data from back end
* 0203: 08/27/2020 *Added images to `assets folder`; created `NavBar.tsx` with component*
* 0048: 08/25/2020 *Folder structure organized; added `activity.ts` with structure of activity object in `models folder`; moved `app.tsx` and `styles.css` to `layout folder`; hook state and hook effect added to retrieve all activities in `App.tsx`*

</details>

<details>
<summary>CRUD .Net Core using CQRS + Mediator pattern</summary>

* 1945: 08/24/2020 *Created `Delete.cs` in application folder, and delete handler in contollers; can successfully delete an activity; removed unnecessary using in files*
* 1930: 08/24/2020 *Created `Edit.cs` in application folder, and edit handler in contollers; can successfully edit an activity*
* 1825: 08/24/2020 *Created `Create.cs` in application folder, and create hanlder in controllers; can successfully create an acitivity*
* 1714: 08/24/2020 *Created `Details.cs` in `Application folder`, and detail handler in controllers; can successfully query a single activity*
* 1654: 08/24/2020 *Created `ActivitiesController.cs` and added MediatR as a service in `startup.cs`; can successfully query to API to retrieve all activities*
* 1638: 08/24/2020 *Created `Activity Folder` in Application project with `List.cs`; created query handler with MediatR*
* 1624: 08/24/2020 *Installed `MediatR.Extensions.Microsoft.Dependancy Injection` Nuget package to Application project*
* 1501: 08/24/2020 *Seeded activities to database*
* 0000: 08/24/2020 *`Activity.cs` added in Domain project, added Activity Entity, and successfully migrated*

</details>

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
