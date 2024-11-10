We will create a Node.js application that allows users to sort and search through over 100 movie records using the console. 
The application will be organized into multiple files for modularity.

File Structure:

movies.json - Contains movie records.
	This file contains an array of movie objects. For brevity, we'll include a sample of three movies, but you should populate it with over 100 records.

movieData.js - Handles data loading and provides access to movie records.
	This module loads the movie data and provides functions to access it.

search.js - Provides functions to search movies.
	This module provides functions to search movies based on different criteria.

sort.js - Provides functions to sort movies.
	This module provides functions to sort movies based on different attributes.

app.js - The main application file handling user interaction.
	The main application file that handles user interaction via the console.

package.json - Manages dependencies and scripts.


7. Install Dependencies

Run the following command inside of `exercise/app/` to install the app's dependencies

```
npm install
```