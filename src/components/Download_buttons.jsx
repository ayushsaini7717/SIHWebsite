import { motion } from "framer-motion";

const DownloadButtons = () => {
  const downloads = [
    { label: "SIH Guidelines", file: "/SIH Guidelines.pdf", name: "SIH_Guidelines" },
    { label: "Idea Presentation Format", file: "/SIH Idea Format.pptx", name: "SIH_Idea_Format" },
    { label: "SPOC Notice", file: "/Spoc notice.jpeg", name: "Spoc_Notice" },
  ];

  const handleDownload = (file, name) => {
    const link = document.createElement("a");
    link.href = file;
    link.download = name;
    link.click();
  };

  return (
    <div className="flex flex-col sm:flex-row sm:justify-between gap-4 mb-6">
      {downloads.map((item, idx) => (
        <motion.button
          key={idx}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="flex justify-between cursor-pointer px-6 py-3 rounded-lg text-white font-medium bg-gradient-to-r from-red-500 to-blue-500 shadow-md"
          onClick={() => handleDownload(item.file, item.name)}
        >
          {item.label}
        </motion.button>
      ))}
    </div>
  );
};

export default DownloadButtons;
