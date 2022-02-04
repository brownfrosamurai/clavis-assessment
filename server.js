const express = require('express')
const path = require('path')

require('dotenv').config()

const { ApolloServer } = require('apollo-server-express')
const { ApolloServerPluginLandingPageLocalDefault } = require('apollo-server-core');

const { loadFilesSync } = require('@graphql-tools/load-files')
const { makeExecutableSchema } = require('@graphql-tools/schema')

// Load type schemas 
const typesArray = loadFilesSync(path.join(__dirname, '**/*.graphql'))

// Load resolver functions 
const resolversArray = loadFilesSync(path.join(__dirname, '**/*.resolvers.js'))

const PORT = process.env.PORT || 3000

async function startApolloServer() {
    const app = express()

    const schema = makeExecutableSchema({
        typeDefs: typesArray,
        resolvers: resolversArray
    });

    const server = new ApolloServer({
        schema,
        plugins: [
            ApolloServerPluginLandingPageLocalDefault({
                footer: false
            })
        ]
    })

    await server.start()
    server.applyMiddleware({ app, path: '/graphql' })

    app.listen(PORT, () => {
        console.log(`Running Graphql Server`)
    })
}

startApolloServer()
