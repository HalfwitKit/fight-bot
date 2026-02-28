# Fight Bot API

This is a Node.js API for a StreamElements !fight command.

## Usage

Send a GET request:
https://<your-render-url>/fight?sender=<your-name>&user=<opponent-name>


Example in StreamElements:

$(urlfetch https://<your-render-url>/fight?sender=$(sender)&user=$(user))