# catbob

[![catbob Code CI](https://github.com/tizayi/catbob/actions/workflows/code.yml/badge.svg)](https://github.com/tizayi/catbob/actions/workflows/code.yml)
[![catbob update EC2](https://github.com/tizayi/catbob/actions/workflows/deploy-ec2.yml/badge.svg)](https://github.com/tizayi/catbob/actions/workflows/deploy-ec2.yml)

A discord bot to do discord things.

## Start up

Create `.env` file .

Start up

```bash
  cd catbob
  npm start
```

Start up in a container

```bash
  cd catbob
  docker build -t catbob .
  docker run -d catbob
```

## Test

Run tests with jest

```bash
  cd catbob
  npm test
```

## Adding new commands

You can add new commands by creating a .ts file in the commands directory.

You need to create a command object which contains a description of the command and a callback function.
The command object must be the default export if the file.

The command interface is :

```typescript
interface Command {
  callback(message: Message, args: string[]): void;
  description: string;
}
```
