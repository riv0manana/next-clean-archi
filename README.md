# Next.js Clean Architecture Setup

A template for those who want to start with Clean architecture and Atomic Design setup with Next.js. 

### PS: Clean Architecture isn't about folder structure, learn and adopt only if you're familiar with the concept

## Folder Structure

The project is organized as follows:

    project-folder/
        ├── .github/ 
            └── workflows/ # GitHub Actions workflows for CI/CD 
        ├── app/ # Next.js specifics
            ├── api/ # API routes (exposed only for external needs (Webhook, Auth, etc))
            ├── components/ # react components folders {PS: Check CDD & Atomic Design}
                ├── ui/ # Shadcn components
                ├── atoms/
                ├── molecules/
                ├── organism/
                ├── templates/
                ├── connected/ # components wrapper that inject services action call.
            ├── hooks/ # hooks folders
            ├── actions/ # server actions
            ├── (pages)/ # Pages routes
        ├── core/ # Core application
            ├── application/
                ├── controllers/ # entry point that bridges front/external call to core business application
                ├── interfaces/
                    ├── repository/ # repository definitions
                    ├── service/ # service definitions
                ├── use-cases/ # domain use cases (PS: check BDD & DDD)
            ├── domain/ # entities model
            ├── infra/ # implementation details
                ├── repositories # repository implementation
                ├── services # service implementation
            ├── di # Dependencies injections handler
                ├── modules/ 
                ├── container.ts # dependencie container
                ├── di.type.ts # type definition for module

## Scripts
Run test:

    npm run test:run

Run test coverage

    npm run test:coverage

Run the app developement

    npm run dev

Run build

    npm run build

## About me

I'm Next.js developper enthousiast, I like to share litle things i know about React and Next.js.

Keep in touch with me: [Mail](mailto:contact@riv0manana.dev), [LinkedIn](https://www.linkedin.com/in/riv0manana/), [Website](https://riv0manana.dev)