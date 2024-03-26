"use client";
import { ChangeEvent, FormEvent, useState } from "react";
import { JoinWaitlistSchema } from "@/app/schemas/joinWaitlistSchema";
import { Toast } from "../Toast/Toast";

export function Form() {
  const [firstname, setFirstname] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  const userData: JoinWaitlistSchema = {
    firstname: firstname,
    email: email,
  };

  function handleFirstnameChange(event: ChangeEvent<HTMLInputElement>) {
    setFirstname(event.target.value);
  }

  function handleEmailChange(event: ChangeEvent<HTMLInputElement>) {
    setEmail(event.target.value);
  }

  function handleClearInputs() {
    setFirstname("");
    setEmail("");
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    try {
      const joinWaitlist = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/waitlist`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userData),
        }
      );

      setTimeout(() => {
        handleClearInputs();
      }, 1000);

      await joinWaitlist.json();
    } catch (error) {}
  }

  return (
    <>
      {/* <Toast
        borderColor="border-green"
        emoji="✅"
        title="Olá, "
        firstname={firstname}
        message="Você foi registrado com sucesso na nossa waitlist. Fique de olho no seu e-mail para receber novidades!"
      /> */}
      <form
        className="flex flex-col"
        name="Waitlist"
        method="POST"
        autoComplete="on"
        autoFocus
        onSubmit={handleSubmit}
      >
        <input
          className="rounded-lg w-96 p-3 bg-transparent border border-gray placeholder:text-label text-white outline-none"
          type="text"
          id="name"
          name="name"
          placeholder="Primeiro nome"
          value={firstname}
          onChange={handleFirstnameChange}
        />
        <input
          className="mt-8 rounded-lg w-96 p-3 bg-transparent border border-gray placeholder:text-label text-white outline-none"
          type="email"
          id="email"
          name="email"
          placeholder="Seu melhor e-mail"
          value={email}
          onChange={handleEmailChange}
        />
        <button
          className={`mt-8 rounded-lg w-96 p-3 flex justify-center items-center ${
            !firstname || !email
              ? "bg-grayDisabled text-gray cursor-not-allowed"
              : "bg-blue text-white hover:bg-blueBorder"
          }`}
          disabled={!firstname || !email}
          type="submit"
        >
          Inscrever-se
        </button>
      </form>
    </>
  );
}
