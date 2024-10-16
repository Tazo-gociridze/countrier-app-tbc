import React, { useState } from "react";
import { NameState } from "./formLogit";
import Input from "./form-components/Input";

function Form() {
  const [name, setName] = useState<NameState>({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    if (value.length > 8) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: "Cannot exceed 8 characters",
      }));
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: "",
      }));
    }

    setName((prevName) => ({
      ...prevName,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const firstName = formData.get("firstName") as string;
    const lastName = formData.get("lastName") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;

    if (errors.firstName || errors.lastName || errors.email || errors.message) {
      console.log("Form contains errors");
      return;
    }

    setName({ firstName, lastName, email, message });
    console.log({ firstName, lastName, email, message });

    setName({ firstName: "", lastName: "", email: "", message: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form__wrapper">
        {errors.firstName && <div className="error">{errors.firstName}</div>}
        <Input
          placeholder="First-name"
          type="text"
          name="firstName"
          value={name.firstName}
          onChange={handleChange}
        />

        {errors.lastName && <div className="error">{errors.lastName}</div>}
        <Input
          placeholder="Last-name"
          type="text"
          name="lastName"
          value={name.lastName}
          onChange={handleChange}
        />

        {errors.email && <div className="error">{errors.email}</div>}
        <Input
          placeholder="E-mail"
          type="email"
          name="email"
          value={name.email}
          onChange={handleChange}
        />

        {errors.message && <div className="error">{errors.message}</div>}
        <textarea
          placeholder="Message"
          name="message"
          value={name.message}
          onChange={handleChange}
        />

        <button type="submit">Send</button>
      </div>
    </form>
  );
}

export default Form;
