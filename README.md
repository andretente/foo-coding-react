## Available Scripts

In the project directory, you can run:

### `yarn install:all`

Installs all the necessary dependencies on the client and server

### `yarn dev`

Runs the client and server in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Please keep in mind that this won't work out of the box in your local environment without adding the needed .env variables.

You'll need to create a firebase project and generate a giphy API key, then create a .env file and add your variables (REMEMBER TO GITIGNORE THE ENV FILE!)

The .env file should include
API_KEY={YOUR-FIREBASE-API-KEY}
AUTH_DOMAIN={YOUR-FIREBASE-AUTH-DOMAIN}
DATABASE_URL={YOUR-FIREBASE-DATANASE-URL}
PROJECT_ID={YOUR-FIREBASE-PROJECT-ID}
STORAGE_BUCKET={YOUR-FIREBASE-STORAGE-BUCKET}
MESSAGING_SENDER_ID={YOUR-FIREBASE-MESSAGING-SENDER-ID}
APP_ID={YOUR-FIREBASE-APP-ID}
MEASUREMENT_ID={YOUR-FIREBASE-MEASUREMENT-ID}
GIPHY_API={YOUR-GIPHY-API-KEY}
PORT=4000
