"use client";
import { ChangeEvent, FormEvent, useState } from "react";
import { JoinWaitlistSchema } from "@/app/schemas/joinWaitlistSchema";
import { Toast } from "../Toast/Toast";

export function Form() {
  const [firstname, setFirstname] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  function handleFirstnameChange(event: ChangeEvent<HTMLInputElement>) {
    setFirstname(event.target.value);
  }

  function handleEmailChange(event: ChangeEvent<HTMLInputElement>) {
    setEmail(event.target.value);
  }

  const userData: JoinWaitlistSchema = {
    firstname: firstname,
    email: email,
  };

  const [joinedToWaitlist, setHasJoinedToWaitlist] = useState<boolean>();

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

      await joinWaitlist.json();

      setHasJoinedToWaitlist(true);

      setTimeout(() => {
        setHasJoinedToWaitlist(false);
      }, 2000);
    } catch (error) {}
  }

  return (
    <>
      {joinedToWaitlist && (
        <Toast
          emoji="✅"
          title="Olá, "
          firstname={firstname}
          message="Você foi registrado na waitlist! Em breve, receberá e-mails com nossas novidades."
          borderColor="border-green"
        />
      )}

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
          placeholder="Fulano"
          value={firstname}
          onChange={handleFirstnameChange}
        />
        <input
          className="mt-8 rounded-lg w-96 p-3 bg-transparent border border-gray placeholder:text-label text-white outline-none"
          type="email"
          id="email"
          name="email"
          placeholder="fulano@gmail.com"
          value={email}
          onChange={handleEmailChange}
        />
        <button
          className="mt-8 rounded-lg w-96 p-3 bg-blue text-white hover:bg-blueBorder flex justify-center items-center"
          type="submit"
        >
          Inscrever-se
        </button>
      </form>
    </>
  );
}
