import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { Hono } from "hono";
import { sign } from "hono/jwt";
export const userRouter = new Hono();
userRouter.post('/signin', async (c) => {
    
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());
    const body = await c.req.json();
    // const { success } = signinInput.safeParse(body);
    // if (!success) {
    //     return c.json({ message: "Incorrect inputs" });
    // }
    let user = await prisma.user.findFirst({
        where: {
            email: body.email,
        }
    });
    // console.log(user);
    // If user doesn't exist, create a new user
    if (!user) {
        user = await prisma.user.create({
            data: {
                email: body.email,
                password: body.password,
            },
        });
    }
    else {
        // If user exists but password does not match
        if (user.password !== body.password) {
            c.status(403);
            return c.json({ error: "Incorrect password" });
        }
    }
    const jwt = await sign({ id: user.id }, c.env.JWT_SECRET);
    return c.json({
        jwt,
        userid:user.id,
        username: user.email
    });
});
