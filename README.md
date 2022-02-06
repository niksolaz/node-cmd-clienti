# node-cmd-clienti
insert client from terminal to file json

# install modules
```
npm i

```
# and after start app.js with command:

## GET CLIENT

```
node app.js get --nome=[insert name]

```

## ADD CLIENT

```
node app.js add --nome=[insert name] --email=[insert email] --telefono=[insert phone]

```

## DELETE CLIENT

```
node app.js del --nome=[insert name]

```

## ALL CLIENT

```
node app.js all --l

```

# For Testing app:  node app.js COMMAND --[ARG KEY]=[ARG VALUE]

# List COMMAND:
         1 - get         get client
         2 - add         add client
         3 - del         delete client
         3 - all         all clients

# List [ARG KEY]:
         --nome          --nome=[insert nome]
         --email         --email=[insert email]
         --telefono      --telefono=[insert phone]
         --l             only for command all
