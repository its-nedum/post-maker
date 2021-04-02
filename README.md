## Post Maker
Post maker is a simple Next.js blog post creator and reader with [Prisma](https://www.prisma.io/) used to read and write posts to [Sqlite](https://www.sqlite.org/index.html) database.

## Technologies Used
Next.js, Prisma, Sqlite database, Prisma client, Jsonwebtoken, bcrypt, React Bootstrap.

## Getting Started
Clone respository:
```git
    git clone https://github.com/its-nedum/post-maker.git
```

Install dependencies:
```bash
    yarn install
    # or
    npm install
```

Start Next.js server
```bash
    npm run dev
    # or
    yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the post maker website.

## Features
- Sign In
- Sign Up
- View Posts
- Create Post
- Read Post
- Update Post
- Delete Post

## API Routes
<table>
	<thead>
		<th>HTTP VERB</th>
		<th>ENDPOINT</th>
		<th>FUNCTIONALITY</th>
	</thead>
    <tbody>
        <tr>
            <td>POST</td>
            <td>/api/auth/signup</td>
            <td>Create a user account</td>
        </tr>
        <tr>
            <td>POST</td>
            <td>/api/auth/signin</td>
            <td>Login a user</td>
        </tr>
        <tr>
            <td>GET</td>
            <td>/api/posts</td>
            <td>Get all blog posts</td>
        </tr>
        <tr>
            <td>POST</td>
            <td>/api/posts/post</td>
            <td>Create a blog post</td>
        </tr>
        <tr>
            <td>GET</td>
            <td>/api/posts/:id</td>
            <td>Get a single blog post</td>
        </tr>
        <tr>
            <td>PUT</td>
            <td>/api/posts/edit/update/:id</td>
            <td>Update your blog post</td>
        </tr>
        <tr>
            <td>DELETE</td>
            <td>/api/posts/delete/:id</td>
            <td>Delete your blog post</td>
        </tr>
    </tbody>
</table>

## Want to learn more?

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/)