import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import {
  Nav, Navbar, NavbarBrand, NavLink, Form, FormControl, Button
} from 'react-bootstrap';

export default function Tugas() {
  return (
    <Router>
      <div>
        <Navbar bg="dark" variant="dark">
          <NavbarBrand className="fa fa-cutlery"></NavbarBrand>
          <Nav className="w-100">
            <NavLink className="mr-auto mt-2">
              <Link className="text-white" to="/home" style={{ textDecoration: "none" }}>Home</Link>
            </NavLink>
            <NavLink className="">
              <Link className="text-white" to="/about" style={{ textDecoration: "none" }}>
                <Form inline="true">
                  <Button variant="outline-info">About</Button>
                </Form>
              </Link>
            </NavLink>
          </Nav>
        </Navbar>

        <Switch>
          <Route path="/home">
            <PublicPage />
          </Route>
          <Route path="/login">
            <LoginPage />
          </Route>
          <PrivateRoute path="/about">
            <ProtectedPage />
            <Switch>
              <AuthButton />
            </Switch>
          </PrivateRoute>
        </Switch>
      </div>
    </Router>
  );
}

// export default function AuthExample() {
//   return (
//     <Router>
//       <div>
//         <AuthButton />

//         <ul>
//           <li>
//             <Link to="/public">Public Page</Link>
//           </li>
//           <li>
//             <Link to="/private">Private Page</Link>
//           </li>
//         </ul>

//         <Switch>
//           <Route path="/public">
//             <PublicPage />
//           </Route>
//           <Route path="/login">
//             <LoginPage />
//           </Route>
//           <PrivateRoute path="/private">
//             <ProtectedPage />
//           </PrivateRoute>
//         </Switch>
//       </div>
//     </Router>
//   );
// }

const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    fakeAuth.isAuthenticated = true;
    setTimeout(cb, 100); // fake async
  },
  signout(cb) {
    fakeAuth.isAuthenticated = false;
    setTimeout(cb, 100);
  }
};

function AuthButton() {
  let history = useHistory();

  return fakeAuth.isAuthenticated ? (
      <button className="btn btn-danger d-flex m-auto"
        onClick={() => {
          fakeAuth.signout(() => history.push("/home"));
      }}
      >
        Sign out
      </button>
  ) : (
    <p>You are not logged in.</p>
  );
}

function PrivateRoute({ children, ...rest}) {
  return (
    <Route
    {...rest}
    render={({ location }) => 
      fakeAuth.isAuthenticated ? (
        children
      ) : (
      <Redirect
      to={{
        pathname: "/login",
        state: { from: location }
      }}
    />
  )
}
/>
  );
}

function PublicPage() {
  return (
    <div className="w-100 container">
      <div className="row">
        <Image nama="Salad" harga="Rp.75.000" detail="Makanan enak" />
        <Image nama="Salad" harga="Rp.75.000" detail="Makanan enak" />
        <Image nama="Salad" harga="Rp.75.000" detail="Makanan enak" />
        <Image nama="Salad" harga="Rp.75.000" detail="Makanan enak" />
      </div>
    </div>
  )
}

function ProtectedPage() {
  return (
    <div className="w-50 text-center cover-container d-flex h-100 p-3 mx-auto flex-column">
      <main role="main" class="inner cover">
        <h1 class="cover-heading">About page.</h1>
        <p class="lead">Food is any substance consumed to provide nutritional support for an organism. Food is usually of plant, animal or fungal origin, and contains essential nutrients, such as carbohydrates, fats, proteins, vitamins, or minerals. The substance is ingested by an organism and assimilated by the organism's cells to provide energy, maintain life, or stimulate growth. Different species of animals have different feeding behaviours that satisfy the needs of their unique metabolisms, often evolved to fill a specific ecological niche within specific geographical contexts.</p>
        <p class="lead">
          <button class="btn btn-lg btn-secondary">Learn more</button>
        </p>
      </main>
    </div>
  )
}

