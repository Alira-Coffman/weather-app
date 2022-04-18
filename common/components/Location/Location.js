
import {React, useState} from "react";
import { InputGroup, FormControl, Button, Row, Col, Form } from "react-bootstrap";
import DailyWeather from "../DailyWeather/DailyWeather";

export default function Location()
{
    const [lat, setLat] = useState(null);
    const [lng, setLng] = useState(null);
    const [status, setStatus] = useState(null);
    const getLocation = () => {
        if (!navigator.geolocation) {
          setStatus('Geolocation is not supported by your browser');
        } else {
          setStatus('Locating...');
          navigator.geolocation.getCurrentPosition((position) => {
            setStatus(null);
            setLat(position.coords.latitude);
            setLng(position.coords.longitude);
          }, () => {
            setStatus('Unable to retrieve your location');
          });
        }
      }

    return (
      
        <Row >
            <Col lg='4'>
                {/* <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon1"><i className="bi bi-geo-alt"></i></InputGroup.Text>
                    <FormControl
                    placeholder="Location"
                    aria-label="Location"
                    aria-describedby="basic-addon1"
                    />
                    <br />
                    
            </InputGroup> */}
            <Button onClick={getLocation}>
            <i className="bi bi-geo-alt"></i>  Get your current location
            </Button>
            </Col>
         
            <DailyWeather lat={lat} long={lng} />
            
        </Row>
        
                  
    );
}