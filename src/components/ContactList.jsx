function ContactList({ contacts, onDelete, title }) {
  return (
    <div className="contact-list-container">
      <h2 className="contact-list-title">{title}</h2>

      {contacts.length === 0 ? (
        <p className="no-contacts">No contacts here.</p>
      ) : (
        <div className="contact-grid">
          {contacts.map((contact) => (
            <div key={contact.id} className="contact-card">
              <h3 className="contact-name">{contact.name}</h3>
              <p className="contact-info">📞 {contact.phone}</p>
              {contact.email && (
                <p className="contact-info">
                  📧{" "}
                  <a href={`mailto:${contact.email}`} className="email-link">
                    {contact.email}
                  </a>
                </p>
              )}
              <button
                onClick={() => onDelete(contact.id)}
                className="delete-btn"
              >
                🗑️ Delete
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ContactList;
