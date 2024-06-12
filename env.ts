import { z } from 'zod';

const envSchema = z.object({
    EXPO_PUBLIC_OPENAI_API_KEY: z.string().min(1),
    EXPO_PUBLIC_OPENAI_ORGANIZATION: z.string().min(1),
});

const env = envSchema.safeParse(process.env);

if (!env.success) {
    const errorMessage = `There is an error with the server environment variables: ${JSON.stringify(
        env.error.issues,
    )}`;

    throw new Error(errorMessage);
}

declare global {
    namespace NodeJS {
        interface ProcessEnv extends z.infer<typeof envSchema> {}
    }
}
