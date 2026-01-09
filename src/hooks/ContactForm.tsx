
import emailjs from "emailjs-com";


  export const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("hellooo",e.currentTarget,e)

    emailjs
      .sendForm(
        "SERVICE_ID",
        "TEMPLATE_ID",
        e.currentTarget,
        "PUBLIC_KEY"
      )
      .then(() => {
        alert("Email sent successfully!");
      })
      .catch((error: Error) => {
        console.error(error);
        alert("Failed to send email");
      });

    e.currentTarget.reset();
  };

  
