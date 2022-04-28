import * as Yup from 'yup';

export default Yup.object().shape({
    name: Yup.string()
        .required('This field is required'),
    email: Yup.string()
        .email('Please type correct email')
        .required('This field is required'),
    text: Yup.string()
        .required('This field is required')
});