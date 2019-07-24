## RTSP Service

### Running the app
Make sure there are no processes running on ports 3000 && 3001
Can be replaced anyway inside docker-compose.yml

First, run:
```text
make build
```

Then, run:
```text
make start
```

Then you can go straight to [localhost:3000](http://localhost:3000)

Enjoy!

#### TODO:
- More generic notification system on frontend with redux and global snackbar
- Improve error handling
- Improve logs on BE
- Do some cleanups