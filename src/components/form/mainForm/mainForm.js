import React, { useState } from 'react'
import './mainForm.css'
import { Link } from 'react-router-dom'
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
    <>  
      <div class="contentSection">
          <div class="infoSection">
            <h1>Олимпиадны форм</h1>
            <form class='form' onSubmit={handleSubmit}>
              <div className='mainForm'>
                  <div className='formDiv'>
                    <label id='label'>Овог{error && firstName.length<=0 ? <p className='redSymbol'>*</p> : ""}</label>
                    <input value={firstName} type="text" onChange={(e)=>setFirstName(e.target.value)} id="fname"/>  
                  </div>
                  <div className='formDiv'>
                    <label id='label'>Нэр{error && lastName.length<=0 ? <p className='redSymbol'>*</p> : ""}</label>
                    <input value={lastName} type="text" onChange={(e)=>setLastName(e.target.value)} id="fname"/>  
                  </div>
                </div>
              <div className='mainForm'>
                <div className='formDiv'>
                  <label id='label'>Gmail{error && gmail.length<=0 ? <p className='redSymbol'>*</p> : ""}</label>
                  <input value={gmail} type="gmail" onChange={(e)=>setGmail(e.target.value)} id="fname"/>  
                </div>
              </div>
              <div className='mainForm'>
                <div className='formDiv'>
                  <label id='label'>Дугаар{error && number.length<=0 ? <p className='redSymbol'>*</p> : ""}</label>
                  <input value={number} type="number" onChange={(e)=>setNumber(e.target.value)} id="fname"/>  
                </div>
                <div className='formDiv'>
                  <label id='label'>Курс{error && course.length<=0 ? <p className='redSymbol'>*</p> : ""}</label>
                  <input value={course} type="number" onChange={(e)=>setCourse(e.target.value)} id="fname"/>  
                </div>
              </div>
              <div className='mainForm'>
                <div className='formDiv'>
                  <label id='label'>Анги{error && profession.length<=0 ? <p className='redSymbol'>*</p> : ""}</label>
                  <input value={profession} onChange={(e)=>setProfession(e.target.value)} id="fname"/>  
                </div>
              </div>
              <div className='mainForm'>
                <div className='formDiv'>
                  <label id='label'>Оюутаны код{error && studentCode.length<=0 ? <p className='redSymbol'>*</p> : ""}</label>
                  <input value={studentCode} type="text" onChange={(e)=>setStudentCode(e.target.value)} id="fname"/>  
                </div>
              </div>
              <div className='mainForm'>
                <div className='formDiv'>
                  <Link to='/'>
                    <button class="btn">Буцах</button>
                  </Link>
                  <button class="btn" type='submit'>
                    Цааш нь
                  </button> 
                  </div>
              </div>
              </form>
            </div>
      </div>
    </>
  )
}

export default MainFormSecond