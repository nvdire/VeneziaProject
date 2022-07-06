# Venezia Project

## Contributors

Mohammad Navid Farokhi Nezhad  
10837777  
mohammadnavid.farokhi@mail.polimi.it

Sajjad Goudarzi  
10808211  
sajjad.goudarzi@mail.polimi.it

Mehdi Samimi  
10838153  
mehdi.samimi@mail.polimi.it

## Contributions

### Mohammad Navid Farokhi Nezhad:

Database schema, db function and data initialization and api routes

### Sajjad Goudarzi:

Itinerary, Points of Interest, About, Contact, Town and Index pages

### Mehdi Samimi:

Default layout, Services and Events pages and their components

# Project Explanation

Built with [Nuxt](https://nuxtjs.org) framework and using [Prisma](https://prisma.io) as ORM.

Project is hosted on Heroku at https://venezia-project.herokuapp.com, and Database is hosted at [Supabase](https://supabase.com).

For connecting to database, `DATABASE_URL` environment variable must be set to postgresql's connection string format  
`postgresql://{username}:{password}@{ip}:{port}/{databse}[?schema=public]`
