## RTSP Service

### Running the app
Make sure there are no processes running on ports 3000 && 3001
Can be replaced anyway inside docker-compose.yml

First, run:
```text
cp server/.env.example /server/.env
cp client/.env.example /client/.env
```

Then:
```text
make build
```

Finally, run:
```text
make start
```

Then you can go straight to [localhost:3000](http://localhost:3000)

Enjoy!

Live example can be seen [Here](https://cocky-albattani-fc6587.netlify.com/)

Demo user:

User: `user@example.com`

Password: `123123`

#### TODO:
- Add Logout button
- Add back button
- More generic notification system on frontend with redux and global snackbar
- Improve error handling
- Improve logs on BE
- Do some cleanups