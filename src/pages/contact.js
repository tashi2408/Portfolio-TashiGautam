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
        <form data-aos="zoom-in-up">
          <div class={`${styles.form__group} ${styles.field}`}>
            <input
              type="text"
              class={styles.form__field}
              placeholder="Name"
              name="name"
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
