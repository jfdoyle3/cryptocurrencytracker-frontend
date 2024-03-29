import React, {useState, useContext} from 'react';
import NewUserForm from './NewUserForm';
import axios from 'axios';
import {AuthContext} from '../Providers/AuthProvider';
import { useNavigate } from 'react-router-dom'

const Register = () => {

  let navigate = useNavigate();

  const [query, setQuery] = useState({
    username: "",
    password: "",
    confirm: "",
    name: "",
  });

  // submitting context

  const [auth, setAuth] = useContext(AuthContext)

  const updateForm = (field, value) => {
    setQuery({
      ...query,
      [field]: value
    })
  }

  const onSubmit = async (e) => {
    //validation
    if (query.password !== query.confirm) {
      alert('Passwords do not match');
      return;
    }
    const data = query;
    try {
      const res = await axios.post('http://localhost:8080/api/auth/signup', data)
      // alert(res.data.message);
      login(data);
    } catch (err) {
      alert (err.response.data.message);
    }
  }

  const login = async (data) => {
    try {
      const res = await axios.post(
        'http://localhost:8080/api/auth/signin', 
        data
      )
      // alert(res.data.token);
      createTracker(data, res.data.token);
    } catch (err) {
      alert (err.response.data.message);
    }
  }

  const createTracker = async (data, token) => {
    data.email = data.username;
    try {
      const res = await axios.post(
        "http://localhost:8080/api/trackers", 
        data,
        {
          headers: {
            "Authorization": `Bearer ${token}`
          }
        }
      )
      console.log(res.data);
      setAuth({token, name: res.data.name});
     // alert(res.data.id);
      navigate('/trackers')
    } catch (err) {
      alert (err.response.data.message);
    }
  }

  return (
    <div style={{
      display: "flex",
      flex: "1",
      flexDirection: "column",
      alignItems: 'center',
      minHeight: '100vh',
    }}>
      <h1>Register</h1>
      <NewUserForm 
        query={query}
        updateForm={updateForm}
        onSubmit={onSubmit}
      />
    </div>
  )
}

export default Register;