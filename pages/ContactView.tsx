import React, { useEffect, useState } from "react";
import Navbar from "../src/components/Navbar";

const ContactView = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const response = await fetch(
          "https://console.firebase.google.com/project/blogapp-d39f6/database/blogapp-d39f6-default-rtdb/data/~2F"
        );
        if (response.ok) {
          const data = await response.json();
          setContacts(data);
        } else {
          console.error("Failed to fetch contact data");
        }
      } catch (error) {
        console.error("Failed to fetch contact data", error);
      }
    };

    fetchContacts();
  }, []);

  return (
    <div className="w-[100%] mx-auto h-100vh">
      <Navbar />
      <h1 className="text-2xl font-bold mb-4 flex justify-center">
        Contact List
      </h1>
      {contacts.length > 0 ? (
        <ul className="space-y-4">
          {contacts.map((contact: any) => (
            <li key={contact.id} className="p-4 bg-gray-100 rounded-lg">
              <h2 className="text-xl font-semibold mb-2">{contact.name}</h2>
              <p className="mb-1">Mobile: {contact.mobile}</p>
              <p className="mb-1">Email: {contact.email}</p>
              <p className="mb-1">Message: {contact.message}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p className="flex justify-center">No contacts found.</p>
      )}
    </div>
  );
};

export default ContactView;
