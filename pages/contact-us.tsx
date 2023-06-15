/**These are necessary imports / components for the page */
import { ImageSize, TextAlign, ListType } from "../src/shared/enums";
import { useState } from "react";
import {
  PageLayout,
  Text,
  List,
  Image,
  LinkTo,
  Seperator,
  Slider,
} from "../src/components";
import { iSEO } from "../src/shared/interfaces";

const ContactUs = () => {
  const PAGE_SEO: iSEO = {
    title: "Contact Us",
    description:
      "For any any queries related to this project / template feel free to connect with us on webexpe13@gmail.com",
    keywords: "webexpx, contact us, webexpe13@gmail.com, next js blog template",
    author: "Mayur Nalwala, Rupali Yadav",
  };
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const data = {
      name,
      mobile,
      email,
      message,
    };

    try {
      const response = await fetch(
        "https://console.firebase.google.com/project/blogapp-d39f6/database/blogapp-d39f6-default-rtdb/data/~2F",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (response.ok) {
        setSubmitted(true);

        setName("");
        setMobile("");
        setEmail("");
        setMessage("");
      } else {
        console.error("Failed to submit the contact form");
      }
    } catch (error) {
      console.error("Failed to submit the contact form", error);
    }
  };

  if (submitted) {
    return <div>Thank you for contacting us!</div>;
  }

  return (
    <PageLayout PAGE_SEO={PAGE_SEO} home>
      <Text title className="flex justify-center mt-7 ">
        Contact Us
      </Text>
      <div className="flex justify-center items-center h-screen  ">
        <form
          className="bg-white p-6 shadow-md rounded-lg w-[50%] "
          onSubmit={handleSubmit}
        >
          <Text subtitle className="flex justify-center mt-7 ">
            Enquiry Form
          </Text>
          <div className="mb-4">
            <label htmlFor="name" className="block mb-2">
              Name:
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full px-4 py-2 border rounded-lg"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="mobile" className="block mb-2">
              Mobile:
            </label>
            <input
              type="text"
              id="mobile"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              required
              className="w-full px-4 py-2 border rounded-lg"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2">
              Email:
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2 border rounded-lg"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block mb-2">
              Message:
            </label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              className="w-full px-4 py-2 border rounded-lg"
            />
          </div>
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded-lg"
          >
            Submit
          </button>
        </form>
      </div>
      <div className="dark:bg-slate-800 bg-blue-100 mt-10 container py-10 md:px-20 px-5">
        <Text subtitle>
          To View The Stored Details Click On Button
          <a
            href="/ContactView"
            className="px-4 py-2 bg-green-500 text-white rounded-lg"
          >
            Click Here
          </a>
        </Text>
      </div>
      <section
        className={
          "dark:bg-slate-800 bg-blue-100 mt-10 container py-10 md:px-20 px-5"
        }
      >
        <Text subtitle className="md:!text-5xl text-4xl !font-light">
          Work with us . . .
        </Text>
        <Text p className="!text-lg leading-relaxed mt-5 px-1">
          We are a group of developers and designers with more than 5 years of
          industry experience. If you have any requirements like Website
          Development, Website / App Design feel free to contact us on the given
          email.
        </Text>
      </section>
    </PageLayout>
  );
};

export default ContactUs;
