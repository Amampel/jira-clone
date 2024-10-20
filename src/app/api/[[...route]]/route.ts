import { Hono } from "hono"
import { handle } from "hono/vercel"

import auth from "@/src/features/auth/server/route"
import workspaces from "../../../features/workspaces/server/route"
import users from "@/src/features/auth/server/route"

const app = new Hono().basePath("/api");

const routes = app
    .route("/auth", auth)
    .route("/users", users)
    .route("/workspaces", workspaces)

export const GET = handle(app)
export const POST = handle(app)
export const PATCH = handle(app)


export type AppType = typeof routes