import { useState } from "react";
import { parsePhoneNumberFromString } from "libphonenumber-js";

const countryList = [
  { code: "IN", name: "India" },
  { code: "US", name: "United States" },
  { code: "GB", name: "United Kingdom" },
  { code: "CA", name: "Canada" },
  { code: "AU", name: "Australia" },
];

function ContactForm({ onAddContact }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("IN");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !phone) return alert("Please fill out all fields!");

    const formatted = parsePhoneNumberFromString(phone, country);
    if (!formatted || !formatted.isValid()) {
      alert("Please enter a valid phone number for the selected country.");
      return;
    }

    const newContact = {
      id: Date.now(),
      name,
      phone: formatted.formatInternational(),
      country,
      email,
    };

    onAddContact(newContact);
    setName("");
    setPhone("");
    setEmail("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="contact-form flex flex-wrap justify-center items-center gap-3 mb-4"
    >
      <input
        type="text"
        placeholder="Full Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border rounded p-2 w-40"
      />

      <select
        value={country}
        onChange={(e) => setCountry(e.target.value)}
        className="border rounded p-2 w-36"
      >
        {countryList.map((c) => (
          <option key={c.code} value={c.code}>
            {c.name}
          </option>
        ))}
      </select>

      <input
        type="tel"
        placeholder="Phone Number"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        className="border rounded p-2 w-44"
      />

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="border rounded p-2 w-52"
      />

      <button
        type="submit"
        className="bg-blue-500 text-white rounded-full px-4 py-2 hover:bg-blue-600 transition"
      >
        Add Contact
      </button>
    </form>
  );
}

export default ContactForm;
