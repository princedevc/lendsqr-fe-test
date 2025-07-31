import React, { useEffect, useState } from 'react'
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';

const Input : React.FC = () => {
  let navigate = useNavigate();

  // eslint-disable-next-line
  const [isVisibile, setIsVisibile] = useState({
    id: "see"
  })

  let [isFree, setIsFree] = useState(false)

    const unhide = () => {
        setIsFree(!isFree);
    };
   

  useEffect(() => {
    console.log(isFree)
  }, [isVisibile, isFree]); 


  const goto = () => {
    navigate("/dashboard")
  }

  const SignupSchema = Yup.object().shape({
    
      email: Yup.string().email('Invalid email').required('Required'),
   
    
      password: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!, must be less than 15 digit')
      .matches(
          /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*()]).{8,20}\S$/, 
          'Enter a valid password, One uppercase, one lowercase, one special character and no spaces'
      )
      .required(
          'Password is Required'
      ),
  });

  return (
    <div className="fom">
      <Formik
      initialValues={{
        email: "",
        password: ""


      }}
      validationSchema={SignupSchema}
      onSubmit={(values, actions) => {
        setTimeout(() => {
        goto();
        actions.setSubmitting(false);
        actions.resetForm();
      }, 400);
    }}
      >
        { ({
          handleSubmit, 
          values, 
          handleChange, 
          errors, 
          touched, 
          isSubmitting, 
          handleBlur,
        }) => (
          <form onSubmit={handleSubmit}>  
          <div>
          <input type="email" name="email" placeholder="Email" 
           value={values.email} onChange={handleChange} onBlur={handleBlur}
           autoComplete="off"/>
           {errors.email && touched.email ? (
             <div className='error'>{errors.email}</div>
           ) : null}
          <input type={isFree ? "text" : "password"}  name="password" placeholder="Password" 
          value={values.password} onChange={handleChange} onBlur={handleBlur} className='input1'
          />
          <span
          onClick={unhide}
          className='eyes'
          >{isFree===false ? <p className='eys'>SHOW</p> : <p className='eys'>HIDE</p>}
          </span>
          {errors.password && touched.password ? (
             <div className='error'>{errors.password}</div>
           ) : null}
          </div>
          <span>
            <p className='forgot'>forgot password?</p>
          </span>
          <button className='butt' type="submit" disabled={isSubmitting}>
            Log in
          </button>
      </form>
        )}
        </Formik>
    </div>
         )
}

export default Input