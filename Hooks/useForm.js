import { useState } from 'react';

export const useForm = (initialState = {}) => {

    const [inputValues, setInputValues] = useState(initialState)

    const handleInputChange = ({ target }) => {
        setInputValues({...inputValues, [target.name]: target.value})
    }

    const updateForm = (newValues) => {
        setInputValues(newValues)
    }

    return {
        inputValues, handleInputChange, updateForm
    }
}