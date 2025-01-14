import React, { useState } from "react";
import {Col, Form, Button} from "react-bootstrap";
import axios from 'axios';
function SignUp()
{
    const [details, setDetails] = useState({
      email: "",
      password: "",
      name: "",
      address: "",
      city: "",
      gender: "",
      birthday: "",
    });
    
    const register = (e) => {
      e.preventDefault();
      const {email, password, name, address, city, gender, birthday} = details; // destructuring object js
      // const form_data = {
      //   email: email,
      //   password: password,
      //   name: name,
      //   address: address,
      //   city: city,
      //   gender: gender,
      //   birthday: birthday,
      // }
      const form_data = {
        email,
        password,
        name,
        address,
        city,
        gender,
        birthday,
      }
      console.log(form_data);
      axios.post("http://127.0.0.1:8000/api/register", form_data).then(
        res => console.log(res.data.user)
        // tra ve ket qua duoi server
      ).catch(err => console.log(err))
    }
      

    return( 
      <center>
        <div className="col-md-5">
            <Form style={{fontSize:"20px", width:"500px"}} onSubmit={register}>
              <Form.Row >
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" value={details.email} onChange={(e) => setDetails({...details, email: e.target.value})} placeholder="Enter email" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" value={details.password} onChange={(e) => setDetails({...details, password: e.target.value})} placeholder="Password" />
                </Form.Group>
              </Form.Row>

              <Form.Group controlId="formGridName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" value={details.name} onChange={(e) => setDetails({...details, name: e.target.value})} placeholder="Your Name" />
              </Form.Group>

              <Form.Group controlId="formGridAddress1">
                <Form.Label>Address</Form.Label>
                <Form.Control type="text" value={details.address} onChange={(e) => setDetails({...details, address:e.target.value})} placeholder="1234 Main St" />
              </Form.Group>

              <Form.Row>
                <Form.Group as={Col} controlId="formGridCity">
                  <Form.Label>City</Form.Label>
                  <Form.Control as="select" defaultValue="Choose..." value={details.city} onChange={(e) => setDetails({...details, city:e.target.value})} >
                    <option>Choose...</option>
                    <option value="An Giang">An Giang</option>
                    <option value="Bà Rịa - Vũng Tàu">Bà Rịa - Vũng Tàu</option>
                    <option value="Bắc Giang">Bắc Giang</option>
                    <option value="Bắc Kạn">Bắc Kạn</option>
                    <option value="Bạc Liêu">Bạc Liêu</option>
                    <option value="Bắc Ninh">Bắc Ninh</option>
                    <option value="Bến Tre">Bến Tre</option>
                    <option value="Bình Định">Bình Định</option>
                    <option value="Bình Dương">Bình Dương</option>
                    <option value="Bình Phước">Bình Phước</option>
                    <option value="Bình Thuận">Bình Thuận</option>
                    <option value="Cà Mau">Cà Mau</option>
                    <option value="Cao Bằng">Cao Bằng</option>
                    <option value="Đắk Lắk">Đắk Lắk</option>
                    <option value="Đắk Nông">Đắk Nông</option>
                    <option value="Điện Biên">Điện Biên</option>
                    <option value="Đồng Nai">Đồng Nai</option>
                    <option value="Đồng Tháp">Đồng Tháp</option>
                    <option value="Gia Lai">Gia Lai</option>
                    <option value="Hà Giang">Hà Giang</option>
                    <option value="Hà Nam">Hà Nam</option>
                    <option value="Hà Tĩnh">Hà Tĩnh</option>
                    <option value="Hải Dương">Hải Dương</option>
                    <option value="Hậu Giang">Hậu Giang</option>
                    <option value="Hòa Bình">Hòa Bình</option>
                    <option value="Hưng Yên">Hưng Yên</option>
                    <option value="Khánh Hòa">Khánh Hòa</option>
                    <option value="Kiên Giang">Kiên Giang</option>
                    <option value="Kon Tum">Kon Tum</option>
                    <option value="Lai Châu">Lai Châu</option>
                    <option value="Lâm Đồng">Lâm Đồng</option>
                    <option value="Lạng Sơn">Lạng Sơn</option>
                    <option value="Lào Cai">Lào Cai</option>
                    <option value="Long An">Long An</option>
                    <option value="Nam Định">Nam Định</option>
                    <option value="Nghệ An">Nghệ An</option>
                    <option value="Ninh Bình">Ninh Bình</option>
                    <option value="Ninh Thuận">Ninh Thuận</option>
                    <option value="Phú Thọ">Phú Thọ</option>
                    <option value="Quảng Bình">Quảng Bình</option>
                    <option value="Quảng Ngãi">Quảng Ngãi</option>
                    <option value="Quảng Ninh">Quảng Ninh</option>
                    <option value="Quảng Trị">Quảng Trị</option>
                    <option value="Sóc Trăng">Sóc Trăng</option>
                    <option value="Sơn La">Sơn La</option>
                    <option value="Tây Ninh">Tây Ninh</option>
                    <option value="Thái Bình">Thái Bình</option>
                    <option value="Thái Nguyên">Thái Nguyên</option>
                    <option value="Thanh Hóa">Thanh Hóa</option>
                    <option value="Thừa Thiên Huế">Thừa Thiên Huế</option>
                    <option value="Tiền Giang">Tiền Giang</option>
                    <option value="Trà Vinh">Trà Vinh</option>
                    <option value="Tuyên Quang">Tuyên Quang</option>
                    <option value="Vĩnh Long">Vĩnh Long</option>
                    <option value="Tp.Cần Thơ">Tp.Cần Thơ</option>
                    <option value="Tp.Đà Nẵng">Tp.Đà Nẵng</option>
                    <option value="Tp.Hải Phòng">Tp.Hải Phòng</option>
                    <option value="Tp.Hà Nội">Tp.Hà Nội</option>
                    <option value="TPHCM">TP HCM</option>
                  </Form.Control>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridState">
                  <Form.Label>Gender</Form.Label>
                  <Form.Control as="select"  defaultValue="Choose..." value={details.gender} onChange={(e) => setDetails({...details, gender:e.target.value})} >
                    <option>Choose...</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </Form.Control>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridZip">
                  <Form.Label>Birthday</Form.Label>
                  <Form.Control type='date' value={details.birthday} onChange={(e) => setDetails({...details, birthday:e.target.value})}>
                  </Form.Control>
                  </Form.Group>
              </Form.Row>

              <input type="submit" name="Submit" value="Submit" />
            </Form>

        </div>
        </center>
    )
}
export default SignUp