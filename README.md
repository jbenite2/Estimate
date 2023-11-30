This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


# Bugs that came up along the way 
- Weird cannot read properties of undefined 'from' in a line where the word 'from' was nowhere to be found. s3.getObject was being weird. Data was not returning right.
    - Fix: Go to the main and run  

    ```bash
    npm i aws-sdk
    ```
- Make sure your env variables start with NEXT_PUBLIC_!


Testing this commit
