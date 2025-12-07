import React, { useState } from "react";

interface FormOption {
  label: string;
  value: string;
}

interface FormField {
  name: string;
  label: string;
  type: string;
  placeholder?: string;
  required?: boolean;
  options?: FormOption[];
}

interface FormData {
  title: string;
  description?: string;
  fields: FormField[];
  submitLabel: string;
  disclaimer?: string;
}

interface HeroCardProps {
  form?: FormData;
}

const HeroCard: React.FC<HeroCardProps> = ({ form }) => {
  const [formValues, setFormValues] = useState<Record<string, string>>({});

  if (!form) {
    return null;
  }

  const handleInputChange = (name: string, value: string) => {
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formValues);
    // Add your form submission logic here
  };

  const renderField = (field: FormField) => {
    const baseInputClasses =
      "w-full px-4 py-3 rounded-lg border border-[#C6D7EA] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-[#6485A8] placeholder-[#6485A8]";

    switch (field.type) {
      case "select":
        return (
          <select
            name={field.name}
            value={formValues[field.name] || ""}
            onChange={(e) => handleInputChange(field.name, e.target.value)}
            className={`${baseInputClasses} appearance-none bg-white cursor-pointer`}
            required={field.required}
          >
            <option value="" disabled className="text-[#6485A8]">
              {field.placeholder || "Select... "}
            </option>
            {field.options?.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        );

      default:
        return (
          <input
            type={field.type}
            name={field.name}
            value={formValues[field.name] || ""}
            onChange={(e) => handleInputChange(field.name, e.target.value)}
            placeholder={field.placeholder || "Type... "}
            className={baseInputClasses}
            required={field.required}
          />
        );
    }
  };

  return (
    <div className="flex items-center justify-center sm:p-4">
      <div className="w-full bg-[#FFFFFF70] rounded-3xl shadow-2xl p-6">
        <div className="bg-white rounded-2xl shadow-lg py-5">
          <h1 className="text-[28px] max-sm:text-[22px] font-semibold text-gray-900 leading-tight whitespace-pre-line px-5 mb-5">
            {form.title}
          </h1>

          {/* {form.description && (
            <p className="text-gray-600 mb-8">
              {form.description}
            </p>
          )} */}

          <form onSubmit={handleSubmit} className="space-y-3">
            {form.fields.map((field) => (
              <div key={field.name} className="relative px-5">
                <label
                  htmlFor={field.name}
                  className="block text-sm font-semibold text-gray-900 mb-2"
                >
                  {field.label}
                </label>
                <div className="relative">
                  {renderField(field)}
                  {field.type === "select" && (
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                      <svg
                        className="w-5 h-5 text-gray-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                  )}
                </div>
              </div>
            ))}
            <div className="py-4" />
            <div className="pt-5 px-5 border-t border-[#C6D7EA] bg-[#f7f8fa]">
              <button
                type="submit"
                className="w-full bg-gray-900 text-white font-semibold py-4 rounded-lg hover:bg-gray-800 transition-colors duration-200 text-lg"
              >
                {form.submitLabel}
              </button>
            </div>

            {/* {form. disclaimer && (
              <p className="text-center text-sm text-gray-600 mt-4">
                {form.disclaimer}
              </p>
            )} */}
          </form>
        </div>
      </div>
    </div>
  );
};

export default HeroCard;
