import { useState } from "react";

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  const form = e.currentTarget;
  const formData = new FormData(form);

  const name = formData.get("name")?.toString().trim();
  const email = formData.get("email")?.toString().trim();
  const message = formData.get("message")?.toString().trim();

  if (!name || !email || !message) {
    return;
  }

  await fetch("https://formsubmit.co/gpamateofficial@gmail.com", {
    method: "POST",
    body: formData,
  });

  setSubmitted(true);
  form.reset();
};

  

  return (
    <section className="bg-white py-14 sm:py-20 lg:py-24">
      
      {/* Heading */}
      <h2
        className="
          text-center text-zinc-800
          text-2xl sm:text-3xl lg:text-4xl
          font-semibold font-['Poppins']
          uppercase
          leading-tight lg:leading-[48px]
        "
      >
        Let’s Stay in Touch!
      </h2>

      {/* Subtitle */}
      <p
        className="
          mt-4 sm:mt-5 lg:mt-6
          max-w-2xl mx-auto
          text-center
          text-slate-600
          text-sm sm:text-base
          font-normal font-['Poppins']
          leading-6 sm:leading-7 lg:leading-8
          px-4 sm:px-0
        "
      >
        Have a question, suggestion, or collaboration idea? We’d love to hear from
        you. Reach out to us and we’ll respond as soon as possible
      </p>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="
          mt-10 sm:mt-14 lg:mt-20
          max-w-3xl mx-auto
          flex flex-col
          gap-4 sm:gap-5
          px-4 sm:px-0
        "
      >
        {/* FormSubmit config */}
        <input type="hidden" name="_subject" value="New Contact Message - Gpamate" />
        <input type="hidden" name="_template" value="table" />
        <input type="hidden" name="_captcha" value="false" />

        {/* Name */}
        <div className="flex flex-col">
          <input
            type="text"
            name="name"
            placeholder="Name *"
            required
            className="
              h-11 sm:h-12
              px-4 sm:px-5
              outline outline-1 outline-neutral-200
              text-sm
              font-['Montserrat']
              text-zinc-700
              placeholder-zinc-500
              focus:outline-blue-500
            "
          />
        </div>

        {/* Email */}
        <div className="flex flex-col">
          <input
            type="email"
            name="email"
            placeholder="Email *"
            required
            className="
              h-11 sm:h-12
              px-4 sm:px-5
              outline outline-1 outline-neutral-200
              text-sm
              font-['Montserrat']
              text-zinc-700
              placeholder-zinc-500
              focus:outline-blue-500
            "
          />
        </div>

        {/* Message */}
        <div className="flex flex-col">
          <textarea
            name="message"
            rows={5}
            placeholder="Message *"
            required
            className="
              px-4 sm:px-5
              py-3
              outline outline-1 outline-neutral-200
              text-sm
              font-['Montserrat']
              text-zinc-700
              placeholder-zinc-500
              resize-none
              focus:outline-blue-500
            "
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={submitted}
          className={`
            h-11 sm:h-12
            text-white
            text-sm sm:text-base
            font-bold font-['Montserrat']
            uppercase
            transition
            ${
              submitted
                ? "bg-green-600 cursor-not-allowed"
                : "bg-blue-500 hover:bg-blue-600"
            }
          `}
        >
          {submitted ? "Submitted" : "Send"}
        </button>
      </form>
    </section>
  );
};

export default Contact;
