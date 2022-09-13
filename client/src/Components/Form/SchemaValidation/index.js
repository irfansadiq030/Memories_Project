import * as Yup from 'yup'

export const createPostSchema = Yup.object({
    creator: Yup.string().min(3).max(20).required('Please type creator name'),
    title: Yup.string().min(8).max(50).required('Please enter post title'),
    message: Yup.string().min(10).required('Please enter post description'),
    tags: Yup.string().min(1).required('Please enter Tags')
})