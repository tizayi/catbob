# catbob

[![catbob Code CI](https://github.com/tizayi/catbob/actions/workflows/code.yml/badge.svg)](https://github.com/tizayi/catbob/actions/workflows/code.yml)
[![catbob Code CI](https://github.com/tizayi/catbob/actions/workflows/deploy-ec2.yml/badge.svg)](https://github.com/tizayi/catbob/actions/workflows/deploy-ec2.yml)

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
You can add new commands by creating a .ts file in the commands directory. You can then create a command object which contains a description and a callback.
The name of the file will be the name of the command and the callback will be run when the command is invoked. The command interface is defined as such.
The command object must be the default export if the file.

```typescript
interface Command {
  callback(message: Message, args: string[]): void;
  description: string;
}
```