import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ContactForm from "./components/ContactForm";
import "./App.css";

function App() {
  const [contacts, setContacts] = useState([]);
  const [deletedContacts, setDeletedContacts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const addContact = (contact) => {
    setContacts([...contacts, contact]);
  };

  const deleteContact = (id) => {
    const contactToDelete = contacts.find((c) => c.id === id);
    setDeletedContacts([...deletedContacts, contactToDelete]);
    setContacts(contacts.filter((c) => c.id !== id));
  };

  const restoreContact = (id) => {
    const contactToRestore = deletedContacts.find((c) => c.id === id);
    setContacts([...contacts, contactToRestore]);
    setDeletedContacts(deletedContacts.filter((c) => c.id !== id));
  };

  const permanentlyDelete = (id) => {
    setDeletedContacts(deletedContacts.filter((c) => c.id !== id));
  };

  // Filter contacts by search
  const filteredContacts = contacts.filter(
    (contact) =>
      contact.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      contact.phone.includes(searchQuery) ||
      contact.email?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="app">
      <h1>Smart Contacts 📇</h1>

      {/* Search bar */}
      <input
        type="text"
        placeholder="Search contacts..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="search-bar"
      />

      {/* Contact Form */}
      <ContactForm onAddContact={addContact} />

      {/* Active Contacts Section */}
      <h2>Active Contacts</h2>
      <div className="contact-grid">
        <AnimatePresence>
          {filteredContacts.length === 0 ? (
            <motion.p
              key="no-contacts"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-gray-500"
            >
              No contacts found.
            </motion.p>
          ) : (
            filteredContacts.map((contact) => (
              <motion.div
                key={contact.id}
                className="contact-card"
                initial={{ opacity: 0, scale: 0.9, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <h3>{contact.name}</h3>
                <p><strong>📞</strong> {contact.phone}</p>
                {contact.email && <p><strong>✉️</strong> {contact.email}</p>}
                <button
                  className="delete-btn"
                  onClick={() => deleteContact(contact.id)}
                >
                  🗑️ Delete
                </button>
              </motion.div>
            ))
          )}
        </AnimatePresence>
      </div>

      {/* Recycle Bin Section */}
      <div className="recycle-bin">
        <h2>♻️ Recycle Bin</h2>
        <AnimatePresence>
          {deletedContacts.length === 0 ? (
            <motion.p
              key="no-deleted"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-gray-500"
            >
              No deleted contacts.
            </motion.p>
          ) : (
            <div className="contact-grid">
              {deletedContacts.map((contact) => (
                <motion.div
                  key={contact.id}
                  className="contact-card deleted"
                  initial={{ opacity: 0, scale: 0.9, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.8, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3>{contact.name}</h3>
                  <p><strong>📞</strong> {contact.phone}</p>
                  {contact.email && <p><strong>✉️</strong> {contact.email}</p>}
                  <div className="card-buttons">
                    <button onClick={() => restoreContact(contact.id)}>
                      ↩️ Restore
                    </button>
                    <button onClick={() => permanentlyDelete(contact.id)}>
                      ❌ Delete
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default App;
