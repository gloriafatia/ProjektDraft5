import React, { useState, FC, ReactElement } from "react";
import "./LoginPage.css";
import { useRef, useEffect } from "react";
import useAuth from "../../../hooks/useAuth";
import axios from "../../../api/axios";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Button, Checkbox, Form, Input } from "antd";


const LOGIN_URL = "/auth";

const LoginForm = () => {
  const { setAuth }: any = useAuth();
  

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/Transactions";

  const errRef = useRef<HTMLParagraphElement | null>(null);
  const observed = useRef<any>(null);

  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");

 
  useEffect(() => {
    console.log(observed.current);
  }, [observed]);

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd]);

  const handleSubmit = async (e: React.ChangeEvent<any>) => {

    try {
      const response = await axios.post(
        LOGIN_URL,
        JSON.stringify({ user, pwd }),
        
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
        
      );
      console.log(JSON.stringify(response?.data));
      //console.log(JSON.stringify(response));
      const accessToken = response?.data?.accessToken;
      const roles = response?.data?.roles;
      setAuth({ user, pwd, roles, accessToken });

      


      setUser("");
      setPwd("");
      
      
      navigate(from, { replace: true });

      
    } catch (err: any) {
      if (!err?.response) {
        setErrMsg("No server Response");
      } else if (err.response?.status === 400) {
        setErrMsg("Missing Username or pwd");
      } else if (err.response?.status === 401) {
        setErrMsg("Unauthorized");
      } else {
        setErrMsg("Login Failed");
      }
      if (errRef.current) {
        errRef.current.focus();
      }
    }
  };

  

  type FieldType = {
    username?: string;
    password?: string;
    remember?: string;
  };

  return (
    <>
      <section>
        <p
          ref={errRef}
          className={errMsg ? "errmsg" : "offscreen"}
          aria-live="assertive"
        >
          {errMsg}
        </p>
        
        <Form
          onFinish={handleSubmit}
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{ maxWidth: 600 }}
          initialValues={{ remember: true }}
          autoComplete="off"
        >
          <Form.Item<FieldType>
            label="Username"
            name="username"
            
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input type="text"
            id="username"
            autoComplete="off"
            onChange={(e) => setUser(e.target.value)}
            value={user}
            required/>
          </Form.Item>

          <Form.Item<FieldType>
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password  type="password"
            id="password"
            onChange={(e) => setPwd(e.target.value)}
            value={pwd}
            required/>
          </Form.Item>
          <Form.Item<FieldType>
            name="remember"
            valuePropName="checked"
            wrapperCol={{ offset: 8, span: 16 }}
          >
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
        <p>
          Need an account? <br />
          <span className="line">
            <a>
              <Link to="/RegisterPage">Sign Up</Link>
            </a>
          </span>
        </p>
      </section>
    </>
  );
};

export default LoginForm;