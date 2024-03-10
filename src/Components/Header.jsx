import { MDBCarousel, MDBCarouselCaption, MDBCarouselItem } from 'mdb-react-ui-kit';
import React from 'react'
import { Badge } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function Header() {
  const wishlist = useSelector((state) => state.wishlistslice) || [];
  const cart = useSelector((state) => state.cartReducer);

  return (
    <>

<Navbar>
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img
              src="cart2.gif"
              width="90"
              height="90"
              className="d-inline-block align-top"
              alt="E-cart logo"
            />
          </Navbar.Brand>
          <Navbar.Brand>
            <Link
              to="/"
              style={{
                textDecoration: "none",
                fontWeight: "bold",
                fontSize: "40px",
                color:"blue",
                fontFamily: "Kdam Thmor Pro",
              }}
            >
             Shop Vista
            </Link>
          </Navbar.Brand>

          <Nav className="ms-auto">
            <Nav.Link>
              <Link
                to="/"
                style={{
                  textDecoration: "none",
                  fontWeight: "bold",
                  color: "black",
                }}
              >
                <i className="fa-solid fa-home"></i> Home
              </Link>
            </Nav.Link>

            <Nav.Link>
              <Link
                to="/Wishlist"
                style={{
                  textDecoration: "none",
                  fontWeight: "bold",
                  color: "black",
                }}
              >
                <i className="fa-solid fa-heart"></i> Wishlist
                <Badge
                  className="rounded"
                  style={{
                    marginLeft: "5px",
                    backgroundColor: "#52BE80",
                  }}
                >
                  {wishlist.length}
                </Badge>
              </Link>
            </Nav.Link>

            <Nav.Link>
              <Link
                to="/Cart"
                style={{
                  textDecoration: "none",
                  fontWeight: "bold",
                  color: "black",
                }}
              >
                <i className="fa-solid fa-cart-shopping"></i> Cart
                <Badge
                  className="rounded "
                  style={{
                    marginLeft: "5px",
                  }}
                >
                  {cart.length}
                </Badge>
              </Link>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
 <MDBCarousel showIndicators showControls fade>
      <MDBCarouselItem itemId={1}>
        <img src='https://img.freepik.com/free-photo/happy-beautiful-couple-posing-with-shopping-bags-violet_496169-2215.jpg?t=st=1710095817~exp=1710099417~hmac=74a2936e4bfd6a93cd7c2279740d183c49f3c6473f34c2a85575f26e010c8c6a&w=1380
' className='d-block w-100' alt='...' />
        <MDBCarouselCaption>
   
        
        </MDBCarouselCaption>
      </MDBCarouselItem>

      <MDBCarouselItem itemId={2}>
        <img src='https://img.freepik.com/free-photo/woman-casual-white-sweater-sunglasses-red-wall_343596-5382.jpg?t=st=1710095760~exp=1710099360~hmac=bc1871d1434bdafa1a450d7607294f5fb3383cc36da175f69b98d575395d1177&w=1380
' className='d-block w-100' alt='...' />
        <MDBCarouselCaption>
        
        </MDBCarouselCaption>
      </MDBCarouselItem>

      <MDBCarouselItem itemId={3}>
        <img src='https://img.freepik.com/free-photo/black-friday-elements-assortment_23-2149074075.jpg?t=st=1710095780~exp=1710099380~hmac=15ca2897a298680f2c220c64455fef2dc6058ef88dae2cc51c77136f115890f9&w=1380

' className='d-block w-100' alt='...' />
        <MDBCarouselCaption>
         
        </MDBCarouselCaption>
      </MDBCarouselItem>
    </MDBCarousel>


 
    </>
  );
}

export default Header;