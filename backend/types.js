const zod=require('zod')
const createPortfolio=zod.object({
    name:zod.string(),
    description:zod.string(),
    linkedIn:zod.string().url(),
    Twitter:zod.string().url()
})


module.exports={
    createPortfolio
}