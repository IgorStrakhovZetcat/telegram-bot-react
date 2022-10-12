import { useEffect, useState } from 'react';
import { useTelegram } from '../../hooks/useTelegram';
import './Form.css'


const Form = () => {
    const [country, setCountry] = useState('')
    const [street, setStreet] = useState('')
    const [subject, setSubject] = useState('')
    const {tg} = useTelegram()

    useEffect(() => {
        tg.MainButton.setParams({
            text: 'Send data'
        })
    })

    useEffect(() => {
        if(!street || !country){
            tg.MainButton.hide();
        } else {
            tg.MainButton.show();
        }
    }, [country, street, tg.MainButton])

    const onChangeCountry = (event) => {
        setCountry(event.target.value)
    }
    const onChangeStreet = (event) => {
        setStreet(event.target.value)
    }
    const onChangeSubject = (event) => {
        setSubject(event.target.value)
    }



    return (
        <div className='form'>
            <h3>Fill out fields</h3>
            <input className='input' type={'text'} placeholder={'Country'} value={country} onChange={onChangeCountry}/>
            <input className='input' type={'text'} placeholder={'Street'} value={street} onChange={onChangeStreet}/>

            <select className='select' value={subject} onChange={onChangeSubject}>
                <option value={'physical'}>Physical person</option>
                <option value={'legal'}>Legal entity</option>
            </select>

        </div>
    )
}

export default Form;