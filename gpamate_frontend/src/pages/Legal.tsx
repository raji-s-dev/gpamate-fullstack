// src/pages/Legal.tsx
import React from "react";

const Legal: React.FC = () => {
  return (
    <section className="bg-white w-full">
      <div className="max-w-5xl mx-auto px-6 md:px-10 py-24">

        {/* ================= TITLE ================= */}
        <h1 className="text-3xl md:text-4xl font-semibold font-poppins text-zinc-900 mb-12">
          Terms of Service & Privacy Policy
        </h1>

        {/* ================= TERMS ================= */}
        <div className="space-y-6 mb-20">
          <h2 className="text-2xl font-semibold font-poppins text-zinc-800">
            Terms of Service
          </h2>

          <p className="text-base md:text-lg font-inter text-zinc-700 leading-relaxed">
            By accessing or using <span className="font-medium">GPAmate</span>, you agree to be bound by these
            Terms of Service. These terms govern your use of the GPAmate website,
            tools, and services provided for calculating GPA and CGPA based on
            academic result documents. If you do not agree with these terms, you
            should discontinue use of the platform.
          </p>

          <p className="text-base md:text-lg font-inter text-zinc-700 leading-relaxed">
            GPAmate is intended for use by students to assist with academic
            performance calculation and visualization. The service relies on
            automated text recognition and calculation logic based on publicly
            available Anna University grading standards. While every effort is
            made to ensure accuracy, GPAmate does not guarantee that calculated
            results will be error-free or identical to official university
            records. Users are advised to verify outputs before using them for
            formal or administrative purposes.
          </p>

          <p className="text-base md:text-lg font-inter text-zinc-700 leading-relaxed">
            You agree to upload only result documents that you are legally
            permitted to use and that belong to you. You must not upload
            documents containing false information, third-party academic
            records without permission, or content that violates applicable
            laws or institutional regulations. Misuse of the platform,
            including attempts to reverse-engineer the system or disrupt
            service operations, may result in restricted access.
          </p>

          <p className="text-base md:text-lg font-inter text-zinc-700 leading-relaxed">
            GPAmate is provided on an <span className="italic">“as-is”</span> basis for personal and
            educational use. We reserve the right to modify, suspend, or
            discontinue any part of the service at any time without prior
            notice. Continued use of the platform following changes constitutes
            acceptance of the revised terms.
          </p>
        </div>

        {/* ================= PRIVACY ================= */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold font-poppins text-zinc-800">
            Privacy Policy
          </h2>

          <p className="text-base md:text-lg font-inter text-zinc-700 leading-relaxed">
            GPAmate respects your privacy and is committed to protecting user
            data. The platform is designed with a privacy-first approach,
            ensuring that uploaded academic documents are used strictly for
            real-time processing and are never stored, archived, or shared.
          </p>

          <p className="text-base md:text-lg font-inter text-zinc-700 leading-relaxed">
            When you upload a PDF or image file, it is processed temporarily in
            memory solely to extract academic information required for GPA and
            CGPA calculation. Once the calculation is completed and results are
            displayed, the uploaded file and extracted data are immediately
            discarded. GPAmate does not maintain databases of result files,
            grades, or academic records.
          </p>

          <p className="text-base md:text-lg font-inter text-zinc-700 leading-relaxed">
            GPAmate does not collect personally identifiable information unless
            you voluntarily provide it through contact forms or communication
            channels. Any information you submit, such as your name or email
            address, is used only for responding to inquiries, feedback, or
            collaboration requests and is not sold, rented, or shared with
            third parties.
          </p>

          <p className="text-base md:text-lg font-inter text-zinc-700 leading-relaxed">
            We may collect limited, anonymized technical data such as browser
            type, device information, or usage patterns to improve platform
            performance and user experience. This data cannot be used to
            identify individual users and is handled in accordance with
            standard security practices.
          </p>

          <p className="text-base md:text-lg font-inter text-zinc-700 leading-relaxed">
            By using GPAmate, you consent to the processing of data as described
            in this policy. If you have concerns regarding privacy or data
            handling, you may contact us directly for clarification or support.
          </p>
        </div>

      </div>
    </section>
  );
};

export default Legal;
