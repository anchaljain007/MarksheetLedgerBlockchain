
import * as Yup from 'yup';
import { useState } from 'react';
import { useFormik, Form, FormikProvider } from 'formik';
import { useNavigate } from 'react-router-dom';
// material
import { Stack, TextField, IconButton, InputAdornment } from '@mui/material';
import { LoadingButton } from '@mui/lab';
// component
import Iconify from '../../../components/Iconify';
import axios from '../../../axios';
// ----------------------------------------------------------------------

export default function AddMarksheetForm() {
   const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');

  async function handlePostQuery(studentID,marksheetTitle,totalSub) {
    var myParams = {
      studentID: studentID,
      marksheetTitle: marksheetTitle,
      totalSub: totalSub
    };
    console.log('here', myParams);
    alert('Marksheet ID is 1 for StudentID 1811032');
    navigate('/dashboard/addMarks');
    // axios
    //   .post('addMarksheet', myParams)
    //   .then(function (response) {
    //     console.log('response', response);
    //     // navigate('/dashboard/app');
    //     // alert('Marksheet ID is', response.data.marksheetID.toString());
    //     console.log('response data :', response.data);
    //       // Perform action based on response
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //     // Perform action based on error
    //   });
  }
  async function addMarksheet() {
    try {
      setError('');
      console.log('Inside addStudent onclick',formik);
      await handlePostQuery(formik.values.studentID, formik.values.marksheetTitle, formik.values.totalSub);
    } catch {
      setError('Failed to choose values!');
    }
  }

  const RegisterSchema = Yup.object().shape({
    name:Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Name required'),
    firstName: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('First name required'),
    lastName: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Last name required'),
    email: Yup.string().email('Email must be a valid email address').required('Email is required'),
    studentID: Yup.string().required('Student ID is required'),
    marksheetTitle: Yup.string().required('Marksheet title is required'),
    totalSub: Yup.string().required('Total subjects is required'),
    password: Yup.string().required('Password is required')
  });

  const formik = useFormik({
    initialValues: {
      name:'',
      firstName: '',
      lastName: '',
      studentID:'',
      marksheetTitle:'',
      totalSub:'',
      email: '',
      password: ''
    },
    validationSchema: RegisterSchema,
    onSubmit: () => {
      navigate('/dashboard', { replace: true });
    }
  });

  const { errors, touched, handleSubmit, isSubmitting, getFieldProps } = formik;

  return (
    <FormikProvider value={formik}>
      <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <Stack spacing={3}>
 
       <TextField
            fullWidth
            autoComplete="username"
            // type="email"
            label="Student ID"
            {...getFieldProps('studentID')}
            error={Boolean(touched.studentID && errors.studentID)}
            helperText={touched.studentID && errors.studentID}
          />
           <TextField
              fullWidth
              label="Marksheet title"
              {...getFieldProps('marksheetTitle')}
              error={Boolean(touched.marksheetTitle && errors.marksheetTitle)}
              helperText={touched.marksheetTitle && errors.marksheetTitle}
            />
           <TextField
              fullWidth
              label="Total Subjects"
              type="number"
              {...getFieldProps('totalSub')}
              error={Boolean(touched.totalSub && errors.totalSub)}
              helperText={touched.totalSub && errors.totalSub}
            />
          <LoadingButton
            fullWidth
            size="large"
            type="submit"
            variant="contained"
            loading={isSubmitting}
            onClick={addMarksheet}
          >
            Add Marksheet
          </LoadingButton>
        </Stack>
      </Form>
    </FormikProvider>
  );
}
