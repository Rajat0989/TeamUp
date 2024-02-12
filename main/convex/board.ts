import {mutation} from "./_generated/server"
import {v} from "convex/values"

const Images = [
   "/placeholder/Sample 1.svg",
   "/placeholder/Sample 2.svg",
   "/placeholder/Sample 3.svg",
   "/placeholder/Sample 4.svg",
   "/placeholder/Sample 5.svg",
   "/placeholder/Sample 6.svg",
   "/placeholder/Sample 7.svg",
   "/placeholder/Sample 8.svg",
   "/placeholder/Sample 9.svg",
   "/placeholder/Sample 10.svg",
   "/placeholder/Sample 11.svg",
   "/placeholder/Sample 12.svg",
   "/placeholder/Sample 13.svg",
   "/placeholder/Sample 14.svg",
   "/placeholder/Sample 15.svg",
   "/placeholder/Sample 16.svg",
   "/placeholder/Sample 17.svg",
   "/placeholder/Sample 18.svg",
   "/placeholder/Sample 19.svg",
   "/placeholder/Sample 20.svg",
   "/placeholder/Sample 21.svg",
   "/placeholder/Sample 22.svg",
   "/placeholder/Sample 23.svg",
   "/placeholder/Sample 24.svg",
   "/placeholder/Sample 25.svg",
   "/placeholder/Sample 26.svg",
   "/placeholder/Sample 27.svg",
   "/placeholder/Sample 28.svg",
   "/placeholder/Sample 29.svg",
   "/placeholder/Sample 30.svg",
   "/placeholder/Sample 31.svg",
   "/placeholder/Sample 32.svg",
   "/placeholder/Sample 33.svg",
   "/placeholder/Sample 34.svg",
   "/placeholder/Sample 35.svg",
   "/placeholder/Sample 36.svg",
   "/placeholder/Sample 37.svg",
   "/placeholder/Sample 38.svg",
   "/placeholder/Sample 39.svg",
   "/placeholder/Sample 40.svg",
   "/placeholder/Sample 41.svg",
   "/placeholder/Sample 42.svg",
   "/placeholder/Sample 43.svg",
   "/placeholder/Sample 44.svg",
   "/placeholder/Sample 45.svg",
]

export const create = mutation({
    args:{
        orgId: v.string(),
        title: v.string(),
    },
    handler: async (ctx, args) => {
        const identity = await ctx.auth.getUserIdentity()

        if(!identity){
            throw new Error("Unauthorized")
        }

        const randomImage = Images[Math.floor(Math.random()*Images.length)]

        const board = await ctx.db.insert("boards",{
            title: args.title,
            orgId: args.orgId,
            authorId: identity.subject,
            authorName: identity.name!,
            imageUrl: randomImage,
        })

        return board
    }
})