'use client'

import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as Action from '@/src/reducer/store/modalReducer';

import { IoCloseOutline } from 'react-icons/io5';
import { FaPhone } from 'react-icons/fa';
import { MdAlternateEmail } from 'react-icons/md';
import { FaUserEdit } from "react-icons/fa";

import sendContactForm from '../../../api/contact'

import './styles.css'

const initValues = { firstName: '', lastName: '', email: '', phone: '' };

const initState = { values: initValues, isLoading: false };

const FormModal = () => {
    const isOpen = useSelector((state: any) => state.modal?.isOpen);
    const dispatch = useDispatch();

    const [state, setState] = useState(initState);
    const { values } = state;

    const [formErrors, setFormErrors] = useState(
        { firstName: '', lastName: '', email: '', phone: '' }
    );

    const handleCloseModal = () => {
        dispatch(Action.closeModal());
        setState(() => ({
            isLoading: false,
            values: initValues
        }));
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target;
        setState((prev) => ({
            ...prev,
            values: {
                ...prev.values,
                [id]: value,
            }
        }));

        setFormErrors({
            ...formErrors,
            [id]: '',
        });
    };

    const validate = () => {
        let errors = initValues;
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
        }
    };

    return isOpen && (
        <div className="fixed inset-0 p-4 flex justify-center items-center w-full h-full z-[1000] before:fixed before:inset-0 before:w-full before:h-full before:bg-[rgba(0,0,0,0.5)] overflow-auto">
            <div className="w-full max-w-[600px] p-8 relative bg-[#F4F4F7] text-gray-500 rounded-3xl shadow-xl">
                <button
                    type="button"
                    className="text-gray-400 absolute top-2.5 right-2.5 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                    onClick={handleCloseModal}
                >
                    <IoCloseOutline size={30} />
                </button>
                <div className="text-center mb-10">
                    <h1 className="font-bold text-3xl text-[#374151] mb-3">Գրանցվել</h1>
                    <p className='text-[#374151]'>Գրանցվելու համար մուտքագրեք ձեր տվյալները</p>
                </div>
                <div>
                    <div className="flex -mx-3">
                        <div className="w-1/2 px-3 mb-5">
                            <div className="form-group">
                                <label htmlFor="firstName" className="text-xs text-gray-900 font-semibold px-1 label">
                                    Անուն
                                </label>
                                <div className="relative">
                                    <input
                                        id="firstName"
                                        name='firstName'
                                        type="text"
                                        value={values.firstName}
                                        onChange={handleChange}
                                        className={`w-full pl-5 pr-3 py-3 text-gray-800 rounded-lg border-2 ${formErrors.firstName ? 'border-red-500' : 'border-[#f1f5f9]'} outline-[#374151]`}
                                        style={{ color: '#333' }}
                                    />
                                    {formErrors.firstName && <span className="text-red-500 text-xs">{formErrors.firstName}</span>}
                                </div>
                            </div>

                        </div>
                        <div className="w-1/2 px-3 mb-5">
                            <div  className="form-group">
                                <label htmlFor="lastName" className="text-xs text-gray-900 font-semibold px-1 label">Ազգանուն</label>
                                <div className="relative">
                                    <input
                                        id="lastName"
                                        name='lastName'
                                        type="text"
                                        value={values.lastName}
                                        onChange={handleChange}
                                        className={`w-full pl-5 pr-3 py-3 text-gray-800 rounded-lg border-2 ${formErrors.lastName ? 'border-red-500' : 'border-[#f1f5f9]'} outline-[#374151]`}
                                        style={{ color: '#333' }} />
                                    {formErrors.lastName && <span className="text-red-500 text-xs">{formErrors.lastName}</span>}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex -mx-3">
                        <div className="w-full px-3 mb-5  form-group">
                            <label htmlFor="email" className="text-xs text-gray-900 font-semibold px-1 label">էլփոստի հասցեն</label>
                            <div className="relative">
                                <input
                                    id="email"
                                    name='email'
                                    type="email"
                                    value={values.email}
                                    onChange={handleChange}
                                    className={`w-full pl-5 pr-3 py-3 text-gray-800 rounded-lg border-2 ${formErrors.email ? 'border-red-500' : 'border-[#f1f5f9]'} outline-[#374151]`}
                                    style={{ color: '#333' }} />
                                <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                                    <MdAlternateEmail size={15} color='#374151' />
                                </span>
                            </div>
                            {formErrors.email && <span className="text-red-500 text-xs">{formErrors.email}</span>}
                        </div>
                    </div>
                    <div className="flex -mx-3">
                        <div className="w-full px-3 mb-12 form-group">
                            <label htmlFor="phone" className="text-xs text-gray-900 font-semibold px-1 label">Հեռախոսահամար</label>
                            <div className="relative flex">
                                <div className="w-10 z-10 pl-[5px] text-[#374151] text-center pointer-events-none flex items-center justify-center">+374</div>
                                <input
                                    id="phone"
                                    name='phone'
                                    type="text"
                                    value={values.phone}
                                    onChange={handleChange}
                                    className={`w-full -ml-10 pl-10 pr-3 py-3 color-black rounded-lg border-2 ${formErrors.phone ? 'border-red-500' : 'border-[#f1f5f9]'} outline-[#374151]`}
                                    style={{ color: '#333' }}
                                    placeholder="| XX-XX-XX-XX"
                                />
                                <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                                    <FaPhone size={15} color='#374151' />
                                </span>
                            </div>
                            {formErrors.phone && <span className="text-red-500 text-xs">{formErrors.phone}</span>}
                        </div>
                    </div>
                    <div className="flex -mx-3">
                        <div className="w-full px-3 mb-5">
                            <button
                                onClick={handleSubmit}
                                disabled={!values.firstName || !values.lastName || !values.email || !values.phone}
                                className={`cursor-pointer block w-full max-w-xs mx-auto  ${!values.firstName || !values.lastName || !values.email || !values.phone ? 'bg-[#ffab91]' : 'bg-[#ec3237] hover:bg-[#991b1b]'} text-white rounded-lg px-3 py-3 font-semibold`}
                            >
                                {
                                    state.isLoading ? 'Ուղարկվում է..' : 'Ուղարկել'
                                }
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FormModal;
