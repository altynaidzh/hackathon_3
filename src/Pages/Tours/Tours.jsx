import React, {useEffect} from 'react';
import { useProducts } from '../../contexts/ProductContextProvider';
import TourCard from '../../components/TourCard/TourCard';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Tours = () => {
    const {products, getProducts} = useProducts()

    useEffect(()=> {
        getProducts()
    }, []);

    return (
        <div>
<Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
           {products ? (
            products.map(item => (
                <TourCard key={item.id} item={item}/>
            ))
           ) : (
            <h3>Loading...</h3>
           )}
        </div>
    );
};

export default Tours;