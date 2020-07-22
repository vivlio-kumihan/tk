import { useState } from 'react'
import Router from 'next/router'
import Layout from "../components/layout"
import Head from "next/head"
import utilStyle from "../styles/util.module.css"
import contactStyle from "./contact.module.css"

// Simple HTML form for your website
// Create Access Key
// https://www.staticforms.xyz/

export default function Contact() {
  const [contact, setContact] = useState({
    name: '',
    email: '',
    subject: 'お問い合わせ',
    message: '',
    replyTo: '@',
    accessKey: process.env.access_key,
  })

  const [response, setResponse] = useState({
    type: '',
    message: '',
  })

  const handleChange = e =>
    setContact({ ...contact, [e.target.name]: e.target.value })

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const res = await fetch('https://api.staticforms.xyz/submit', {
        method: 'POST',
        body: JSON.stringify(contact),
        headers: { 'Content-Type': 'application/json' },
      })

      const json = await res.json()

      if (json.success) {
        //成功したらsuccessページに飛ぶ
        Router.push('/success');
      } else {
        setResponse({
          type: 'error',
          message: json.message,
        })
      }
    } catch (e) {
      console.log('An error occurred', e);
      setResponse({
        type: 'error',
        message: 'An error occured while submitting the form',
      })
    }
  }
  return (
    <Layout>
      <Head>
        <title>お問い合わせフォーム</title>
      </Head>

      <h2 className={utilStyle.headingLg}><span>Contact</span></h2>

      <div className={contactStyle.container}>
        <p>{response.message}</p>
        <form
          action="https://api.staticforms.xyz/submit"
          method="post"
          onSubmit={handleSubmit}>
          <div>
            <label>お名前</label>
            <div>
              <input
                className={contactStyle.inputSpace}
                type="text"
                placeholder="Your Name"
                name="name"
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div>
            <label>メールアドレス</label>
            <div>
              <input
                className={contactStyle.inputSpace}
                type="email"
                placeholder="Your Email Address"
                name="email"
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div>
            <label className="label">件名</label>
            <div className="control">
              <input
                className={contactStyle.inputSpace}
                type="text"
                placeholder="Subject"
                name="subject"
                onChange={handleChange}
              />
              <input type="hidden" name="subject" onChange={handleChange} />
            </div>
          </div>
          <div>
            <label>お問い合わせ内容</label>
            <div>
              <textarea
                rows="7"
                className={contactStyle.inputSpace}
                placeholder="Message"
                name="message"
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <button className={contactStyle.button} type="submit">上記内容で問い合わせをする。</button>
        </form>
      </div>
    </Layout>
  )
}