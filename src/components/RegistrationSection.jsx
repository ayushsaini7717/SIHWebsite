const RegistrationSection = () => {
    return (
      <section id="register" className="py-20 px-6 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Register Your Team</h2>
        <p className="mb-4">
          Form teams of 6 members (atleast 1 female member) . Only BTKIT students are eligible .
        </p>
        <a
          href="https://forms.gle/your-google-form-link"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-3 mt-7 bg-green-600 hover:bg-green-700 rounded-xl text-white font-semibold animate-bounce"
        >
          Go to Registration Form
        </a>
      </section>
    );
  };
  
  export default RegistrationSection;
  