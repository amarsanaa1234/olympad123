import React, { useState } from 'react'
import './mainForm.css'
import {HiMail} from 'react-icons/hi'
import {db} from '../../../firebase-config';
import { collection, addDoc } from 'firebase/firestore';

const MainFormSecond = () => {

const [firstName, setFirstName] = useState("");
const [lastName, setLastName] = useState("");
const [gmail, setGmail] = useState("");
const [number, setNumber] = useState("");
const [course, setCourse] = useState("");
const [profession, setProfession] = useState("");
const [studentCode, setStudentCode] = useState("");
const [error, setError] = useState(false);


const usersCollectionRef = collection(db, "form");

const handleSubmit = async (e) => {
  e.preventDefault();
  if(firstName.length === 0 || lastName.length === 0 || gmail.length === 0 || number.length === 0 || course.length === 0 || profession.length === 0 || studentCode.length === 0){
        setError(true);
    }else{
      await addDoc(usersCollectionRef,{
        name: firstName,
        surName: lastName,
        gmail: gmail,
        emNumber: number,
        course: course,
        profession: profession,
        studentCode: studentCode
      }).then(() => {
        setFirstName("");
        setLastName("");
        setGmail("");
        setNumber("");
        setCourse("");
        setProfession("");
        setStudentCode("");
        setError("");
        alert("Success message has been submitted 👍");
      })
    }
}

  return (
    <div className='contentFrame'>  
      <div className="contentSection">
        <h1>"2023 Olympad"<br/>бүртгүүлэх</h1>

          <div className="infoSection">
            <form className='form' onSubmit={handleSubmit}>
              <div className='mainForm'>
                <input className='formDiv' value={firstName} placeholder='Овог' type="text" onChange={(e)=>setFirstName(e.target.value)} id="fname"/>  
                <input className='formDiv' placeholder='Нэр' value={lastName} type="text" onChange={(e)=>setLastName(e.target.value)} id="fname"/>  
                <input className='formDiv' placeholder='Gmail' value={gmail} type="gmail" onChange={(e)=>setGmail(e.target.value)} id="fname"/>  
                <input className='formDiv' placeholder='Курс' value={course} type="number" onChange={(e)=>setCourse(e.target.value)} id="fname"/>  
              </div>
              <div className='mainFormSentButton'>
                <div className='sentButton'>
                  <button className="btn" type='submit'>
                    <HiMail/> Send
                  </button> 
                </div>
              </div>
              <div className='mainForm'>
                <input className='formDiv' placeholder='Дугаар' value={number} type="number" onChange={(e)=>setNumber(e.target.value)} id="fname"/>  
                <input className='formDiv' placeholder='Анги' value={profession} onChange={(e)=>setProfession(e.target.value)} id="fname"/>  
                <input className='formDiv' placeholder='Оюутаны код' value={studentCode} type="text" onChange={(e)=>setStudentCode(e.target.value)} id="fname"/>  
              </div>
              <div className='litleButtonFrame'>
                <button className='litleButton' type='submit'>Send</button>
              </div>
            </form>
          </div>
      </div>
    </div>
  )
}

export default MainFormSecond