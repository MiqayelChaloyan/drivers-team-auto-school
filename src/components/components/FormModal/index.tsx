'use client'

import React, { useState } from 'react';

import { Dialog } from '@/src/context/index';

import { useSelector, useDispatch } from 'react-redux';
import * as Action from '@/src/reducer/store/modalReducer';

import { IoCloseOutline } from 'react-icons/io5';
import { MdAlternateEmail } from 'react-icons/md';
import { FaPhoneAlt } from 'react-icons/fa';

import { Mardoto } from '@/src/constants/font';
import { Buttons, Labels, Texts, Titles } from '@/src/constants';

import sendContactForm from '../../../api/contact';

import './styles.css';


const initValues = { firstName: '', lastName: '', email: '', phone: '' };

const initState = { values: initValues, isLoading: false };

const FormModal = () => {
    const isOpen = useSelector((state: any) => state.modal?.isOpen);
    const dispatch = useDispatch();

    const [state, setState] = useState(initState);
    const { values } = state;

    const [formErrors, setFormErrors] = useState(initValues);

    const handleCloseModal = () => {
        dispatch(Action.closeModal());
        setState(initState);
        setFormErrors(initValues);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target;
        setState((prev) => ({
            ...prev,
            values: {
                ...prev.values,
                [id]: value,
            }
        }));

        setFormErrors((prev) => ({
            ...prev,
            [id]: '',
        }));
    };

    const validate = () => {
        let errors = { firstName: '', lastName: '', email: '', phone: '' };
        let isValid = true;

        if (!values.firstName.trim()) {
            errors.firstName = 'Անունը պարտադիր է';
            isValid = false;
        }
        if (!values.lastName.trim()) {
            errors.lastName = 'Ազգանունը պարտադիր է';
            isValid = false;
        }
        if (!values.email.trim()) {
            errors.email = 'էլփոստի հասցեն պարտադիր է';
            isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(values.email)) {
            errors.email = 'էլփոստի հասցեն սխալ է';
            isValid = false;
        }
        if (!values.phone.trim()) {
            errors.phone = 'Հեռախոսահամարը պարտադիր է';
            isValid = false;
        } else if (!/^\d{8}$/.test(values.phone)) {
            errors.phone = 'Հեռախոսահամարը սխալ է';
            isValid = false;
        }

        setFormErrors(errors);
        return isValid;
    };

    const handleSubmit = async () => {
        if (validate()) {
            setState((prev) => ({
                ...prev,
                isLoading: true,
            }));

            const res = await sendContactForm(values);

            if (res === 200) {
                handleCloseModal();
                dispatch(Action.openSuccessModal())
            } else if (res === 500) {
                dispatch(Action.openErrorModal())
            }

            setState((prev) => ({
                ...prev,
                isLoading: false,
            }));
        }
    };


    return (
        <Dialog
            size="xl"
            open={isOpen}
            handler={() => null}
            className="bg-transparent shadow-none border-none"
            animate={{
                mount: { scale: 1, y: 0 },
                unmount: { scale: 0.9, y: -100 },
            }}
        >
            <div className={`container bg-white mx-auto w-full max-w-[30rem] p-5 rounded-3xl ${Mardoto.className}`}>
                <div className="flex flex-col gap-4 relative">
                    <button
                        type="button"
                        className="text-gray-400 absolute top-[-10px] right-[-10px] bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
                        onClick={handleCloseModal}
                    >
                        <IoCloseOutline size={30} />
                    </button>
                    <div className="text-center mb-10">
                        <h1 className="font-bold text-2xl sm:text-3xl text-[#374151] mb-3">
                            {Titles.register}
                        </h1>
                        <p className='text-[#374151] text-1xl sm:text-1xl'>
                            {Texts.detailsToRegister}
                        </p>
                    </div>
                    <div>
                        <div className="flex -mx-3">
                            <div className="w-1/2 px-3 mb-5">
                                <div className="form-group">
                                    <label htmlFor="firstName" className="text-xs text-gray-900 font-semibold px-1 label">
                                        {Labels.firstName}
                                    </label>
                                    <div className="relative">
                                        <input
                                            id="firstName"
                                            name='firstName'
                                            type="text"
                                            value={values.firstName}
                                            onChange={handleChange}
                                            className={`w-full pl-5 pr-3 py-3 text-gray-800 rounded-lg border-2 ${formErrors.firstName ? 'border-red-500 outline-red-500' : 'border-[#f1f5f9] outline-[#374151]'}`}
                                            style={{ color: '#333' }}
                                        />
                                        {formErrors.firstName && <span className="text-red-500 text-xs">{formErrors.firstName}</span>}
                                    </div>
                                </div>
                            </div>
                            <div className="w-1/2 px-3 mb-5">
                                <div className="form-group">
                                    <label htmlFor="lastName" className="text-xs text-gray-900 font-semibold px-1 label">
                                        {Labels.lastName}
                                    </label>
                                    <div className="relative">
                                        <input
                                            id="lastName"
                                            name='lastName'
                                            type="text"
                                            value={values.lastName}
                                            onChange={handleChange}
                                            className={`w-full pl-5 pr-3 py-3 text-gray-800 rounded-lg border-2 ${formErrors.lastName ? 'border-red-500 outline-red-500' : 'border-[#f1f5f9] outline-[#374151]'}`}
                                            style={{ color: '#333' }} />
                                        {formErrors.lastName && <span className="text-red-500 text-xs">{formErrors.lastName}</span>}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex -mx-3">
                            <div className="w-full px-3 mb-5  form-group">
                                <label htmlFor="email" className="text-xs text-gray-900 font-semibold px-1 label">
                                    {Labels.email}
                                </label>
                                <div className="relative">
                                    <input
                                        id="email"
                                        name='email'
                                        type="email"
                                        value={values.email}
                                        onChange={handleChange}
                                        className={`w-full pl-5 pr-3 py-3 text-gray-800 rounded-lg border-2 ${formErrors.email ? 'border-red-500 outline-red-500' : 'border-[#f1f5f9] outline-[#374151]'}`}
                                        style={{ color: '#333' }} />
                                    <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                                        <MdAlternateEmail size={15} color={`${formErrors.email ? '#ec3237' : '#374151'}`} />
                                    </span>
                                </div>
                                {formErrors.email && <span className="text-red-500 text-xs">{formErrors.email}</span>}
                            </div>
                        </div>
                        <div className="flex -mx-3">
                            <div className="w-full px-3 mb-12 form-group">
                                <label htmlFor="phone" className="text-xs text-gray-900 font-semibold px-1 label">
                                    {Labels.phone}
                                </label>
                                <div className="relative flex">
                                    <div className="w-10 z-10 pl-[5px] text-[#374151] text-center pointer-events-none flex items-center justify-center">+374</div>
                                    <input
                                        id="phone"
                                        name='phone'
                                        type="text"
                                        value={values.phone}
                                        onChange={handleChange}
                                        className={`w-full -ml-10 pl-10 pr-3 py-3 color-black rounded-lg border-2  ${formErrors.phone ? 'border-red-500 outline-red-500' : 'border-[#f1f5f9] outline-[#374151]'}`}
                                        style={{ color: '#333' }}
                                        placeholder="| XX-XX-XX-XX"
                                    />
                                    <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                                        <FaPhoneAlt size={15} color={`${formErrors.phone ? '#ec3237' : '#374151'}`} />
                                    </span>
                                </div>
                                {formErrors.phone && <span className="text-red-500 text-xs">{formErrors.phone}</span>}
                            </div>
                        </div>
                        <button
                            type="button"
                            disabled={state.isLoading}
                            onClick={handleSubmit}
                            className="block w-full max-w-xs mx-auto bg-[#404040] hover:bg-[#ec3237] focus:bg-[#ec3237] text-white rounded-lg px-3 py-3 font-semibold"
                        >
                            {state.isLoading ? Buttons.sending : Buttons.send}
                        </button>
                    </div>
                </div>
            </div>
        </Dialog>
    );
};

export default FormModal;
