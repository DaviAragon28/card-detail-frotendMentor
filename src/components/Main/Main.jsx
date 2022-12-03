import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { AppContext } from '../../context/AppContext'
import iconComplete from '../../assets/images/icon-complete.svg'
import { cardNumberValidator, monthValidator, yearValidator } from '../../utils/validators'

export const Main = () => {
  const { onHandleName, onHandleMonth, onHandleYear, onHandleCardNumber, onHandleCvc, onCardNumberInput, onDateInput, onCvcInput } = useContext(AppContext)

  const onHandleSubmit = (data) => {
    console.log(data);
  }

  const { register, formState: { errors }, handleSubmit, formState } = useForm()


  return (
    <main className='flex justify-center items-center  py-20 px-3 md:flex-1 '>
      <form id='form' className={`flex flex-col  gap-5 max-w-lg w-full mx-auto ${formState.isSubmitSuccessful
        && 'hidden'}`} onSubmit={handleSubmit(onHandleSubmit)}>

        <label className='flex flex-col  text-veryDarkViolet text-sm'>
          Cardholder Name
          <input
            id='name'
            type="text"
            placeholder='e.g. Jane Appleseed'
            className={`px-2 py-2 mt-2 border rounded-md  outline-purple-600 ${errors.name && 'border-inputError'}`}
            {...register('name', {
              onChange: onHandleName,
              required: true,
              pattern: /^[a-zA-Z ]+$/,
              minLength: 10,
              maxLength: 20
            })}
            minLength='10'
            maxLength='20'
          />
          {errors.name?.type === 'required' && <p className='text-inputError text-[11px]'>Can't be blank.</p>}
          {errors.name?.type === 'pattern' && <p className='text-inputError text-[11px]'>Only letters.</p>}
        </label>

        <label className='flex flex-col  text-veryDarkViolet text-sm'>
          Card Number
          <input
            type="text"
            placeholder='e.g. 1234 5678 9123 0000'
            className={`px-2 py-2 mt-2 border rounded-md outline-purple-600 ${errors.cardNumber && 'border-inputError'}`}
            onInput={onCardNumberInput}
            {...register('cardNumber', {
              onChange: onHandleCardNumber,
              required: true,
              validate: cardNumberValidator,
              pattern: /^[0-9]*(\.?)[0-9]+$/
            })}



          />
          {errors.cardNumber?.type === 'required' && <p className='text-inputError text-[11px]'>Can't be blank.</p>}
          {errors.cardNumber?.type === 'pattern' && <p className='text-inputError text-[11px]'>Wrong format, numbers only.</p>}
          {errors.cardNumber?.type === 'validate' && <p className='text-inputError text-[11px]'>Min. length 16.</p>}
        </label>

        <div className='flex gap-3'>
          <label className='w-1/2 flex flex-col gap-2 text-veryDarkViolet text-sm'>
            Exp. Date {'(MM/YY)'}
            <div className='flex gap-2'>
              <div>

                <input
                  type="number"
                  placeholder='MM'
                  className={`w-16 border px-2 py-2 rounded-md outline-purple-600 ${errors.month && 'border-inputError'}`}
                  onInput={onDateInput}
                  {...register('month', {
                    onChange: onHandleMonth,
                    required: true,
                    validate: monthValidator
                  })}
                />
                {errors.month?.type === 'required' && <p className='text-inputError text-[11px]'>Can't be blank.</p>}
                {errors.month?.type === 'validate' && <p className='text-inputError text-[11px]'>Wrong month.</p>}
              </div>
              <div>

                <input
                  type="number"
                  placeholder='YY'
                  className={`w-16 border px-2 py-2 rounded-md outline-purple-600 ${errors.year && 'border-inputError'}`}
                  
                  onInput={onDateInput}
                  {...register('year', {
                    onChange: onHandleYear,
                    required: true,
                    validate: yearValidator

                  })}
                />
                {errors.year?.type === 'required' && <p className='text-inputError text-[11px]'>Can't be blank.</p>}
                {errors.year?.type === 'validate' && <p className='text-inputError text-[11px]'>Wrong year.</p>}
              </div>

            </div>
          </label>

          <label className='flex flex-col flex-1 text-veryDarkViolet text-sm'>
            CVC
            <input
              className={`w-full border px-2 py-2 mt-2 rounded-md outline-purple-600 ${errors.cvc && 'border-inputError'}`}
              type="number"
              placeholder='e.g. 123'
              min="1"
              max="999"
              onInput={onCvcInput}
              {...register('cvc', {
                onChange: onHandleCvc,
                required: true
              })}

            />
            {errors.cvc?.type === 'required' && <p className='text-inputError text-[11px]'>Can't be blank.</p>}
          </label>
        </div>

        <button className='bg-veryDarkViolet text-white px-1 py-2 rounded-md'>Confirm</button>
      </form>

      <section className={` ${formState.isSubmitSuccessful ? 'flex flex-col items-center gap-5' : 'hidden'} `}>
        <img src={iconComplete} alt="" />
        <h2 className='text-xl md:text-4xl'>THANK YOU!</h2>
        <p className='text-darkGrayishViolet md:text-xl'>We've added your card details</p>
        <button  className='bg-veryDarkViolet text-white px-1 py-2 rounded-md w-full'>Continue</button>
      </section>
    </main>
  )
}
