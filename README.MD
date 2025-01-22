# 1.0

package.json

- test -> dev
- delete main

install gitignore -> choose node

# 1.1

npm install @apollo/server graphql

# 1.4

npm install @prisma/client

PostgreSQL - port 5432 already in use

> > sudo pkill -u postgres

# 1.8

npx prisma studio

# 1.12

postgres로 접속해서
(terminal에서 "/Applications/Postgres.app/Contents/Versions/17/bin/psql" -p5432 "postgres" 치면 됨)
DROP DATABASE instaclone;
CREATE DATABASE instaclone;

# 2.0

- [ ] Create Account
- [ ] See profile
- [ ] Login
- [ ] Edit profile
- [ ] Follow User
- [ ] Unfollow User
- [ ] Change Avatar (Image Upload)

After deleting prisma folder,
npx prisma init

After finishing create model,
you have to migrate.
We already have it in package.json ("migrate" : npx prisma migrate ....), all we have to do is "npm run migrate"
