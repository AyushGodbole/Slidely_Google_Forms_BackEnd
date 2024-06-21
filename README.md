
# Google Forms (BackEnd)
Created for Slidely AI, the backend of the Google Forms App using Express and TypeScript was developed using Visual Studio. This implementation showcases advanced web development skills, utilizing TypeScript's strong typing and the robust Express framework for efficient server-side operations. The use of Visual Studio underscores proficiency in integrated development environments (IDEs), ensuring seamless development and debugging processes.

###


## Backend API Specifications

### Endpoints Overview

- **GET /ping Endpoint:**

  ![ping](https://github.com/AyushGodbole/Slidely_Google_Forms_BackEnd/assets/122848080/4e46fbd5-6bca-4d4e-b36c-6c98a536e528)

  Returns a simple confirmation that the server is running. Always returns true.

- **POST /submit Endpoint:**

  ![submit](https://github.com/AyushGodbole/Slidely_Google_Forms_BackEnd/assets/122848080/84e96557-f2a7-4ee4-86c3-a8d883cc447b)

  **Request Body Parameters:**
  - `name` (string): Name of the submitter.
  - `email` (string): Email address of the submitter.
  - `phone` (string): Phone number of the submitter.
  - `github_link` (string): GitHub profile link of the submitter.
  - `stopwatch_time` (string): Stopwatch time taken to complete the form.

- **GET /read Endpoint:**

  In my code there i have written `/details` instead of `/read`.

  ![details](https://github.com/AyushGodbole/Slidely_Google_Forms_BackEnd/assets/122848080/fb50d060-d45c-4e87-9127-1878e257d978)
  
  ![details1](https://github.com/AyushGodbole/Slidely_Google_Forms_BackEnd/assets/122848080/5cbaf730-e89b-408a-a1fd-d6ae1049afc3)

  Endpoint for retrieving saved form submissions.

  **Query Parameters:**
  - `index` (integer): Specifies the 0-index of the submission to retrieve.

- **DELETE /delete Endpoint:**

  ![delete](https://github.com/AyushGodbole/Slidely_Google_Forms_BackEnd/assets/122848080/73d02e33-72d9-405a-937e-fc675cf1dc71)

  Purpose: Removes specific data from the server.

  **Usage:** Send a request with the ID of the item to be deleted.

  **Response:** Returns confirmation of deletion or an error message if unsuccessful.

- **PUT /edit Endpoint:**

  ![edit](https://github.com/AyushGodbole/Slidely_Google_Forms_BackEnd/assets/122848080/15d034bc-878c-485c-af4d-8cb89855b06a)

  Purpose: Updates existing data with new information.

  **Usage:** Send a request containing the ID of the item and the updated data.

  **Response:** Returns confirmation of the update or an error message if unsuccessful.

### Data Storage

![done15](https://github.com/AyushGodbole/Slidely_Google_Forms_BackEnd/assets/122848080/9d0c703d-222b-48c2-8e4f-295143f9ec52)

The backend uses a JSON file (`db.json`) as a database to store form submissions. Each submission is stored as an object within an array.

## Tools and Languages:

- Express
- TypeScript
- Visual Studio
## Contact me:

[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/ayush-godbole-b4a17224b/)

#### mail - bt21cse046@iiitn.ac.in

