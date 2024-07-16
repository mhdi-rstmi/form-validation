import * as yup from "yup"

const userSchema = yup.object().shape({
    firstname: yup.string().required(),
    lastname: yup.string().required(),
    age: yup.number().positive().integer().required(),
    email: yup.string().email().required(),
    phone: yup.number().positive().integer().required(),
    password: yup.string().required().min(6).max(10),
});

export default userSchema;