import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addContact } from "../../store/contactSlice";
import { RootState } from "../../store/store";

const ContactForm: React.FC = () => {
  const contacts = useSelector((state: RootState) => state.contacts.contacts);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [status, setStatus] = useState<"active" | "inactive">("active");
  const [isContactForm, setIsContactForm] = useState<boolean>(false);
  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(addContact({ firstName, lastName, status }));
    setFirstName("");
    setLastName("");
    setStatus("active");
    setIsContactForm(false);
  };

  const showContactForm = () => {
    setIsContactForm(true);
  };

  return (
    <>
      {!isContactForm && (
        <button
          onClick={showContactForm}
          className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Create Contact
        </button>
      )}

      {contacts.length === 0 || isContactForm ? (
        <div className="container flex justify-center items-center gap-2">
          <span className="w-5 h-5 rounded-full bg-black text-white p-4 flex items-center justify-center cursor-pointer">
            X
          </span>
          <div>
            <h3>No Contact Found</h3>
            <h4>Please add contact from create contact button</h4>
          </div>
        </div>
      ) : null}
      {isContactForm && (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="firstName"
              className="block text-sm font-medium text-gray-700"
            >
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              value={firstName}
              onChange={e => setFirstName(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              required
            />
          </div>
          <div>
            <label
              htmlFor="lastName"
              className="block text-sm font-medium text-gray-700"
            >
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              value={lastName}
              onChange={e => setLastName(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Status
            </label>
            <div className="mt-2">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  className="form-radio"
                  name="status"
                  value="active"
                  checked={status === "active"}
                  onChange={() => setStatus("active")}
                />
                <span className="ml-2">Active</span>
              </label>
              <label className="inline-flex items-center ml-6">
                <input
                  type="radio"
                  className="form-radio"
                  name="status"
                  value="inactive"
                  checked={status === "inactive"}
                  onChange={() => setStatus("inactive")}
                />
                <span className="ml-2">Inactive</span>
              </label>
            </div>
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Add Contact
          </button>
        </form>
      )}
    </>
  );
};

export default ContactForm;
