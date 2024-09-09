import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store/store";
import { deleteContact } from "../../store/contactSlice";
import { Contact } from "../../types/ContactType";

interface ContactListProps {
  onEditContact: (contact: Contact) => void;
}

const ContactList: React.FC<ContactListProps> = ({ onEditContact }) => {
  const contacts = useSelector((state: RootState) => state.contacts.contacts);
  const dispatch = useDispatch();

  return (
    <div className="mt-6">
      <h2 className="text-lg font-semibold mb-4">Contact List</h2>
      <ul className="space-y-4">
        {contacts.map(contact => (
          <li
            key={contact.id}
            className="bg-white shadow overflow-hidden sm:rounded-lg p-4"
          >
            <div className="flex justify-between items-center">
              <div>
                <p className="text-lg font-medium text-gray-900">
                  {contact.firstName} {contact.lastName}
                </p>
                <p className="text-sm text-gray-500">
                  Status: {contact.status}
                </p>
              </div>
              <div>
                <button
                  onClick={() => onEditContact(contact)}
                  className="mr-2 px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                  Edit
                </button>
                <button
                  onClick={() => dispatch(deleteContact(contact.id))}
                  className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                >
                  Delete
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
