const express = require('express')
const path = require('path')

const { ApolloServer } = require('apollo-server-express')

const { loadFilesSync } = require('@graphql-tools/load-files')
const { makeExecutableSchema } = require('@graphql-tools/schema')

// Load type schemas 
const typesArray = loadFilesSync(path.join(__dirname, '**/*.graphql'))

// Load resolver functions 
const resolversArray = loadFilesSync(path.join(__dirname, '**/*.resolvers.js'))

async function startApolloServer() {
    const app = express()

    const schema = makeExecutableSchema({
        typeDefs: typesArray,
        resolvers: resolversArray
    });

    const server = new ApolloServer({
        schema,
    })

    await server.start()
    server.applyMiddleware({ app, path: '/graphql' })

    app.listen(3000, () => {
        console.log(`Running Graphql Server`)
    })
}

startApolloServer()
