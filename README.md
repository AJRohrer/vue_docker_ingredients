# recipevue

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### Bootstrap Database as container for development
docker run --name andrewsql -p 3306:3306 -d -e MYSQL_ROOT_PASSWORD=****** <image name>
SchemaName: Grocery_Schema
