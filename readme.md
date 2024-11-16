# WebSocket Real-Time Chat Application

A real-time chat application built with Node.js, Express, and Socket.IO that allows multiple users to communicate in a shared chat room with typing indicators and user status notifications.

## Features

- 🚀 Real-time messaging
- 👤 Automatic user identification
- ✍️ "User is typing" indicator
- 🔔 Connection/disconnection notifications
- 📱 Responsive design
- ⚡ Instant message delivery
- 🎨 Alternating message background for better readability

## Prerequisites

Before running this project, make sure you have installed:

- Node.js (v12.0.0 or higher)
- npm (Node Package Manager)

## Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd websocket-chat
```

2. Install dependencies:

```bash
npm install express socket.io
```

## Project Structure

```
websocket-chat/
├── server.js           # Server implementation
├── client/
│   └── index.html     # Client implementation
├── package.json
└── README.md
```

## Running the Application

1. Start the server:

```bash
node server.js
```

2. Open your web browser and navigate to:

```
http://localhost:3000
```

The server will be running on port 3000 by default. You can change this in `server.js` if needed.

## How It Works

### Server-Side Features

- Creates an Express server with Socket.IO integration
- Manages user connections and disconnections
- Broadcasts messages to all connected clients
- Handles typing status updates
- Maintains a list of active users

### Client-Side Features

- Connects to the WebSocket server
- Sends and receives messages in real-time
- Shows typing indicators
- Displays user status updates
- Provides a clean and responsive UI

## WebSocket Events

| Event          | Description                            |
| -------------- | -------------------------------------- |
| `connection`   | Fired when a user connects to the chat |
| `disconnect`   | Fired when a user disconnects          |
| `chat message` | Handles sending/receiving messages     |
| `typing`       | Indicates when a user is typing        |
| `user status`  | Broadcasts user connection status      |

## Usage Example

1. Open multiple browser windows pointing to `http://localhost:3000`
2. Each window represents a different user
3. Type messages in any window to see them appear in real-time across all windows
4. When typing, other users will see the "User is typing..." indicator
5. When users connect or disconnect, all users will be notified

## Customization

### Changing Port

In `server.js`, modify the port constant:

```javascript
const port = YOUR_PREFERRED_PORT;
```

### Styling

The chat interface can be customized by modifying the CSS in `index.html`.

## Contributing

Feel free to fork this project and submit pull requests. You can also open issues for bugs or feature requests.

Suggested areas for improvement:

- Add user authentication
- Implement private messaging
- Add message persistence
- Add emoji support
- Implement chat rooms
- Add file sharing capabilities

## Troubleshooting

Common issues and solutions:

1. **Port already in use**

   - Change the port number in `server.js`
   - Check for other applications using port 3000

2. **Connection refused**

   - Ensure the server is running
   - Check if the correct port is being used
   - Verify firewall settings

3. **Messages not sending**
   - Check browser console for errors
   - Verify Socket.IO connection
   - Ensure server is running

## Security Considerations

This is a basic implementation and should be enhanced with the following security measures for production:

- Input sanitization
- Rate limiting
- User authentication
- HTTPS implementation
- WebSocket connection security

## License

This project is open source and available under the MIT License.

## Acknowledgments

- Built with [Socket.IO](https://socket.io/)
- Powered by [Express](https://expressjs.com/)
- Styled with basic CSS
