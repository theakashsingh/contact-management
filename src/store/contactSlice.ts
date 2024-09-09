// src/store/contactSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Contact } from "../types/ContactType";

interface ContactState {
  contacts: Contact[];
}

const initialState: ContactState = {
  contacts: [],
};

const contactSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    addContact: (state, action: PayloadAction<Omit<Contact, "id">>) => {
      const newContact = {
        ...action.payload,
        id: Date.now().toString(),
      };
      state.contacts.push(newContact);
    },
    updateContact: (state, action: PayloadAction<Contact>) => {
      const index = state.contacts.findIndex(
        contact => contact.id === action.payload.id
      );
      if (index !== -1) {
        state.contacts[index] = action.payload;
      }
    },
    deleteContact: (state, action: PayloadAction<string>) => {
      state.contacts = state.contacts.filter(
        contact => contact.id !== action.payload
      );
    },
  },
});

export const { addContact, updateContact, deleteContact } =
  contactSlice.actions;
export default contactSlice.reducer;
