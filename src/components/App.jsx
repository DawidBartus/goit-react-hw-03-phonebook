import React from "react";
import { Component } from 'react';
import ContactForm from "./ContactForm/ContactForm";
import Filter from "./Filter/Filter";
import ContactList from './ContactList/ContactList'



 const App = () => {
console.log("cześć")
return (
  <div>
  <h1>Phonebook</h1>
  <ContactForm />

  <h2>Contacts</h2>
  <Filter />
  <ContactList/>
  </div>
)

};

export default App