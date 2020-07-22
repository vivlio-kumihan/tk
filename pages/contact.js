import { useState } from 'react';
import Router from 'next/router';

// Simple HTML form for your website
// Create Access Key
// https://www.staticforms.xyz/

const Contact = () => {
  const [contact, setContact] = useState({
    name: '',
    email: '',
    subject: 'お問い合わせ',
    honeypot: '',
    message: '',
    replyTo: '@',
    accessKey: process.env.access_key,
  });

  const [response, setResponse] = useState({
    type: '',
    message: '',
  });

  const handleChange = e =>
    setContact({ ...contact, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const res = await fetch('https://api.staticforms.xyz/submit', {
        method: 'POST',
        body: JSON.stringify(contact),
        headers: { 'Content-Type': 'application/json' },
      });

      const json = await res.json();

      if (json.success) {
        //成功したらsuccessページに飛ぶ
        Router.push('/success');
      } else {
        setResponse({
          type: 'error',
          message: json.message,
        });
      }
    } catch (e) {
      console.log('An error occurred', e);
      setResponse({
        type: 'error',
        message: 'An error occured while submitting the form',
      });
    }
  };
  return (
    <div>
      <p>{response.message}</p>
      <div>
        <h2>お問い合わせフォーム</h2>
        <form
          action="https://api.staticforms.xyz/submit"
          method="post"
          onSubmit={handleSubmit}>
          <div className="field">
            <label>あなたの名前</label>
            <div>
              <input
                type="text"
                placeholder="お名前"
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
                type="email"
                placeholder="メールアドレス"
                name="email"
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div style={{ display: 'none' }}>
            <label className="label">Title</label>
            <div className="control">
              <input
                type="text"
                name="honeypot"
                style={{ display: 'none' }}
                onChange={handleChange}
              />
              <input type="hidden" name="subject" onChange={handleChange} />
            </div>
          </div>
          <div>
            <label>メッセージ</label>
            <div>
              <textarea
                placeholder="Your Message"
                name="message"
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <button type="submit">メールアドレスを送信</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;