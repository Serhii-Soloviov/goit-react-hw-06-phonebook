import React from 'react';
import { ContactForm } from '../ContactForm/ContactForm';
import { ContactList } from '../ContactList/ContactList';
import { Filter } from '../Filter/Filter';
import { AppWrapper, AppHead, AppSubHead } from './App.styled';

export const App = () => {
  return (
    <AppWrapper>
      <AppHead>Phonebook</AppHead>
      <ContactForm />
      <AppSubHead>Contacts</AppSubHead>
      <Filter />
      <ContactList />
    </AppWrapper>
  );
};