function LoginPage() {
  let history = useHistory();
  let location = useLocation();

  let { from } = location.state || { from: { pathname: "/"} };
  let login = () => {
    fakeAuth.authenticate(() => {
      history.replace(from);
    });
  };

  return (
    <div>
      <p>You must log in to view the page at {from.pathname}</p>
      <button className="btn btn-success" onClick={login}>Log in</button>
    </div>
  );
}

function Image(props){
  return(
    <div className="col col-sm-6 portofolio-item mt-4">
      <div className="card h-100">
          <img src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=750&q=80" alt="Gambar Thumbnail Artikel" className="card-img-top mh-100"/>
          <div className="card-body">
              <h4 className="card-title w-75 float-left">{props.nama}</h4>
              <h5 className="card-title w-75 text-primary">{props.harga}</h5>
              <hr/>
              <p className="card-text">{props.detail}</p>
          </div>
      </div>
    </div>
  )
}


// export default function NestingExample(){
//   return (
//     <Router>
//       <div>
//         <ul>
//           <li>
//             <Link to="/">Home</Link>
//           </li>
//           <li>
//             <Link to="/topics">Topics</Link>
//           </li>
//         </ul>

//         <hr />

//         <Switch>
//           <Route exact path="/">
//             <Home />
//           </Route>
//           <Route path="/topics">
//             <Topics />
//           </Route>
//         </Switch>
//       </div>
//     </Router>
//   )
// }

// export default function ParamsExample() {
//   return (
//     <Router>
//       <div>
//         <h2>Accounts</h2>
//         <ul>
//           <li>
//             <Link to="/netflix">Netflix</Link>
//           </li>
//           <li>
//             <Link to="/gmail">Gmail</Link>
//           </li>
//           <li>
//             <Link to="/yahoo">yahoo</Link>
//           </li>
//           <li>
//             <Link to="/amazon">Amazon</Link>
//           </li>
//         </ul>

//         <Switch>
//           <Route path="/:id" children={<Child />} />
//         </Switch>
//       </div>
//     </Router>
//   );
// }

// function Child() {
//   let { id } = useParams();

//   return(
//     <div>
//       <h3>ID: {id}</h3>
//     </div>
//   )
// }

// export default function BasicExample() {
//   return (
//     <Router>
//       <div>
//         <ul>
//           <li>
//             <Link to="/">Home</Link>
//           </li>
//           <li>
//             <Link to="/about">About</Link>
//           </li>
//           <li>
//             <Link to="/dashboard">Dashboard</Link>
//           </li>
//         </ul>
//         <hr />

//         <Switch>
//           <Route exact path="/">
//             <Home />
//           </Route>
//           <Route exact path="/about">
//             <About />
//           </Route>
//           <Route exact path="/dashboard">
//             <Dashboard />
//           </Route>
//         </Switch>
//       </div>
//     </Router>
//   )
// }

// function Home(){
//   return (
//     <div>
//       <h2>Home</h2>
//     </div>
//   );
// }

// function About(){
//   return (
//     <div>
//       <h2>About</h2>
//     </div>
//   );
// }

// function Dashboard(){
//   return (
//     <div>
//       <h2>Dashboard</h2>
//     </div>
//   );
// }

// function Topics() {
//   let { path, url } = useRouteMatch();

//   return (
//     <div>
//       <h2>Topics</h2>
//       <ul>
//         <li>
//           <Link to={`${url}/Sate, Nasi Goreng`}>Kuliner</Link>
//         </li>
//         <li>
//           <Link to={`${url}/Wisata alam, Museum`}>Travelling</Link>
//         </li>
//         <li>
//           <Link to={`${url}/Ibis, JW Marriot`}>Review Hotel</Link>
//         </li>
//       </ul>

//       <Switch>
//         <Route exact path={path}>
//           <h3>Please select a topic.</h3>
//         </Route>
//         <Route path={`${path}/:topicId`}>
//           <Topic />
//         </Route>
//       </Switch>
//     </div>
//   );
// }

// function Topic() {
//   let { topicId } = useParams();

//   return (
//     <div>
//       <h3>{topicId}</h3>
//     </div>
//   );
// }