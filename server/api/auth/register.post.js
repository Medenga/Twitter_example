import { sendError } from "h3"
import { createUser } from "../../db/users.js"
import { userTransformer } from "~~/server/transformers/user.js"

export default defineEventHandler(async (event) => {
    const body = await useBody(event)

    return {
        body: body
    }
})