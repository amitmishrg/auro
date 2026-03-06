import { z } from 'zod';
import { createTRPCRouter, baseProcedure } from '../init';

export const appRouter = createTRPCRouter({
  health: baseProcedure.query(async () => {
    return { status: 'ok' };
  }),
});

// export type definition of API
export type AppRouter = typeof appRouter;
