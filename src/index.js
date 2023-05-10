//1. Create a new React app.
//2. Create a App.jsx component.
//3. Create a Header.jsx component that renders a <header> element
//to show the Keeper App name in an <h1>.
//4. Create a Footer.jsx component that renders a <footer> element
//to show a copyright message in a <p> with a dynamically updated year.
//5. Create a Note.jsx component to show a <div> element with a
//<h1> for a title and a <p> for the content.
//6. Make sure that the final website is styled like the example shown here:
//https://l1pp6.csb.app/

//HINT: You will need to study the classes in teh styles.css file to appy styling.
import React from 'react';
import ReactDOM from "react-dom";
const date= new Date();
const year=date.getFullYear();
ReactDOM.render(
<div>
  <header>
    <h1>Keeper App</h1>
    </header>
    <div className="note">
      <h1>Finance</h1>
      <p>the management of large amounts of money, 
        especially by governments or large companies.

      </p>
      </div>
      <div className="note">
        <h1>Bull Market</h1>
        <p>a market in which share prices are rising, encouraging buying.

        </p>
        </div>
        <div className="note">
          <h1>Bear Market</h1>
          <p>a market in which share prices are falling, encouraging selling.

          </p>
        </div>
        
    <footer>Copyright {year}</footer>
</div>
,document.getElementById("root")
  )