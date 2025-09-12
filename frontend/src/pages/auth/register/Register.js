// Register.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AnnouncementBar from '../../../components/AnnouncementBar';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import ScrollUpButton from '../../../components/ScrollUpButton';
import DrawerMenu from '../../../components/DrawerMenu';
import DrawerCart from '../../../components/DrawerCart';
import { Link } from 'react-router-dom';
import { register as registerThunk } from '../../../store/slices/authSlice';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { signupValidation } from '../../../validation/authValidation';

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(signupValidation),
    mode: 'onTouched',
  });

  const onSubmit = (data) => {
    dispatch(registerThunk({ registerData: data, navigate }));
  };


  return (
    <>
      <div className="body-wrapper">
        <AnnouncementBar />
        <Header />

        <div className="breadcrumb">
          <div className="container">
            <ul className="list-unstyled d-flex align-items-center m-0">
              <li><Link to="/" style={{ textDecoration: "none" }}>Home</Link></li>
              <li><svg className="icon icon-breadcrumb" width="64" height="64" viewBox="0 0 64 64"><g opacity="0.4"><path d="M25.9375 8.5625L23.0625 11.4375L43.625 32L23.0625 52.5625L25.9375 55.4375L47.9375 33.4375L49.3125 32L47.9375 30.5625L25.9375 8.5625Z" fill="#000" /></g></svg></li>
              <li>Register</li>
            </ul>
          </div>
        </div>

        <main id="MainContent" className="content-for-layout">
          <div className="login-page mt-100">
            <div className="container">
              <form onSubmit={handleSubmit(onSubmit)} className="login-form common-form mx-auto">
                <div className="section-header mb-3">
                  <h2 className="section-heading text-center">Register</h2>
                </div>
                <div className="row">
                  {/* First Name */}
                  <div className="col-12">
                    <fieldset>
                      <label className="label">First Name</label>
                      <input
                        type="text"
                        {...register('firstName')}
                      />
                      {errors.firstName && <p className="text-danger small">{errors.firstName.message}</p>}
                    </fieldset>
                  </div>

                  {/* Last Name */}
                  <div className="col-12">
                    <fieldset>
                      <label className="label">Last Name</label>
                      <input
                        type="text"
                        {...register('lastName')}
                      />
                      {errors.lastName && <p className="text-danger small">{errors.lastName.message}</p>}
                    </fieldset>
                  </div>

                  {/* Email */}
                  <div className="col-12">
                    <fieldset>
                      <label className="label">Email</label>
                      <input
                        type="email"
                        {...register('email')}
                      />
                      {errors.email && <p className="text-danger small">{errors.email.message}</p>}
                    </fieldset>
                  </div>

                  {/* Password */}
                  <div className="col-12">
                    <fieldset>
                      <label className="label">Password</label>
                      <input
                        type="password"
                        {...register('password')}
                      />
                      {errors.password && <p className="text-danger small">{errors.password.message}</p>}
                    </fieldset>
                  </div>

                  <div className="col-12 mt-3">
                    <button type="submit" className="btn-primary d-block mt-3 btn-signin">CREATE</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </main>

        <Footer />
        <ScrollUpButton />
        <DrawerMenu />
        <DrawerCart />
      </div>
    </>
  );
};

export default Register;
