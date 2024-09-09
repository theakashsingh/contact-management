import React, { useState } from "react";
import { useSelector } from "react-redux";
import ContactForm from "../../component/contact/ContactForm";
import ContactList from "../../component/contact/ContactList";
import ContactDetails from "../../component/contact/ContactDetails";
import { RootState } from "../../store/store";
import { Contact } from "../../types/ContactType";

const ContactsPage: React.FC = () => {
  const contacts = useSelector((state: RootState) => state.contacts.contacts);
  const [selectedContact, setSelectedContact] = useState<Contact | null>(null);

  const handleEditContact = (contact: Contact) => {
    setSelectedContact(contact);
  };

  return (
    <div className="mx-auto bg-[#ECE9E4] min-h-screen">
      <h1 className="text-3xl font-bold mb-6 py-4 md:sticky top-0 text-center md:bg-blue-500">
        Contacts
      </h1>
      <div className="p-10">
        <div>
          <h2 className="text-xl font-semibold mb-4 text-center">
            Add New Contact
          </h2>
          <ContactForm />
        </div>
        <div>
          {contacts.length === 0 ? (
            ""
          ) : (
            <ContactList onEditContact={handleEditContact} />
          )}
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
