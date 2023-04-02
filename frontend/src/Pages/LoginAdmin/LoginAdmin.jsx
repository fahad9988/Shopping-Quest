import {
  FormControl,
  FormHelperText,
  FormLabel,
  Heading,
  Input,
  Button,
  Link,
} from "@chakra-ui/react";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../Pages/LoginAdmin/Context/AuthContext";
import styles from "./LoginAdmin.module.css";

function LoginAdmin() {
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");
  const [load, setload] = useState(false);
  const navigate = useNavigate();
  const { logoutUser } = useContext(AuthContext);

  const submitLogin = async () => {
    setload(true);
    // console.log(load);
    try {
      let res = await fetch(`http://localhost:8080/admin`);
      let data = await res.json();
      // console.log(data);
      let Auth = false;
      for (let i in data) {
        if (data[i].email === email && data[i].password === password) {
          Auth = true;
          localStorage.setItem("adminAuth", data[i].name);
          break;
        }
      }
      setload(false);
      if (Auth === false) {
        alert("Please enter right email or password!");
      } else {
        alert("Login Successfull!");
        navigate("/admin");
      }

      console.log(Auth);
    } catch (error) {
      setload(false);

      console.log(error);
    }
    setemail("");
    setPassword("");
  };

  return (
    <>
      <div className={styles.mainDiv}>
        <Heading
          fontFamily="cursive"
          color="rgb(255, 81, 0)"
          textAlign="center"
        >
          Admin Log in
        </Heading>
        <FormControl color="#FFF">
          <FormLabel marginTop="15px">Email address</FormLabel>
          <Input
            placeholder="Your Email Address"
            value={email}
            onChange={(e) => setemail(e.target.value)}
            type="email"
          />

          <FormLabel color="#FFF" marginTop="15px">
            Password
          </FormLabel>
          <Input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Your Password Address"
            type="password"
          />
          <FormHelperText>
            We'll never share your Email & Password.
          </FormHelperText>
          <FormHelperText>
            If have no account click{" "}
            <Link color="rgb(255, 81, 0)" href="/signup">
              Signup
            </Link>
          </FormHelperText>
          <Button
            className={styles.loginButton}
            w="100%"
            marginTop="30px"
            color="white"
            background="rgb(255, 81, 0)"
            onClick={submitLogin}
          >
            <span>Log in</span>
          </Button>
        </FormControl>
      </div>
    </>
  );
}

export default LoginAdmin;
