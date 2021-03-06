import React from "react"
import Layout from "../components/Layout"
import Heading from "../components/Heading"
import * as styles from "../styles/contact.module.scss"

import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai"
import Footer from "../components/Footer"

export default function Contact() {
  return (
    <Layout>
      <Heading text="get in touch" />
      <section className={styles.contactsection}>
        <form
          data-aos="zoom-in-up"
          method="post"
          netlify-honeypot="bot-field"
          data-netlify="true"
          name="contact"
        >
          <input type="hidden" name="bot-field" />
          <input type="hidden" name="form-name" value="contact" />
          <div class={`${styles.form__group} ${styles.field}`}>
            <input
              type="text"
              class={styles.form__field}
              placeholder="Name"
              name="name"
              id="name"
            />
            <label for="name" class={styles.form__label}>
              Name
            </label>
          </div>
          <div class={`${styles.form__group} ${styles.field}`}>
            <input
              type="email"
              class={styles.form__field}
              placeholder="Email"
              name="email"
              id="email"
            />
            <label for="email" class={styles.form__label}>
              Email
            </label>
          </div>
          <div class={`${styles.form__group} ${styles.field}`}>
            <input
              type="text"
              class={styles.form__field}
              placeholder="Subject"
              name="subject"
              id="subject"
            />
            <label for="subject" class={styles.form__label}>
              Subject
            </label>
          </div>
          <div class={`${styles.form__group} ${styles.field}`}>
            <input
              type="text"
              class={styles.form__field}
              placeholder="Message"
              name="Message"
              id="message"
            />
            <label for="message" class={styles.form__label}>
              Message
            </label>
          </div>
          <button>Submit</button>
        </form>

        <div className={styles.contactdetails}>
          <div data-aos="fade-right">
            <AiOutlinePhone />
            <p>+91 7529989298</p>
          </div>
          <div data-aos="fade-left">
            <AiOutlineMail />
            <p>tashub3@gmail.com</p>
          </div>
        </div>
      </section>
    </Layout>
  )
}
