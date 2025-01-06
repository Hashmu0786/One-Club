"use client";
import React, { useEffect, useRef, useState } from "react";

export default function ReservationForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [selectedPersons, setSelectedPersons] = useState("Persons");
  const [selectedTime, setSelectedTime] = useState("Time");
  const [isPersonsOpen, setPersonsOpen] = useState(false);
  const [isTimeOpen, setTimeOpen] = useState(false);

  const personsOptions = [
    "Persons",
    "1 Person",
    "2 Persons",
    "3 Persons",
    "4 Persons",
  ];
  const timeOptions = ["Time", "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM"];
  // State for error messages
  const [errors, setErrors] = useState({});
  // Validate form fields
  const validate = () => {
    const newErrors = {};
    if (!name) newErrors.name = "Name is required";
    if (!phone) newErrors.phone = "Phone is required";
    if (!email) newErrors.email = "Email is required";
    if (!date) newErrors.date = "Date is required";
    if (selectedPersons === "Persons")
      newErrors.persons = "Please select persons";
    if (selectedTime === "Time") newErrors.time = "Please select time";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  // Handle form submission
  const onSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form Data:", {
        name,
        phone,
        email,
        date,
        persons: selectedPersons,
        time: selectedTime,
      });
    }
  };
  const personelRef = useRef();
  const timeRef = useRef();
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        personelRef.current &&
        !personelRef.current.contains(event.target) &&
        timeRef.current &&
        !timeRef.current.contains(event.target)
      ) {
        setPersonsOpen(false);
        setTimeOpen(false);
      }
    };
    window.addEventListener("click", handleClickOutside);
    return () => window.removeEventListener("click", handleClickOutside);
  }, []);
  const fields = [
    {
      label: "Your Name",
      type: "text",
      value: name,
      onChange: setName,
      name: "name",
      placeholder: "Your Name",
    },
    {
      label: "Phone",
      type: "text",
      value: phone,
      onChange: setPhone,
      name: "phone",
      placeholder: "Phone",
    },
    {
      label: "Email Address",
      type: "email",
      value: email,
      onChange: setEmail,
      name: "email",
      placeholder: "Email Address",
    },
    {
      label: "Date",
      type: "date",
      value: date,
      onChange: setDate,
      name: "date",
    },
  ];
  return (
    <div className="h-full  flex items-center justify-center font-libre">
      <div className="p-8 max-w-md w-full bg-secondary py-5 lg:pb-20 lg:pt-16">
        <h2 className="text-center text-xl lg:text-2xl font-light text-black mb-4">
          Make A Reservation
        </h2>
        <div className="border-t border-gray-300 w-full mb-6"></div>
        <form onSubmit={onSubmit} className="space-y-4 w-full">
          <div className="grid grid-cols-2 gap-4 w-full overflow-hidden">
            <div className="w-full flex flex-col items-start ">
              <input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className=" text-sm p-3 w-full focus:outline-none  font-light text-black placeholder:text-black"
              />
              {errors.name && (
                <span className="text-red-500 text-xs">*{errors.name}</span>
              )}
            </div>
            <div className="w-full flex flex-col items-start">
              <input
                type="text"
                placeholder="Phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="text-sm p-3 w-full focus:outline-none  font-light text-black placeholder:text-black"
              />
              {errors.phone && (
                <span className="text-red-500 text-xs">*{errors.phone}</span>
              )}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 w-full">
            <div className="w-full flex flex-col items-start">
              <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="text-sm p-3 w-full focus:outline-none  font-light text-black placeholder:text-black"
              />
              {errors.email && (
                <span className="text-red-500 text-xs">*{errors.email}</span>
              )}
            </div>
            <div className="w-full flex flex-col items-start">
              <div className="relative text-black w-full">
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="text-sm p-3 w-full focus:outline-none  font-light text-black placeholder:text-black"
                />
                {/* <span className="absolute right-3 top-3 text-gray-400">
                :date:
                </span> */}
              </div>
              {errors.date && (
                <span className="text-red-500 text-xs">*{errors.date}</span>
              )}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 text-black w-full">
            <div className="w-full flex flex-col items-start">
              <div className="relative w-full">
                <button
                  type="button"
                  className="text-sm p-3 w-full font-light bg-white text-left focus:outline-none"
                  onClick={() => setPersonsOpen(!isPersonsOpen)}
                >
                  {selectedPersons}
                </button>
                {isPersonsOpen && (
                  <ul
                    ref={personelRef}
                    className="absolute w-full bg-white border z-10"
                  >
                    {personsOptions.map((option, index) => (
                      <li
                        key={index}
                        className="p-2 hover:bg-primary cursor-pointer"
                        onClick={() => {
                          setSelectedPersons(option);
                          setPersonsOpen(false);
                        }}
                      >
                        {option}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              {errors.persons && (
                <span className="text-red-500 text-xs">*{errors.persons}</span>
              )}
            </div>
            <div className="w-full flex flex-col items-start">
              <div className="relative w-full">
                <button
                  type="button"
                  className="text-sm p-3 w-full   font-light bg-white text-left focus:outline-none"
                  onClick={() => setTimeOpen(!isTimeOpen)}
                >
                  {selectedTime}
                </button>
                {isTimeOpen && (
                  <ul
                    ref={timeRef}
                    className="absolute w-full bg-white border  z-10"
                  >
                    {timeOptions.map((option, index) => (
                      <li
                        key={index}
                        className="p-2 hover:bg-primary cursor-pointer"
                        onClick={() => {
                          setSelectedTime(option);
                          setTimeOpen(false);
                        }}
                      >
                        {option}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              {errors.time && (
                <span className="text-red-500 text-xs">*{errors.time}</span>
              )}
            </div>
          </div>
          <button
            type="submit"
            className="w-full mt-4 py-3 text-sm tracking-wider font-light bg-primary text-white  hover:bg-yellow-700 focus:outline-none"
          >
            CHECK AVAILABILITY
          </button>
        </form>
      </div>
    </div>
  );
}
