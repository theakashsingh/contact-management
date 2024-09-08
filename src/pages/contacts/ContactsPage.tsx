import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import ContactForm from '../../component/contact/ContactForm';
import ContactList from '../../component/contact/ContactList';
import ContactDetails from '../../component/contact/ContactDetails';
import { RootState } from '../../store/store';
import { Contact } from '../../types/ContactType';

const ContactsPage: React.FC = () => {
  const contacts = useSelector((state: RootState) => state.contacts.contacts);
  const [selectedContact, setSelectedContact] = useState<Contact | null>(null);

  const handleEditContact = (contact: Contact) => {
    setSelectedContact(contact);
  };



  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Contacts</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-xl font-semibold mb-4">Add New Contact</h2>
          <ContactForm />
        </div>
        <div>
        {
          contacts.length === 0 ? "" :
        <ContactList onEditContact={handleEditContact} />
        }  
        </div>
        {selectedContact && (
        <ContactDetails
          contact={selectedContact}
          onClose={() => setSelectedContact(null)}
        />
      )}
      </div>
    </div>
  );
};

export default ContactsPage;