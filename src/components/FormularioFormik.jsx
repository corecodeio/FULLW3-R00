import React from 'react'
import { Formik } from "formik";

const FormularioFormik = () => {
  return (
    <Formik
      initialValues={{
        nombre: '',
        mail: '',
        password: '',
        passwordTwo: ''
      }}
      validate={(values) => {
        let errors = {};
        if (!values.nombre) {
          errors.nombre = 'debe escribir nombre.'
        } else if (values.nombre.length < 5) {
          errors.nombre = 'nombre debe tener almenos 5 caracteres.';
        } else if (values.nombre.length > 20){
          errors.nombre = 'nombre solo puede tener hasta 20 caracteres.';
        }

        return errors;
      }}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        console.log(values);
        resetForm();
        setTimeout(()=>{
          setSubmitting(false);
        },3000);
      }}>
      {({
        values,
        handleChange,
        handleBlur,
        handleSubmit,
        touched,
        isSubmitting,
        errors,
      }) => (
        <form onSubmit={handleSubmit}>
          <label>Nombre:</label>
          <input type='text' name='nombre' value={values.nombre} onChange={handleChange} onBlur={handleBlur}/>
          {touched.nombre && errors.nombre&&<p>{errors.nombre}</p>}
          <button type="submit" disabled={isSubmitting}>ENVIAR</button>
        </form>
      )}
    </Formik>
  )
}

export default FormularioFormik;