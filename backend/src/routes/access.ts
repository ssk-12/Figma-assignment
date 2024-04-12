import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { Hono } from "hono";
import { sign, verify } from "hono/jwt";

export const accessRouter = new Hono<{
	Bindings: {
		DATABASE_URL: string;
		JWT_SECRET: string;
	}, Variables: {
		userId: string;
	}
}>();

accessRouter.use('/*', async (c, next) => {
    try {
        
        const prisma = new PrismaClient({
            datasourceUrl: c.env?.DATABASE_URL,
        }).$extends(withAccelerate());

        const jwt = c.req.header('Authorization');
        if (!jwt) {
            c.status(401);
            return c.json({ error: "Unauthorized: No token provided." });
        }
        
        const token = jwt.split(' ')[1];
        const payload = await verify(token, c.env.JWT_SECRET);
        if (!payload) {
            c.status(401);
            return c.json({ error: "Unauthorized: Invalid token." });
        }

        const user = await prisma.user.findUnique({
            where: {
                id: payload.id
            }
        });

        if (!user) {
            c.status(404);
            return c.json({ error: "User not found." });
        }

        c.set('userId', user.id);
        await next();
    } catch (error) {
        
        console.error('Authentication error:', error);

        
        c.status(500);
        return c.json({ error: "An internal server error occurred." });
    }
});

accessRouter.get('/user', async (c) => {
    const userId = c.get("userId");
    const prisma = new PrismaClient({
        datasourceUrl: c.env?.DATABASE_URL,
    }).$extends(withAccelerate());
  
    try {
      const user = await prisma.user.findUnique({
        where: { id: userId }
      });
  
      if (user) {
        return c.json(user);
      } else {
        return c.json({ message: 'User not found' }, 404);
      }
    } catch (error) {
      return c.json({ message: 'Failed to fetch user'}, 500);
    }
  });

accessRouter.post('/update-profile', async (c) => {

	const prisma = new PrismaClient({
		datasourceUrl: c.env?.DATABASE_URL,
	}).$extends(withAccelerate());
    const { fullName, secondaryEmail, phoneNumber } = await c.req.json()
    const userId = c.get('userId');

    const updatedUser = await prisma.user.update({
        where: { id: userId },
        data: { fullName, secondaryEmail, phoneNumber },
    })

    return c.json({ message: 'Profile updated successfully', user: updatedUser })
})


accessRouter.post('/update-experience', async (c) => {

    const prisma = new PrismaClient({
        datasourceUrl: c.env?.DATABASE_URL,
    }).$extends(withAccelerate());
    const { designation, industry, functionalAreas } = await c.req.json();
    const userId = c.get('userId');

    const updatedUser = await prisma.user.update({
        where: { id: userId },
        data: { designation, industry, functionalAreas },
    });

    return c.json({ message: 'Experience updated successfully', user: updatedUser });
});

accessRouter.post('/update-dob', async (c) => {

    const prisma = new PrismaClient({
        datasourceUrl: c.env?.DATABASE_URL,
    }).$extends(withAccelerate());
    const { dateOfBirth } = await c.req.json();
    const userId = c.get('userId');

    const updatedUser = await prisma.user.update({
        where: { id: userId },
        data: { dateOfBirth },
    });

    return c.json({ message: 'Date of birth updated successfully', user: updatedUser });
});