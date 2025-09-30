import * as React from "react";

interface EmailTemplateProps {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export function EmailTemplate({
  name,
  email,
  subject,
  message,
}: EmailTemplateProps) {
  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        maxWidth: "600px",
        margin: "0 auto",
      }}
    >
      <div
        style={{
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          color: "white",
          padding: "20px",
          borderRadius: "10px 10px 0 0",
          textAlign: "center",
        }}
      >
        <h1 style={{ margin: "0 0 10px 0" }}>New Contact Form Submission</h1>
        <p style={{ margin: "0", opacity: "0.9" }}>
          Someone reached out through your portfolio website
        </p>
      </div>

      <div
        style={{
          background: "#f8f9fa",
          padding: "30px",
          borderRadius: "0 0 10px 10px",
          border: "1px solid #e9ecef",
        }}
      >
        <div style={{ marginBottom: "20px" }}>
          <strong
            style={{ color: "#495057", display: "block", marginBottom: "5px" }}
          >
            From:
          </strong>
          <div
            style={{
              background: "white",
              padding: "12px",
              borderRadius: "6px",
              border: "1px solid #dee2e6",
            }}
          >
            {name}
          </div>
        </div>

        <div style={{ marginBottom: "20px" }}>
          <strong
            style={{ color: "#495057", display: "block", marginBottom: "5px" }}
          >
            Email:
          </strong>
          <div
            style={{
              background: "white",
              padding: "12px",
              borderRadius: "6px",
              border: "1px solid #dee2e6",
            }}
          >
            {email}
          </div>
        </div>

        <div style={{ marginBottom: "20px" }}>
          <strong
            style={{ color: "#495057", display: "block", marginBottom: "5px" }}
          >
            Subject:
          </strong>
          <div
            style={{
              background: "white",
              padding: "12px",
              borderRadius: "6px",
              border: "1px solid #dee2e6",
            }}
          >
            {subject || "No subject provided"}
          </div>
        </div>

        <div style={{ marginBottom: "20px" }}>
          <strong
            style={{ color: "#495057", display: "block", marginBottom: "5px" }}
          >
            Message:
          </strong>
          <div
            style={{
              background: "white",
              padding: "12px",
              borderRadius: "6px",
              border: "1px solid #dee2e6",
              whiteSpace: "pre-wrap",
              minHeight: "100px",
            }}
          >
            {message}
          </div>
        </div>
      </div>

      <div
        style={{
          textAlign: "center",
          marginTop: "20px",
          paddingTop: "20px",
          borderTop: "1px solid #dee2e6",
          color: "#6c757d",
          fontSize: "14px",
        }}
      >
        <p style={{ margin: "0 0 5px 0" }}>
          This email was sent from your portfolio contact form
        </p>
        <p style={{ margin: "0" }}>
          Reply directly to this email to respond to {name}
        </p>
      </div>
    </div>
  );
}
