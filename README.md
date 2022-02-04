# Clavis assesment

> Graphql API implentation

## Install Dependencies

```
npm install
```

## Run Application

Run the following command in your terminal to start the application on port 3000
```
npm start
```

## Get access to Apollo playground 
```
https://clavis-assessment.herokuapp.com/graphql
```
## Sample query
```
{
 products {
   color
   price
   description
   reviews{
     rating
     comment
   }
 }
 orders {
   date
   subtotal
 }
}
```

- Version: 1.0.0
- Licence: ISC
- Author: Oluwafemi Meduna
