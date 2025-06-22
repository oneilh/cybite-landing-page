// src/components/CourseInquiryModal.jsx
import { useState, useEffect } from "react";
// import { useModal } from "../context/ModalContext"; // Adjust path if needed
import { MdClose } from "react-icons/md"; // For the close button
import { useModal } from "../../context/ModalContext";
import { courses } from "../Courses/AllCourses";

// const courses = [
//   { id: "FrontEnd Dev", name: "FrontEnd Dev", price: 150000 },
//   { id: "BackEnd Dev", name: "BackEnd Dev", price: 150000 },
//   { id: "Data Analysis", name: "Visual & UX Design", price: 150000 },
//   // { id: "digital-marketing", name: "Digital Marketing Pro", price: 800 },
// ];

const CourseInquiryModal = () => {
  const { isModalOpen, closeModal, preselectedCourse } = useModal();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [question, setQuestion] = useState("");
  const [errors, setErrors] = useState({});

  // Effect to handle pre-selected course when modal opens
  useEffect(() => {
    if (isModalOpen && preselectedCourse) {
      setSelectedCourse(preselectedCourse);
    } else if (!isModalOpen) {
      // Reset form when modal closes
      setName("");
      setEmail("");
      setPhone("");
      setSelectedCourse(null);
      setQuestion("");
      setErrors({});
    }
  }, [isModalOpen, preselectedCourse]);

  const validateForm = () => {
    let newErrors = {};
    if (!name.trim()) newErrors.name = "Name is required";
    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Email address is invalid";
    }
    if (!phone.trim()) newErrors.phone = "Phone number is required";
    if (!selectedCourse) newErrors.course = "Please select a course";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return; // Stop if validation fails
    }

    const message = `
Hello, I'd like to inquire about a course.
Name: ${name}
Email: ${email}
Phone: ${phone}
Selected Course: ${selectedCourse.name} (Price: $${selectedCourse.price})
My question: ${question || "N/A"}
    `.trim(); // .trim() removes leading/trailing whitespace

    // Encode the message for the URL
    const encodedMessage = encodeURIComponent(message);

    // Replace YOUR_WHATSAPP_NUMBER with your actual number (with country code, no + or spaces)
    // const whatsappUrl = `https://wa.me/YOUR_WHATSAPP_NUMBER?text=${encodedMessage}`;
    const whatsappUrl = `https://wa.me/+2349061978141?text=${encodedMessage}`;

    window.open(whatsappUrl, "_blank"); // Open in a new tab

    closeModal(); // Close the modal after sending
  };

  if (!isModalOpen) return null; // Don't render if not open

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-75 flex justify-center items-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-md md:max-w-lg lg:max-w-xl relative transform transition-all scale-100 opacity-100">
        <button
          onClick={closeModal}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl"
          aria-label="Close modal"
        >
          <MdClose />
        </button>

        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Course Inquiry
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name Field */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Your Name
            </label>
            <input
              type="text"
              id="name"
              className={`mt-1 block w-full px-3 py-2 border ${
                errors.name ? "border-red-500" : "border-gray-300"
              } rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="John Doe"
            />
            {errors.name && (
              <p className="text-red-500 text-xs mt-1">{errors.name}</p>
            )}
          </div>

          {/* Email Field */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className={`mt-1 block w-full px-3 py-2 border ${
                errors.email ? "border-red-500" : "border-gray-300"
              } rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">{errors.email}</p>
            )}
          </div>

          {/* Phone Number Field */}
          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Phone Number
            </label>
            <input
              type="tel" // Use type="tel" for phone numbers
              id="phone"
              className={`mt-1 block w-full px-3 py-2 border ${
                errors.phone ? "border-red-500" : "border-gray-300"
              } rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="e.g., +1234567890"
            />
            {errors.phone && (
              <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
            )}
          </div>

          {/* Course Pills */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Choose a Course
            </label>
            <div className="flex flex-wrap gap-2 mb-2">
              {courses.map((course) => (
                <button
                  key={course.id}
                  type="button" // Important: Prevent form submission
                  className={`px-4 py-2 rounded-full border text-sm font-medium transition-colors duration-200 ease-in-out ${
                    selectedCourse && selectedCourse.id === course.id
                      ? "bg-blue-600 text-white border-blue-600"
                      : "bg-gray-100 text-gray-800 border-gray-300 hover:bg-gray-200"
                  }`}
                  onClick={() => setSelectedCourse(course)}
                >
                  {course.name}
                </button>
              ))}
            </div>
            {/* {selectedCourse && (
              <p className="text-sm text-gray-600 mt-2">
                Price:{" "}
                <span className="font-semibold text-lg">
                  {selectedCourse.price}
                </span>
              </p>
            )} */}
            {errors.course && (
              <p className="text-red-500 text-xs mt-1">{errors.course}</p>
            )}
          </div>

          {/* Question Textarea */}
          <div>
            <label
              htmlFor="question"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Anything else you want to ask? (Optional)
            </label>
            <textarea
              id="question"
              rows="4"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              placeholder="e.g., What are the class timings?"
            ></textarea>
          </div>

          {/* Send Button */}
          <div className="pt-4">
            <button
              type="submit"
              className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-4 rounded-md shadow-md transition-colors duration-200 ease-in-out text-lg"
            >
              Send Inquiry via WhatsApp
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CourseInquiryModal;

