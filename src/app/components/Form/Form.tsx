"use client";
import { ChangeEvent, FormEvent, useState } from "react";
import { Spinner } from "../Spinner/Spinner";
import {
  JoinWaitlistSchema,
  joinWaitlistSchema,
} from "@/app/schemas/joinWaitlistSchema";

export function Form() {
  const [firstname, setFirstname] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [loading, setIsLoading] = useState<boolean>(false);

  let userData: JoinWaitlistSchema = {
    firstname: firstname,
    email: email,
  };

  function handleFirstnameChange(event: ChangeEvent<HTMLInputElement>) {
    setFirstname(event.target.value);
  }

  function handleEmailChange(event: ChangeEvent<HTMLInputElement>) {
    setEmail(event.target.value);
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setIsLoading(true);

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

      const result = await joinWaitlist.json();
      console.log(result);

      setIsLoading(false);
    } catch (error) {
      // todo throw toast error
    }
  }

  return (
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
        {loading ? <Spinner /> : `Inscrever-se`}
      </button>
    </form>
  );
}
