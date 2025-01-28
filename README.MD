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

# 1.10

@graphql-tools/schema
@graphql-tools/merge
@graphql-tools/load-files

loadFilesSync 파일 경로 패턴 정의
_\_\_filename 현재 실행 중인 파일 경로
_\_\_dirname 현재 실행 중인 폴더 경로
/\*_/_.typeDefs.js 모들 폴더의 모든 이름의 typeDefs.js

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

keep schema of prisma syncronised with type defintion(graphQL schema).
must migrate evertime you change your prisma schema

# 2.1
